import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const translations = {
  en: {
    nav: {
      home: 'Home',
      learnRwa: 'Learn RWA',
      news: 'News',
      research: 'Industry Research',
      aiReport: 'AI Report',
      forum: 'Forum',
      about: 'About',
    },
    news: {
      eyebrow: 'Live feed',
      title: 'News',
      subtitle: 'Track recent market, crypto, and RWA-related headlines in one place.',
      loading: 'Loading latest news...',
      empty: 'No news available right now.',
      fallbackSource: 'Source unavailable',
      badge: 'News',
      errorHtml: 'The /api/news endpoint returned HTML instead of JSON.',
      errorFetch: 'Failed to fetch news',
    },
    language: {
      label: 'Language',
      english: 'English',
      chinese: '中文',
    },
    brand: {
      title: 'Non-Financial RWA Hub',
      subtitle: 'Education · Research · AI Report · Community',
    },
    footer: {
      brand: 'Non-Financial RWA Hub',
      description:
        'Built as an integrated platform for merchants, users, researchers, and industry professionals.',
      stack: 'React + FastAPI MVP · Frontend content integrated into the site',
    },
  },
  zh: {
    nav: {
      home: '首页',
      learnRwa: 'RWA入门',
      news: '新闻',
      research: '行业研究',
      aiReport: 'AI报告',
      forum: '论坛',
      about: '关于我们',
    },
    news: {
      eyebrow: '实时更新',
      title: '新闻',
      subtitle: '在一个页面中追踪最新市场、加密与 RWA 相关新闻。',
      loading: '正在加载最新新闻...',
      empty: '当前暂无新闻。',
      fallbackSource: '暂无来源信息',
      badge: '新闻',
      errorHtml: '/api/news 返回的是 HTML，不是 JSON。',
      errorFetch: '获取新闻失败',
    },
    language: {
      label: '语言',
      english: 'English',
      chinese: '中文',
    },
    brand: {
      title: '非金融 RWA 平台',
      subtitle: '教育 · 研究 · AI报告 · 社区',
    },
    footer: {
      brand: '非金融 RWA 平台',
      description:
        '这是一个面向商家、用户、研究者和行业从业者的一体化平台。',
      stack: 'React + FastAPI MVP · 前端内容已整合进网站',
    },
  },
}

const I18nContext = createContext(null)

export function I18nProvider({ children }) {
  const [language, setLanguage] = useState('en')

  useEffect(() => {
    const saved = localStorage.getItem('site-language')
    if (saved === 'en' || saved === 'zh') {
      setLanguage(saved)
      return
    }

    const browserLang = navigator.language?.toLowerCase() || ''
    if (browserLang.startsWith('zh')) {
      setLanguage('zh')
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('site-language', language)
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en'
  }, [language])

  const t = useMemo(() => translations[language], [language])

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t,
    }),
    [language, t]
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider')
  }
  return context
}