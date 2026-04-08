from fastapi import APIRouter
from app.schemas.report import ReportRequest, ReportResponse

router = APIRouter()

INDUSTRY_ASSET_MAP = {
    "baijiu": ["高端年份酒数字溯源证书", "数字酒证 / 权益凭证", "产区与批次 provenance 记录"],
    "tea": ["茶饼数字指纹", "茶园与仓储 provenance 记录", "高端茶权益凭证"],
    "toys": ["限量潮玩数字收藏证书", "NFC 绑定的数字孪生", "SBT 身份徽章与抽签资格"],
    "gaming": ["SBT 玩家成就", "NFT 赛事门票", "UGC 创作素材包资产"],
    "general": ["产品 provenance 记录", "会员权益凭证", "不可转让资格或成就徽章"],
}

INDUSTRY_MECHANISM_MAP = {
    "baijiu": ["一物一码溯源", "高价值产品数字证明", "境内技术服务 + 境外合规试点"],
    "tea": ["AI 视觉识别 + 上链存证", "SaaS 溯源平台", "三重验证体系"],
    "toys": ["实体潮玩 + NFC + ERC-721 + SBT", "抽签资格控制", "社区激励与品牌合作权益"],
    "gaming": ["SBT 成就系统", "无 Gas 钱包体验", "活动门票与 UGC 确权"],
    "general": ["确权", "溯源", "绑定", "激励"],
}


@router.post("/generate", response_model=ReportResponse)
def generate_report(payload: ReportRequest):
    assets = INDUSTRY_ASSET_MAP.get(payload.industry, INDUSTRY_ASSET_MAP["general"])
    mechanisms = INDUSTRY_MECHANISM_MAP.get(payload.industry, INDUSTRY_MECHANISM_MAP["general"])

    return ReportResponse(
        company_name=payload.company_name,
        company_profile_summary=(
            f"{payload.company_name} 的业务模式为 {payload.business_model}，当前核心产品包括 {payload.products}，主要服务对象为 {payload.target_customers}。"
            f"基于当前数字化水平（{payload.digitalization_level}），该企业具备启动一个聚焦型 non-financial RWA pilot 的条件。"
        ),
        industry_suitability=(
            f"在 {payload.industry} 场景中，non-financial RWA 最适合解决 proof、provenance、membership、access 或 anti-counterfeit 问题，而不是先做金融化包装。"
            f"结合当前痛点 {payload.pain_points}，建议从高确定性、低监管风险、易于用户理解的场景切入。"
        ),
        potential_assets=assets,
        suggested_mechanisms=mechanisms,
        business_benefits=[
            "把产品、凭证、会员或资格从一次性交易升级为可持续运营资产。",
            "提升真实性验证、渠道管理和用户互动能力。",
            "为后续品牌合作、二次营销和社区增长创造结构化基础。",
        ],
        risks_and_considerations=[
            f"必须正面处理当前业务痛点：{payload.pain_points}",
            "必须把 rights definition、fulfillment、source of truth 设计清楚。",
            "必须避免承诺收益、面向公众募资或制造证券化误解。",
        ],
        recommended_pilot_path=(
            "建议先选一个高价值单一品类、一个核心用户群和一个最明确的业务目标做 MVP。"
            "先验证 proof + utility 是否成立，再扩展到更复杂的 circulation 或 community layer。"
        ),
    )
