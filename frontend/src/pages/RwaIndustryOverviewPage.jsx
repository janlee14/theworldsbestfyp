import SectionHeader from "../components/SectionHeader";
import { learnPages } from "../data/learnContent";
import { StatCards, BulletCards } from "../components/ContentBlocks";
import { SimpleBarChart } from "../components/Charts";
import { useI18n } from "../i18n";

export default function RwaIndustryOverviewPage() {
  const { language } = useI18n();
  const content = learnPages.overview[language] || learnPages.overview.en;

  return (
    <>
      <section className="hero">
        <div className="badge">{content.routeBadge}</div>
        <h1 className="page-title">{content.heroTitle}</h1>
        <p className="page-subtitle">{content.heroSubtitle}</p>
      </section>

      <section className="section">
        <SectionHeader title={content.sectionTitles.changingNow} />
        <p>{content.changingNow}</p>
      </section>

      <section className="section">
        <SectionHeader title={content.sectionTitles.marketSnapshot} />
        <StatCards items={content.marketSnapshot} />
        <p className="muted" style={{ marginTop: "1rem" }}>{content.marketCaption}</p>
      </section>

      <section className="section">
        <SectionHeader title={content.sectionTitles.whyCare} />
        <BulletCards items={content.careCards} />
      </section>

      <section className="section">
        <SectionHeader title={content.sectionTitles.biggerThanFinance} />
        <p>{content.biggerThanFinanceText}</p>
        <div className="chip-row" style={{ marginTop: "1rem" }}>
          {content.tags.map((tag) => <span key={tag} className="chip">{tag}</span>)}
        </div>
      </section>

      <section className="section">
        <SectionHeader title={content.sectionTitles.headlines} />
        <p>{content.headlinesText}</p>
      </section>

      <section className="section">
        <SectionHeader title={content.sectionTitles.whatIsRwa} subtitle={content.whatIsRwaIntro} />
        <p>{content.simpleDefinition}</p>
        <div className="grid-3" style={{ marginTop: "1rem" }}>
          {content.buckets.map((item) => (
            <div className="card" key={item.title}>
              <div className="subheading">{item.title}</div>
              <div className="muted">{item.text}</div>
            </div>
          ))}
        </div>
        <div className="note-box" style={{ marginTop: "1rem" }}>
          {content.noteBox}
        </div>
      </section>

      <section className="grid-2">
        <div className="section">
          <SectionHeader title={content.sectionTitles.credibility} />
          <ul className="list">
            {content.credibility.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
        <div className="section">
          <SectionHeader title={content.sectionTitles.takeaway} />
          <ul className="list">
            <div className="subheading">{content.takeawayTitle}</div>
            <div className="muted">{content.takeawayText}</div>
          </ul>
        </div>
      </section>

      <section className="grid-2">
        <div className="section">
          <SectionHeader title={content.sectionTitles.snapshotChart} />
          <SimpleBarChart data={content.snapshotChart} />
        </div>
        <div className="section">
          <SectionHeader title={content.sectionTitles.networksChart} />
          <SimpleBarChart data={content.networksChart} />
        </div>
      </section>
    </>
  );
}