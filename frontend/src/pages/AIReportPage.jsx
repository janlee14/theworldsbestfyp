import { useState } from "react";

export default function AIReportPage() {
  const [form, setForm] = useState({
    company_name: "",
    industry: "",
    business_model: "",
    products: "",
    pain_points: "",
    target_customers: "",
    digitalization_level: "",
  });

  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setReport("");

    try {
      const res = await fetch("/api/reports/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.detail || "Failed to generate report.");
      }

      setReport(data.report || "");
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.title}>AI RWA Business Report</h1>
        <p style={styles.subtitle}>
          Enter company information and generate a tailored non-financial RWA report with DeepSeek.
        </p>

        <form onSubmit={handleSubmit} style={styles.form}>
          <input style={styles.input} name="company_name" placeholder="Company name" value={form.company_name} onChange={handleChange} required />
          <input style={styles.input} name="industry" placeholder="Industry" value={form.industry} onChange={handleChange} required />
          <textarea style={styles.textarea} name="business_model" placeholder="Business model" value={form.business_model} onChange={handleChange} required />
          <textarea style={styles.textarea} name="products" placeholder="Core products / services" value={form.products} onChange={handleChange} required />
          <textarea style={styles.textarea} name="pain_points" placeholder="Key pain points" value={form.pain_points} onChange={handleChange} required />
          <textarea style={styles.textarea} name="target_customers" placeholder="Target customers" value={form.target_customers} onChange={handleChange} required />
          <input style={styles.input} name="digitalization_level" placeholder="Current digitalization level" value={form.digitalization_level} onChange={handleChange} required />

          <button type="submit" style={styles.button} disabled={loading}>
            {loading ? "Generating..." : "Generate Report"}
          </button>
        </form>

        {error && <div style={styles.error}>{error}</div>}

        {report && (
          <div style={styles.reportBox}>
            <h2 style={styles.reportTitle}>Generated Report</h2>
            <pre style={styles.reportContent}>{report}</pre>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(180deg, #07111f 0%, #0b1728 35%, #101a2f 100%)",
    color: "#f8fafc",
    padding: "40px 20px",
  },
  container: {
    maxWidth: "960px",
    margin: "0 auto",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: 800,
    marginBottom: "12px",
  },
  subtitle: {
    color: "rgba(255,255,255,0.72)",
    marginBottom: "24px",
    lineHeight: 1.7,
  },
  form: {
    display: "grid",
    gap: "14px",
    marginBottom: "28px",
  },
  input: {
    padding: "14px 16px",
    borderRadius: "14px",
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(255,255,255,0.05)",
    color: "#fff",
    fontSize: "1rem",
  },
  textarea: {
    minHeight: "110px",
    padding: "14px 16px",
    borderRadius: "14px",
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(255,255,255,0.05)",
    color: "#fff",
    fontSize: "1rem",
    resize: "vertical",
  },
  button: {
    padding: "14px 18px",
    borderRadius: "14px",
    border: "none",
    cursor: "pointer",
    fontWeight: 700,
    fontSize: "1rem",
    color: "#fff",
    background: "linear-gradient(135deg, #4f46e5, #06b6d4)",
  },
  error: {
    marginTop: "12px",
    padding: "14px 16px",
    borderRadius: "12px",
    background: "rgba(127,29,29,0.25)",
    border: "1px solid rgba(248,113,113,0.35)",
    color: "#fecaca",
  },
  reportBox: {
    marginTop: "32px",
    padding: "24px",
    borderRadius: "20px",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.08)",
  },
  reportTitle: {
    marginTop: 0,
    marginBottom: "16px",
    fontSize: "1.4rem",
  },
  reportContent: {
    whiteSpace: "pre-wrap",
    wordBreak: "break-word",
    lineHeight: 1.8,
    fontFamily: "inherit",
    fontSize: "0.98rem",
    color: "rgba(255,255,255,0.92)",
  },
};