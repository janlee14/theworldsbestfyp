import { Link } from "react-router-dom";

const pages = [
  {
    path: "/rwa-industry-overview",
    title: "Web Page 1 - RWA Industry Overview",
    text: "From market snapshot and why people care, to what an RWA actually is and how to read big headlines.",
  },
  {
    path: "/rwa-primitives",
    title: "Web Page 2 - RWA Primitives for Beginners",
    text: "The 8 core primitives, use-case comparison table, and the general risks beginners should know.",
  },
  {
    path: "/non-financial-rwas",
    title: "Web Page 3 - Non-Financial RWAs",
    text: "Trade documents, credentials, environmental assets, product passports, regulation snapshot, and FAQ.",
  },
];

export default function LearnHubPage() {
  return (
    <>
      <section className="hero">
        <div className="badge">RWA Industry Overview & Primitives for Beginners</div>
        <h1 className="page-title">Three structured learning pages are now built into the website.</h1>
        <p className="page-subtitle">
          This section is directly filled with the uploaded content for website part two. It turns your notes into full web pages instead of leaving them as standalone documents.
        </p>
      </section>
      <section className="grid-3">
        {pages.map((page) => (
          <Link key={page.path} to={page.path} className="card">
            <div className="subheading">{page.title}</div>
            <div className="muted">{page.text}</div>
          </Link>
        ))}
      </section>
    </>
  );
}
