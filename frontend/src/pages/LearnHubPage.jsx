import { Link } from "react-router-dom";
import { useI18n } from "../i18n";
import { learnHubContent } from "../data/learnHubContent";

export default function LearnHubPage() {
  const { language } = useI18n();
  const content = learnHubContent[language] || learnHubContent.en;

  return (
    <>
      <section className="hero">
        <div className="badge">{content.hero.badge}</div>
        <h1 className="page-title">{content.hero.title}</h1>
        <p className="page-subtitle">{content.hero.subtitle}</p>
      </section>

      <section className="grid-3">
        {content.pages.map((page) => (
          <Link key={page.path} to={page.path} className="card">
            <div className="subheading">{page.title}</div>
            <div className="muted">{page.text}</div>
          </Link>
        ))}
      </section>
    </>
  );
}