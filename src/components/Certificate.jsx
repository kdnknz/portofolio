import React from 'react'
import SectionTitle from './SectionTitle.jsx'
import BackButton from './BackButton.jsx'

const Certificate = ({ data }) => {
  return (
    <section className="page-section">
      <BackButton />
      <div className="container">
        <SectionTitle 
          title="Sertifikat & Pencapaian" 
          subtitle="Sertifikat dan penghargaan yang telah saya peroleh" 
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
                    <strong>Credential ID:</strong> {cert.credentialId}
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
          background: rgba(255, 255, 255, 0.06);
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

        .certificates-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
          gap: 2.5rem;
        }

        .certificate-card {
          background: rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 1.5rem;
          overflow: hidden;
          box-shadow: 
            0 4px 20px rgba(0, 0, 0, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.08);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }

        .certificate-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, transparent, rgba(102, 126, 234, 0.05), transparent);
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: 1;
        }

        .certificate-card:hover::before {
          opacity: 1;
        }

        .certificate-card:hover {
          transform: translateY(-10px) scale(1.02);
          background: rgba(0, 0, 0, 0.3);
          box-shadow: 
            0 25px 50px rgba(0, 0, 0, 0.25),
            inset 0 1px 0 rgba(255, 255, 255, 0.15);
        }

        .certificate-image {
          position: relative;
          height: 220px;
          overflow: hidden;
          background: linear-gradient(135deg, #f8f9fa, #e9ecef);
        }

        .certificate-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .certificate-card:hover .certificate-image img {
          transform: scale(1.05);
        }



        .certificate-content {
          padding: 2rem;
        }

        .certificate-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.5rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .certificate-header h3 {
          color: rgba(255, 255, 255, 0.95);
          margin: 0;
          font-size: 1.3rem;
          font-weight: 600;
          flex: 1;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
        }

        .certificate-date {
          background: linear-gradient(45deg, #667eea, #764ba2);
          color: white;
          padding: 0.3rem 0.8rem;
          border-radius: 1.5rem;
          font-size: 0.8rem;
          font-weight: 600;
          white-space: nowrap;
        }

        .certificate-content h4 {
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 1rem;
          font-weight: 600;
          font-size: 1.1rem;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
        }

        .certificate-content p {
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          margin-bottom: 1.5rem;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
        }

        .certificate-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .skill-tag {
          background: rgba(0, 0, 0, 0.3);
          color: rgba(255, 255, 255, 0.8);
          padding: 0.3rem 0.8rem;
          border-radius: 1rem;
          font-size: 0.8rem;
          font-weight: 500;
          border: 1px solid rgba(255, 255, 255, 0.1);
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
        }

        .credential-id {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.8);
          background: rgba(0, 0, 0, 0.2);
          padding: 0.8rem;
          border-radius: 0.5rem;
          border-left: 4px solid rgba(102, 126, 234, 0.6);
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
        }

        .credential-id strong {
          color: rgba(255, 255, 255, 0.95);
        }

        @media (max-width: 768px) {
          .certificates-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .certificate-card {
            margin: 0 1rem;
          }

          .certificate-content {
            padding: 1.5rem;
          }

          .certificate-header {
            flex-direction: column;
            gap: 0.5rem;
          }

          .certificate-date {
            align-self: flex-start;
          }


        }

        @media (max-width: 480px) {
          .certificate-content {
            padding: 1rem;
          }

          .certificate-header h3 {
            font-size: 1.2rem;
          }

          .certificate-image {
            height: 180px;
          }
        }
      `}</style>
    </section>
  )
}

export default Certificate