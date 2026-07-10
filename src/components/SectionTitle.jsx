import React from 'react'

const SectionTitle = ({ title, subtitle, className = "" }) => {
  return (
    <div className={`section-title ${className}`}>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
      
      <style jsx>{`
        .section-title {
          text-align: center;
          margin-bottom: 3rem;
        }

        .section-title h2 {
          font-size: 2rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
          position: relative;
          display: inline-block;
        }

        .section-title h2::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 40px;
          height: 3px;
          background: var(--primary-color);
          border-radius: 2px;
        }

        .section-title p {
          font-size: 1rem;
          color: var(--text-light);
          max-width: 500px;
          margin: 1rem auto 0;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .section-title h2 {
            font-size: 1.75rem;
          }

          .section-title p {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </div>
  )
}

export default SectionTitle
