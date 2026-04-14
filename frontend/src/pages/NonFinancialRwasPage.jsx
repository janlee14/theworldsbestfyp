import SectionHeader from "../components/SectionHeader";
import { learnPages } from "../data/learnContent";
import { BulletCards } from "../components/ContentBlocks";
import { useI18n } from "../i18n";

export default function NonFinancialRwasPage() {
  const { language } = useI18n();
  const content = learnPages.nonFinancial[language] || learnPages.nonFinancial.en;

  return (
    <>
      <section className="hero">
        <div className="badge">{content.routeBadge}</div>
        <h1 className="page-title">{content.heroTitle}</h1>
        <p className="page-subtitle">{content.heroSubtitle}</p>
      </section>

      <section className="section">
        <SectionHeader title={content.sectionTitles.intro} />
        <p>{content.intro}</p>
      </section>

      <section className="grid-2">
        {content.sections.map((item) => (
          <div className="section" key={item.title}>
            <SectionHeader title={item.title} />
            <p>{item.text}</p>
            <div className="note-box" style={{ marginTop: "1rem" }}>
              <strong>{content.sectionTitles.momentum}</strong> {item.momentum}
            </div>
          </div>
        ))}
      </section>

      <section className="section">
        <SectionHeader title={content.sectionTitles.whyMatter} />
        <BulletCards items={content.whyCards} />
      </section>

      <section className="section">
        <SectionHeader title={content.sectionTitles.regulation} />
        <ul className="list">
          {content.regulation.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <section className="section">
        <SectionHeader title={content.sectionTitles.faq} />
        <div className="grid-2">
          {content.faq.map(([q, a]) => (
            <div className="card" key={q}>
              <div className="subheading">{q}</div>
              <div className="muted">{a}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}