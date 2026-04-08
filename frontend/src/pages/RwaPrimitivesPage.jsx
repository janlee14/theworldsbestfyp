import SectionHeader from "../components/SectionHeader";
import { learnPages } from "../data/learnContent";
import { DataTable } from "../components/ContentBlocks";

export default function RwaPrimitivesPage() {
  const content = learnPages.primitives;

  return (
    <>
      <section className="hero">
        <div className="badge">/rwa-primitives</div>
        <h1 className="page-title">{content.heroTitle}</h1>
        <p className="page-subtitle">{content.heroSubtitle}</p>
      </section>

      <section className="section">
        <SectionHeader title="Intro block" />
        <p>{content.intro}</p>
      </section>

      <section className="section">
        <SectionHeader title="The 8 core primitives" />
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
        <SectionHeader title="One sentence to remember" />
        <div className="card">
          <div className="subheading">{content.sentence}</div>
        </div>
      </section>

      <section className="section">
        <SectionHeader title="How the primitives change by use case" />
        <DataTable columns={content.useCaseColumns} rows={content.useCaseRows} />
      </section>

      <section className="grid-2">
        <div className="section">
          <SectionHeader title="Why primitives matter" />
          <ul className="list">
            {content.whyItMatters.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
        <div className="section">
          <SectionHeader title="General risks" />
          <ul className="list">
            {content.risks.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </section>
    </>
  );
}
