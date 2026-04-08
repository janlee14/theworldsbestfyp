from pydantic import BaseModel


class ReportRequest(BaseModel):
    company_name: str
    industry: str
    business_model: str
    products: str
    pain_points: str
    target_customers: str
    digitalization_level: str


class ReportResponse(BaseModel):
    company_name: str
    company_profile_summary: str
    industry_suitability: str
    potential_assets: list[str]
    suggested_mechanisms: list[str]
    business_benefits: list[str]
    risks_and_considerations: list[str]
    recommended_pilot_path: str
