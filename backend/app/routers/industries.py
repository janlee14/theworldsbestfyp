from fastapi import APIRouter, HTTPException
from app.data.industry_data import INDUSTRIES

router = APIRouter()


@router.get("")
def list_industries():
    return INDUSTRIES


@router.get("/{industry_id}")
def get_industry(industry_id: str):
    for industry in INDUSTRIES:
        if industry["id"] == industry_id:
            return industry
    raise HTTPException(status_code=404, detail="Industry not found")
