import SectionHeader from "../components/SectionHeader";
import { learnPages } from "../data/learnContent";
import { StatCards, BulletCards } from "../components/ContentBlocks";
import { SimpleBarChart } from "../components/Charts";

export default function RwaIndustryOverviewPage() {
  const content = learnPages.overview;

  return (
    <>
      <section className="hero">
        <div className="badge">/rwa-industry-overview</div>
        <h1 className="page-title">{content.heroTitle}</h1>
        <p className="page-subtitle">{content.heroSubtitle}</p>
      </section>

      <section className="section">
        <SectionHeader title="What is changing now?" />
        <p>{content.changingNow}</p>
      </section>

      <section className="section">
        <SectionHeader title="Market Snapshot - Updated April 2026" />
        <StatCards items={content.marketSnapshot} />
        <p className="muted" style={{ marginTop: "1rem" }}>{content.marketCaption}</p>
      </section>

      <section className="section">
        <SectionHeader title="Why people care about RWA" />
        <BulletCards items={content.careCards} />
      </section>

      <section className="section">
        <SectionHeader title="RWA is bigger than finance" />
        <p>
          Beginners often think RWA only means tokenized U.S. Treasuries. That is only the first wave. The broader RWA landscape also includes trade documents, educational credentials, licenses, environmental assets, product passports, provenance records, and other digital representations of real-world claims and facts.
        </p>
        <div className="chip-row" style={{ marginTop: "1rem" }}>
          {content.tags.map((tag) => <span key={tag} className="chip">{tag}</span>)}
        </div>
      </section>

      <section className="section">
        <SectionHeader title="How to read big RWA headlines" />
        <p>
          When one report says RWAs are worth tens of billions and another talks about trillions, the difference usually comes from methodology, not necessarily contradiction. Some sources measure today's on-chain market value. Others include represented assets, stablecoins, or long-term forecasts. The right beginner habit is to ask: what exactly is being counted?
        </p>
      </section>

      <section className="section">
        <SectionHeader title="What is an RWA?" subtitle={content.whatIsRwaIntro} />
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
          RWA does not always mean investable. Some RWAs are meant to be bought and sold. Others are mainly meant to be verified, transferred, or exercised. A diploma is not a yield product. A bill of lading is not a meme coin.
        </div>
      </section>

      <section className="grid-2">
        <div className="section">
          <SectionHeader title="What makes an RWA credible?" />
          <ul className="list">
            {content.credibility.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
        <div className="section">
          <SectionHeader title="Beginner takeaway" />
          <div className="card">
            <div className="subheading">RWA = digital object + real-world right + trusted source of truth + clear rules for transfer or verification</div>
            <div className="muted">If one of those parts is missing, the system is weak.</div>
          </div>
          <div className="card" style={{ marginTop: "1rem" }}>
            <div className="subheading">Summary of this section</div>
            <ul className="list list-tight">
              {content.summary.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="grid-2">
        <div className="section">
          <SectionHeader title="RWA Market Snapshot (April 2, 2026)" />
          <SimpleBarChart data={content.snapshotChart} />
        </div>
        <div className="section">
          <SectionHeader title="Leading Networks for Distributed RWAs (March 31, 2026)" />
          <SimpleBarChart data={content.networksChart} />
        </div>
      </section>
    </>
  );
}
