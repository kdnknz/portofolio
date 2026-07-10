import React from 'react'
import SectionTitle from './SectionTitle.jsx'
import BackButton from './BackButton.jsx'

const About = ({ data }) => {
  return (
    <section className="page-section">
      <BackButton />
      <div className="container">
        <SectionTitle 
          title="Tentang Saya" 
          subtitle="Background dan pengalaman saya" 
        />

        <div className="about-content">
          <div className="about-text">
            <p className="about-bio">{data.bio}</p>
            
            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat">
                <span className="stat-number">3+</span>
                <span className="stat-label">Tahun Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">30+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
            </div>

            <div className="about-info">
              <div className="info-item">
                <span className="info-label">Email</span>
                <span className="info-value">{data.email}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Phone</span>
                <span className="info-value">{data.phone}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Location</span>
                <span className="info-value">{data.location}</span>
              </div>
            </div>
          </div>

          <div className="about-image">
            <img src={data.avatar} alt={data.name} />
          </div>
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

        .about-content {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 3rem;
          align-items: center;
        }

        .about-bio {
          font-size: 1rem;
          line-height: 1.8;
          color: var(--text-secondary);
          margin-bottom: 2rem;
        }

        .about-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .stat {
          text-align: center;
          padding: 1.25rem 1rem;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: 10px;
        }

        .stat-number {
          display: block;
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--primary-color);
          margin-bottom: 0.25rem;
        }

        .stat-label {
          font-size: 0.8rem;
          color: var(--text-light);
        }

        .about-info {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.75rem 1rem;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: 8px;
        }

        .info-label {
          font-size: 0.8rem;
          color: var(--text-light);
          min-width: 70px;
          font-weight: 500;
        }

        .info-value {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .about-image {
          display: flex;
          justify-content: center;
        }

        .about-image img {
          width: 100%;
          max-width: 280px;
          border-radius: 12px;
          border: 1px solid var(--border-color);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
        }

        @media (max-width: 768px) {
          .about-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .about-image {
            order: -1;
          }

          .about-stats {
            grid-template-columns: repeat(3, 1fr);
            gap: 0.75rem;
          }

          .stat {
            padding: 1rem 0.5rem;
          }

          .stat-number {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  )
}

export default About
