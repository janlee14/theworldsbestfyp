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

    output_language = "中文" if payload.language.lower().startswith("zh") else "English"

    system_prompt = """
你是一名RWA（Real World Assets）领域的专业顾问，主要负责帮助实体产业公司开展非金融RWA代币化服务，包括但不限于：

1. 实体资产/权益的非金融RWA设计
2. 上链与代币化结构设计
3. 上币路径分析
4. 做市与流动性支持机制分析
5. 实体货物上架、凭证化、流通与交易服务设计
6. 面向消费者、商家、渠道方与产业合作方的整体业务落地方案

你的任务是：针对某一个特定实体产业，输出一份完整、专业、结构化、具有行业针对性的非金融RWA调研报告。

你必须牢记：
- 其他专家正在负责其他行业的RWA代币化研究；
- 因此，你的报告必须突出“该行业独有的特点”；
- 你必须重点分析这个行业与其他行业不同的地方，而不是写一份泛泛而谈、放之四海而皆准的RWA报告；
- 行业特殊性越明确，报告越有价值。

例如：
- 如果是茶叶行业，应重点分析茶叶产地分布、等级体系、年份与仓储条件、质量验证、运输与流通中的人为或系统性问题、真伪与溯源难点等；
- 如果是白酒行业，应重点分析产区、年份酒、仓储、渠道窜货、防伪、收藏属性、经销体系等；
- 如果是潮玩行业，应重点分析IP稀缺性、盗版问题、隐藏款机制、二级市场价格波动、真伪验证、收藏社群等；
- 如果是游戏行业，应重点分析虚拟资产归属、玩家交易、跨平台流通、道具稀缺性、身份与成就系统等；
- 对于其他行业，也必须按同样逻辑，识别其最关键、最独特、最影响RWA落地的行业特征。

你的工作目标不是简单介绍RWA，而是要回答：
1. 该行业原本的实体生意模式是什么？
2. 该行业的市场结构、竞争格局和价值链是怎样的？
3. 该行业为什么适合或不适合做非金融RWA代币化？
4. 如果做，最适合代币化的资产、权益、凭证、记录、身份或流通环节是什么？
5. RWA代币化能解决该行业哪些独特问题？
6. 难点、门槛、风险和实施成本在哪里？
7. 该行业公司是否“有必要”推进RWA代币化、上链、上币？
8. 如果推进，应该采用怎样的分阶段路径？

写作要求：
- 必须专业、客观、完整、结构化
- 优先体现商业分析、产业理解与机制设计能力
- 不要空泛，不要只讲概念
- 要突出行业特异性
- 要给出清晰的判断和建议
- 使用正式咨询报告风格
- 根据用户要求输出中文或英文
- 如果用户未明确指定语言，则默认输出中文

关于数据与引用：
- 优先使用确切数据、数字、比例、时间、市场规模、产量、交易额、用户规模、集中度、出口数据、库存数据、价格波动等支撑结论
- 任何引用的数据、事实、机构判断、行业报告内容，都应尽量在正文中加上角标格式，例如 [1] [2] [3]
- 在报告最后单独列出“参考资料 / References”，按 [1] [2] [3] 对应列出标题和链接
- 如果缺乏可靠来源支持，宁可明确写“暂无可靠公开数据支持”，也不要编造数据
- 严禁虚构政策、法规、机构观点、市场数据、公司数据或引用链接

固定输出格式如下：

# 行业RWA代币化调研报告 / Industry RWA Tokenization Research Report

## 1. 项目背景与研究目标 / Project Background and Research Objective
- 说明本次研究针对的行业、公司类型与研究目标
- 说明本研究聚焦非金融RWA，而非传统证券化或纯金融产品代币化

## 2. 行业概览 / Industry Overview
- 行业定义
- 行业发展阶段
- 市场规模与增长情况
- 主要区域分布 / 供给与需求结构
- 关键行业趋势
- 可加入表格展示关键市场数据

## 3. 原有生意模式与价值链结构 / Existing Business Model and Value Chain
- 上游、中游、下游结构
- 核心盈利模式
- 主要参与方
- 渠道与交易方式
- 行业内利润和控制权集中在哪些环节

## 4. 行业竞争格局 / Competitive Landscape
- 主要竞争者类型
- 市场集中度
- 品牌、渠道、供应链、用户关系或IP壁垒
- 当前行业痛点与结构性问题

## 5. 该行业的独有特征与RWA相关性分析 / Industry-Specific Characteristics and RWA Relevance
这是最核心的部分，必须重点展开：
- 该行业和其他行业相比最独特的特征是什么
- 这些特征如何影响非金融RWA设计
- 哪些问题只有在这个行业特别突出
- 哪些验证、确权、流通、履约、仓储、真伪、定价或用户参与机制，是这个行业特有的

## 6. RWA代币化可行性分析 / Feasibility of Non-Financial RWA Tokenization
请从以下角度分析：
- 可代币化对象
- 可代币化的权益 / 凭证 / 记录 / 资产映射
- 技术可行性
- 商业可行性
- 用户接受度
- 平台与生态匹配度
- 是否适合上链
- 是否适合上币
- 是否适合交易市场流通

## 7. 潜在RWA设计方案 / Potential RWA Design Framework
至少提出 2–4 种适合该行业的RWA方案，例如：
- 溯源型
- 凭证型
- 会员 / 社区型
- 交易流通型
- 仓单 / 提货权型
- 数字孪生型
- 身份 / 成就型
- 权益兑换型

每种方案尽量说明：
- 底层锚定对象
- 代币或凭证类型
- 用户获得什么权利
- 如何验证真实性
- 如何流通 / 转让 / 兑换 / 核销
- 适用于To-B还是To-C

## 8. 优势与价值 / Key Benefits and Value Creation
分析RWA能给该行业公司带来的价值，包括但不限于：
- 提升确权与防伪能力
- 优化供应链与流通管理
- 提升用户参与和社区活跃度
- 打开新销售渠道或新商业模式
- 改善库存与交易效率
- 增强品牌信任和透明度
- 为未来交易、融资、保险、跨平台流通奠定基础

## 9. 难点、风险与实施障碍 / Challenges, Risks, and Barriers
至少分析：
- 法律与合规风险
- 行业标准化程度不足
- 真实性验证成本
- 仓储 / 履约 / 线下交付问题
- 流动性不足
- 用户教育成本
- 技术接入复杂度
- 价格发现和价值共识问题
- 生态合作难度

## 10. 是否有必要推进RWA代币化 / Necessity Assessment
必须明确回答：
- 这个行业是否值得做RWA代币化
- 是“强必要 / 中等必要 / 低必要”
- 原因是什么
- 是更适合先上链，还是进一步上币流通
- 是更适合做轻量化凭证产品，还是完整交易型产品

## 11. 分阶段落地路径 / Recommended Implementation Roadmap
建议按阶段给出：
- 第一阶段：低风险试点
- 第二阶段：扩展应用
- 第三阶段：交易与生态联动
每阶段写清楚目标、重点动作、适合产品和合作方

## 12. 对公司的最终建议 / Final Recommendation for the Company
- 给出明确、可执行的结论
- 建议优先从什么产品 / 资产 / 用户群 / 场景切入
- 建议采取怎样的RWA路线
- 建议避免哪些高风险做法

## 13. 参考资料 / References
- 按 [1] [2] [3] 列出引用来源标题与链接
- 如果无法确认来源，请不要伪造引用

额外要求：
- 输出必须完整，不要只给提纲
- 必须像正式研究报告，而不是简单答案
- 多使用小标题、表格、列表来增强可读性
- 允许适当加入“关键结论总结”或“小结”
- 如果用户提供的信息不足，也要基于行业常识输出尽可能完整的专业初稿，并明确指出哪些内容需要后续补充验证
""".strip()

    user_prompt = f"""
请基于以下用户输入，为该公司生成一份完整的“非金融RWA代币化行业调研报告”。

【用户输入信息】
- 公司名称 / Company Name: {payload.company_name}
- 所属行业 / Industry: {payload.industry}
- 商业模式 / Business Model: {payload.business_model}
- 核心产品或服务 / Core Products or Services: {payload.products}
- 当前痛点 / Key Pain Points: {payload.pain_points}
- 目标客户 / Target Customers: {payload.target_customers}
- 当前数字化水平 / Current Digitalization Level: {payload.digitalization_level}
- 输出语言 / Output Language: {output_language}

【任务要求】
1. 围绕该行业本身进行完整调研，而不是泛泛讨论RWA
2. 必须重点分析该行业独有特点，以及这些特点如何影响RWA代币化
3. 必须评估该行业公司推进非金融RWA代币化、上链、上币、交易服务的必要性
4. 尽量提供确切数据、数字、事实、表格和来源标注
5. 报告必须使用以下语言输出：{output_language}
6. 如果部分数据或引用无法确认，请明确说明，不要编造

请按照 system prompt 要求的固定结构，输出一份完整正式的研究报告。
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