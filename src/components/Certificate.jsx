import React, { useState } from 'react'
import SectionTitle from './SectionTitle.jsx'
import BackButton from './BackButton.jsx'

const isPdf = (url) => url && url.toLowerCase().endsWith('.pdf')

const getCategoryStyle = (skills = []) => {
  const s = skills.join(' ').toLowerCase()
  if (s.includes('database') || s.includes('sql') || s.includes('postgresql') || s.includes('mysql'))
    return { bg: 'linear-gradient(135deg, #1a237e 0%, #0d47a1 100%)', icon: '🗄️' }
  if (s.includes('php') || s.includes('laravel') || s.includes('web development') || s.includes('html'))
    return { bg: 'linear-gradient(135deg, #4a148c 0%, #7b1fa2 100%)', icon: '🌐' }
  if (s.includes('data science') || s.includes('data analysis'))
    return { bg: 'linear-gradient(135deg, #1b5e20 0%, #388e3c 100%)', icon: '📊' }
  if (s.includes('kompetensi') || s.includes('profesional') || s.includes('magang'))
    return { bg: 'linear-gradient(135deg, #e65100 0%, #f57c00 100%)', icon: '🏆' }
  if (s.includes('webinar') || s.includes('seminar') || s.includes('technopreneurship'))
    return { bg: 'linear-gradient(135deg, #006064 0%, #00838f 100%)', icon: '🎓' }
  if (s.includes('futsal') || s.includes('olahraga'))
    return { bg: 'linear-gradient(135deg, #b71c1c 0%, #e53935 100%)', icon: '⚽' }
  return { bg: 'linear-gradient(135deg, #37474f 0%, #546e7a 100%)', icon: '📜' }
}

const CertificatePreview = ({ cert }) => {
  const [showModal, setShowModal] = useState(false)
  const hasPdf = isPdf(cert.certificateUrl)
  const { bg, icon } = getCategoryStyle(cert.skills)

  return (
    <>
      <div
        className="certificate-image"
        style={{ background: bg, cursor: hasPdf ? 'pointer' : 'default' }}
        onClick={() => hasPdf && setShowModal(true)}
        title={hasPdf ? 'Klik untuk lihat sertifikat' : ''}
      >
        <div className="cert-thumbnail">
          <span className="cert-icon">{icon}</span>
          <span className="cert-label">Sertifikat</span>
          {hasPdf && <span className="cert-view-hint">🔍 Klik untuk lihat</span>}
        </div>
      </div>

      {showModal && (
        <div className="pdf-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="pdf-modal" onClick={(e) => e.stopPropagation()}>
            <div className="pdf-modal-header">
              <h3>{cert.title}</h3>
              <button className="pdf-close-btn" onClick={() => setShowModal(false)}>✕</button>
            </div>
            <iframe
              src={cert.certificateUrl}
              title={cert.title}
              className="pdf-iframe"
            />
          </div>
        </div>
      )}
    </>
  )
}

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
              <CertificatePreview cert={cert} />
              
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

                {isPdf(cert.certificateUrl) && (
                  <a
                    href={cert.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-download-link"
                  >
                    📄 Lihat Sertifikat
                  </a>
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
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cert-thumbnail {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          width: 100%;
          height: 100%;
        }

        .cert-icon {
          font-size: 2.8rem;
          line-height: 1;
        }

        .cert-label {
          font-size: 0.75rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.7);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .cert-view-hint {
          font-size: 0.7rem;
          color: rgba(255, 255, 255, 0.5);
          margin-top: 0.2rem;
        }

        .certificate-image:hover .cert-view-hint {
          color: rgba(255, 255, 255, 0.9);
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
          margin-bottom: 0.75rem;
        }

        .credential-label {
          color: var(--text-secondary);
          font-weight: 500;
        }

        .cert-download-link {
          display: inline-block;
          margin-top: 0.25rem;
          font-size: 0.82rem;
          color: var(--primary-color);
          text-decoration: none;
          padding: 0.4rem 0.8rem;
          border: 1px solid rgba(100, 181, 246, 0.3);
          border-radius: 6px;
          transition: all 0.2s ease;
        }

        .cert-download-link:hover {
          background: rgba(100, 181, 246, 0.1);
          border-color: var(--primary-color);
        }

        /* PDF Modal */
        .pdf-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.75);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 1rem;
        }

        .pdf-modal {
          background: var(--bg-card);
          border-radius: 12px;
          width: 100%;
          max-width: 860px;
          height: 90vh;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          border: 1px solid var(--border-color);
        }

        .pdf-modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 1.25rem;
          border-bottom: 1px solid var(--border-color);
        }

        .pdf-modal-header h3 {
          margin: 0;
          font-size: 1rem;
          color: var(--text-primary);
        }

        .pdf-close-btn {
          background: none;
          border: none;
          color: var(--text-secondary);
          font-size: 1.1rem;
          cursor: pointer;
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          transition: all 0.15s ease;
        }

        .pdf-close-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          color: var(--text-primary);
        }

        .pdf-iframe {
          flex: 1;
          width: 100%;
          border: none;
        }

        @media (max-width: 768px) {
          .certificates-grid {
            grid-template-columns: 1fr;
          }

          .certificate-header {
            flex-direction: column;
            gap: 0.5rem;
          }

          .pdf-modal {
            height: 95vh;
          }
        }
      `}</style>
    </section>
  )
}

export default Certificate
