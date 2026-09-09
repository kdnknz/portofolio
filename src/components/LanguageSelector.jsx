import React from 'react'
import { useLanguage } from '../hooks/useLanguage.js'

const OPTIONS = [
  { code: 'id', label: 'ID' },
  { code: 'en', label: 'EN' }
]

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="lang-selector" role="group" aria-label="Language">
      {OPTIONS.map((opt) => (
        <button
          key={opt.code}
          type="button"
          className={`lang-btn ${language === opt.code ? 'active' : ''}`}
          aria-pressed={language === opt.code}
          onClick={() => setLanguage(opt.code)}
        >
          {opt.label}
        </button>
      ))}

      <style jsx>{`
        .lang-selector {
          display: inline-flex;
          gap: 0.25rem;
          border: 1px solid var(--border-color);
          border-radius: 6px;
          padding: 0.15rem;
        }
        .lang-btn {
          background: transparent;
          color: var(--text-light);
          border: none;
          border-radius: 4px;
          padding: 0.25rem 0.6rem;
          font-size: 0.8rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .lang-btn:hover {
          color: var(--text-primary);
          background: rgba(148, 163, 184, 0.1);
        }
        .lang-btn.active {
          color: var(--primary-color);
          background: rgba(100, 181, 246, 0.1);
        }
      `}</style>
    </div>
  )
}

export default LanguageSelector
