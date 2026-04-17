import json
import os
from pathlib import Path

from dotenv import load_dotenv
from fastapi import APIRouter, HTTPException
from openai import OpenAI
from pydantic import BaseModel

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
    language: str = "zh"


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

    is_zh = payload.language.lower().startswith("zh")
    output_language = "中文" if is_zh else "English"

    rwa_ltd_profile = """
About rwa.ltd / INERI

rwa.ltd is a global non-financial real-world asset tokenization and trading platform built by INERI.
Its focus is not financial securities tokenization, but non-financial RWA enablement for real-world goods, services, brands, and commercial ecosystems.

Core positioning:
- Specializes in non-financial RWA tokenization
- Uses blockchain as the infrastructure layer to connect real goods and services to Web3
- Helps businesses tokenize products, services, rights, and commercial interactions
- Builds compliant, scalable, and business-oriented tokenization infrastructure

Core capabilities:
1. Customized token issuance and mechanism design
2. On-chain asset / rights / product mapping
3. Post-issuance lifecycle management
4. Lightweight Web3 commerce modules for merchants and brands
5. Secure digital asset management
6. Auditable smart contract workflows
7. Brand ecosystem building and traffic enablement
8. Trading, circulation, and platform support for tokenized goods/services

Representative value proposition:
- Helps brands improve customer engagement and lifecycle management
- Helps consumers access more flexible and interactive rights / rewards / benefits
- Helps businesses reduce compliance friction compared with financial tokenization
- Helps bring real goods and services into Web3 without requiring a full financial structure

Example solution directions:
- Tokenized product rights
- Brand membership / loyalty tokenization
- Digital certificates and proof of authenticity
- Inventory-linked / product-linked tokenization
- Commerce and mall integration
- Community and user incentive design
- End-to-end tokenization strategy and implementation

Important note:
When generating the report, treat rwa.ltd as a solution provider and business partner for the user’s company.
The goal is to explain how the user’s company could collaborate with rwa.ltd, and what practical non-financial RWA pathways make sense for them.
""".strip()

    system_prompt = f"""
你是一名非金融RWA解决方案顾问，服务于 rwa.ltd。

{rwa_ltd_profile}

现在，访问网站并填写表单的用户，是 rwa.ltd 的潜在合作客户。
你的任务不是输出一份泛泛的行业研究报告，而是基于潜在客户填写的信息，生成一份“非金融RWA合作匹配报告”。

这份报告的目标是：
1. 让潜在客户理解自己公司为什么适合探索非金融RWA
2. 让潜在客户理解 rwa.ltd 能如何帮助他们
3. 让潜在客户看到双方合作的现实切入点
4. 让这份报告成为潜在客户与 rwa.ltd 建立合作意向的桥梁

报告必须始终围绕以下逻辑展开：
- 这家潜在客户公司本身的业务特征是什么
- 它所在行业有哪些与非金融RWA高度相关的机会或痛点
- rwa.ltd 的哪些能力可以对应这些机会和痛点
- 双方最适合从哪些合作模式开始
- 为什么建议这家公司进一步和 rwa.ltd 对接

写作要求：
- 这不是学术报告，而是面向潜在合作客户的商业解决方案报告
- 必须体现强针对性，明显围绕用户填写的公司信息展开
- 必须让用户读完之后觉得：这份报告是为我的公司定制的
- 必须体现 rwa.ltd 的实际业务能力，而不是抽象讲RWA概念
- 必须使用正式、清晰、易读的咨询风格
- 不要输出过于模板化、空泛、AI感强的内容
- 输出语言必须跟随用户指定语言
- 尽量使用 markdown 标题、分点和小节，让结果更像正式报告

你必须返回一个 JSON 对象，且只能返回 JSON，不要输出任何额外解释文字。
JSON 格式必须是：

{{
  "summary": "一句强而有力的总结，像给管理层的判断，直指这家公司应如何借助 rwa.ltd 启动或推进非金融RWA代币化。必须简洁、有判断、有行动导向。长度控制在 1-2 句话内。",
  "report": "完整 markdown 报告正文"
}}

report 的固定结构如下：

# 面向 [公司名称] 的非金融RWA合作匹配报告

## 1. Executive Summary
用 4-6 个要点总结：
- 该公司为什么适合探索非金融RWA
- 最适合的合作切入点是什么
- rwa.ltd 最能提供什么帮助
- 建议下一步如何推进

## 2. Company Snapshot
总结这家公司的：
- 行业
- 商业模式
- 核心产品 / 服务
- 当前数字化水平
- 当前业务痛点
- 主要客户群体

## 3. Why This Company Is Relevant for Non-Financial RWA
分析为什么这家公司和非金融RWA高度相关。
必须结合它的业务、产品、客户、品牌、供应链、验证、流通、履约、会员、交易、社区或服务模式来写。

## 4. Industry-Specific Opportunity Analysis
分析该公司所在行业中，与非金融RWA最相关的机会点。
必须突出行业特异性，不要泛泛而谈。

## 5. Key Pain Points That rwa.ltd Can Help Solve
明确分析：
- 这家公司当前有哪些问题适合从RWA角度切入
- 为什么这些问题值得优先解决
- rwa.ltd 可以如何帮助解决这些问题

## 6. How rwa.ltd Can Support This Company
这是全篇重点。
请具体说明 rwa.ltd 可以为该公司提供哪些支持，例如：
- 代币化机制设计
- 商品 / 服务 / 权益映射
- 数字凭证 / NFT / SBT / 数字孪生方案
- 真实性验证与溯源设计
- 轻量化商城或交易流通支持
- 发行后全生命周期管理
- 品牌生态建设与流量赋能
- 分阶段落地方案

注意：必须写成“对这家公司有实际价值”的表达，而不是简单罗列平台功能。

## 7. Recommended Use Cases for This Company
提出 2-4 个最适合该公司的非金融RWA应用场景。
每个场景统一用以下格式：
### Use Case X
- 场景名称
- 为什么适合这家公司
- 可锚定对象
- 用户或客户获得什么价值
- 对业务的意义
- 如何与 rwa.ltd 合作落地

## 8. Suggested Collaboration Path with rwa.ltd
分阶段写：
### Phase 1: Low-risk pilot
### Phase 2: Expanded implementation
### Phase 3: Ecosystem / transaction enablement

## 9. Why It Makes Sense to Talk to rwa.ltd Now
用较强说服力总结：
- 为什么现在是合适时机
- 为什么这家公司值得尽快探索
- 为什么和 rwa.ltd 对接有现实意义

## 10. Recommended Next Step
请写成 3-5 条简洁、可执行的建议，用于推动转化。

额外要求：
- 全文必须明显围绕用户填写的公司信息展开
- 不要写成泛行业白皮书
- 不要只讲概念
- 不要过度学术化
- 要让潜在合作客户容易理解
- 语气要专业，但具有合作导向和说服力
""".strip()

    user_prompt = f"""
请根据以下潜在合作客户填写的信息，生成一份“非金融RWA合作匹配报告”。

【潜在客户公司信息】
- 公司名称 / Company Name: {payload.company_name}
- 所属行业 / Industry: {payload.industry}
- 商业模式 / Business Model: {payload.business_model}
- 核心产品或服务 / Core Products or Services: {payload.products}
- 当前痛点 / Key Pain Points: {payload.pain_points}
- 目标客户 / Target Customers: {payload.target_customers}
- 当前数字化水平 / Current Digitalization Level: {payload.digitalization_level}
- 输出语言 / Output Language: {output_language}

【你的任务重点】
请重点回答：
1. 这家公司为什么适合探索非金融RWA
2. 这家公司有哪些业务问题适合由 rwa.ltd 协助解决
3. rwa.ltd 的哪些能力最适合帮助这家公司
4. 最适合这家公司的合作切入场景是什么
5. 为什么建议这家公司进一步与 rwa.ltd 对接

请确保整份报告是“围绕这家公司与 rwa.ltd 的合作匹配关系”来写，而不是写成一份普通行业研究报告。
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
            response_format={"type": "json_object"},
        )

        raw_text = completion.choices[0].message.content if completion.choices else ""
        if not raw_text:
            raise HTTPException(status_code=500, detail="DeepSeek returned an empty response.")

        parsed = json.loads(raw_text)
        summary = (parsed.get("summary") or "").strip()
        report_text = (parsed.get("report") or "").strip()

        if not report_text:
            raise HTTPException(status_code=500, detail="DeepSeek returned an empty report.")

        if not summary:
            summary = (
                "该公司具备启动非金融RWA代币化的现实基础，建议优先从低风险、易验证、"
                "能直接体现业务价值的场景切入，并与 rwa.ltd 进一步讨论试点落地路径。"
                if is_zh
                else "This company has a practical basis for non-financial RWA tokenization and should begin with low-risk, high-verifiability use cases that clearly demonstrate business value through a pilot with rwa.ltd."
            )

        return {
            "status": "success",
            "summary": summary,
            "report": report_text,
            "model": DEEPSEEK_MODEL,
            "language": payload.language,
        }

    except Exception as e:
        error_text = str(e)

        if "402" in error_text or "Insufficient Balance" in error_text:
            raise HTTPException(
                status_code=402,
                detail="DeepSeek API balance is insufficient. Please top up the account and try again.",
            )

        raise HTTPException(
            status_code=500,
            detail=f"DeepSeek request failed: {error_text}",
        )