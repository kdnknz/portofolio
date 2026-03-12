import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = ({ data }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMenuClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="nav">
          <div className="nav-brand">
            <h3>{data.personal.name}</h3>
          </div>
          
          <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            <li>
              <Link 
                to="/" 
                onClick={handleMenuClick}
                className={location.pathname === '/' ? 'active' : ''}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/skills" 
                onClick={handleMenuClick}
                className={location.pathname === '/skills' ? 'active' : ''}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link 
                to="/experience" 
                onClick={handleMenuClick}
                className={location.pathname === '/experience' ? 'active' : ''}
              >
                Experience
              </Link>
            </li>
            <li>
              <Link 
                to="/others" 
                onClick={handleMenuClick}
                className={
                  location.pathname === '/others' || 
                  location.pathname === '/about' || 
                  location.pathname === '/projects' || 
                  location.pathname === '/education' || 
                  location.pathname === '/services' || 
                  location.pathname === '/contact' ||
                  location.pathname === '/certificate'
                    ? 'active' 
                    : ''
                }
              >
                Others
              </Link>
            </li>
          </ul>

          <button 
            className="nav-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>

      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          z-index: 1000;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          padding: 1rem 0;
        }

        .header.scrolled {
          background: rgba(0, 0, 0, 0.25);
          backdrop-filter: blur(25px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
          padding: 0.75rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav-brand h3 {
          color: white;
          font-size: 1.75rem;
          margin: 0;
          font-weight: 700;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
          background: linear-gradient(45deg, #ffffff, #f0f0f0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .header.scrolled .nav-brand h3 {
          color: white;
          background: linear-gradient(45deg, #ffffff, #f0f0f0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }

        .nav-menu {
          display: flex;
          list-style: none;
          gap: 2rem;
          margin: 0;
        }

        .nav-menu a {
          color: white;
          text-decoration: none;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0.5rem 1rem;
          border-radius: 25px;
          position: relative;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }

        .header.scrolled .nav-menu a {
          color: white;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }

        .nav-menu a:hover {
          background: rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(10px);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .header.scrolled .nav-menu a:hover {
          background: rgba(255, 255, 255, 0.2);
          color: white;
        }

        .nav-menu a.active {
          background: rgba(255, 255, 255, 0.2);
          color: white;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
          box-shadow: 0 4px 15px rgba(255, 255, 255, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .header.scrolled .nav-menu a.active {
          background: rgba(255, 255, 255, 0.2);
          color: white;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
          box-shadow: 0 4px 15px rgba(255, 255, 255, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .nav-toggle {
          display: none;
          flex-direction: column;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
        }

        .nav-toggle span {
          width: 25px;
          height: 3px;
          background: white;
          margin: 3px 0;
          transition: 0.3s;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }

        .header.scrolled .nav-toggle span {
          background: white;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }

        @media (max-width: 768px) {
          .header {
            display: none;
          }
        }

        @media (min-width: 769px) {
          .nav-toggle {
            display: none;
          }
        }
      `}</style>
    </header>
  )
}

export default Header