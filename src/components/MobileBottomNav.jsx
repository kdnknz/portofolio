import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../hooks/useLanguage.js'
import LanguageSelector from './LanguageSelector.jsx'

const MobileBottomNav = () => {
  const location = useLocation()
  const { t } = useLanguage()

  const navItems = [
    { path: '/', label: t('nav.home'), icon: '⌂' },
    { path: '/skills', label: t('nav.skills'), icon: '◆' },
    { path: '/experience', label: t('nav.work'), icon: '◈' },
    { path: '/others', label: t('nav.more'), icon: '⋯' }
  ]

  const isActive = (path) => {
    if (path === '/others') {
      return ['/others', '/about', '/projects', '/education', '/services', '/contact', '/certificate'].includes(location.pathname)
    }
    return location.pathname === path
  }

  return (
    <nav className="mobile-bottom-nav">
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`nav-item ${isActive(item.path) ? 'active' : ''}`}
        >
          <span className="nav-icon">{item.icon}</span>
          <span className="nav-label">{item.label}</span>
        </Link>
      ))}

      <div className="mobile-nav-lang">
        <LanguageSelector />
      </div>

      <style jsx>{`
        .mobile-bottom-nav {
          display: none;
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(15, 23, 42, 0.95);
          backdrop-filter: blur(12px);
          border-top: 1px solid var(--border-color);
          padding: 0.5rem 0;
          padding-bottom: max(0.5rem, env(safe-area-inset-bottom));
          z-index: 1000;
        }

        .nav-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          flex: 1;
          padding: 0.5rem;
          text-decoration: none;
          color: var(--text-light);
          transition: color 0.2s ease;
        }

        .nav-item.active {
          color: var(--primary-color);
        }

        .nav-icon {
          font-size: 1.2rem;
          margin-bottom: 0.15rem;
        }

        .nav-label {
          font-size: 0.65rem;
          font-weight: 500;
        }

        .mobile-nav-lang {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 0 0 auto;
          padding: 0 0.5rem;
          border-left: 1px solid var(--border-color);
        }

        @media (max-width: 768px) {
          .mobile-bottom-nav {
            display: flex;
            align-items: center;
          }
        }

        @media (min-width: 769px) {
          .mobile-bottom-nav {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  )
}

export default MobileBottomNav
