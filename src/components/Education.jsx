import React from 'react'
import SectionTitle from './SectionTitle.jsx'
import BackButton from './BackButton.jsx'

const Education = ({ data }) => {
  return (
    <section className="page-section">
      <BackButton />
      <div className="container">
        <SectionTitle 
          title="Riwayat Pendidikan" 
          subtitle="Perjalanan akademik saya" 
        />

        <div className="education-list">
          {data.map((edu) => (
            <div key={edu.id} className="education-item">
              <div className="education-header">
                <div>
                  <h3>{edu.degree}</h3>
                  <h4>{edu.institution}</h4>
                </div>
                <span className="education-period">{edu.period}</span>
              </div>
              <p>{edu.description}</p>
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

        .education-list {
          max-width: 700px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .education-item {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          padding: 1.5rem;
          border-radius: 10px;
          transition: border-color 0.2s ease;
        }

        .education-item:hover {
          border-color: rgba(100, 181, 246, 0.3);
        }

        .education-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.75rem;
          gap: 1rem;
        }

        .education-header h3 {
          color: var(--text-primary);
          margin: 0 0 0.25rem 0;
          font-size: 1.1rem;
        }

        .education-header h4 {
          color: var(--text-light);
          margin: 0;
          font-weight: 500;
          font-size: 0.95rem;
        }

        .education-period {
          background: rgba(100, 181, 246, 0.1);
          color: var(--primary-color);
          padding: 0.2rem 0.6rem;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 500;
          white-space: nowrap;
        }

        .education-item p {
          color: var(--text-secondary);
          line-height: 1.6;
          margin: 0;
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .education-header {
            flex-direction: column;
            gap: 0.5rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Education
