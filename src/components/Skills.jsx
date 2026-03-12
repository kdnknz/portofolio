import React from 'react'
import SectionTitle from './SectionTitle.jsx'

const Skills = ({ data }) => {
  return (
    <section className="page-section">
      <div className="container">
        <SectionTitle 
          title="Skills & Keahlian" 
          subtitle="Teknologi dan tools yang saya kuasai dalam pengembangan web" 
        />

        <div className="skills-container">
          <div className="skills-card">
            <div className="skills-grid">
              <div className="skill-category">
                <h3>Frontend Development</h3>
                <div className="skills-list">
                  {data.frontend.map((skill, index) => (
                    <div 
                      key={index} 
                      className="skill-item"
                      style={{ '--skill-color': skill.color, animationDelay: `${index * 0.05}s` }}
                    >
                      <div className="skill-header">
                        <div className="skill-info">
                          <span className="skill-icon">{skill.icon}</span>
                          <span className="skill-name">{skill.name}</span>
                        </div>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-progress">
                        <div 
                          className="skill-progress-bar"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="skill-category">
                <h3>Backend Development</h3>
                <div className="skills-list">
                  {data.backend.map((skill, index) => (
                    <div 
                      key={index} 
                      className="skill-item"
                      style={{ '--skill-color': skill.color, animationDelay: `${(index + data.frontend.length) * 0.05}s` }}
                    >
                      <div className="skill-header">
                        <div className="skill-info">
                          <span className="skill-icon">{skill.icon}</span>
                          <span className="skill-name">{skill.name}</span>
                        </div>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-progress">
                        <div 
                          className="skill-progress-bar"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="skill-category">
                <h3>Database</h3>
                <div className="skills-list">
                  {data.database.map((skill, index) => (
                    <div 
                      key={index} 
                      className="skill-item"
                      style={{ '--skill-color': skill.color, animationDelay: `${(index + data.frontend.length + data.backend.length) * 0.05}s` }}
                    >
                      <div className="skill-header">
                        <div className="skill-info">
                          <span className="skill-icon">{skill.icon}</span>
                          <span className="skill-name">{skill.name}</span>
                        </div>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-progress">
                        <div 
                          className="skill-progress-bar"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="skill-category">
                <h3>Tools & Others</h3>
                <div className="skills-list">
                  {data.tools.map((skill, index) => (
                    <div 
                      key={index} 
                      className="skill-item"
                      style={{ '--skill-color': skill.color, animationDelay: `${(index + data.frontend.length + data.backend.length + data.database.length) * 0.05}s` }}
                    >
                      <div className="skill-header">
                        <div className="skill-info">
                          <span className="skill-icon">{skill.icon}</span>
                          <span className="skill-name">{skill.name}</span>
                        </div>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-progress">
                        <div 
                          className="skill-progress-bar"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .page-section {
          min-height: calc(100vh - 120px);
          display: flex;
          align-items: center;
          padding: 6rem 0 2rem;
          background: rgba(255, 255, 255, 0.1);
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
        .skills-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .skills-card {
          background: rgba(0, 0, 0, 0.25);
          backdrop-filter: blur(25px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 2.5rem;
          border-radius: 1.5rem;
          box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .skills-card::before {
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

        .skills-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-colored);
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }

        .skill-category {
          position: relative;
        }

        .skill-category h3 {
          color: rgba(255, 255, 255, 0.95);
          margin-bottom: 1.5rem;
          font-size: 1.2rem;
          font-weight: 600;
          text-align: center;
          position: relative;
          padding-bottom: 0.75rem;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .skill-category h3::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 40px;
          height: 2px;
          background: linear-gradient(90deg, 
            rgba(255, 255, 255, 0.3), 
            rgba(255, 255, 255, 0.8), 
            rgba(255, 255, 255, 0.3)
          );
          border-radius: 1px;
        }

        .skills-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .skill-item {
          background: rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 1rem;
          border-radius: 0.75rem;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          cursor: pointer;
          box-shadow: 
            0 4px 20px rgba(0, 0, 0, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.08);
          animation: slideInUp 0.6s ease-out both;
        }

        .skill-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.5s;
        }

        .skill-item:hover::before {
          left: 100%;
        }

        .skill-item:hover {
          transform: translateY(-5px);
          background: rgba(0, 0, 0, 0.3);
          box-shadow: 
            0 15px 35px rgba(0, 0, 0, 0.25),
            0 0 0 1px var(--skill-color),
            inset 0 1px 0 rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.15);
        }

        .skill-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.75rem;
        }

        .skill-info {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .skill-icon {
          font-size: 1.2rem;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
          transition: transform 0.3s ease;
        }

        .skill-name {
          font-weight: 600;
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.9);
          transition: color 0.3s ease;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        }

        .skill-percentage {
          font-weight: 700;
          font-size: 0.85rem;
          color: var(--skill-color);
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(10px);
          padding: 0.2rem 0.6rem;
          border-radius: 0.75rem;
          border: 1px solid rgba(255, 255, 255, 0.15);
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
        }

        .skill-progress {
          width: 100%;
          height: 6px;
          background: rgba(0, 0, 0, 0.4);
          border-radius: 3px;
          overflow: hidden;
          position: relative;
          box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3);
        }

        .skill-progress-bar {
          height: 100%;
          background: var(--skill-color);
          border-radius: 4px;
          transition: width 1s ease-out 0.5s;
          position: relative;
          overflow: hidden;
        }

        .skill-progress-bar::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          animation: shimmer 2s infinite;
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
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

        .skill-item:hover .skill-icon {
          transform: scale(1.2) rotate(5deg);
        }

        .skill-item:hover .skill-name {
          color: var(--skill-color);
        }

        @media (max-width: 1200px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
        }

        @media (max-width: 768px) {
          .skills-container {
            margin: 0 1rem;
          }

          .skills-card {
            padding: 1.5rem;
          }

          .skills-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }

          .skill-category h3 {
            font-size: 1.1rem;
            margin-bottom: 1rem;
          }

          .skills-list {
            gap: 0.75rem;
          }

          .skill-item {
            padding: 0.75rem;
          }

          .skill-info {
            gap: 0.5rem;
          }

          .skill-icon {
            font-size: 1rem;
          }

          .skill-name {
            font-size: 0.9rem;
          }

          .skill-percentage {
            font-size: 0.8rem;
            padding: 0.15rem 0.5rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Skills