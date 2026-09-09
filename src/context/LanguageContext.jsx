import React, { createContext, useState, useEffect } from 'react'
import { uiStrings } from '../i18n/uiStrings.js'

export const STORAGE_KEY = 'portfolio-language'
export const DEFAULT_LANGUAGE = 'id'
export const SUPPORTED_LANGUAGES = ['id', 'en']

export const LanguageContext = createContext(null)

// Read + validate persisted value; anything invalid falls back to Indonesian.
export const readInitialLanguage = () => {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    return SUPPORTED_LANGUAGES.includes(stored) ? stored : DEFAULT_LANGUAGE
  } catch {
    return DEFAULT_LANGUAGE
  }
}

// Resolve a locale-keyed value to the active language, falling back to Indonesian.
export const resolve = (entry, language) => {
  if (entry == null || typeof entry !== 'object') return entry
  const value = entry[language]
  if (value === undefined || value === null || value === '') {
    return entry[DEFAULT_LANGUAGE]
  }
  return value
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(readInitialLanguage)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, language)
    } catch {
      /* storage unavailable — keep in-memory language */
    }
  }, [language])

  const setLanguage = (next) => {
    if (SUPPORTED_LANGUAGES.includes(next)) setLanguageState(next)
  }

  // t() resolves either a locale-keyed content entry or a UI-string key.
  const t = (entryOrKey) => {
    if (typeof entryOrKey === 'string') {
      return resolve(uiStrings[entryOrKey], language)
    }
    return resolve(entryOrKey, language)
  }

  const value = { language, setLanguage, t }
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}
