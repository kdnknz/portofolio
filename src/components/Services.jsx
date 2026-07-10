import React from 'react'
import SectionTitle from './SectionTitle.jsx'
import BackButton from './BackButton.jsx'

const Services = ({ data }) => {
  return (
    <section className="page-section">
      <BackButton />
      <div className="container">
        <SectionTitle 
          title="Layanan" 
          subtitle="Layanan yang saya tawarkan" 
        />

        <div className="services-grid">
          {data.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
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

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1.5rem;
          max-width: 900px;
          margin: 0 auto;
        }

        .service-card {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          padding: 2rem 1.5rem;
          border-radius: 12px;
          text-align: center;
          transition: all 0.2s ease;
        }

        .service-card:hover {
          border-color: rgba(100, 181, 246, 0.3);
          transform: translateY(-4px);
        }

        .service-icon {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .service-card h3 {
          color: var(--text-primary);
          margin-bottom: 0.5rem;
          font-size: 1.05rem;
        }

        .service-card p {
          color: var(--text-light);
          line-height: 1.6;
          margin: 0;
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}

export default Services
