import { useState } from 'react'
import { useI18n } from '../i18n'

export default function LanguageSwitcher() {
  const { language, setLanguage, t } = useI18n()
  const [open, setOpen] = useState(false)

  return (
    <div style={styles.wrapper}>
      {open && (
        <div style={styles.menu}>
          <button
            style={{
              ...styles.option,
              ...(language === 'en' ? styles.optionActive : {}),
            }}
            onClick={() => {
              setLanguage('en')
              setOpen(false)
            }}
          >
            {t.language.english}
          </button>

          <button
            style={{
              ...styles.option,
              ...(language === 'zh' ? styles.optionActive : {}),
            }}
            onClick={() => {
              setLanguage('zh')
              setOpen(false)
            }}
          >
            {t.language.chinese}
          </button>
        </div>
      )}

      <button
        style={styles.fab}
        onClick={() => setOpen((prev) => !prev)}
        aria-label={t.language.label}
        title={t.language.label}
      >
        🌐 {language.toUpperCase()}
      </button>
    </div>
  )
}

const styles = {
  wrapper: {
    position: 'fixed',
    right: '24px',
    bottom: '24px',
    zIndex: 9999,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: '10px',
  },
  menu: {
    minWidth: '140px',
    padding: '8px',
    borderRadius: '16px',
    background: 'rgba(15, 23, 42, 0.92)',
    border: '1px solid rgba(255,255,255,0.12)',
    boxShadow: '0 16px 40px rgba(0,0,0,0.28)',
    backdropFilter: 'blur(10px)',
  },
  option: {
    width: '100%',
    border: 'none',
    background: 'transparent',
    color: '#f8fafc',
    padding: '10px 12px',
    borderRadius: '12px',
    textAlign: 'left',
    cursor: 'pointer',
    fontSize: '0.95rem',
  },
  optionActive: {
    background: 'rgba(99,102,241,0.22)',
  },
  fab: {
    border: 'none',
    borderRadius: '999px',
    padding: '12px 16px',
    cursor: 'pointer',
    fontWeight: 700,
    color: '#ffffff',
    background: 'linear-gradient(135deg, #4f46e5, #06b6d4)',
    boxShadow: '0 12px 30px rgba(0,0,0,0.28)',
  },
}