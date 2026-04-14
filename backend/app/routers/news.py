from typing import List
import hashlib
import random

import httpx
from fastapi import APIRouter, HTTPException, Query

from app.settings import (
    NEWS_API_KEY,
    NEWS_API_URL,
    NEWS_LANGUAGE,
    NEWS_PAGE,
    NEWS_MAX_RESULTS,
    BAIDU_TRANSLATE_APP_ID,
    BAIDU_TRANSLATE_APP_KEY,
    BAIDU_TRANSLATE_URL,
)

router = APIRouter(prefix="/api/news", tags=["news"])


def make_sign(appid: str, q: str, salt: str, appkey: str) -> str:
    raw = f"{appid}{q}{salt}{appkey}"
    return hashlib.md5(raw.encode("utf-8")).hexdigest()


async def translate_titles_to_zh(titles: List[str]) -> List[str]:
    cleaned_titles = [title.strip() for title in titles if title and title.strip()]
    if not cleaned_titles:
        return []

    if not BAIDU_TRANSLATE_APP_ID or not BAIDU_TRANSLATE_APP_KEY:
        raise HTTPException(
            status_code=500,
            detail="Missing BAIDU_TRANSLATE_APP_ID or BAIDU_TRANSLATE_APP_KEY in backend .env",
        )

    q = "\n".join(cleaned_titles)
    salt = str(random.randint(10000, 99999))
    sign = make_sign(
        BAIDU_TRANSLATE_APP_ID,
        q,
        salt,
        BAIDU_TRANSLATE_APP_KEY,
    )

    form_data = {
        "q": q,
        "from": "auto",
        "to": "zh",
        "appid": BAIDU_TRANSLATE_APP_ID,
        "salt": salt,
        "sign": sign,
    }

    try:
        async with httpx.AsyncClient(timeout=20.0) as client:
            response = await client.post(
                BAIDU_TRANSLATE_URL,
                data=form_data,
                headers={"Content-Type": "application/x-www-form-urlencoded"},
            )
            response.raise_for_status()
            result = response.json()
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Baidu translate request failed: {str(e)}")

    if "error_code" in result:
        raise HTTPException(
            status_code=400,
            detail=f"Baidu translate error {result.get('error_code')}: {result.get('error_msg')}",
        )

    trans_result = result.get("trans_result") or []
    return [item.get("dst", "") for item in trans_result]


@router.get("")
async def list_news(lang: str = Query(default="en")):
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
            "original_title": article.get("title") or "Untitled article",
            "link": article.get("link") or "#",
            "source_name": article.get("source_name") or article.get("source_id"),
            "pubDate": article.get("pubDate"),
        }
        for article in articles[:NEWS_MAX_RESULTS]
        if article.get("title")
    ]

    if lang == "zh" and news_items:
        original_titles = [item["title"] for item in news_items]
        translated_titles = await translate_titles_to_zh(original_titles)

        for idx, item in enumerate(news_items):
            if idx < len(translated_titles) and translated_titles[idx]:
                item["title"] = translated_titles[idx]

    return {
        "status": payload.get("status", "success"),
        "lang": lang,
        "totalResults": payload.get("totalResults", len(news_items)),
        "nextPage": payload.get("nextPage"),
        "results": news_items,
    }