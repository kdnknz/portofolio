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
          subtitle="Perjalanan akademik dan pencapaian pendidikan saya" 
        />

        <div className="education-timeline">
          {data.map((edu) => (
            <div key={edu.id} className="education-item">
              <div className="education-marker"></div>
              <div className="education-content">
                <div className="education-header">
                  <h3>{edu.degree}</h3>
                  <span className="education-period">{edu.period}</span>
                </div>
                <h4>{edu.institution}</h4>
                <p>{edu.description}</p>
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
          background: rgba(255, 255, 255, 0.08);
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

        .education-timeline {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
        }

        .education-timeline::before {
          content: '';
          position: absolute;
          left: 30px;
          top: 0;
          bottom: 0;
          width: 4px;
          background: linear-gradient(to bottom, #667eea, #764ba2, #f093fb);
          border-radius: 2px;
          box-shadow: 0 0 15px rgba(102, 126, 234, 0.4);
        }

        .education-item {
          position: relative;
          margin-bottom: 3rem;
          padding-left: 80px;
        }

        .education-marker {
          position: absolute;
          left: 19px;
          top: 0;
          width: 22px;
          height: 22px;
          background: linear-gradient(45deg, #667eea, #764ba2);
          border: 4px solid rgba(255, 255, 255, 0.9);
          border-radius: 50%;
          box-shadow: 
            0 0 0 4px rgba(255, 255, 255, 0.2), 
            0 0 20px rgba(102, 126, 234, 0.4),
            0 4px 15px rgba(0, 0, 0, 0.2);
          animation: pulse 2s ease-in-out infinite;
        }

        .education-content {
          background: rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 2.5rem;
          border-radius: 1.5rem;
          box-shadow: 
            0 4px 20px rgba(0, 0, 0, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.08);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .education-content::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, 
            rgba(102, 126, 234, 0.6), 
            rgba(118, 75, 162, 0.6)
          );
          border-radius: 1.5rem 1.5rem 0 0;
        }

        .education-content::after {
          content: '';
          position: absolute;
          left: -10px;
          top: 20px;
          width: 0;
          height: 0;
          border-top: 10px solid transparent;
          border-bottom: 10px solid transparent;
          border-right: 10px solid rgba(0, 0, 0, 0.2);
        }

        .education-content:hover {
          transform: translateX(10px) translateY(-5px);
          background: rgba(0, 0, 0, 0.3);
          box-shadow: 
            0 15px 35px rgba(0, 0, 0, 0.25),
            inset 0 1px 0 rgba(255, 255, 255, 0.15);
        }

        .education-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.5rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .education-header h3 {
          color: rgba(255, 255, 255, 0.95);
          margin: 0;
          font-size: 1.4rem;
          font-weight: 600;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
        }

        .education-period {
          background: linear-gradient(45deg, #667eea, #764ba2);
          color: white;
          padding: 0.4rem 1rem;
          border-radius: 2rem;
          font-size: 0.9rem;
          font-weight: 600;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
          white-space: nowrap;
        }

        .education-content h4 {
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 1rem;
          font-weight: 600;
          font-size: 1.2rem;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
        }

        .education-content p {
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          margin: 0;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
        }

        /* Achievement badges */
        .education-item:nth-child(1) .education-marker {
          background: linear-gradient(45deg, #fbbf24, #f59e0b);
          box-shadow: 
            0 0 0 4px rgba(255, 255, 255, 0.2), 
            0 0 20px rgba(251, 191, 36, 0.4),
            0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .education-item:nth-child(1) .education-content::before {
          background: linear-gradient(45deg, #fbbf24, #f59e0b);
        }

        .education-item:nth-child(1) .education-period {
          background: linear-gradient(45deg, #fbbf24, #f59e0b);
        }

        @media (max-width: 768px) {
          .education-timeline::before {
            left: 15px;
          }

          .education-item {
            padding-left: 50px;
          }

          .education-marker {
            left: 6px;
            width: 18px;
            height: 18px;
          }

          .education-content {
            padding: 1.5rem;
          }

          .education-header {
            flex-direction: column;
            gap: 0.5rem;
          }

          .education-period {
            align-self: flex-start;
            font-size: 0.8rem;
            padding: 0.3rem 0.8rem;
          }
        }

        @media (max-width: 480px) {
          .education-content {
            padding: 1rem;
          }

          .education-header h3 {
            font-size: 1.2rem;
          }

          .education-content h4 {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Education