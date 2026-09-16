import React, { useState } from 'react'
import SectionTitle from './SectionTitle.jsx'
import { useLanguage } from '../hooks/useLanguage.js'

// Brand colors that are too dark to show on the dark card background.
// For these we tint the logo light instead of using the exact brand hex.
const DARK_COLORS = ['#000000', '#181717', '#231f20', '#003545', '#003b57']

const iconColorFor = (color) => {
  if (!color) return 'ffffff'
  return DARK_COLORS.includes(color.toLowerCase()) ? 'e2e8f0' : color.replace('#', '')
}

// A single skill row: brand logo (Simple Icons CDN) + name + level bar.
// Falls back to the emoji icon if there is no slug or the logo fails to load.
const SkillItem = ({ skill }) => {
  const [logoFailed, setLogoFailed] = useState(false)
  const showLogo = skill.slug && !logoFailed

  return (
    <div className="skill-item">
      <div className="skill-header">
        <span className="skill-name">
          <span className="skill-icon" aria-hidden="true">
            {showLogo ? (
              <img
                src={`https://cdn.simpleicons.org/${skill.slug}/${iconColorFor(skill.color)}`}
                alt=""
                width="18"
                height="18"
                loading="lazy"
                onError={() => setLogoFailed(true)}
              />
            ) : (
              skill.icon
            )}
          </span>
          {skill.name}
        </span>
        <span className="skill-percentage">{skill.level}%</span>
      </div>
      <div className="skill-progress">
        <div
          className="skill-progress-bar"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  )
}

const Skills = ({ data }) => {
  const { t } = useLanguage()

  return (
    <section className="page-section">
      <div className="container">
        <SectionTitle 
          title={t('section.skills')} 
          subtitle={t('section.skills.subtitle')} 
        />

        <div className="skills-grid">
          <div className="skill-category">
            <h3>Frontend</h3>
            <div className="skills-list">
              {data.frontend.map((skill, index) => (
                <SkillItem key={index} skill={skill} />
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3>Backend</h3>
            <div className="skills-list">
              {data.backend.map((skill, index) => (
                <SkillItem key={index} skill={skill} />
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3>Framework</h3>
            <div className="skills-list">
              {data.framework.map((skill, index) => (
                <SkillItem key={index} skill={skill} />
              ))}
            </div>
          </div>

           <div className="skill-category">
            <h3>Tools</h3>
            <div className="skills-list">
              {data.tools.map((skill, index) => (
                <SkillItem key={index} skill={skill} />
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3>Database</h3>
            <div className="skills-list">
              {data.database.map((skill, index) => (
                <SkillItem key={index} skill={skill} />
              ))}
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
        }

        @media (max-width: 768px) {
          .page-section {
            padding: 2rem 0;
            min-height: 100vh;
          }
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }

        .skill-category {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 1.5rem;
        }

        .skill-category h3 {
          color: var(--text-primary);
          margin-bottom: 1.25rem;
          font-size: 1rem;
          font-weight: 600;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid var(--border-color);
        }

        .skills-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .skill-item {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .skill-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .skill-name {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 500;
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .skill-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 18px;
          height: 18px;
          font-size: 0.95rem;
          line-height: 1;
          flex-shrink: 0;
        }

        .skill-icon img {
          display: block;
          width: 18px;
          height: 18px;
          object-fit: contain;
        }

        .skill-percentage {
          font-weight: 600;
          font-size: 0.8rem;
          color: var(--primary-color);
        }

        .skill-progress {
          width: 100%;
          height: 4px;
          background: rgba(148, 163, 184, 0.15);
          border-radius: 2px;
          overflow: hidden;
        }

        .skill-progress-bar {
          height: 100%;
          background: var(--primary-color);
          border-radius: 2px;
          transition: width 0.8s ease-out;
        }

        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Skills
