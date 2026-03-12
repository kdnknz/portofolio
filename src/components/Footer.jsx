import React from 'react'

const Footer = ({ data }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-text">
            <p>&copy; 2024 {data.name} • Made with ❤️ using React.js</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: rgba(0, 0, 0, 0.25);
          backdrop-filter: blur(25px);
          color: white;
          padding: 0.75rem 0;
          text-align: center;
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 100;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.15);
        }

        .footer-content {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 2rem;
        }

        .footer-text p {
          margin: 0;
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.85rem;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
          font-weight: 400;
        }

        .footer-links {
          display: none;
        }

        @media (max-width: 768px) {
          .footer-content {
            flex-direction: column;
            gap: 0.5rem;
          }

          .footer-text p {
            font-size: 0.75rem;
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer