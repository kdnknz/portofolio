import React from 'react'

// Removed typewriter animation - just render the text directly for a clean look
const TypewriterText = ({ text, className = '' }) => {
  return <span className={className}>{text}</span>
}

export default TypewriterText
