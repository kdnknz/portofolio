import React from 'react'
import { Link } from 'react-router-dom'
import SectionTitle from './SectionTitle.jsx'

const Others = () => {
  const otherPages = [
    { id: 1, title: "Projects", description: "Project-project yang telah saya kerjakan", path: "/projects" },
    { id: 2, title: "Services", description: "Layanan yang saya tawarkan", path: "/services" },
    { id: 3, title: "Education", description: "Riwayat pendidikan saya", path: "/education" },
    { id: 4, title: "Certificate", description: "Sertifikat yang telah saya peroleh", path: "/certificate" },
    { id: 5, title: "About Me", description: "Tentang background dan pengalaman saya", path: "/about" },
    { id: 6, title: "Contact", description: "Hubungi saya untuk kolaborasi", path: "/contact" }
  ]

  return (
    <section className="page-section">
      <div className="container">
        <SectionTitle 
          title="Explore More" 
          subtitle="Jelajahi lebih dalam tentang saya" 
        />

        <div className="others-grid">
          {otherPages.map((page) => (
            <Link key={page.id} to={page.path} className="other-card">
              <div className="card-content">
                <h3>{page.title}</h3>
                <p>{page.description}</p>
              </div>
              <span className="card-arrow">→</span>
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
        }

        @media (max-width: 768px) {
          .page-section {
            padding: 2rem 0;
            min-height: 100vh;
          }
        }

        .others-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1rem;
          max-width: 800px;
          margin: 0 auto;
        }

        .other-card {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: 10px;
          padding: 1.25rem 1.5rem;
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: all 0.2s ease;
        }

        .other-card:hover {
          border-color: rgba(100, 181, 246, 0.3);
          transform: translateX(4px);
        }

        .card-content h3 {
          color: var(--text-primary);
          font-size: 1.05rem;
          font-weight: 600;
          margin-bottom: 0.25rem;
        }

        .card-content p {
          color: var(--text-light);
          margin: 0;
          font-size: 0.85rem;
        }

        .card-arrow {
          color: var(--text-light);
          font-size: 1.25rem;
          transition: all 0.2s ease;
        }

        .other-card:hover .card-arrow {
          color: var(--primary-color);
          transform: translateX(4px);
        }

        @media (max-width: 768px) {
          .others-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}

export default Others
