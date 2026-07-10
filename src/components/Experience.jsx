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
          {data.map((exp) => (
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
        }

        @media (max-width: 768px) {
          .page-section {
            padding: 2rem 0;
            min-height: 100vh;
          }
        }

        .timeline {
          position: relative;
          max-width: 700px;
          margin: 0 auto;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 20px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: var(--border-color);
        }

        .timeline-item {
          position: relative;
          margin-bottom: 2.5rem;
          padding-left: 60px;
        }

        .timeline-item:last-child {
          margin-bottom: 0;
        }

        .timeline-marker {
          position: absolute;
          left: 14px;
          top: 4px;
          width: 14px;
          height: 14px;
          background: var(--bg-primary);
          border: 3px solid var(--primary-color);
          border-radius: 50%;
        }

        .timeline-content {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          padding: 1.5rem;
          border-radius: 10px;
          transition: border-color 0.2s ease;
        }

        .timeline-content:hover {
          border-color: rgba(100, 181, 246, 0.3);
        }

        .timeline-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.25rem;
          gap: 1rem;
        }

        .timeline-header h3 {
          color: var(--text-primary);
          margin: 0;
          font-size: 1.1rem;
        }

        .timeline-period {
          background: rgba(100, 181, 246, 0.1);
          color: var(--primary-color);
          padding: 0.2rem 0.6rem;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 500;
          white-space: nowrap;
        }

        .timeline-content h4 {
          color: var(--text-light);
          margin-bottom: 0.75rem;
          font-weight: 500;
          font-size: 0.95rem;
        }

        .timeline-content p {
          color: var(--text-secondary);
          line-height: 1.6;
          margin: 0;
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .timeline::before {
            left: 12px;
          }

          .timeline-item {
            padding-left: 45px;
          }

          .timeline-marker {
            left: 7px;
            width: 12px;
            height: 12px;
          }

          .timeline-content {
            padding: 1.25rem;
          }

          .timeline-header {
            flex-direction: column;
            gap: 0.5rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Experience
