import React from 'react'
import { Link } from 'react-router-dom'

const BackButton = ({ to = '/others', label = 'Back to Others' }) => {
  return (
    <Link to={to} className="back-button">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span>{label}</span>
      
      <style jsx>{`
        .back-button {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 2rem;
          color: white;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
          position: fixed;
          top: 6rem;
          left: 2rem;
          z-index: 100;
          font-size: 0.9rem;
        }

        .back-button:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateX(-5px);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .back-button svg {
          transition: transform 0.3s ease;
        }

        .back-button:hover svg {
          transform: translateX(-3px);
        }

        @media (max-width: 768px) {
          .back-button {
            position: fixed;
            top: 1rem;
            left: 1rem;
            transform: none;
            padding: 0.75rem;
            font-size: 0.75rem;
            z-index: 1001;
            border-radius: 50%;
            background: rgba(0, 0, 0, 0.7);
            backdrop-filter: blur(15px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .back-button span {
            display: none;
          }

          .back-button svg {
            width: 18px;
            height: 18px;
          }
        }
      `}</style>
    </Link>
  )
}

export default BackButton