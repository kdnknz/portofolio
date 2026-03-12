import React from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver.js'

const AnimatedSection = ({ 
  children, 
  className = '', 
  animation = 'fadeInUp',
  delay = 0 
}) => {
  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver()

  return (
    <div
      ref={ref}
      className={`animated-section ${className} ${hasIntersected ? 'animate' : ''}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
      
      <style jsx>{`
        .animated-section {
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .animated-section.animate {
          opacity: 1;
          transform: translateY(0);
        }

        .animated-section.fade-in-left {
          transform: translateX(-50px);
        }

        .animated-section.fade-in-left.animate {
          transform: translateX(0);
        }

        .animated-section.fade-in-right {
          transform: translateX(50px);
        }

        .animated-section.fade-in-right.animate {
          transform: translateX(0);
        }

        .animated-section.scale-in {
          transform: scale(0.8);
        }

        .animated-section.scale-in.animate {
          transform: scale(1);
        }
      `}</style>
    </div>
  )
}

export default AnimatedSection