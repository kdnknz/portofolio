import React from 'react'
import SectionTitle from './SectionTitle.jsx'
import BackButton from './BackButton.jsx'

const Certificate = ({ data }) => {
  return (
    <section className="page-section">
      <BackButton />
      <div className="container">
        <SectionTitle 
          title="Sertifikat" 
          subtitle="Sertifikat dan pencapaian profesional" 
        />

        <div className="certificates-grid">
          {data.map((cert) => (
            <div key={cert.id} className="certificate-card">
              <div className="certificate-image">
                <img src={cert.image} alt={cert.title} />
              </div>
              
              <div className="certificate-content">
                <div className="certificate-header">
                  <h3>{cert.title}</h3>
                  <span className="certificate-date">{cert.date}</span>
                </div>
                <h4>{cert.issuer}</h4>
                <p>{cert.description}</p>
                
                {cert.skills && (
                  <div className="certificate-skills">
                    {cert.skills.map((skill, index) => (
                      <span key={index} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                )}

                {cert.credentialId && (
                  <div className="credential-id">
                    <span className="credential-label">Credential ID:</span> {cert.credentialId}
                  </div>
                )}
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

        .certificates-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 1.5rem;
        }

        .certificate-card {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.2s ease;
        }

        .certificate-card:hover {
          border-color: rgba(100, 181, 246, 0.3);
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
        }

        .certificate-image {
          height: 180px;
          overflow: hidden;
          background: var(--bg-secondary);
        }

        .certificate-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .certificate-content {
          padding: 1.5rem;
        }

        .certificate-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.25rem;
          gap: 1rem;
        }

        .certificate-header h3 {
          color: var(--text-primary);
          margin: 0;
          font-size: 1.05rem;
          flex: 1;
        }

        .certificate-date {
          background: rgba(100, 181, 246, 0.1);
          color: var(--primary-color);
          padding: 0.2rem 0.6rem;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 500;
          white-space: nowrap;
        }

        .certificate-content h4 {
          color: var(--text-light);
          margin-bottom: 0.75rem;
          font-weight: 500;
          font-size: 0.9rem;
        }

        .certificate-content p {
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1rem;
          font-size: 0.85rem;
        }

        .certificate-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-bottom: 1rem;
        }

        .skill-tag {
          background: rgba(100, 181, 246, 0.1);
          color: var(--primary-color);
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
          font-size: 0.7rem;
          font-weight: 500;
        }

        .credential-id {
          font-size: 0.8rem;
          color: var(--text-light);
          padding: 0.6rem 0.8rem;
          background: var(--bg-primary);
          border-radius: 6px;
          border-left: 3px solid var(--primary-color);
        }

        .credential-label {
          color: var(--text-secondary);
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .certificates-grid {
            grid-template-columns: 1fr;
          }

          .certificate-header {
            flex-direction: column;
            gap: 0.5rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Certificate
