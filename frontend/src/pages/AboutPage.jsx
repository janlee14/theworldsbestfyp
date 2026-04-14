import { useI18n } from "../i18n";
import { aboutContent } from "../data/aboutContent";

export default function AboutPage() {
  const { language } = useI18n();
  const content = aboutContent[language] || aboutContent.en;

  return (
    <section className="section">
      <div className="badge">{content.badge}</div>
      <h1 className="page-title">{content.title}</h1>
      <p>{content.body1}</p>
      <p className="muted">{content.body2}</p>
    </section>
  );
}