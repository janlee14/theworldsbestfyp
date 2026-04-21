import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useI18n } from "../i18n";

const pageText = {
  en: {
    title: "AI Non-Financial RWA Business Report",
    subtitle:
      "Enter company information and generate a tailored non-financial RWA report with DeepSeek.",
    placeholders: {
      company_name: "Company name",
      industry: "Industry",
      business_model: "Business model",
      products: "Core products / services",
      pain_points: "Key pain points",
      target_customers: "Target customers",
      digitalization_level: "Current digitalization level",
    },
    buttonIdle: "Generate Report",
    buttonLoading: "Generating...",
    summaryLabel: "Strategic Summary",
    reportTitle: "Generated Report",
    errorFallback: "Something went wrong.",
    generateFailed: "Failed to generate report.",
    langZh: "中文",
    langEn: "English",
  },
  zh: {
    title: "AI 非金融 RWA 商业报告",
    subtitle:
      "输入公司信息，使用 DeepSeek 生成定制化的非金融 RWA 报告。",
    placeholders: {
      company_name: "公司名称",
      industry: "所属行业",
      business_model: "商业模式",
      products: "核心产品 / 服务",
      pain_points: "关键痛点",
      target_customers: "目标客户",
      digitalization_level: "当前数字化水平",
    },
    buttonIdle: "生成报告",
    buttonLoading: "生成中...",
    summaryLabel: "战略摘要",
    reportTitle: "生成的报告",
    errorFallback: "出了点问题。",
    generateFailed: "生成报告失败。",
    langZh: "中文",
    langEn: "English",
  },
};

export default function AIReportPage() {
  const { language } = useI18n();
  const text = pageText[language] || pageText.en;

  const [form, setForm] = useState({
    company_name: "",
    industry: "",
    business_model: "",
    products: "",
    pain_points: "",
    target_customers: "",
    digitalization_level: "",
    language: language === "zh" ? "zh" : "en",
  });

  const [loading, setLoading] = useState(false);
  const [summary, setSummary] = useState("");
  const [report, setReport] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setForm((prev) => ({
      ...prev,
      language: language === "zh" ? "zh" : "en",
    }));
  }, [language]);

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
        throw new Error(data.detail || text.generateFailed);
      }

      setSummary(data.summary || "");
      setReport(data.report || "");
    } catch (err) {
      setError(err.message || text.errorFallback);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.title}>{text.title}</h1>
        <p style={styles.subtitle}>{text.subtitle}</p>

        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            style={styles.input}
            name="company_name"
            placeholder={text.placeholders.company_name}
            value={form.company_name}
            onChange={handleChange}
            required
          />

          <input
            style={styles.input}
            name="industry"
            placeholder={text.placeholders.industry}
            value={form.industry}
            onChange={handleChange}
            required
          />

          <textarea
            style={styles.textarea}
            name="business_model"
            placeholder={text.placeholders.business_model}
            value={form.business_model}
            onChange={handleChange}
            required
          />

          <textarea
            style={styles.textarea}
            name="products"
            placeholder={text.placeholders.products}
            value={form.products}
            onChange={handleChange}
            required
          />

          <textarea
            style={styles.textarea}
            name="pain_points"
            placeholder={text.placeholders.pain_points}
            value={form.pain_points}
            onChange={handleChange}
            required
          />

          <textarea
            style={styles.textarea}
            name="target_customers"
            placeholder={text.placeholders.target_customers}
            value={form.target_customers}
            onChange={handleChange}
            required
          />

          <input
            style={styles.input}
            name="digitalization_level"
            placeholder={text.placeholders.digitalization_level}
            value={form.digitalization_level}
            onChange={handleChange}
            required
          />

          <div style={styles.selectWrapper}>
            <select
              style={styles.select}
              name="language"
              value={form.language}
              onChange={handleChange}
            >
              <option value="zh">{text.langZh}</option>
              <option value="en">{text.langEn}</option>
            </select>
            <span style={styles.selectArrow}>⌄</span>
          </div>

          <button type="submit" style={styles.button} disabled={loading}>
            {loading ? text.buttonLoading : text.buttonIdle}
          </button>
        </form>

        {error && <div style={styles.error}>{error}</div>}

        {summary && (
          <div style={styles.summaryBox}>
            <div style={styles.summaryLabel}>{text.summaryLabel}</div>
            <div style={styles.summaryText}>{summary}</div>
          </div>
        )}

        {report && (
          <div style={styles.reportBox}>
            <h2 style={styles.reportTitle}>{text.reportTitle}</h2>
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
                  strong: ({ children }) => (
                    <strong style={styles.strong}>{children}</strong>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote style={styles.blockquote}>{children}</blockquote>
                  ),
                  table: ({ children }) => (
                    <table style={styles.table}>{children}</table>
                  ),
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

const fieldBase = {
  width: "100%",
  boxSizing: "border-box",
  borderRadius: "18px",
  border: "1px solid rgba(255,255,255,0.12)",
  background: "rgba(255,255,255,0.08)",
  color: "#ffffff",
  fontFamily: "Inter, Arial, sans-serif",
  fontSize: "1rem",
  fontWeight: 500,
  lineHeight: 1.6,
  outline: "none",
  padding: "18px 20px",
  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.02)",
};

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(180deg, #07111f 0%, #0b1728 35%, #101a2f 100%)",
    color: "#f8fafc",
    padding: "28px 20px 40px",
  },
  container: {
    maxWidth: "1380px",
    margin: "0 auto",
    padding: "56px 40px 48px",
    background: "linear-gradient(180deg, rgba(2,10,26,0.82) 0%, rgba(3,16,39,0.8) 100%)",
  },
  title: {
    fontSize: "3.15rem",
    lineHeight: 1.08,
    fontWeight: 800,
    margin: "0 0 18px",
    letterSpacing: "-0.03em",
    fontFamily: "Inter, Arial, sans-serif",
  },
  subtitle: {
    color: "rgba(255,255,255,0.72)",
    marginBottom: "28px",
    lineHeight: 1.7,
    fontSize: "1.06rem",
    fontFamily: "Inter, Arial, sans-serif",
  },
  form: {
    display: "grid",
    gap: "18px",
    marginBottom: "28px",
  },
  input: {
    ...fieldBase,
    height: "60px",
  },
  textarea: {
    ...fieldBase,
    minHeight: "148px",
    resize: "vertical",
  },
  selectWrapper: {
    position: "relative",
    width: "100%",
  },
  select: {
    ...fieldBase,
    height: "60px",
    appearance: "none",
    WebkitAppearance: "none",
    MozAppearance: "none",
    cursor: "pointer",
    paddingRight: "54px",
  },
  selectArrow: {
    position: "absolute",
    right: "22px",
    top: "50%",
    transform: "translateY(-50%)",
    color: "rgba(255,255,255,0.85)",
    fontSize: "1.5rem",
    lineHeight: 1,
    pointerEvents: "none",
    fontFamily: "Inter, Arial, sans-serif",
  },
  button: {
    height: "62px",
    borderRadius: "18px",
    border: "none",
    cursor: "pointer",
    fontFamily: "Inter, Arial, sans-serif",
    fontWeight: 700,
    fontSize: "1rem",
    color: "#fff",
    background: "linear-gradient(135deg, #4f46e5, #06b6d4)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.18)",
  },
  error: {
    marginTop: "12px",
    padding: "14px 16px",
    borderRadius: "12px",
    background: "rgba(127,29,29,0.25)",
    border: "1px solid rgba(248,113,113,0.35)",
    color: "#fecaca",
    fontFamily: "Inter, Arial, sans-serif",
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
    fontSize: "1.35rem",
    fontWeight: 800,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "#7dd3fc",
    marginBottom: "14px",
    fontFamily: "Inter, Arial, sans-serif",
  },
  summaryText: {
  fontSize: "1.35rem",
  lineHeight: 1.8,
  fontWeight: 700,
  color: "#f8fafc",
  fontFamily: "Inter, Arial, sans-serif",
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
    fontFamily: "Inter, Arial, sans-serif",
  },
  markdownBody: {
    color: "rgba(255,255,255,0.92)",
    fontFamily: "Inter, Arial, sans-serif",
  },
  h1: {
    fontSize: "2rem",
    lineHeight: 1.25,
    fontWeight: 800,
    margin: "0 0 20px",
    color: "#ffffff",
    fontFamily: "Inter, Arial, sans-serif",
  },
  h2: {
    fontSize: "1.32rem",
    lineHeight: 1.35,
    fontWeight: 700,
    margin: "30px 0 14px",
    color: "#ffffff",
    fontFamily: "Inter, Arial, sans-serif",
  },
  h3: {
    fontSize: "1.08rem",
    lineHeight: 1.4,
    fontWeight: 700,
    margin: "22px 0 10px",
    color: "#ffffff",
    fontFamily: "Inter, Arial, sans-serif",
  },
  p: {
    margin: "10px 0",
    lineHeight: 1.9,
    fontSize: "1rem",
    color: "rgba(255,255,255,0.9)",
    fontFamily: "Inter, Arial, sans-serif",
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
    fontFamily: "Inter, Arial, sans-serif",
  },
  strong: {
    color: "#ffffff",
    fontWeight: 700,
    fontFamily: "Inter, Arial, sans-serif",
  },
  blockquote: {
    margin: "16px 0",
    padding: "14px 16px",
    borderLeft: "4px solid rgba(125,211,252,0.7)",
    background: "rgba(255,255,255,0.04)",
    borderRadius: "10px",
    color: "rgba(255,255,255,0.9)",
    fontFamily: "Inter, Arial, sans-serif",
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
    fontFamily: "Inter, Arial, sans-serif",
  },
  td: {
    border: "1px solid rgba(255,255,255,0.12)",
    padding: "10px 12px",
    textAlign: "left",
    color: "rgba(255,255,255,0.9)",
    fontFamily: "Inter, Arial, sans-serif",
  },
  hr: {
    border: "none",
    borderTop: "1px solid rgba(255,255,255,0.12)",
    margin: "24px 0",
  },
};