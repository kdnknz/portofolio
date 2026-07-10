import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = ({ data }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="nav">
          <div className="nav-brand">
            <Link to="/">{data.personal.name}</Link>
          </div>
          
          <ul className="nav-menu">
            <li>
              <Link 
                to="/" 
                className={location.pathname === '/' ? 'active' : ''}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/skills" 
                className={location.pathname === '/skills' ? 'active' : ''}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link 
                to="/experience" 
                className={location.pathname === '/experience' ? 'active' : ''}
              >
                Experience
              </Link>
            </li>
            <li>
              <Link 
                to="/others" 
                className={
                  ['/others', '/about', '/projects', '/education', '/services', '/contact', '/certificate'].includes(location.pathname)
                    ? 'active' 
                    : ''
                }
              >
                Others
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: rgba(15, 23, 42, 0.8);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid transparent;
          z-index: 1000;
          transition: all 0.3s ease;
          padding: 1rem 0;
        }

        .header.scrolled {
          background: rgba(15, 23, 42, 0.95);
          border-bottom: 1px solid var(--border-color);
          padding: 0.75rem 0;
        }

        .nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav-brand a {
          color: var(--text-primary);
          font-size: 1.25rem;
          font-weight: 600;
          text-decoration: none;
          letter-spacing: -0.5px;
        }

        .nav-menu {
          display: flex;
          list-style: none;
          gap: 0.5rem;
          margin: 0;
        }

        .nav-menu a {
          color: var(--text-light);
          text-decoration: none;
          font-weight: 500;
          font-size: 0.9rem;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          transition: all 0.2s ease;
        }

        .nav-menu a:hover {
          color: var(--text-primary);
          background: rgba(148, 163, 184, 0.1);
        }

        .nav-menu a.active {
          color: var(--primary-color);
          background: rgba(100, 181, 246, 0.1);
        }

        @media (max-width: 768px) {
          .header {
            display: none;
          }
        }
      `}</style>
    </header>
  )
}

export default Header
