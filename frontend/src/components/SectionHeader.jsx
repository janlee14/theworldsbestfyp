export default function SectionHeader({ title, subtitle, kicker }) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      {kicker ? <div className="kicker" style={{ marginBottom: "0.5rem" }}>{kicker}</div> : null}
      <h2 className="section-title">{title}</h2>
      {subtitle ? <div className="muted">{subtitle}</div> : null}
    </div>
  );
}
