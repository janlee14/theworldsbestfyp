import { Link } from "react-router-dom";
import { useI18n } from "../i18n";
import { industries } from "../data/industryResearch";

const pageContent = {
  en: {
    badge: "Industry Research × 5",
    title: "Five structured reports from different industries",
    subtitle:
      "Baijiu, tea, collectibles, gaming, and one general RWA mechanism design guide.",
  },
  zh: {
    badge: "行业研究 × 5",
    title: "来自不同行业的五份结构化研究报告",
    subtitle: "白酒、茶叶、潮玩、游戏，以及一页通用的 RWA 机制设计指南。",
  },
};

export default function IndustryIndexPage() {
  const { language } = useI18n();
  const content = pageContent[language] || pageContent.en;

  return (
    <>
      <section className="hero">
        <div className="badge">{content.badge}</div>
        <h1 className="page-title">{content.title}</h1>
        <p className="page-subtitle">{content.subtitle}</p>
      </section>

      <section className="grid-2">
        {industries.map((industry) => {
          const item = language === "en" && industry.en ? industry.en : industry;

          return (
            <Link key={industry.id} to={`/research/${industry.id}`} className="card">
              <div className="badge">{item.name}</div>
              <h3>{item.shortTitle}</h3>
              <p className="muted">{item.intro}</p>
            </Link>
          );
        })}
      </section>
    </>
  );
}