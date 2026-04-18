export const industries = [
  {
    id: "baijiu",
    name: "白酒行业研究",
    shortTitle: "白酒RWA：从液体黄金到数字资产",
    intro: "RWA技术正在重塑中国白酒产业的价值链，从防伪溯源到渠道管控，构建可信的数字资产生态。",
    sections: [
      {
        title: "行业概览",
        text: "中国白酒行业已进入量减利增与集中度提升的高质量发展阶段。尽管总产量持续下滑，但利润总额稳步增长，市场资源加速向头部品牌和核心产区集聚。DTC模式兴起，但库存压力大、渠道窜货严重等问题依然突出。",
      },
      {
        title: "核心产区地理分布",
        bullets: [
          "四川省：全国最大产区，产量174.06万千升（占38.7%），代表城市宜宾、泸州。",
          "贵州省：产量30.44万千升（占6.78%），以贵州茅台为核心。",
          "山西省：产量33.82万千升（占7.53%），以山西汾酒为代表。",
          "已形成贵州仁怀、四川宜宾、四川泸州三个千亿级白酒产区。",
        ],
      },
      {
        title: "价值链与利润分配",
        bullets: [
          "上游（种植）：受气候影响大，供应稳定性是保障原酒品质的基础。",
          "中游（酿造加工）：由各大酒企主导，头部企业在智能化酿造和品控标准化方面投入巨大。",
          "下游（销售流通）：渠道多元化，但经销商和零售商利润率相对较低，生存空间被挤压。",
          "资金痛点：截至2024年底，A股上市酒企存货总额高达1683.89亿元，占用巨额运营资金，且融资壁垒高企。",
        ],
      },
    ],
    charts: [
      {
        type: "line",
        title: "白酒行业关键指标趋势（2023-2025E）",
        data: [
          { year: "2023", revenue: 7563, output: 629, profit: 2328 },
          { year: "2024", revenue: 7963.84, output: 414.47, profit: 2508.65 },
          { year: "2025E", revenue: 8400, output: 354.9, profit: 2500 },
        ],
        lines: [
          { key: "revenue", name: "销售收入(亿元)" },
          { key: "output", name: "产量(万千升)" },
          { key: "profit", name: "利润总额(亿元)" },
        ],
      },
      {
        type: "bar",
        title: "核心产区产量对比",
        data: [
          { label: "四川", value: 174.06 },
          { label: "山西", value: 33.82 },
          { label: "贵州", value: 30.44 },
        ],
        bars: [{ key: "value", name: "产量(万千升)" }],
      },
    ],
    tables: [
      {
        title: "行业数据表",
        columns: ["指标", "2023年", "2024年", "2025年(预估)"],
        rows: [
          ["销售收入 (亿元)", "7,563", "7,963.84", "8,000-8,800"],
          ["产量 (万千升)", "629", "414.47", "~354.9"],
          ["利润总额 (亿元)", "2,328", "2,508.65", "~2,500"],
        ],
      },
    ],
    cases: [
      "茅台数字身份证：每瓶酒绑定多达58项核心数据，实现从生产到消费的全链条不可篡改溯源，假酒拦截效率提升17倍。",
      "五粮液数字酒证：采用M2C闭环管理模式，提供原厂直供、智能仓储、在线流通、一键质押服务，41%的酒证通过平台流转。",
      "奇点国峰白酒原浆RWA：底层资产为62.5吨高档酱香型白酒原浆酒及公司股份，代币持有人五年后可选择实物兑付或股份兑付。",
    ],
    recommendations: [
      "转型为技术赋能方和合规咨询方，为酒企提供区块链溯源系统、智能合约开发与合规架构设计。",
      "实施分阶段路径：先在境内做非融资导向的技术筑基，再在香港等合规枢纽探索小范围试点。",
      "优先试点高价值品类：顶级品牌年份酒、稀缺产区基酒、限量联名产品。",
    ],
en: {
      name: "Baijiu Industry Research",
      shortTitle: "Baijiu RWA: From Liquid Gold to Digital Assets",
      intro: "RWA technology is reshaping the value chain of China’s baijiu industry, from anti-counterfeiting traceability to channel control, and building a trusted digital asset ecosystem.",
      sections: [
        {
          title: "Industry Overview",
          text: "China’s baijiu industry has entered a high-quality development stage characterized by lower output, higher profits, and increasing concentration. Although total production continues to decline, total profits are steadily rising, and market resources are rapidly concentrating around leading brands and core production regions. DTC models are emerging, but problems such as inventory pressure and severe channel diversion remain prominent.",
        },
        {
          title: "Geographic Distribution of Core Production Regions",
          bullets: [
            "Sichuan Province: the largest production region in China, with 1.7406 million kiloliters of output (38.7%), represented by Yibin and Luzhou.",
            "Guizhou Province: output of 304.4 thousand kiloliters (6.78%), centered on Kweichow Moutai.",
            "Shanxi Province: output of 338.2 thousand kiloliters (7.53%), represented by Fenjiu.",
            "Three trillion-yuan-level baijiu production regions have emerged in Renhuai, Yibin, and Luzhou.",
          ],
        },
        {
          title: "Value Chain and Profit Distribution",
          bullets: [
            "Upstream (cultivation): highly affected by climate, and supply stability is the foundation for ensuring the quality of base liquor.",
            "Midstream (brewing and processing): dominated by major liquor companies, with leading firms investing heavily in intelligent brewing and standardized quality control.",
            "Downstream (sales and distribution): channels are becoming more diversified, but profit margins for distributors and retailers remain relatively low, squeezing their room for survival.",
            "Capital pain point: by the end of 2024, the total inventory of A-share listed liquor companies reached RMB 168.389 billion, occupying huge amounts of operating capital while financing barriers remained high.",
          ],
        },
      ],
      charts: [
        {
          type: "line",
          title: "Key Baijiu Industry Indicator Trends (2023-2025E)",
          data: [
            { year: "2023", revenue: 7563, output: 629, profit: 2328 },
            { year: "2024", revenue: 7963.84, output: 414.47, profit: 2508.65 },
            { year: "2025E", revenue: 8400, output: 354.9, profit: 2500 },
          ],
          lines: [
            { key: "revenue", name: "Revenue (RMB 100M)" },
            { key: "output", name: "Output (10k kL)" },
            { key: "profit", name: "Total Profit (RMB 100M)" },
          ],
        },
        {
          type: "bar",
          title: "Output Comparison of Core Production Regions",
          data: [
            { label: "Sichuan", value: 174.06 },
            { label: "Shanxi", value: 33.82 },
            { label: "Guizhou", value: 30.44 },
          ],
          bars: [{ key: "value", name: "Output (10k kL)" }],
        },
      ],
      tables: [
        {
          title: "Industry Data Table",
          columns: ["Metric", "2023", "2024", "2025 (Estimated)"],
          rows: [
            ["Revenue (RMB 100M)", "7,563", "7,963.84", "8,000-8,800"],
            ["Output (10k kL)", "629", "414.47", "~354.9"],
            ["Total Profit (RMB 100M)", "2,328", "2,508.65", "~2,500"],
          ],
        },
      ],
      cases: [
        "Moutai Digital Identity: each bottle is linked to as many as 58 core data points, enabling tamper-proof full-chain traceability from production to consumption and improving counterfeit interception efficiency by 17 times.",
        "Wuliangye Digital Liquor Certificate: adopts an M2C closed-loop management model and provides direct-from-factory supply, intelligent warehousing, online circulation, and one-click pledge services. 41% of liquor certificates circulate through the platform.",
        "Qidian Guofeng Baijiu Base Liquor RWA: the underlying assets are 62.5 tons of premium sauce-aroma baijiu base liquor and company equity. Token holders can choose physical redemption or equity redemption after five years.",
      ],
      recommendations: [
        "Transform into a technology enabler and compliance advisory provider, offering blockchain traceability systems, smart contract development, and compliance architecture design for baijiu companies.",
        "Adopt a phased path: first build a non-financing-oriented technical foundation domestically, then explore small-scale pilots in compliant hubs such as Hong Kong.",
        "Prioritize pilots in high-value categories: top-brand vintage liquors, scarce regional base liquors, and limited-edition co-branded products.",
      ],},

  },
  {
    id: "tea",
    name: "茶叶行业研究",
    shortTitle: "茶叶RWA：让每一叶都可追溯",
    intro: "从茶园到茶杯，RWA技术为茶叶这一非标农产品提供了破解信任成本、盘活沉睡资产的数字化钥匙。",
    sections: [
      {
        title: "全球与中国市场对比",
        bullets: [
          "全球规模：从2018年的953亿美元增长至2025年的1344亿美元，预计2028年达1600亿美元。",
          "中国市场：2024年内销规模达3258亿元，其中高端茶市场规模约1031亿元。",
          "出口格局：2023年中国茶叶出口金额达17.4亿美元，位居全球第一，但面临量大价低趋势。",
        ],
      },
      {
        title: "中国茶叶出口结构",
        text: "中国茶叶出口结构单一，绿茶占据绝对主导地位。",
      },
      {
        title: "不同茶类仓储条件对比",
        text: "不同茶类因工艺和发酵程度不同，对仓储环境的要求存在显著差异。",
      },
    ],
    charts: [
      {
        type: "bar",
        title: "全球与中国茶叶市场体量对比",
        data: [
          { label: "2018", global: 953, china: 0 },
          { label: "2025", global: 1344, china: 3258 },
          { label: "2028E", global: 1600, china: 3600 },
        ],
        bars: [
          { key: "global", name: "全球市场(亿美元)" },
          { key: "china", name: "中国内销(亿元)" },
        ],
      },
      {
        type: "pie",
        title: "中国茶叶出口结构",
        data: [
          { name: "绿茶", value: 88.11 },
          { name: "其他茶类", value: 11.89 },
        ],
      },
    ],
    tables: [
      {
        title: "不同茶类仓储条件对比",
        columns: ["茶类", "工艺特征", "核心仓储要求", "风险表现"],
        rows: [
          ["绿茶", "不发酵", "低温、干燥、避光、隔氧", "高温高湿易导致褐变、香气挥发"],
          ["红茶", "全发酵", "常温、干燥、密闭、防潮", "受潮后易发霉，口感酸馊"],
          ["黑茶/普洱茶", "后发酵", "通风、干燥、无异味", "湿度过高易滋生黄曲霉"],
          ["乌龙茶", "半发酵", "低温或常温、干燥、密封", "清香型易氧化失鲜，浓香型若受潮火香消退"],
          ["白茶", "微发酵", "干燥、常温、通风", "吸湿后易霉变，破坏后期转化潜力"],
        ],
      },
    ],
    cases: [
      "Teaken数字茶饼：通过AI视觉算法采集普洱茶饼独特纹路，生成唯一特征函数并上链存证，实现1秒验真。",
      "木兰茶故事体验馆：每一份权益凭证对应实物茶品，可查看从采摘到审计报告的全链路数据。",
    ],
    recommendations: [
      "提供SaaS化溯源解决方案，帮助中小茶企快速实现产品数字化。",
      "推动区域集约化整合，形成标准化资产池，为后续RWA奠定基础。",
      "构建三重验证体系：实地核实、防伪溯源码生成、国际检测。",
      "严格规避金融化红线，聚焦产业问题解决而非投资理财包装。",
    ],

    en: {
  name: "Tea Industry Research",
  shortTitle: "Tea RWA: Making Every Leaf Traceable",
  intro: "From tea garden to teacup, RWA technology offers this highly non-standard agricultural product a digital key to reducing trust costs and activating dormant assets.",
  sections: [
    {
      title: "Global and China Market Comparison",
      bullets: [
        "Global market size: grew from USD 95.3 billion in 2018 to USD 134.4 billion in 2025, and is expected to reach USD 160 billion by 2028.",
        "China market: domestic sales reached RMB 325.8 billion in 2024, of which the premium tea segment accounted for about RMB 103.1 billion.",
        "Export pattern: China’s tea export value reached USD 1.74 billion in 2023, ranking first globally, but it still faces a trend of high volume with relatively low prices.",
      ],
    },
    {
      title: "China's Tea Export Structure",
      text: "China’s tea export structure is highly concentrated, with green tea taking an overwhelmingly dominant share.",
    },
    {
      title: "Comparison of Storage Conditions by Tea Type",
      text: "Different tea categories have significantly different storage requirements due to differences in processing methods and fermentation levels.",
    },
  ],
  charts: [
    {
      type: "bar",
      title: "Global and China Tea Market Size Comparison",
      data: [
        { label: "2018", global: 953, china: 0 },
        { label: "2025", global: 1344, china: 3258 },
        { label: "2028E", global: 1600, china: 3600 },
      ],
      bars: [
        { key: "global", name: "Global Market (USD 100M)" },
        { key: "china", name: "China Domestic Sales (RMB 100M)" },
      ],
    },
    {
      type: "pie",
      title: "China Tea Export Structure",
      data: [
        { name: "Green Tea", value: 88.11 },
        { name: "Other Tea Types", value: 11.89 },
      ],
    },
  ],
  tables: [
    {
      title: "Comparison of Storage Conditions by Tea Type",
      columns: ["Tea Type", "Process Characteristics", "Core Storage Requirements", "Risk Profile"],
      rows: [
        ["Green Tea", "Unfermented", "Low temperature, dry, light-proof, oxygen-isolated", "High heat and humidity can cause browning and aroma loss"],
        ["Black Tea", "Fully fermented", "Room temperature, dry, sealed, moisture-proof", "Moisture exposure can cause mold and sour taste"],
        ["Dark Tea / Pu-erh", "Post-fermented", "Ventilated, dry, odor-free", "Excess humidity can encourage aflatoxin growth"],
        ["Oolong Tea", "Semi-fermented", "Low or room temperature, dry, sealed", "Light-fragrance types oxidize easily; strong-fragrance types lose roast aroma when damp"],
        ["White Tea", "Lightly fermented", "Dry, room temperature, ventilated", "Moisture can cause mold and damage later aging potential"],
      ],
    },
  ],
  cases: [
    "Teaken Digital Tea Cake: uses AI visual algorithms to capture the unique patterns of Pu-erh tea cakes, generate a unique feature function, and store it on-chain for one-second authenticity verification.",
    "Mulan Tea Story Experience Center: each rights certificate corresponds to a physical tea product and can display full-chain data from picking to audit reports.",
  ],
  recommendations: [
    "Provide SaaS traceability solutions to help small and medium-sized tea companies achieve rapid product digitization.",
    "Promote regional consolidation and standardization to form asset pools that can support later RWA development.",
    "Build a triple-verification system: on-site verification, anti-counterfeiting traceability code generation, and international testing.",
    "Strictly avoid financialization red lines and focus on solving industry problems rather than packaging products as investments.",
  ],
}
  },
  {
    id: "toys",
    name: "潮玩行业研究",
    shortTitle: "潮玩RWA：终结盗版，重构收藏价值",
    intro: "面对猖獗的盗版和混乱的二级市场，RWA机制正通过数字孪生与身份绑定，为潮玩行业注入新的秩序与活力。",
    sections: [
      {
        title: "中国潮玩市场规模趋势",
        text: "Z世代成为主力消费群体，驱动中国潮玩市场高速增长。",
      },
      {
        title: "行业痛点数据图",
        bullets: [
          "泡泡玛特年盗版损失 > 5000万元。",
          "Labubu隐藏款价格从eBay最高$10,500跌至￥2,800，二级市场波动剧烈。",
        ],
      },
      {
        title: "四维一体RWA模型",
        text: "为系统性解决潮玩行业的结构性痛点，提出实体潮玩 + NFC芯片 + ERC-721 NFT + SBT身份徽章 + 激励 的闭环模型。",
      },
    ],
    charts: [
      {
        type: "bar",
        title: "潮玩行业关键痛点数据",
        data: [
          { label: "盗版损失(万元)", value: 5000 },
          { label: "Labubu高点(美元)", value: 10500 },
          { label: "Labubu回落价(人民币)", value: 2800 },
        ],
        bars: [{ key: "value", name: "数值" }],
      },
      {
        type: "bar",
        title: "潮玩市场规模",
        data: [{ label: "2024", value: 587 }],
        bars: [{ key: "value", name: "市场规模(亿元)" }],
      },
    ],
    tables: [
      {
        title: "行业痛点数据",
        columns: ["问题", "数据"],
        rows: [
          ["泡泡玛特年盗版损失", ">5000万元"],
          ["Labubu隐藏款价格波动", "从eBay最高$10,500跌至￥2,800"],
        ],
      },
    ],
    flow: [
      { title: "实体潮玩", text: "Physical Toy" },
      { title: "ERC-721 NFT", text: "Digital Twin" },
      { title: "SBT身份徽章", text: "Ownership & Reputation" },
      { title: "激励", text: "Rewards & Access" },
    ],
    cases: [
      "MetaBox数字孪生盲盒：采用Chainlink VRF生成可验证随机数，支持NFC灵魂绑定与首次拥有者记录。",
      "PopRaffle社交裂变平台：支持3人组队抽赏、保底机制和回收权益，提升用户体验和留存率。",
    ],
    recommendations: [
      "优先切入轻量化方向：ERC-721数字收藏证书、ERC-3525会员等级通证、SBT抽签资格。",
      "推广四维一体标准模型，为客户打造防伪、确权、互动、激励一体化的Web3运营生态。",
      "打造标杆合作案例，与头部潮玩品牌或知名IP方推出示范性RWA项目。",
    ],

    en: {
  name: "Collectibles Industry Research",
  shortTitle: "Collectibles RWA: Ending Counterfeits and Rebuilding Collector Value",
  intro: "Faced with rampant counterfeiting and a chaotic secondary market, RWA mechanisms are bringing new order and vitality to the collectibles industry through digital twins and identity binding.",
  sections: [
    {
      title: "Trend of China’s Collectibles Market Size",
      text: "Generation Z has become the main consumer group, driving rapid growth in China’s collectibles market.",
    },
    {
      title: "Industry Pain Point Data",
      bullets: [
        "Pop Mart’s annual counterfeit-related losses exceed RMB 50 million.",
        "The price of rare Labubu editions fell from a peak of USD 10,500 on eBay to RMB 2,800, showing extreme volatility in the secondary market.",
      ],
    },
    {
      title: "Four-in-One RWA Model",
      text: "To systematically address the structural pain points of the collectibles industry, this model proposes a closed loop of physical toy + NFC chip + ERC-721 NFT + SBT identity badge + incentives.",
    },
  ],
  charts: [
    {
      type: "bar",
      title: "Key Pain Point Data in the Collectibles Industry",
      data: [
        { label: "Counterfeit Loss (RMB 10k)", value: 5000 },
        { label: "Labubu Peak (USD)", value: 10500 },
        { label: "Labubu Pullback Price (RMB)", value: 2800 },
      ],
      bars: [{ key: "value", name: "Value" }],
    },
    {
      type: "bar",
      title: "Collectibles Market Size",
      data: [{ label: "2024", value: 587 }],
      bars: [{ key: "value", name: "Market Size (RMB 100M)" }],
    },
  ],
  tables: [
    {
      title: "Industry Pain Point Data",
      columns: ["Issue", "Data"],
      rows: [
        ["Annual counterfeit loss at Pop Mart", "> RMB 50 million"],
        ["Labubu price fluctuation", "From eBay peak of USD 10,500 down to RMB 2,800"],
      ],
    },
  ],
  flow: [
    { title: "Physical Toy", text: "Physical Toy" },
    { title: "ERC-721 NFT", text: "Digital Twin" },
    { title: "SBT Identity Badge", text: "Ownership & Reputation" },
    { title: "Incentives", text: "Rewards & Access" },
  ],
  cases: [
    "MetaBox Digital Twin Blind Box: uses Chainlink VRF to generate verifiable randomness, supports NFC soul-binding, and records the first owner.",
    "PopRaffle Social Growth Platform: supports three-person team draws, guaranteed rewards, and buyback rights, improving user experience and retention.",
  ],
  recommendations: [
    "Start with lightweight directions first: ERC-721 digital collectible certificates, ERC-3525 membership-grade tokens, and SBT lottery qualifications.",
    "Promote the four-in-one standard model to build an integrated Web3 operating ecosystem that combines anti-counterfeiting, rights confirmation, interaction, and incentives.",
    "Create benchmark collaborations by launching demonstrative RWA projects with leading collectibles brands or well-known IP owners.",
  ],
}
  },
  {
    id: "gaming",
    name: "游戏行业研究",
    shortTitle: "游戏RWA：我的资产我做主",
    intro: "打破平台中心化桎梏，RWA技术赋予玩家对虚拟资产的真实所有权、使用权和跨平台流动性。",
    sections: [
      {
        title: "Web2 vs Web3资产归属对比",
        text: "当前Web2游戏模式下，玩家仅享有受限的使用权，而Web3 RWA则实现了真正的资产确权。",
      },
      {
        title: "七类资产与协议适配模型",
        text: "根据资产属性精准匹配底层协议，是构建可持续RWA生态的关键。",
      },
    ],
    charts: [
      {
        type: "bar",
        title: "Web3模式相对优势示意",
        data: [
          { label: "资产归属", value: 95 },
          { label: "停服风险缓释", value: 88 },
          { label: "交易权限", value: 90 },
          { label: "数据验证", value: 92 },
        ],
        bars: [{ key: "value", name: "优势程度" }],
      },
    ],
    tables: [
      {
        title: "Web2 vs Web3资产归属对比",
        columns: ["对比维度", "Web2模式", "Web3 RWA模式"],
        rows: [
          ["资产归属", "归属于游戏公司", "直接归属于玩家钱包地址"],
          ["停服风险", "资产可能被清除（如网易365天未登录规则）", "资产永久保存，可跨平台流转"],
          ["交易权限", "依赖第三方灰色平台，有封号风险", "可在去中心化交易所自由交易"],
          ["数据验证", "中心化服务器记录，难以验证真实性", "区块链上公开可验证，不可篡改"],
        ],
      },
      {
        title: "七类资产与协议适配模型表",
        columns: ["编号", "资产类型", "更适配的协议", "原因说明"],
        rows: [
          ["1", "游戏道具、皮肤", "ERC-721 / ERC-1155", "高价值独占型用ERC-721保障稀缺性；批量消耗品用ERC-1155提升效率降本"],
          ["2", "赛事门票、玩家资格", "ERC-721 / SBT", "唯一性入场凭证用ERC-721；禁止转售则用SBT锁定身份"],
          ["3", "游戏周边、收藏卡", "ERC-721 + RFID", "实物锚定数字藏品，扫码验证真伪，支持线上线下联动"],
          ["4", "IP授权相关权益", "ERC-3525 / ERC-721", "多人共享版权收益可用ERC-3525拆分份额；独家授权用ERC-721"],
          ["5", "玩家成就、资历证明", "SBT", "成就不可交易，需绑定身份永久记录，防止账号倒卖滥用"],
          ["6", "社区共创权益、UGC确权", "SBT / ERC-1155", "贡献值记录用SBT；素材包分发用ERC-1155"],
          ["7", "虚拟资产与实物兑换权", "ERC-721 / ERC-3525", "兑换券用ERC-721表示；支持部分兑换的权益用ERC-3525"],
        ],
      },
    ],
    cases: [
      "SBT成就系统：发行传奇猎手、百胜王者等不可转让成就徽章，并设置守卫者机制。",
      "NFT赛事门票：每张门票对应唯一座位权限，可设定转售规则并在赛后升级为数字纪念票。",
      "UGC创作者网络：采用ERC-1155构建创作者素材包系统，支持贡献确权与可追溯创作谱系。",
    ],
    recommendations: [
      "从轻量级MVP切入：优先做SBT玩家成就系统或限量NFT赛事门票。",
      "优化用户体验：集成社交登录和无Gas钱包，降低Web2用户迁移门槛。",
      "整合轻量化交易所，为高频低价值道具提供移动端友好的交易场景。",
      "构建创作者经济，为UGC创作者提供贡献确权和素材流通基础设施。",
    ],

    en: {
  name: "Gaming Industry Research",
  shortTitle: "Gaming RWA: My Assets, My Control",
  intro: "By breaking platform-centered control, RWA technology gives players real ownership, usage rights, and cross-platform liquidity for virtual assets.",
  sections: [
    {
      title: "Web2 vs Web3 Asset Ownership Comparison",
      text: "Under the current Web2 game model, players only enjoy limited usage rights, while Web3 RWA enables true ownership confirmation of assets.",
    },
    {
      title: "Seven Asset Types and Protocol Matching Model",
      text: "Accurately matching underlying protocols to asset characteristics is key to building a sustainable RWA ecosystem.",
    },
  ],
  charts: [
    {
      type: "bar",
      title: "Illustration of Relative Advantages in the Web3 Model",
      data: [
        { label: "Asset Ownership", value: 95 },
        { label: "Server Shutdown Risk Mitigation", value: 88 },
        { label: "Trading Permission", value: 90 },
        { label: "Data Verification", value: 92 },
      ],
      bars: [{ key: "value", name: "Advantage Level" }],
    },
  ],
  tables: [
    {
      title: "Web2 vs Web3 Asset Ownership Comparison",
      columns: ["Dimension", "Web2 Model", "Web3 RWA Model"],
      rows: [
        ["Asset Ownership", "Owned by the game company", "Directly owned by the player's wallet address"],
        ["Shutdown Risk", "Assets may be deleted (for example, NetEase’s 365-day inactivity rule)", "Assets remain permanently and can circulate across platforms"],
        ["Trading Permission", "Depends on gray-market third-party platforms and risks account bans", "Can be traded freely on decentralized exchanges"],
        ["Data Verification", "Recorded on centralized servers and hard to verify", "Publicly verifiable on blockchain and tamper-resistant"],
      ],
    },
    {
      title: "Seven Asset Types and Protocol Matching Model",
      columns: ["No.", "Asset Type", "Best-Fit Protocol", "Reason"],
      rows: [
        ["1", "Game items and skins", "ERC-721 / ERC-1155", "High-value exclusive items use ERC-721 for scarcity; batch consumables use ERC-1155 for efficiency and lower cost"],
        ["2", "Event tickets and player qualifications", "ERC-721 / SBT", "Unique entry credentials use ERC-721; non-resellable rights use SBT"],
        ["3", "Game merchandise and collectible cards", "ERC-721 + RFID", "Physical assets are bound to digital collectibles for authenticity verification and online-offline linkage"],
        ["4", "IP licensing-related rights", "ERC-3525 / ERC-721", "Shared copyright income can use ERC-3525 fractions; exclusive licenses can use ERC-721"],
        ["5", "Player achievements and credentials", "SBT", "Achievements should not be tradable and should stay identity-bound permanently"],
        ["6", "Community co-creation rights and UGC ownership", "SBT / ERC-1155", "Contribution records use SBT; asset packs use ERC-1155"],
        ["7", "Virtual asset and physical redemption rights", "ERC-721 / ERC-3525", "Redemption vouchers use ERC-721; partially redeemable rights use ERC-3525"],
      ],
    },
  ],
  cases: [
    "SBT Achievement System: issues non-transferable achievement badges such as Legendary Hunter and Hundred-Win Champion, and introduces guardian mechanisms.",
    "NFT Event Tickets: each ticket corresponds to a unique seat right, can include resale rules, and can later be upgraded into a digital commemorative ticket.",
    "UGC Creator Network: uses ERC-1155 to build a creator asset-pack system that supports contribution ownership confirmation and traceable creative lineage.",
  ],
  recommendations: [
    "Start with a lightweight MVP: prioritize an SBT player achievement system or limited-edition NFT event tickets.",
    "Improve user experience by integrating social login and gasless wallets to lower the migration barrier for Web2 users.",
    "Integrate lightweight exchanges to create mobile-friendly trading scenarios for high-frequency, low-value items.",
    "Build a creator economy by providing infrastructure for contribution ownership confirmation and asset circulation for UGC creators.",
  ],
}
  },
  {
    id: "mechanism-design",
    name: "RWA机制设计指南",
    shortTitle: "如何设计非金融属性RWA机制？",
    intro: "一套从理论到实践的通用框架，指导您安全、高效地构建以确权、溯源、绑定和激励为核心的RWA解决方案。",
    sections: [
      {
        title: "四步法设计流程",
        bullets: [
          "确权：明确界定所要数字化的现实世界权利。",
          "溯源：利用IoT设备和区块链技术，将关键环节数据上链。",
          "绑定：将物理对象与数字凭证强关联。",
          "激励：把数字凭证转化为用户可感知的价值，如权益、治理权、声誉。",
        ],
      },
      {
        title: "协议选择决策树",
        bullets: [
          "ERC-721：独一无二且可交易的高价值资产。",
          "SBT：独一无二但不可转让的身份、资格或成就。",
          "ERC-3525：需要灵活拆分和组合的半同质化资产。",
          "ERC-20：完全同质化资源。",
          "ERC-1155：适合需要批量处理的多类型资产场景。",
        ],
      },
      {
        title: "合规边界警示",
        bullets: [
          "不承诺收益。",
          "不涉及实物赎回现金或金融资产。",
          "不面向公众募资。",
          "遵循当地法规，尤其关注中国内地与香港的监管边界。",
        ],
      },
      {
        title: "MVP实施路径模板",
        bullets: [
          "定义问题：明确具体业务痛点。",
          "选择试点：从高价值、共识强的单一品类切入。",
          "设计机制：按四步法和协议决策树形成闭环。",
          "技术开发与用户测试：快速搭建原型并持续迭代。",
          "正式发布与推广：在小范围上线并评估效果。",
        ],
      },
    ],
    flow: [
      { title: "确权", text: "明确现实世界权利边界" },
      { title: "溯源", text: "采集与上链关键数据" },
      { title: "绑定", text: "将实物对象与数字凭证强关联" },
      { title: "激励", text: "让用户感知价值并持续参与" },
    ],
    tables: [
      {
        title: "可信第三方合作资源列表",
        columns: ["类别", "机构类型", "示例"],
        rows: [
          ["检测", "第三方质量检验机构", "SGS, Intertek, Bureau Veritas"],
          ["审计", "合规与安全审计机构", "安永(EY), 普华永道(PwC), Hacken, CertiK"],
          ["托管", "专业资产保管机构", "Loomis, Brink's, BitGo (数字资产托管)"],
          ["法律", "专业律师事务所", "中伦律师事务所, 金杜律师事务所, Cooley LLP"],
          ["合规", "虚拟资产服务提供商(VASP)", "HashKey, OSL, Sygnum Bank"],
        ],
      },
    ],
    cases: [],
    recommendations: [
      "把非金融化原则写入产品设计和对外话术。",
      "优先做可验证、可执行、易被用户理解的机制，而不是先做复杂金融包装。",
      "尽早引入检测、法律、审计、托管和合规伙伴。",
    ],

    en: {
  name: "RWA Mechanism Design Guide",
  shortTitle: "How to Design RWA Mechanisms with Non-Financial Attributes?",
  intro: "A general framework from theory to practice that guides you in safely and efficiently building RWA solutions centered on rights confirmation, traceability, binding, and incentives.",
  sections: [
    {
      title: "Four-Step Design Process",
      bullets: [
        "Rights confirmation: clearly define the real-world rights to be digitized.",
        "Traceability: use IoT devices and blockchain technology to put key process data on-chain.",
        "Binding: strongly connect the physical object with the digital credential.",
        "Incentives: turn digital credentials into value users can perceive, such as benefits, governance rights, or reputation.",
      ],
    },
    {
      title: "Protocol Selection Decision Tree",
      bullets: [
        "ERC-721: unique and tradable high-value assets.",
        "SBT: unique but non-transferable identities, qualifications, or achievements.",
        "ERC-3525: semi-fungible assets requiring flexible splitting and combining.",
        "ERC-20: fully fungible resources.",
        "ERC-1155: suitable for scenarios requiring batch handling of multiple asset types.",
      ],
    },
    {
      title: "Compliance Boundary Warnings",
      bullets: [
        "Do not promise returns.",
        "Do not involve redemption of physical goods into cash or financial assets.",
        "Do not raise funds from the general public.",
        "Follow local regulations, especially regulatory boundaries in mainland China and Hong Kong.",
      ],
    },
    {
      title: "MVP Implementation Path Template",
      bullets: [
        "Define the problem: identify a specific business pain point clearly.",
        "Choose a pilot: start with a single category that has high value and strong consensus.",
        "Design the mechanism: build a closed loop based on the four-step method and protocol decision tree.",
        "Technical development and user testing: rapidly build prototypes and iterate continuously.",
        "Formal launch and promotion: go live on a small scale and evaluate results.",
      ],
    },
  ],
  flow: [
    { title: "Rights Confirmation", text: "Clarify the boundaries of real-world rights" },
    { title: "Traceability", text: "Collect and put key data on-chain" },
    { title: "Binding", text: "Strongly link physical objects with digital credentials" },
    { title: "Incentives", text: "Let users perceive value and keep participating" },
  ],
  tables: [
    {
      title: "Trusted Third-Party Resource List",
      columns: ["Category", "Institution Type", "Examples"],
      rows: [
        ["Testing", "Third-party quality inspection institutions", "SGS, Intertek, Bureau Veritas"],
        ["Audit", "Compliance and security audit institutions", "EY, PwC, Hacken, CertiK"],
        ["Custody", "Professional asset custodians", "Loomis, Brink's, BitGo (digital asset custody)"],
        ["Legal", "Professional law firms", "Zhong Lun Law Firm, King & Wood Mallesons, Cooley LLP"],
        ["Compliance", "Virtual Asset Service Providers (VASP)", "HashKey, OSL, Sygnum Bank"],
      ],
    },
  ],
  cases: [],
  recommendations: [
    "Write the non-financialization principle directly into both product design and external messaging.",
    "Prioritize mechanisms that are verifiable, executable, and easy for users to understand, instead of starting with complex financial packaging.",
    "Bring in testing, legal, audit, custody, and compliance partners as early as possible.",
  ],
}
  },
];

export function getIndustryById(id) {
  return industries.find((item) => item.id === id);
}
