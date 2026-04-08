import os
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from openai import OpenAI
from dotenv import load_dotenv
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parents[2]
load_dotenv(BASE_DIR / ".env")

router = APIRouter()

DEEPSEEK_API_KEY = os.getenv("DEEPSEEK_API_KEY", "").strip()
DEEPSEEK_BASE_URL = os.getenv("DEEPSEEK_BASE_URL", "https://api.deepseek.com").strip()
DEEPSEEK_MODEL = os.getenv("DEEPSEEK_MODEL", "deepseek-chat").strip()


class AIReportRequest(BaseModel):
    company_name: str
    industry: str
    business_model: str
    products: str
    pain_points: str
    target_customers: str
    digitalization_level: str


@router.post("/generate")
def generate_report(payload: AIReportRequest):
    if not DEEPSEEK_API_KEY:
        raise HTTPException(
            status_code=500,
            detail="Missing DEEPSEEK_API_KEY in backend/.env",
        )

    client = OpenAI(
        api_key=DEEPSEEK_API_KEY,
        base_url=DEEPSEEK_BASE_URL,
    )

    system_prompt = """
You are a senior strategy and RWA solutions consultant.

Your task is to generate a professional AI-enabled industry report for a company exploring non-financial RWA opportunities.

The report must be practical, structured, and business-oriented.
Focus on non-financial RWA use cases, tokenization logic, verification, provenance, community engagement, customer experience, and business implementation.

Write in clear business English.
Use markdown headings.
Do not invent fake regulations or fake market statistics.
If something is uncertain, present it as a recommendation or possibility rather than a fact.

Use this structure:

# AI-Enabled Industry Report

## 1. Company Profile Summary
## 2. Industry Suitability for Non-Financial RWA
## 3. Potential RWA Asset Candidates
## 4. Suggested Mechanism Design
## 5. Business Benefits
## 6. Key Risks and Implementation Considerations
## 7. Recommended Pilot Path
## 8. Final Recommendation

Be specific and tailored to the user's input.
""".strip()

    user_prompt = f"""
Company name: {payload.company_name}
Industry: {payload.industry}
Business model: {payload.business_model}
Core products/services: {payload.products}
Key pain points: {payload.pain_points}
Target customers: {payload.target_customers}
Current digitalization level: {payload.digitalization_level}

Generate a tailored non-financial RWA business report based on the information above.
""".strip()

    try:
        completion = client.chat.completions.create(
            model=DEEPSEEK_MODEL,
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": user_prompt},
            ],
            stream=False,
            temperature=0.7,
        )

        report_text = completion.choices[0].message.content if completion.choices else ""
        if not report_text:
            raise HTTPException(status_code=500, detail="DeepSeek returned an empty report.")

        return {
            "status": "success",
            "report": report_text,
            "model": DEEPSEEK_MODEL,
        }

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"DeepSeek request failed: {str(e)}")