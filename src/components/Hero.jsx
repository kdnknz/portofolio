import React from 'react'
import { Link } from 'react-router-dom'
import TypewriterText from './TypewriterText.jsx'
import HeroParticles from './HeroParticles.jsx'

const Hero = ({ data, social }) => {
  return (
    <section className="hero">
      <HeroParticles />
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, Saya <TypewriterText text={data.name} delay={150} className="text-primary" />
            </h1>
            <h2 className="hero-subtitle">{data.title}</h2>
            <p className="hero-bio">{data.bio}</p>
            
            <div className="hero-buttons">
              <Link to="/contact" className="btn btn-primary">
                Hubungi Saya
              </Link>
              <a href={data.resume} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                Download CV
              </a>
            </div>

            <div className="social-links">
              {social.github && (
                <a href={social.github} target="_blank" rel="noopener noreferrer">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              )}
              {social.linkedin && (
                <a href={social.linkedin} target="_blank" rel="noopener noreferrer">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              )}
              {social.instagram && (
                <a href={social.instagram} target="_blank" rel="noopener noreferrer">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              )}
            </div>
          </div>

          <div className="hero-image">
            <img src={data.avatar} alt={data.name} />
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #667eea 100%);
          color: white;
          position: relative;
          overflow: hidden;
          z-index: 0;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.2) 0%, transparent 50%);
          animation: morphing 8s ease-in-out infinite;
          z-index: -1;
        }

        .hero::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.05) 50%, transparent 70%);
          animation: shimmer 3s ease-in-out infinite;
          z-index: -1;
        }

        @keyframes morphing {
          0%, 100% {
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
          33% {
            transform: scale(1.1) rotate(120deg);
            opacity: 0.8;
          }
          66% {
            transform: scale(0.9) rotate(240deg);
            opacity: 0.9;
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          position: relative;
          z-index: 10;
        }

        .hero-title {
          font-size: 3rem;
          margin-bottom: 1rem;
          font-weight: 700;
          animation: slideInLeft 1s ease-out;
        }

        .hero-subtitle {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          color: rgba(255, 255, 255, 0.9);
          font-weight: 400;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
          animation: slideInLeft 1s ease-out 0.2s both;
        }

        .hero-bio {
          font-size: 1.1rem;
          margin-bottom: 2rem;
          color: rgba(255, 255, 255, 0.95);
          line-height: 1.6;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          padding: 1rem 1.5rem;
          border-radius: 1rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
          animation: slideInUp 1s ease-out 0.4s both;
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
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

        .hero-text p {
          font-size: 1.1rem;
          margin-bottom: 2rem;
          color: rgba(255, 255, 255, 0.95);
          line-height: 1.6;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          padding: 1rem 1.5rem;
          border-radius: 1rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .text-primary {
          background: linear-gradient(45deg, #fbbf24, #f59e0b, #fbbf24, #fbbf24);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: textShine 2s ease-in-out infinite;
          text-shadow: 0 0 30px rgba(251, 191, 36, 0.5);
        }

        @keyframes textShine {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
          animation: slideInUp 1s ease-out 0.6s both;
        }

        .social-links {
          display: flex;
          gap: 1rem;
          animation: slideInUp 1s ease-out 0.8s both;
        }

        .social-links a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          color: white;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .social-links a::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: var(--gradient-1);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .social-links a:hover::before {
          opacity: 1;
        }

        .social-links a:hover {
          transform: translateY(-5px) scale(1.1);
          box-shadow: 0 10px 25px rgba(255, 255, 255, 0.2);
        }

        .social-links a svg {
          position: relative;
          z-index: 1;
        }

        .hero-image {
          display: flex;
          justify-content: center;
          animation: slideInRight 1s ease-out 0.3s both;
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .hero-image img {
          width: 350px;
          height: 350px;
          border-radius: 50%;
          object-fit: cover;
          border: 8px solid rgba(255, 255, 255, 0.3);
          box-shadow: 
            0 30px 60px rgba(0, 0, 0, 0.4), 
            0 0 0 20px rgba(255, 255, 255, 0.1),
            0 0 100px rgba(102, 126, 234, 0.5);
          animation: floatAndGlow 4s ease-in-out infinite;
          position: relative;
          transition: all 0.3s ease;
        }

        .hero-image img:hover {
          transform: scale(1.05);
          box-shadow: 
            0 40px 80px rgba(0, 0, 0, 0.5), 
            0 0 0 25px rgba(255, 255, 255, 0.15),
            0 0 150px rgba(102, 126, 234, 0.7);
        }

        .hero-image {
          position: relative;
        }

        .hero-image::before {
          content: '';
          position: absolute;
          top: -30px;
          left: -30px;
          right: -30px;
          bottom: -30px;
          border-radius: 50%;
          background: conic-gradient(from 0deg, #667eea, #764ba2, #f093fb, #f5576c, #667eea);
          animation: rotateGlow 8s linear infinite;
          z-index: -1;
          opacity: 0.8;
        }

        .hero-image::after {
          content: '';
          position: absolute;
          top: -15px;
          left: -15px;
          right: -15px;
          bottom: -15px;
          border-radius: 50%;
          background: conic-gradient(from 180deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          animation: rotateGlow 6s linear infinite reverse;
          z-index: -1;
        }

        @keyframes rotateGlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes floatAndGlow {
          0%, 100% {
            transform: translateY(0px);
            filter: brightness(1);
          }
          50% {
            transform: translateY(-15px);
            filter: brightness(1.1);
          }
        }

        @media (max-width: 768px) {
          .hero-content {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 2rem;
          }

          .hero-text h1 {
            font-size: 2.5rem;
          }

          .hero-buttons {
            justify-content: center;
          }

          .social-links {
            justify-content: center;
          }

          .hero-image img {
            width: 250px;
            height: 250px;
          }
        }

        @media (max-width: 480px) {
          .hero-text h1 {
            font-size: 2rem;
          }

          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }

          .hero-image img {
            width: 200px;
            height: 200px;
          }
        }
      `}</style>
    </section>
  )
}

export default Hero