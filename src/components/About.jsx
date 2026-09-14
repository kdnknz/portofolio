import React from 'react'
import SectionTitle from './SectionTitle.jsx'
import BackButton from './BackButton.jsx'
import { useLanguage } from '../hooks/useLanguage.js'

const About = ({ data, social }) => {
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

        <div className="contact-block">
          <h3>{t('contact.heading')}</h3>
          <p className="contact-intro">{t('contact.intro')}</p>

          <div className="social-links">
            <a
              href="https://wa.me/62895701239090"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label={t('aria.whatsapp')}
            >
              <svg width="20" height="20" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
                <path d="M16.004 2.002c-7.732 0-14 6.268-14 14 0 2.472.66 4.876 1.912 6.988L2 30l7.188-1.884A13.94 13.94 0 0 0 16.004 30c7.732 0 14-6.268 14-14s-6.268-13.998-14-13.998zm0 25.614a11.57 11.57 0 0 1-5.9-1.612l-.424-.252-4.388 1.15 1.172-4.28-.276-.44a11.56 11.56 0 0 1-1.774-6.18c0-6.394 5.204-11.598 11.598-11.598 6.394 0 11.598 5.204 11.598 11.598-.002 6.396-5.206 11.614-11.606 11.614zm6.36-8.684c-.348-.174-2.064-1.02-2.384-1.136-.32-.116-.552-.174-.784.174-.232.348-.9 1.136-1.104 1.368-.204.232-.406.26-.754.088-.348-.174-1.47-.542-2.8-1.728-1.034-.922-1.734-2.062-1.936-2.41-.204-.348-.022-.536.152-.71.158-.156.348-.406.522-.61.174-.204.232-.348.348-.58.116-.232.058-.436-.03-.61-.088-.174-.784-1.89-1.074-2.588-.282-.68-.57-.588-.784-.598-.204-.01-.436-.012-.668-.012s-.61.088-.93.436c-.32.348-1.22 1.194-1.22 2.91s1.248 3.376 1.422 3.61c.174.232 2.456 3.75 5.952 5.258.832.36 1.482.574 1.988.736.836.264 1.596.228 2.196.138.67-.1 2.064-.844 2.354-1.66.29-.816.29-1.516.204-1.66-.088-.146-.32-.232-.668-.406z"/>
              </svg>
            </a>
            {social && social.github && (
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="GitHub"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            )}
            {social && social.linkedin && (
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="LinkedIn"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            )}
            {social && social.instagram && (
              <a
                href={social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Instagram"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            )}
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

        .contact-block {
          margin-top: 3rem;
          padding-top: 2rem;
          border-top: 1px solid var(--border-color);
        }

        .contact-block h3 {
          color: var(--text-primary);
          margin-bottom: 0.75rem;
          font-size: 1.25rem;
        }

        .contact-intro {
          color: var(--text-light);
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .social-links {
          display: flex;
          gap: 0.75rem;
        }

        .social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          text-decoration: none;
          border-radius: 8px;
          transition: all 0.2s ease;
        }

        .social-icon:hover {
          border-color: var(--primary-color);
          color: var(--primary-color);
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .about-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .social-links {
            flex-wrap: wrap;
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
