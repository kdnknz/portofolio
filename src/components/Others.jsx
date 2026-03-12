import React from 'react'
import { Link } from 'react-router-dom'
import SectionTitle from './SectionTitle.jsx'

const Others = () => {
  const otherPages = [
    {
      id: 1,
      title: "Projects",
      description: "Showcase project-project yang telah saya kerjakan",
      icon: "🚀",
      path: "/projects",
      color: "linear-gradient(135deg, #f093fb, #f5576c)"
    },
    {
      id: 2,
      title: "Services",
      description: "Layanan yang saya tawarkan untuk membantu project Anda",
      icon: "⚡",
      path: "/services",
      color: "linear-gradient(135deg, #43e97b, #38f9d7)"
    },
    {
      id: 3,
      title: "Education",
      description: "Riwayat pendidikan dan pencapaian akademik saya",
      icon: "🎓",
      path: "/education",
      color: "linear-gradient(135deg, #4facfe, #00f2fe)"
    },
    {
      id: 4,
      title: "Certificate",
      description: "Sertifikat dan penghargaan yang telah saya peroleh",
      icon: "📜",
      path: "/certificate",
      color: "linear-gradient(135deg, #ffecd2, #fcb69f)"
    },
    {
      id: 5,
      title: "About Me",
      description: "Mengenal lebih dekat tentang background dan passion saya",
      icon: "👨‍💻",
      path: "/about",
      color: "linear-gradient(135deg, #667eea, #764ba2)"
    },
    {
      id: 6,
      title: "Contact",
      description: "Mari berkolaborasi dan wujudkan project impian Anda",
      icon: "📧",
      path: "/contact",
      color: "linear-gradient(135deg, #fa709a, #fee140)"
    }
  ]

  return (
    <section className="page-section">
      <div className="container">
        <SectionTitle 
          title="Explore More" 
          subtitle="Jelajahi lebih dalam tentang saya dan layanan yang saya tawarkan" 
        />

        <div className="others-grid">
          {otherPages.map((page, index) => (
            <Link 
              key={page.id} 
              to={page.path} 
              className="other-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="card-icon" style={{ background: page.color }}>
                <span>{page.icon}</span>
              </div>
              <div className="card-content">
                <h3>{page.title}</h3>
                <p>{page.description}</p>
              </div>
              <div className="card-arrow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </Link>
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

        .others-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .other-card {
          background: rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 1.5rem;
          padding: 2rem;
          text-decoration: none;
          color: inherit;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          animation: slideInUp 0.6s ease-out both;
          cursor: pointer;
          box-shadow: 
            0 4px 20px rgba(0, 0, 0, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.08);
        }

        .other-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transition: left 0.5s;
        }

        .other-card:hover::before {
          left: 100%;
        }

        .other-card:hover {
          transform: translateY(-10px) scale(1.02);
          background: rgba(0, 0, 0, 0.3);
          box-shadow: 
            0 25px 50px rgba(0, 0, 0, 0.25),
            inset 0 1px 0 rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.15);
        }

        .card-icon {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          font-size: 2rem;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
          transition: all 0.3s ease;
        }

        .other-card:hover .card-icon {
          transform: scale(1.1) rotate(5deg);
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.2);
        }

        .card-content {
          flex: 1;
          margin-bottom: 1rem;
        }

        .card-content h3 {
          color: rgba(255, 255, 255, 0.95);
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
        }

        .card-content p {
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          margin: 0;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
        }

        .card-arrow {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          width: 40px;
          height: 40px;
          background: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255, 255, 255, 0.8);
          opacity: 0;
          transform: translateX(10px);
          transition: all 0.3s ease;
        }

        .other-card:hover .card-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .others-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .other-card {
            padding: 1.5rem;
          }

          .card-icon {
            width: 60px;
            height: 60px;
            font-size: 1.5rem;
          }

          .card-content h3 {
            font-size: 1.3rem;
          }

          .card-arrow {
            top: 1rem;
            right: 1rem;
            width: 35px;
            height: 35px;
          }
        }

        @media (max-width: 480px) {
          .other-card {
            padding: 1rem;
          }

          .card-content h3 {
            font-size: 1.2rem;
          }

          .card-content p {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Others