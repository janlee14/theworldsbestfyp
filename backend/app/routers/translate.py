import hashlib
import random
from typing import List

import httpx
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from app.settings import (
    BAIDU_TRANSLATE_APP_ID,
    BAIDU_TRANSLATE_APP_KEY,
    BAIDU_TRANSLATE_URL,
)

router = APIRouter(prefix="/api/translate", tags=["translate"])


class TranslateRequest(BaseModel):
    texts: List[str]
    from_lang: str = "auto"
    to_lang: str


class TranslateResponse(BaseModel):
    from_lang: str
    to_lang: str
    translations: List[str]


def make_sign(appid: str, q: str, salt: str, appkey: str) -> str:
    raw = f"{appid}{q}{salt}{appkey}"
    return hashlib.md5(raw.encode("utf-8")).hexdigest()


@router.post("", response_model=TranslateResponse)
async def translate_texts(payload: TranslateRequest):
    if not BAIDU_TRANSLATE_APP_ID or not BAIDU_TRANSLATE_APP_KEY:
        raise HTTPException(
            status_code=500,
            detail="Missing BAIDU_TRANSLATE_APP_ID or BAIDU_TRANSLATE_APP_KEY in backend .env",
        )

    cleaned_texts = [text.strip() for text in payload.texts if text and text.strip()]
    if not cleaned_texts:
        return TranslateResponse(
            from_lang=payload.from_lang,
            to_lang=payload.to_lang,
            translations=[],
        )

    q = "\n".join(cleaned_texts)
    salt = str(random.randint(10000, 99999))
    sign = make_sign(
        BAIDU_TRANSLATE_APP_ID,
        q,
        salt,
        BAIDU_TRANSLATE_APP_KEY,
    )

    form_data = {
        "q": q,
        "from": payload.from_lang,
        "to": payload.to_lang,
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
    translations = [item.get("dst", "") for item in trans_result]

    return TranslateResponse(
        from_lang=result.get("from", payload.from_lang),
        to_lang=result.get("to", payload.to_lang),
        translations=translations,
    )