import React from 'react'
import SectionTitle from './SectionTitle.jsx'

const Experience = ({ data }) => {
  return (
    <section className="page-section">
      <div className="container">
        <SectionTitle 
          title="Pengalaman Kerja" 
          subtitle="Perjalanan karir dan pengalaman profesional saya" 
        />

        <div className="timeline">
          {data.map((exp, index) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>{exp.position}</h3>
                  <span className="timeline-period">{exp.period}</span>
                </div>
                <h4>{exp.company}</h4>
                <p>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .page-section {
          min-height: calc(100vh - 120px);
          display: flex;
          align-items: center;
          padding: 6rem 0 2rem;
          background: rgba(255, 255, 255, 0.1);
        }

        @media (max-width: 768px) {
          .page-section {
            padding: 2rem 0;
            min-height: 100vh;
          }
        }

        @media (min-width: 769px) {
          .page-section {
            padding: 6rem 0 2rem;
          }
        }
        .timeline {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 30px;
          top: 0;
          bottom: 0;
          width: 4px;
          background: var(--gradient-1);
          border-radius: 2px;
          box-shadow: 0 0 10px rgba(102, 126, 234, 0.3);
        }

        .timeline-item {
          position: relative;
          margin-bottom: 3rem;
          padding-left: 80px;
        }

        .timeline-marker {
          position: absolute;
          left: 19px;
          top: 0;
          width: 22px;
          height: 22px;
          background: var(--gradient-1);
          border: 4px solid rgba(255, 255, 255, 0.9);
          border-radius: 50%;
          box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.2), 0 0 20px rgba(102, 126, 234, 0.4);
          animation: pulse 2s ease-in-out infinite;
        }

        .timeline-content {
          background: rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 2.5rem;
          border-radius: 1.5rem;
          box-shadow: 
            0 4px 20px rgba(0, 0, 0, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.08);
          position: relative;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .timeline-content:hover {
          transform: translateX(10px);
          background: rgba(0, 0, 0, 0.3);
          box-shadow: 
            0 15px 35px rgba(0, 0, 0, 0.25),
            inset 0 1px 0 rgba(255, 255, 255, 0.15);
        }

        .timeline-content::before {
          content: '';
          position: absolute;
          left: -10px;
          top: 20px;
          width: 0;
          height: 0;
          border-top: 10px solid transparent;
          border-bottom: 10px solid transparent;
          border-right: 10px solid var(--bg-primary);
        }

        .timeline-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.5rem;
        }

        .timeline-header h3 {
          color: rgba(255, 255, 255, 0.95);
          margin: 0;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
        }

        .timeline-period {
          background: var(--primary-color);
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          font-size: 0.8rem;
          font-weight: 500;
        }

        .timeline-content h4 {
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 1rem;
          font-weight: 600;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
        }

        .timeline-content p {
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          margin: 0;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
        }

        @media (max-width: 768px) {
          .timeline::before {
            left: 15px;
          }

          .timeline-item {
            padding-left: 50px;
          }

          .timeline-marker {
            left: 6px;
            width: 16px;
            height: 16px;
          }

          .timeline-content {
            padding: 1.5rem;
          }

          .timeline-header {
            flex-direction: column;
            gap: 0.5rem;
          }

          .timeline-period {
            align-self: flex-start;
          }
        }
      `}</style>
    </section>
  )
}

export default Experience