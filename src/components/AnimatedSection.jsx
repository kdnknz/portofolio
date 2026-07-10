import React from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver.js'

const AnimatedSection = ({ 
  children, 
  className = '', 
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
          transform: translateY(16px);
          transition: all 0.4s ease-out;
        }

        .animated-section.animate {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  )
}

export default AnimatedSection
