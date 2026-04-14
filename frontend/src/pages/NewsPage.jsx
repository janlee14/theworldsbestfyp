import { useEffect, useMemo, useState } from 'react'
import { useI18n } from '../i18n'

function formatDate(dateString, language) {
  if (!dateString) return language === 'zh' ? '未知日期' : 'Unknown date'
  const date = new Date(dateString)
  if (Number.isNaN(date.getTime())) return dateString
  return date.toLocaleString(language === 'zh' ? 'zh-CN' : 'en-US')
}

export default function NewsPage() {
  const { language, t } = useI18n()
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true)
        setError('')

        const res = await fetch(`/api/news?lang=${language}`)
        const text = await res.text()

        let data
        try {
          data = JSON.parse(text)
        } catch {
          console.error('Non-JSON response from /api/news:', text)
          throw new Error(t.news.errorHtml)
        }

        if (!res.ok) {
          throw new Error(data.detail || t.news.errorFetch)
        }

        setNews(data.results || [])
      } catch (err) {
        setError(err.message || 'Something went wrong')
      } finally {
        setLoading(false)
      }
    }

    fetchNews()
  }, [language, t])

  const content = useMemo(() => {
    if (loading) {
      return <div style={styles.stateBox}>{t.news.loading}</div>
    }

    if (error) {
      return <div style={{ ...styles.stateBox, ...styles.errorBox }}>{error}</div>
    }

    if (!news.length) {
      return <div style={styles.stateBox}>{t.news.empty}</div>
    }

    return (
      <div style={styles.grid}>
        {news.map((item, index) => (
          <a
            key={item.id || index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.card}
          >
            <div style={styles.cardTop}>
              <span style={styles.badge}>{t.news.badge}</span>
              <span style={styles.index}>{String(index + 1).padStart(2, '0')}</span>
            </div>

            <h3 style={styles.title}>{item.title}</h3>

            <div style={styles.metaRow}>
              <span style={styles.meta}>
                {item.source_name || item.source || t.news.fallbackSource}
              </span>
              <span style={styles.dot}>•</span>
              <span style={styles.meta}>
                {formatDate(item.pubDate || item.date, language)}
              </span>
            </div>
          </a>
        ))}
      </div>
    )
  }, [loading, error, news, t, language])

  return (
    <div style={styles.page}>
      <section style={styles.hero}>
        <div style={styles.heroGlowLeft} />
        <div style={styles.heroGlowRight} />

        <p style={styles.eyebrow}>{t.news.eyebrow}</p>
        <h1 style={styles.heading}>{t.news.title}</h1>
        <p style={styles.subheading}>
          {t.news.subtitle}
        </p>
      </section>

      <section style={styles.section}>
        {content}
      </section>
    </div>
  )
}

const styles = {
  page: {
    minHeight: '100vh',
    background:
      'linear-gradient(180deg, #07111f 0%, #0b1728 35%, #101a2f 100%)',
    color: '#f5f7fb',
    padding: '48px 24px 72px',
  },
  hero: {
    position: 'relative',
    maxWidth: '1100px',
    margin: '0 auto 32px',
    padding: '48px 40px',
    borderRadius: '24px',
    overflow: 'hidden',
    background:
      'linear-gradient(135deg, rgba(67,97,238,0.22), rgba(0,212,170,0.12))',
    border: '1px solid rgba(255,255,255,0.08)',
    boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
  },
  heroGlowLeft: {
    position: 'absolute',
    width: '240px',
    height: '240px',
    borderRadius: '999px',
    background: 'rgba(86, 119, 255, 0.22)',
    filter: 'blur(60px)',
    top: '-60px',
    left: '-40px',
    pointerEvents: 'none',
  },
  heroGlowRight: {
    position: 'absolute',
    width: '240px',
    height: '240px',
    borderRadius: '999px',
    background: 'rgba(0, 224, 168, 0.18)',
    filter: 'blur(60px)',
    bottom: '-100px',
    right: '-20px',
    pointerEvents: 'none',
  },
  eyebrow: {
    position: 'relative',
    margin: 0,
    fontSize: '0.85rem',
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: '#7dd3fc',
  },
  heading: {
    position: 'relative',
    margin: '10px 0 12px',
    fontSize: '3rem',
    lineHeight: 1.05,
    fontWeight: 800,
  },
  subheading: {
    position: 'relative',
    maxWidth: '720px',
    margin: 0,
    fontSize: '1.05rem',
    lineHeight: 1.7,
    color: 'rgba(255,255,255,0.82)',
  },
  section: {
    maxWidth: '1100px',
    margin: '0 auto',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '18px',
  },
  card: {
    display: 'block',
    textDecoration: 'none',
    color: 'inherit',
    padding: '22px 20px',
    borderRadius: '20px',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.08)',
    boxShadow: '0 10px 30px rgba(0,0,0,0.18)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease, border 0.2s ease',
    backdropFilter: 'blur(8px)',
  },
  cardTop: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '14px',
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '6px 10px',
    borderRadius: '999px',
    fontSize: '0.75rem',
    fontWeight: 700,
    color: '#67e8f9',
    background: 'rgba(103,232,249,0.12)',
    border: '1px solid rgba(103,232,249,0.18)',
  },
  index: {
    fontSize: '0.82rem',
    color: 'rgba(255,255,255,0.45)',
  },
  title: {
    margin: '0 0 16px',
    fontSize: '1.08rem',
    lineHeight: 1.55,
    fontWeight: 700,
    color: '#f8fafc',
  },
  metaRow: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: '8px',
  },
  meta: {
    fontSize: '0.86rem',
    color: 'rgba(255,255,255,0.62)',
  },
  dot: {
    color: 'rgba(255,255,255,0.28)',
  },
  stateBox: {
    padding: '28px 22px',
    borderRadius: '18px',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.08)',
    color: 'rgba(255,255,255,0.82)',
  },
  errorBox: {
    color: '#fecaca',
    border: '1px solid rgba(248,113,113,0.35)',
    background: 'rgba(127,29,29,0.25)',
  },
}