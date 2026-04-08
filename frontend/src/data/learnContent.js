export const learnPages = {
  overview: {
    heroTitle: "Real-world assets are moving from idea to infrastructure.",
    heroSubtitle:
      "RWA brings real-world rights, records, and assets onto digital rails. In 2026, the story is no longer just crypto experiments. It is about how tokenization can improve distribution, settlement, verification, and cross-organization workflows.",
    changingNow:
      "RWA is becoming a real infrastructure layer. Asset managers are launching tokenized funds. Banks are testing tokenized deposits. Market infrastructure providers and central banks are actively designing rails that could connect digital assets with regulated finance. For a beginner, the most useful question is no longer 'Can tokenization work?' but 'Where does tokenization help first, and why?'",
    marketSnapshot: [
      { label: "Distributed Asset Value", value: "$27.68B" },
      { label: "Represented Asset Value", value: "$441.38B" },
      { label: "Stablecoin Value", value: "$299.41B" },
      { label: "Total RWA Holders", value: "710,954" },
      { label: "Total Platforms", value: "167" },
    ],
    marketCaption:
      "Different dashboards use different methods. Some count only assets that can move on-chain between wallets ('distributed'). Others also count assets represented on-chain mainly for recordkeeping and reconciliation ('represented'). Some include stablecoins, some exclude them.",
    careCards: [
      { title: "24/7 distribution", text: "Assets can reach users on digital rails rather than only through local market hours and siloed platforms." },
      { title: "Faster settlement", text: "Tokenization can combine messaging, reconciliation, and settlement into a programmable workflow." },
      { title: "Better collateral mobility", text: "Cash-like tokens, tokenized deposits, and high-quality securities can move more easily across connected systems." },
      { title: "More transparent records", text: "For many non-financial use cases, the biggest win is not yield - it is better proof, cleaner data, and easier verification." },
    ],
    tags: [
      "Bills of lading",
      "Warehouse receipts",
      "Diplomas",
      "Licenses",
      "Carbon credits",
      "Renewable energy certificates",
      "Product passports",
      "Provenance records",
    ],
    whatIsRwaIntro:
      "An RWA is a digital representation of something real. That 'something real' can be an asset, a legal claim, a record, a permission, a credential, or a proof of origin.",
    simpleDefinition:
      "An RWA links digital infrastructure to off-chain reality. If a token, credential, or electronic record points to a real-world right and there is a reliable way to prove, transfer, verify, redeem, or exercise that right, it belongs in the RWA conversation.",
    buckets: [
      { title: "Bucket 1 - Financial claims", text: "Treasuries, money market funds, private credit, real estate interests, commodities, and tokenized securities." },
      { title: "Bucket 2 - Ownership and provenance", text: "Physical gold, inventory claims, product history, and proof of who owns or controls a thing." },
      { title: "Bucket 3 - Verifiable records and permissions", text: "Bills of lading, warehouse receipts, diplomas, licenses, environmental certificates, and digital product passports." },
    ],
    credibility: [
      "Clear underlying right - What exactly do you own, control, prove, or access?",
      "Legal enforceability - Which law, contract, issuer, or registry makes the right real?",
      "Trusted source of truth - Who holds the asset, maintains the registry, or signs the credential?",
      "Transfer or verification rules - Can it move freely, only to approved users, or not at all?",
      "Exit path - How do you redeem, exercise, verify, retire, or settle it?",
    ],
    summary: [
      "what an RWA actually is",
      "why tokenization is not only about finance",
      "which categories of RWAs exist (financial vs. non-financial)",
      "why non-financial RWAs may become just as important as financial ones",
    ],
    snapshotChart: [
      { label: "Distributed", value: 27.68 },
      { label: "Represented", value: 441.38 },
      { label: "Stablecoins", value: 299.41 },
    ],
    networksChart: [
      { label: "Ethereum", value: 15.5 },
      { label: "BNB Chain", value: 3.4 },
      { label: "Solana", value: 1.7 },
      { label: "Stellar", value: 1.4 },
      { label: "Liquid", value: 1.3 },
    ],
  },
  primitives: {
    heroTitle: "Every RWA is built from a small set of primitives.",
    heroSubtitle: "If you understand the primitives, you can understand almost any RWA project.",
    intro:
      "The token is only one layer. Good RWA design connects legal rights, data, identity, payments, and settlement. This is why strong RWA systems look less like a single app and more like a stack.",
    primitives: [
      { title: "Underlying asset or claim", text: "What is being represented: a Treasury bill, a gold bar, a bill of lading, a diploma, a carbon credit, or something else?" },
      { title: "Legal wrapper", text: "What gives the holder enforceable rights: fund shares, a trust, a registry rule, an issuer signature, or a recognized trade-document framework?" },
      { title: "Source of truth", text: "Who keeps the official record off-chain: custodian, transfer agent, registry, accredited issuer, bank, platform, or public authority?" },
      { title: "Token or credential layer", text: "What moves digitally: a fungible token, a wallet-based entitlement, a verifiable credential, or a transferable electronic record?" },
      { title: "Identity and access", text: "Who is allowed to hold, transfer, view, or verify it? Many real systems use KYC, whitelists, accreditation, or role-based permissions." },
      { title: "Data, oracle, or attestation", text: "How do price, status, maturity, location, ownership updates, or environmental claims get reflected digitally?" },
      { title: "Settlement asset", text: "What pays for the transfer: bank money, tokenized deposits, stablecoins, central bank money links, or an off-chain payment instruction?" },
      { title: "Redemption, servicing, and dispute handling", text: "How does the holder exit, verify, retire, claim, or correct the asset if something goes wrong?" },
    ],
    sentence: "An RWA only works when the token, the legal right, and the source-of-truth process all point to the same reality.",
    useCaseColumns: ["Use case", "What the digital object represents", "Main user action", "What redemption means"],
    useCaseRows: [
      ["Tokenized Treasury", "Exposure to government paper or a fund holding it", "Buy, hold, transfer, earn yield", "Redeem into cash or fund value"],
      ["Verifiable diploma", "A trusted educational claim", "Present and verify", "No cash redemption; verification is the value"],
      ["Electronic bill of lading", "Control over a transferable trade document", "Transfer title/control", "Exercise rights over goods/documents"],
      ["Carbon credit", "A claim tied to an environmental outcome", "Trade, hold, or retire", "Retirement to make an environmental claim"],
    ],
    whyItMatters: [
      "What real-world right is being digitized?",
      "Who enforces that right?",
      "Who can verify it?",
      "What data updates it?",
      "What happens if there is a dispute?",
    ],
    risks: [
      "Legal mismatch - The token says one thing, but the real-world contract or registry says another. (Primitive 2 & 3)",
      "Custody and counterparty risk - Someone still has to hold assets, maintain records, or honor redemptions. (Primitive 3)",
      "Data and oracle risk - Bad inputs create bad outputs. (Primitive 6)",
      "Liquidity mismatch - A token can trade 24/7 even when the underlying asset cannot. (Primitive 8)",
      "Smart contract and key risk - Code bugs, operational failures, or lost keys can break workflows. (Primitive 4)",
      "Interoperability risk - Fragmented systems and bridges can create new failure points. (Primitive 7 & 4)",
    ],
  },
  nonFinancial: {
    heroTitle: "Non-financial RWAs are a major part of the story.",
    heroSubtitle: "Here, the main benefit is usually trusted verification, portability, and workflow automation - not yield.",
    intro:
      "If financial RWAs digitize capital, non-financial RWAs digitize proof. They turn documents, credentials, origin data, and environmental claims into portable, machine-verifiable digital objects.",
    sections: [
      {
        title: "Trade documents and electronic transferable records",
        text: "Bills of lading, warehouse receipts, promissory notes, and similar records are foundational to global trade. When these records become electronic and legally recognized, trade can move faster, with less paperwork and less fraud risk.",
        momentum: "TradeTrust has moved beyond pilots into broader ecosystem adoption. In one Singapore-India trial, trade-finance lead time fell from 25-30 working days to 10 days.",
      },
      {
        title: "Identity, licenses, and educational credentials",
        text: "A diploma, license, institutional accreditation, or other trusted credential can also be treated as an RWA-style object. The value comes from tamper-evident issuance, privacy-aware sharing, and easier verification.",
        momentum: "W3C Verifiable Credentials and the European Blockchain Services Infrastructure (EBSI) show how trusted issuers, holders, and verifiers can exchange digital credentials.",
      },
      {
        title: "Environmental assets",
        text: "Carbon credits, renewable-energy certificates, guarantees of origin, and similar claims are non-financial RWAs because they represent real-world environmental attributes. But this category only works when integrity comes first.",
        momentum: "The World Bank's Climate Action Data Trust (CAD Trust) has already reflected tokenized carbon-asset transactions.",
      },
      {
        title: "Product passports and provenance",
        text: "A digital product passport can store sustainability, durability, and conformity information about a physical product. For consumers, businesses, and regulators, this makes product history easier to trace across the supply chain and across the product's life cycle.",
        momentum: "The EU Digital Product Passport is being designed to carry sustainability, durability, and conformity information for products.",
      },
    ],
    whyCards: [
      { title: "Lower fraud", text: "Trusted digital records reduce the need for manual document checking and repeated reconciliation." },
      { title: "Faster verification", text: "Credentials, trade documents, and product records can be checked more quickly across organizations." },
      { title: "Better interoperability", text: "Shared standards make it easier for different platforms and institutions to exchange trusted information." },
      { title: "New financing possibilities later", text: "Once documents and provenance become portable and verifiable, they can later support financing, insurance, compliance, and secondary-market activity." },
    ],
    regulation: [
      "Global standard-setters broadly agree: tokenization is still small relative to the total financial system, but it is growing and now matters enough to deserve serious legal, supervisory, and operational work.",
      "In the United States, tokenized traditional securities are still treated as securities under existing law.",
      "In Europe, the ECB is moving from experimentation toward operational infrastructure through DLT-based collateral acceptance and the Appia/Pontes roadmap.",
      "In U.S. market infrastructure, DTCC is preparing a second-half-2026 tokenization service for select DTC-custodied assets.",
    ],
    faq: [
      ["Are RWAs only financial products?", "No. Many of the most useful RWAs are documents, credentials, environmental claims, and product records."],
      ["Are stablecoins RWAs?", "Many market trackers include them because they represent fiat-linked claims and power on-chain settlement. Some analysts discuss them separately. Both approaches are common."],
      ["Why use blockchain instead of a normal database?", "Because the real benefit is shared state across organizations, portability, programmability, and easier coordination - not simply putting data online."],
      ["Does tokenization remove the need for law?", "No. In practice, tokenization makes legal design more important, not less."],
      ["Are all RWAs tradable?", "No. Some are meant to be verified, transferred, retired, or exercised rather than traded."],
      ["What is the difference between a distributed asset and a represented asset?", "A distributed asset can move to external wallets and transfer between wallets. A represented asset mainly uses blockchain for recordkeeping and does not move freely outside the issuing environment."],
      ["What is the most important question to ask any RWA project?", "What exact real-world right do I get, and how is it enforced?"],
      ["What matters most for non-financial RWAs?", "Trusted issuers, clean source data, and enforceable workflow rules matter more than speculative trading."],
    ],
  },
};
