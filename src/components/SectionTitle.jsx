import React from 'react'

const SectionTitle = ({ title, subtitle, className = "" }) => {
  return (
    <div className={`section-title ${className}`}>
      <h2>{title}</h2>
      <p>{subtitle}</p>
      
      <style jsx>{`
        .section-title {
          text-align: center;
          margin-bottom: 4rem;
          position: relative;
        }

        .section-title h2 {
          font-size: 3rem;
          font-weight: 700;
          color: white;
          margin-bottom: 1rem;
          position: relative;
          text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
          background: linear-gradient(45deg, #ffffff, #f0f0f0, #ffffff);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: textShimmer 3s ease-in-out infinite;
        }

        .section-title h2::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 4px;
          background: linear-gradient(45deg, #fbbf24, #f59e0b);
          border-radius: 2px;
          box-shadow: 0 2px 8px rgba(251, 191, 36, 0.4);
        }

        .section-title p {
          font-size: 1.2rem;
          color: white;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          padding: 1rem 1.5rem;
          border-radius: 1rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        @keyframes textShimmer {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @media (max-width: 768px) {
          .section-title h2 {
            font-size: 2.5rem;
          }

          .section-title p {
            font-size: 1.1rem;
          }
        }

        @media (max-width: 480px) {
          .section-title h2 {
            font-size: 2rem;
          }

          .section-title p {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  )
}

export default SectionTitle