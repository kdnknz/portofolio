import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext.jsx'

// Consume the language context. Throws a descriptive error when used
// outside of a LanguageProvider so misuse fails fast during development.
export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === null) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context // { language, setLanguage, t }
}
