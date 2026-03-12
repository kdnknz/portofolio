import React, { useState, useEffect } from 'react'

const TypewriterText = ({ text, delay = 100, className = '' }) => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, delay)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, delay, text])

  return (
    <span className={className}>
      {displayText}
      <span className="cursor">|</span>
      
      <style jsx>{`
        .cursor {
          animation: blink 1s infinite;
          color: #fbbf24;
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </span>
  )
}

export default TypewriterText