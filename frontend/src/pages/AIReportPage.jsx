import { useState } from "react";
import ReactMarkdown from "react-markdown";

export default function AIReportPage() {
  const [form, setForm] = useState({
    company_name: "",
    industry: "",
    business_model: "",
    products: "",
    pain_points: "",
    target_customers: "",
    digitalization_level: "",
    language: "zh",
  });

  const [loading, setLoading] = useState(false);
  const [summary, setSummary] = useState("");
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
    setSummary("");
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

      setSummary(data.summary || "");
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
          <input
            style={styles.input}
            name="company_name"
            placeholder="Company name"
            value={form.company_name}
            onChange={handleChange}
            required
          />
          <input
            style={styles.input}
            name="industry"
            placeholder="Industry"
            value={form.industry}
            onChange={handleChange}
            required
          />
          <textarea
            style={styles.textarea}
            name="business_model"
            placeholder="Business model"
            value={form.business_model}
            onChange={handleChange}
            required
          />
          <textarea
            style={styles.textarea}
            name="products"
            placeholder="Core products / services"
            value={form.products}
            onChange={handleChange}
            required
          />
          <textarea
            style={styles.textarea}
            name="pain_points"
            placeholder="Key pain points"
            value={form.pain_points}
            onChange={handleChange}
            required
          />
          <textarea
            style={styles.textarea}
            name="target_customers"
            placeholder="Target customers"
            value={form.target_customers}
            onChange={handleChange}
            required
          />
          <input
            style={styles.input}
            name="digitalization_level"
            placeholder="Current digitalization level"
            value={form.digitalization_level}
            onChange={handleChange}
            required
          />

          <select
            style={styles.input}
            name="language"
            value={form.language}
            onChange={handleChange}
          >
            <option value="zh">中文</option>
            <option value="en">English</option>
          </select>

          <button type="submit" style={styles.button} disabled={loading}>
            {loading ? "Generating..." : "Generate Report"}
          </button>
        </form>

        {error && <div style={styles.error}>{error}</div>}

        {summary && (
          <div style={styles.summaryBox}>
            <div style={styles.summaryLabel}>Strategic Summary</div>
            <div style={styles.summaryText}>{summary}</div>
          </div>
        )}

        {report && (
          <div style={styles.reportBox}>
            <h2 style={styles.reportTitle}>Generated Report</h2>
            <div style={styles.markdownBody}>
              <ReactMarkdown
                components={{
                  h1: ({ children }) => <h1 style={styles.h1}>{children}</h1>,
                  h2: ({ children }) => <h2 style={styles.h2}>{children}</h2>,
                  h3: ({ children }) => <h3 style={styles.h3}>{children}</h3>,
                  p: ({ children }) => <p style={styles.p}>{children}</p>,
                  ul: ({ children }) => <ul style={styles.ul}>{children}</ul>,
                  ol: ({ children }) => <ol style={styles.ol}>{children}</ol>,
                  li: ({ children }) => <li style={styles.li}>{children}</li>,
                  strong: ({ children }) => <strong style={styles.strong}>{children}</strong>,
                  blockquote: ({ children }) => (
                    <blockquote style={styles.blockquote}>{children}</blockquote>
                  ),
                  table: ({ children }) => <table style={styles.table}>{children}</table>,
                  th: ({ children }) => <th style={styles.th}>{children}</th>,
                  td: ({ children }) => <td style={styles.td}>{children}</td>,
                  hr: () => <hr style={styles.hr} />,
                }}
              >
                {report}
              </ReactMarkdown>
            </div>
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
  summaryBox: {
    marginTop: "28px",
    marginBottom: "20px",
    padding: "22px 24px",
    borderRadius: "20px",
    background: "linear-gradient(135deg, rgba(79,70,229,0.16), rgba(6,182,212,0.14))",
    border: "1px solid rgba(255,255,255,0.1)",
    boxShadow: "0 12px 30px rgba(0,0,0,0.18)",
  },
  summaryLabel: {
    fontSize: "0.9rem",
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "#7dd3fc",
    marginBottom: "10px",
  },
  summaryText: {
    fontSize: "1.12rem",
    lineHeight: 1.8,
    fontWeight: 600,
    color: "#f8fafc",
  },
  reportBox: {
    marginTop: "12px",
    padding: "28px",
    borderRadius: "20px",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.08)",
  },
  reportTitle: {
    marginTop: 0,
    marginBottom: "18px",
    fontSize: "1.35rem",
  },
  markdownBody: {
    color: "rgba(255,255,255,0.92)",
  },
  h1: {
    fontSize: "2rem",
    lineHeight: 1.25,
    fontWeight: 800,
    margin: "0 0 20px",
    color: "#ffffff",
  },
  h2: {
    fontSize: "1.32rem",
    lineHeight: 1.35,
    fontWeight: 700,
    margin: "30px 0 14px",
    color: "#ffffff",
  },
  h3: {
    fontSize: "1.08rem",
    lineHeight: 1.4,
    fontWeight: 700,
    margin: "22px 0 10px",
    color: "#ffffff",
  },
  p: {
    margin: "10px 0",
    lineHeight: 1.9,
    fontSize: "1rem",
    color: "rgba(255,255,255,0.9)",
  },
  ul: {
    margin: "10px 0 16px 20px",
    padding: 0,
  },
  ol: {
    margin: "10px 0 16px 20px",
    padding: 0,
  },
  li: {
    marginBottom: "8px",
    lineHeight: 1.85,
    color: "rgba(255,255,255,0.9)",
  },
  strong: {
    color: "#ffffff",
    fontWeight: 700,
  },
  blockquote: {
    margin: "16px 0",
    padding: "14px 16px",
    borderLeft: "4px solid rgba(125,211,252,0.7)",
    background: "rgba(255,255,255,0.04)",
    borderRadius: "10px",
    color: "rgba(255,255,255,0.9)",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    margin: "18px 0",
    overflow: "hidden",
  },
  th: {
    border: "1px solid rgba(255,255,255,0.12)",
    padding: "10px 12px",
    textAlign: "left",
    background: "rgba(255,255,255,0.06)",
    color: "#ffffff",
  },
  td: {
    border: "1px solid rgba(255,255,255,0.12)",
    padding: "10px 12px",
    textAlign: "left",
    color: "rgba(255,255,255,0.9)",
  },
  hr: {
    border: "none",
    borderTop: "1px solid rgba(255,255,255,0.12)",
    margin: "24px 0",
  },
};