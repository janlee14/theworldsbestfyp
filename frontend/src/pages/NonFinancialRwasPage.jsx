import SectionHeader from "../components/SectionHeader";
import { learnPages } from "../data/learnContent";
import { BulletCards } from "../components/ContentBlocks";

export default function NonFinancialRwasPage() {
  const content = learnPages.nonFinancial;

  return (
    <>
      <section className="hero">
        <div className="badge">/non-financial-rwas</div>
        <h1 className="page-title">{content.heroTitle}</h1>
        <p className="page-subtitle">{content.heroSubtitle}</p>
      </section>

      <section className="section">
        <SectionHeader title="Intro block" />
        <p>{content.intro}</p>
      </section>

      <section className="grid-2">
        {content.sections.map((item) => (
          <div className="section" key={item.title}>
            <SectionHeader title={item.title} />
            <p>{item.text}</p>
            <div className="note-box" style={{ marginTop: "1rem" }}>
              <strong>Real-world momentum:</strong> {item.momentum}
            </div>
          </div>
        ))}
      </section>

      <section className="section">
        <SectionHeader title="Why non-financial RWAs matter" />
        <BulletCards items={content.whyCards} />
      </section>

      <section className="section">
        <SectionHeader title="Regulation snapshot" />
        <ul className="list">
          {content.regulation.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <section className="section">
        <SectionHeader title="FAQ" />
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
