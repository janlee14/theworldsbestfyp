import { Link } from "react-router-dom";
import SectionHeader from "../components/SectionHeader";
import { useI18n } from "../i18n";
import { homeContent } from "../data/homeContent";

export default function HomePage() {
  const { language } = useI18n();
  const content = homeContent[language] || homeContent.en;

  return (
    <>
      <section className="hero">
        <div className="badge">{content.hero.badge}</div>
        <h1 className="page-title">{content.hero.title}</h1>
        <p className="page-subtitle">{content.hero.subtitle}</p>

        <div className="hero-metrics">
          {content.metrics.map((item) => (
            <div key={item.label} className="metric-card">
              <div className="metric-label">{item.label}</div>
              <div className="metric-value">{item.value}</div>
            </div>
          ))}
        </div>

        <div className="button-row">
          <Link className="button" to="/research">
            {content.hero.buttons.research}
          </Link>
          <Link className="button secondary" to="/learn-rwa">
            {content.hero.buttons.learn}
          </Link>
          <Link className="button secondary" to="/ai-report">
            {content.hero.buttons.report}
          </Link>
          <Link className="button ghost" to="/forum">
            {content.hero.buttons.forum}
          </Link>
        </div>
      </section>

      <section className="section">
        <SectionHeader
          title={content.sections.brief.title}
          subtitle={content.sections.brief.subtitle}
        />
        <div className="grid-4">
          {content.productCards.map((card) => (
            <div className="card" key={card.title}>
              <div className="subheading">{card.title}</div>
              <div className="muted">{card.text}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHeader
          title={content.sections.cases.title}
          subtitle={content.sections.cases.subtitle}
        />
        <div className="grid-2">
          {content.cases.map((item) => (
            <div className="card" key={item.title}>
              <div className="subheading">{item.title}</div>
              <div className="muted">{item.text}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHeader
          title={content.sections.structure.title}
          subtitle={content.sections.structure.subtitle}
        />
        <div className="grid-3">
          {content.structureCards.map((item) => (
            <Link to={item.path} className="card" key={item.path}>
              <div className="subheading">{item.title}</div>
              <div className="muted">{item.text}</div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}