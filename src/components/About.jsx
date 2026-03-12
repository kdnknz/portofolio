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
          subtitle="Mengenal lebih dekat tentang background dan passion saya" 
        />

        <div className="about-content">
          <div className="about-text">
            <p>{data.bio}</p>
            
            <div className="about-stats">
              <div className="stat">
                <h3>50+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h3>3+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>30+</h3>
                <p>Happy Clients</p>
              </div>
            </div>

            <div className="about-info">
              <div className="info-item">
                <strong>Email:</strong> {data.email}
              </div>
              <div className="info-item">
                <strong>Phone:</strong> {data.phone}
              </div>
              <div className="info-item">
                <strong>Location:</strong> {data.location}
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
        .about-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .about-text p {
          font-size: 1.1rem;
          line-height: 1.8;
          margin-bottom: 2rem;
        }

        .about-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .stat {
          text-align: center;
          padding: 2rem;
          background: rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 1.5rem;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          box-shadow: 
            0 4px 20px rgba(0, 0, 0, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.08);
        }

        .stat::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, 
            rgba(102, 126, 234, 0.6), 
            rgba(118, 75, 162, 0.6), 
            rgba(240, 147, 251, 0.6)
          );
          border-radius: 1.5rem 1.5rem 0 0;
        }

        .stat:hover {
          transform: translateY(-10px);
          background: rgba(0, 0, 0, 0.3);
          box-shadow: 
            0 15px 35px rgba(0, 0, 0, 0.25),
            inset 0 1px 0 rgba(255, 255, 255, 0.15);
        }

        .stat h3 {
          font-size: 2.5rem;
          background: var(--gradient-1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.5rem;
          font-weight: 700;
        }

        .stat p {
          color: rgba(255, 255, 255, 0.8);
          margin: 0;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
        }

        .about-info {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: rgba(0, 0, 0, 0.15);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 0.75rem;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);
        }

        .info-item strong {
          color: rgba(255, 255, 255, 0.9);
          min-width: 80px;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
        }

        .info-item {
          color: rgba(255, 255, 255, 0.7);
        }

        .about-image {
          display: flex;
          justify-content: center;
        }

        .about-image img {
          width: 100%;
          max-width: 300px;
          border-radius: 1rem;
          box-shadow: var(--shadow-lg);
        }

        @media (max-width: 768px) {
          .about-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .about-stats {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .stat {
            padding: 1rem;
          }

          .stat h3 {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  )
}

export default About