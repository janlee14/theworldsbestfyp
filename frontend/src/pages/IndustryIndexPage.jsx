import { Link } from "react-router-dom";
import { industries } from "../data/industryResearch";

export default function IndustryIndexPage() {
  return (
    <>
      <section className="hero">
        <div className="badge">Industry Research × 5</div>
        <h1 className="page-title">Five structured sub-pages with charts, use cases, and recommendations.</h1>
        <p className="page-subtitle">
          This section is built from your uploaded industry research content: 白酒、茶叶、潮玩、游戏，以及一页通用的 RWA 机制设计指南。
        </p>
      </section>

      <section className="grid-2">
        {industries.map((industry) => (
          <Link key={industry.id} to={`/research/${industry.id}`} className="card">
            <div className="badge">{industry.name}</div>
            <h3>{industry.shortTitle}</h3>
            <p className="muted">{industry.intro}</p>
          </Link>
        ))}
      </section>
    </>
  );
}
