import SectionHeader from "../components/SectionHeader";
import { learnPages } from "../data/learnContent";
import { DataTable } from "../components/ContentBlocks";
import { useI18n } from "../i18n";

export default function RwaPrimitivesPage() {
  const { language } = useI18n();
  const content = learnPages.primitives[language] || learnPages.primitives.en;

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

      <section className="section">
        <SectionHeader title={content.sectionTitles.core} />
        <div className="grid-2">
          {content.primitives.map((item) => (
            <div className="card" key={item.title}>
              <div className="subheading">{item.title}</div>
              <div className="muted">{item.text}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section center">
        <SectionHeader title={content.sectionTitles.sentence} />
        <div className="card">
          <div className="subheading">{content.sentence}</div>
        </div>
      </section>

      <section className="section">
        <SectionHeader title={content.sectionTitles.useCases} />
        <DataTable columns={content.useCaseColumns} rows={content.useCaseRows} />
      </section>

      <section className="grid-2">
        <div className="section">
          <SectionHeader title={content.sectionTitles.whyMatters} />
          <ul className="list">
            {content.whyItMatters.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
        <div className="section">
          <SectionHeader title={content.sectionTitles.risks} />
          <ul className="list">
            {content.risks.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </section>
    </>
  );
}