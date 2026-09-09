import React from 'react'
import SectionTitle from './SectionTitle.jsx'
import BackButton from './BackButton.jsx'
import { useLanguage } from '../hooks/useLanguage.js'

const About = ({ data }) => {
  const { t } = useLanguage()

  return (
    <section className="page-section">
      <BackButton />
      <div className="container">
        <SectionTitle 
          title={t('section.about')} 
          subtitle={t('section.about.subtitle')} 
        />

        <div className="about-content">
          <div className="about-text">
            <p className="about-bio">{t(data.bio)}</p>
            
            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">20+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat">
                <span className="stat-number">6+</span>
                <span className="stat-label">Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">20+</span>
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

        <div className="about-cta">
          <div className="about-cta-text">
            <h3>{t('about.cta.title')}</h3>
            <p>{t('about.cta.text')}</p>
          </div>
          <a
            href="https://wa.me/62895701239090"
            target="_blank"
            rel="noopener noreferrer"
            className="about-cta-button"
          >
            <svg width="20" height="20" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
              <path d="M16.004 2.002c-7.732 0-14 6.268-14 14 0 2.472.66 4.876 1.912 6.988L2 30l7.188-1.884A13.94 13.94 0 0 0 16.004 30c7.732 0 14-6.268 14-14s-6.268-13.998-14-13.998zm0 25.614a11.57 11.57 0 0 1-5.9-1.612l-.424-.252-4.388 1.15 1.172-4.28-.276-.44a11.56 11.56 0 0 1-1.774-6.18c0-6.394 5.204-11.598 11.598-11.598 6.394 0 11.598 5.204 11.598 11.598-.002 6.396-5.206 11.614-11.606 11.614zm6.36-8.684c-.348-.174-2.064-1.02-2.384-1.136-.32-.116-.552-.174-.784.174-.232.348-.9 1.136-1.104 1.368-.204.232-.406.26-.754.088-.348-.174-1.47-.542-2.8-1.728-1.034-.922-1.734-2.062-1.936-2.41-.204-.348-.022-.536.152-.71.158-.156.348-.406.522-.61.174-.204.232-.348.348-.58.116-.232.058-.436-.03-.61-.088-.174-.784-1.89-1.074-2.588-.282-.68-.57-.588-.784-.598-.204-.01-.436-.012-.668-.012s-.61.088-.93.436c-.32.348-1.22 1.194-1.22 2.91s1.248 3.376 1.422 3.61c.174.232 2.456 3.75 5.952 5.258.832.36 1.482.574 1.988.736.836.264 1.596.228 2.196.138.67-.1 2.064-.844 2.354-1.66.29-.816.29-1.516.204-1.66-.088-.146-.32-.232-.668-.406z"/>
            </svg>
            {t('about.cta.button')}
          </a>
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

        .about-cta {
          margin-top: 3rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          padding: 1.75rem 2rem;
          background: linear-gradient(135deg, rgba(100, 181, 246, 0.08) 0%, rgba(100, 181, 246, 0.02) 100%);
          border: 1px solid rgba(100, 181, 246, 0.25);
          border-radius: 12px;
        }

        .about-cta-text h3 {
          color: var(--text-primary);
          font-size: 1.15rem;
          font-weight: 600;
          margin: 0 0 0.5rem 0;
        }

        .about-cta-text p {
          color: var(--text-secondary);
          font-size: 0.9rem;
          line-height: 1.7;
          margin: 0;
        }

        .about-cta-button {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          flex-shrink: 0;
          padding: 0.75rem 1.25rem;
          background: #25d366;
          color: #fff;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 600;
          border-radius: 8px;
          transition: all 0.2s ease;
        }

        .about-cta-button:hover {
          background: #1ebe5b;
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(37, 211, 102, 0.3);
        }

        @media (max-width: 768px) {
          .about-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .about-cta {
            flex-direction: column;
            align-items: flex-start;
            text-align: left;
            padding: 1.5rem;
            margin-top: 2rem;
          }

          .about-cta-button {
            width: 100%;
            justify-content: center;
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
