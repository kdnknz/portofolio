import React from 'react'

const Footer = ({ data }) => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2024 {data.name}</p>
      </div>

      <style jsx>{`
        .footer {
          background: var(--bg-secondary);
          padding: 0.75rem 0;
          text-align: center;
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 100;
          border-top: 1px solid var(--border-color);
        }

        .footer p {
          margin: 0;
          color: var(--text-light);
          font-size: 0.8rem;
        }

        @media (max-width: 768px) {
          .footer {
            display: none;
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer
