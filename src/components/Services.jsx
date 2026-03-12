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
          subtitle="Layanan yang saya tawarkan untuk membantu project Anda" 
        />

        <div className="services-grid">
          {data.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">
                <span>{service.icon}</span>
              </div>
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
          background: rgba(255, 255, 255, 0.05);
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

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .service-card {
          background: rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 2.5rem;
          border-radius: 1.5rem;
          text-align: center;
          box-shadow: 
            0 4px 20px rgba(0, 0, 0, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.08);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.1), transparent);
          transition: left 0.5s;
        }

        .service-card:hover::before {
          left: 100%;
        }

        .service-card:hover {
          transform: translateY(-15px) scale(1.02);
          background: rgba(0, 0, 0, 0.3);
          box-shadow: 
            0 25px 50px rgba(0, 0, 0, 0.25),
            inset 0 1px 0 rgba(255, 255, 255, 0.15);
          border-color: rgba(102, 126, 234, 0.3);
        }

        .service-icon {
          width: 100px;
          height: 100px;
          background: var(--gradient-1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 2rem;
          font-size: 2.5rem;
          box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
          animation: pulse 2s ease-in-out infinite;
        }

        .service-card h3 {
          color: rgba(255, 255, 255, 0.95);
          margin-bottom: 1rem;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
        }

        .service-card p {
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          margin: 0;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
        }

        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .service-card {
            padding: 1.5rem;
          }

          .service-icon {
            width: 60px;
            height: 60px;
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Services