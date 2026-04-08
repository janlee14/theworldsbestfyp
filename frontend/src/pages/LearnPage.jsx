import SectionHeader from '../components/SectionHeader';

const primitives = [
  'Asset identification: define what the real-world asset is and why it matters.',
  'Ownership mapping: clarify who owns the asset and what rights are represented.',
  'Tokenization logic: design the digital representation and circulation rules.',
  'Metadata and proof binding: connect certificates, serial numbers, images, or usage records.',
  'Utility design: define access, redemption, membership, or loyalty benefits.',
  'Verification and redemption: build trust into authenticity and fulfillment.',
];

export default function LearnPage() {
  return (
    <>
      <section className="section">
        <h1 className="page-title">RWA Industry Overview & Primitives for Beginners</h1>
        <p className="muted">A simple introduction to what non-financial RWA means and why businesses may care.</p>
      </section>

      <section className="section">
        <SectionHeader title="What is non-financial RWA?" />
        <p>
          Non-financial RWA refers to bringing real-world assets with non-financial value into a structured digital system.
          These may include collectibles, tickets, memberships, game items, luxury certificates, or brand-linked assets.
        </p>
      </section>

      <section className="section">
        <SectionHeader title="Core primitives" subtitle="Key building blocks for new users" />
        <div className="grid-2">
          {primitives.map((item) => (
            <div className="card" key={item}>{item}</div>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHeader title="Why businesses care" />
        <ul className="list">
          <li>New monetization and loyalty channels</li>
          <li>Better user engagement and community growth</li>
          <li>Traceability, authenticity, and lifecycle visibility</li>
          <li>Clearer asset packaging for collaborations and campaigns</li>
        </ul>
      </section>
    </>
  );
}
