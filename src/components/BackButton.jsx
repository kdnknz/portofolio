import React from 'react'
import { Link } from 'react-router-dom'

const BackButton = ({ to = '/others', label = 'Back' }) => {
  return (
    <Link to={to} className="back-button">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span>{label}</span>
      
      <style jsx>{`
        .back-button {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.5rem 1rem;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: 6px;
          color: var(--text-light);
          text-decoration: none;
          font-weight: 500;
          font-size: 0.85rem;
          transition: all 0.2s ease;
          position: fixed;
          top: 5rem;
          left: 2rem;
          z-index: 100;
        }

        .back-button:hover {
          color: var(--primary-color);
          border-color: var(--primary-color);
        }

        @media (max-width: 768px) {
          .back-button {
            position: fixed;
            top: 1rem;
            left: 1rem;
            padding: 0.5rem;
            border-radius: 8px;
            z-index: 1001;
          }

          .back-button span {
            display: none;
          }
        }
      `}</style>
    </Link>
  )
}

export default BackButton
