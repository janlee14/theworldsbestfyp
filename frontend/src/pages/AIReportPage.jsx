import { useState } from "react";
import { api } from "../services/api";
import SectionHeader from "../components/SectionHeader";

const initialForm = {
  company_name: "",
  industry: "baijiu",
  business_model: "",
  products: "",
  pain_points: "",
  target_customers: "",
  digitalization_level: "medium",
};

const industryOptions = [
  ["baijiu", "Baijiu / White Spirits"],
  ["tea", "Tea"],
  ["toys", "Collectibles / Pop Toys"],
  ["gaming", "Gaming"],
  ["general", "Other non-financial RWA"],
];

export default function AIReportPage() {
  const [form, setForm] = useState(initialForm);
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setError("");
    try {
      const result = await api.generateReport(form);
      setReport(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <section className="hero">
        <div className="badge">To-B potential business cooperation</div>
        <h1 className="page-title">AI-enabled industry report for that business</h1>
        <p className="page-subtitle">
          This module turns merchant inputs into a structured pilot recommendation. It is the business-enablement layer of the platform, not just a content page.
        </p>
      </section>

      <section className="section">
        <SectionHeader title="Input form" subtitle="Tell the platform what kind of business you are evaluating" />
        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div>
              <label className="label">Company name</label>
              <input className="input" name="company_name" value={form.company_name} onChange={handleChange} required />
            </div>
            <div>
              <label className="label">Industry</label>
              <select className="select" name="industry" value={form.industry} onChange={handleChange}>
                {industryOptions.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
              </select>
            </div>
            <div>
              <label className="label">Digitalization level</label>
              <select className="select" name="digitalization_level" value={form.digitalization_level} onChange={handleChange}>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <label className="label">Business model</label>
            <textarea className="textarea" name="business_model" value={form.business_model} onChange={handleChange} required />
          </div>
          <div className="form-row">
            <label className="label">Core products</label>
            <textarea className="textarea" name="products" value={form.products} onChange={handleChange} required />
          </div>
          <div className="form-row">
            <label className="label">Key pain points</label>
            <textarea className="textarea" name="pain_points" value={form.pain_points} onChange={handleChange} required />
          </div>
          <div className="form-row">
            <label className="label">Target customers</label>
            <textarea className="textarea" name="target_customers" value={form.target_customers} onChange={handleChange} required />
          </div>
          <div className="button-row">
            <button className="button" type="submit" disabled={loading}>{loading ? "Generating..." : "Generate report"}</button>
          </div>
          {error ? <p style={{ color: "#fca5a5" }}>{error}</p> : null}
        </form>
      </section>

      {report ? (
        <section className="section">
          <SectionHeader title={`Generated report for ${report.company_name}`} subtitle="This is a structured MVP output that can later be upgraded to a live LLM workflow" />
          <div className="grid-2">
            <div className="card"><h3>Company profile summary</h3><p>{report.company_profile_summary}</p></div>
            <div className="card"><h3>Industry suitability</h3><p>{report.industry_suitability}</p></div>
            <div className="card"><h3>Potential RWA assets</h3><ul className="list">{report.potential_assets.map((x) => <li key={x}>{x}</li>)}</ul></div>
            <div className="card"><h3>Suggested mechanisms</h3><ul className="list">{report.suggested_mechanisms.map((x) => <li key={x}>{x}</li>)}</ul></div>
            <div className="card"><h3>Business benefits</h3><ul className="list">{report.business_benefits.map((x) => <li key={x}>{x}</li>)}</ul></div>
            <div className="card"><h3>Risks & considerations</h3><ul className="list">{report.risks_and_considerations.map((x) => <li key={x}>{x}</li>)}</ul></div>
          </div>
          <div className="card" style={{ marginTop: "1rem" }}>
            <h3>Recommended pilot path</h3>
            <p>{report.recommended_pilot_path}</p>
          </div>
        </section>
      ) : null}
    </>
  );
}
