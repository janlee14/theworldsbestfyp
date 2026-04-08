from fastapi import APIRouter, HTTPException
import httpx

from app.settings import (
    NEWS_API_KEY,
    NEWS_API_URL,
    NEWS_LANGUAGE,
    NEWS_PAGE,
    NEWS_MAX_RESULTS,
)

router = APIRouter(prefix="/api/news", tags=["news"])


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

    news_items = [
    {
        "id": article.get("article_id") or article.get("link") or article.get("title"),
        "title": article.get("title") or "Untitled article",
        "link": article.get("link") or "#",
        "source_name": article.get("source_name") or article.get("source_id"),
        "pubDate": article.get("pubDate"),
    }
    for article in articles[:9]
    if article.get("title")
    ]

    return {
        "status": payload.get("status", "success"),
        "totalResults": payload.get("totalResults", len(news_items)),
        "nextPage": payload.get("nextPage"),
        "results": news_items,
    }