import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const MobileBottomNav = () => {
  const location = useLocation()

  const navItems = [
    {
      path: '/',
      icon: '🏠',
      label: 'Home',
      isActive: location.pathname === '/'
    },
    {
      path: '/skills',
      icon: '⚡',
      label: 'Skills',
      isActive: location.pathname === '/skills'
    },
    {
      path: '/experience',
      icon: '💼',
      label: 'Work',
      isActive: location.pathname === '/experience'
    },
    {
      path: '/others',
      icon: '⋯',
      label: 'More',
      isActive: location.pathname === '/others' || 
                location.pathname === '/about' || 
                location.pathname === '/projects' || 
                location.pathname === '/education' || 
                location.pathname === '/services' || 
                location.pathname === '/contact' ||
                location.pathname === '/certificate'
    }
  ]

  return (
    <nav className="mobile-bottom-nav">
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`nav-item ${item.isActive ? 'active' : ''}`}
        >
          <div className="nav-icon">
            <span>{item.icon}</span>
          </div>
          <span className="nav-label">{item.label}</span>
        </Link>
      ))}

      <style jsx>{`
        .mobile-bottom-nav {
          display: none;
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(20px);
          border-top: 1px solid rgba(255, 255, 255, 0.2);
          padding: 0.75rem 0;
          padding-bottom: max(1rem, env(safe-area-inset-bottom));
          z-index: 1000;
          box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.1);
          border-radius: 20px 20px 0 0;
        }

        .nav-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          flex: 1;
          padding: 0.5rem;
          text-decoration: none;
          color: rgba(255, 255, 255, 0.7);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          border-radius: 12px;
          margin: 0 0.25rem;
        }

        .nav-item.active {
          color: rgba(255, 255, 255, 1);
          background: rgba(255, 255, 255, 0.2);
        }

        .nav-item.active::before {
          content: '';
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 4px;
          background: linear-gradient(90deg, #667eea, #764ba2);
          border-radius: 50%;
          box-shadow: 0 0 8px rgba(102, 126, 234, 0.6);
        }

        .nav-icon {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 0.25rem;
          border-radius: 50%;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .nav-item.active .nav-icon {
          transform: scale(1.15);
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2));
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
        }

        .nav-icon span {
          font-size: 1.3rem;
          filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2));
        }

        .nav-label {
          font-size: 0.65rem;
          font-weight: 600;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
          letter-spacing: 0.3px;
        }

        .nav-item:active {
          transform: scale(0.9);
        }

        .nav-item:hover:not(.active) {
          color: rgba(255, 255, 255, 0.9);
          background: rgba(255, 255, 255, 0.1);
        }

        @media (max-width: 768px) {
          .mobile-bottom-nav {
            display: flex;
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