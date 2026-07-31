import React from 'react'
import SectionTitle from './SectionTitle.jsx'
import BackButton from './BackButton.jsx'

const getProjectStyle = (technologies = []) => {
  const t = technologies.join(' ').toLowerCase()
  if (t.includes('react') || t.includes('vite'))
    return { bg: 'linear-gradient(135deg, #0d47a1 0%, #1565c0 50%, #1976d2 100%)', icon: '⚛️', label: 'Frontend' }
  if (t.includes('laravel') || t.includes('php'))
    return { bg: 'linear-gradient(135deg, #4a0072 0%, #7b1fa2 50%, #9c27b0 100%)', icon: '🔥', label: 'Backend' }
  if (t.includes('node') || t.includes('express'))
    return { bg: 'linear-gradient(135deg, #1b5e20 0%, #2e7d32 50%, #388e3c 100%)', icon: '🟢', label: 'Backend' }
  if (t.includes('postgresql') || t.includes('mysql'))
    return { bg: 'linear-gradient(135deg, #0d47a1 0%, #01579b 50%, #0277bd 100%)', icon: '🗄️', label: 'Database' }
  return { bg: 'linear-gradient(135deg, #263238 0%, #37474f 50%, #455a64 100%)', icon: '💻', label: 'Project' }
}

const Projects = ({ data }) => {
  return (
    <section className="page-section">
      <BackButton />
      <div className="container">
        <SectionTitle 
          title="Projects" 
          subtitle="Beberapa project yang telah saya kerjakan" 
        />

        <div className="projects-grid">
          {data.map((project) => {
            const { bg, icon, label } = getProjectStyle(project.technologies)
            return (
              <div key={project.id} className="project-card">
                <div className="project-image" style={{ background: bg }}>
                  <div className="project-thumbnail">
                    <span className="project-icon">{icon}</span>
                    <span className="project-thumb-title">{project.title}</span>
                    <span className="project-thumb-label">{label}</span>
                  </div>
                </div>
                
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  
                  <div className="project-tech">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
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

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 1.5rem;
        }

        .project-card {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.2s ease;
        }

        .project-card:hover {
          border-color: rgba(100, 181, 246, 0.3);
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
        }

        .project-image {
          height: 180px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .project-thumbnail {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          width: 100%;
          height: 100%;
          padding: 1rem;
        }

        .project-icon {
          font-size: 2.8rem;
          line-height: 1;
        }

        .project-thumb-title {
          font-size: 0.85rem;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.9);
          text-align: center;
          line-height: 1.3;
        }

        .project-thumb-label {
          font-size: 0.68rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.5);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .project-content {
          padding: 1.5rem;
        }

        .project-content h3 {
          color: var(--text-primary);
          margin-bottom: 0.5rem;
          font-size: 1.1rem;
        }

        .project-content p {
          color: var(--text-light);
          margin-bottom: 1rem;
          font-size: 0.9rem;
          line-height: 1.6;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-bottom: 1.25rem;
        }

        .tech-tag {
          background: rgba(100, 181, 246, 0.1);
          color: var(--primary-color);
          padding: 0.2rem 0.6rem;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 500;
        }

        .project-links {
          display: flex;
          gap: 0.75rem;
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }

          .project-links {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  )
}

export default Projects
