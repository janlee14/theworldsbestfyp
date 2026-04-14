from fastapi import APIRouter, HTTPException
import httpx
import re

from app.settings import (
    NEWS_API_KEY,
    NEWS_API_URL,
    NEWS_LANGUAGE,
    NEWS_PAGE,
    NEWS_MAX_RESULTS,
)

router = APIRouter(prefix="/api/news", tags=["news"])


def normalize_title(title: str) -> str:
    """Normalize title for de-duplication."""
    if not title:
        return ""

    title = title.strip().lower()

    # Normalize dashes
    title = title.replace("—", "-").replace("–", "-")

    # Remove common trailing site/source suffixes like:
    # " - Featured Bitcoin News"
    # " | CoinDesk"
    # " - Bitcoin News"
    title = re.sub(r"\s*[-|:]\s*(featured )?[a-z0-9&.\s]{2,40}$", "", title)

    # Remove punctuation
    title = re.sub(r"[^\w\s]", "", title)

    # Collapse spaces
    title = re.sub(r"\s+", " ", title).strip()

    return title


def is_similar_title(new_title: str, seen_titles: set[str]) -> bool:
    """
    Detect near-duplicate titles.
    Rules:
    1. Exact normalized match
    2. One normalized title contains the other
    """
    for seen in seen_titles:
        if new_title == seen:
            return True

        if new_title in seen or seen in new_title:
            # only treat as duplicate if overlap is substantial
            shorter_len = min(len(new_title), len(seen))
            if shorter_len >= 40:
                return True

    return False


@router.get("")
async def list_news():
    if not NEWS_API_KEY:
        raise HTTPException(
            status_code=500,
            detail="Missing NEWSDATA_API_KEY. Add it to backend/.env or your environment before starting the server.",
        )

    params = {"apikey": NEWS_API_KEY}
    if NEWS_LANGUAGE:
        params["language"] = NEWS_LANGUAGE
    if NEWS_PAGE:
        params["page"] = NEWS_PAGE

    try:
        async with httpx.AsyncClient(timeout=20.0) as client:
            response = await client.get(NEWS_API_URL, params=params)
            response.raise_for_status()
        payload = response.json()
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"News API request failed: {str(e)}")

    articles = payload.get("results") or []

    seen_titles = set()
    news_items = []

    for article in articles:
        title = article.get("title")
        if not title:
            continue

        normalized = normalize_title(title)
        if not normalized:
            continue

        if is_similar_title(normalized, seen_titles):
            continue

        seen_titles.add(normalized)

        news_items.append(
            {
                "id": article.get("article_id") or article.get("link") or title,
                "title": title,
                "link": article.get("link") or "#",
                "source_name": article.get("source_name") or article.get("source_id"),
                "pubDate": article.get("pubDate"),
            }
        )

        if len(news_items) >= 9:
            break

    return {
        "status": payload.get("status", "success"),
        "totalResults": payload.get("totalResults", len(news_items)),
        "nextPage": payload.get("nextPage"),
        "results": news_items,
    }