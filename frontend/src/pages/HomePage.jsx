import { Link } from "react-router-dom";
import SectionHeader from "../components/SectionHeader";
import { homeHighlights } from "../data/homeContent";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="badge">Integrated Non-Financial RWA Hub</div>
        <h1 className="page-title">Use the platform as a non-financial RWA hub to connect merchants, customers, platform users, and industry professionals.</h1>
        <p className="page-subtitle">
          The platform combines Home, RWA beginner education, hard-coded news, five industry research sub-pages, an AI-enabled business report module, and an online forum so different parties can collaboratively build a non-financial RWA community.
        </p>
        <div className="hero-metrics">
          {homeHighlights.metrics.map((item) => (
            <div key={item.label} className="metric-card">
              <div className="metric-label">{item.label}</div>
              <div className="metric-value">{item.value}</div>
            </div>
          ))}
        </div>
        <div className="button-row">
          <Link className="button" to="/research">Explore research</Link>
          <Link className="button secondary" to="/learn-rwa">Learn RWA</Link>
          <Link className="button secondary" to="/ai-report">Generate AI report</Link>
          <Link className="button ghost" to="/forum">Open forum</Link>
        </div>
      </section>

      <section className="section">
        <SectionHeader title="Company business & product brief" subtitle="What this platform is designed to do" />
        <div className="grid-4">
          {homeHighlights.productCards.map((card) => (
            <div className="card" key={card.title}>
              <div className="subheading">{card.title}</div>
              <div className="muted">{card.text}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHeader title="Featured lively cases" subtitle="Potential application directions already mapped into the platform" />
        <div className="grid-2">
          {homeHighlights.cases.map((item) => (
            <div className="card" key={item.title}>
              <div className="subheading">{item.title}</div>
              <div className="muted">{item.text}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHeader title="Site structure" subtitle="The five main structures requested are already mapped here" />
        <div className="grid-3">
          <Link to="/" className="card"><div className="subheading">Home</div><div className="muted">Platform positioning, business brief, highlighted cases, and quick entry.</div></Link>
          <Link to="/learn-rwa" className="card"><div className="subheading">RWA Industry Overview & Primitives for Beginners</div><div className="muted">Three learning pages based on the uploaded website content.</div></Link>
          <Link to="/news" className="card"><div className="subheading">News Section</div><div className="muted">Hard-coded news feed for the current MVP, ready to upgrade later.</div></Link>
          <Link to="/research" className="card"><div className="subheading">Industry Research × 5</div><div className="muted">白酒、茶叶、潮玩、游戏、机制设计指南 five sub-pages with charts and recommendations.</div></Link>
          <Link to="/ai-report" className="card"><div className="subheading">AI-enabled industry report</div><div className="muted">To-B input form that generates a tailored pilot recommendation report.</div></Link>
          <Link to="/forum" className="card"><div className="subheading">Online Forum</div><div className="muted">Discussion space connecting industry, academia, merchants, and everyday users.</div></Link>
        </div>
      </section>
    </>
  );
}
