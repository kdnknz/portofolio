# Design Document

## Overview

This design adds two-language (Indonesian / English) support to the React portfolio without introducing new dependencies. It uses React Context to hold the active language and expose a translation helper, a custom `useLanguage()` hook for consumption, `localStorage` for persistence (default `"id"`), and a restructured `src/database.js` where every piece of body content carries both `"id"` and `"en"` values. A small UI-strings store covers hardcoded labels (nav, buttons, section titles, WhatsApp `aria-label`). A `LanguageSelector` component appears in both `Header.jsx` (desktop) and `MobileBottomNav.jsx` (mobile), driven by the shared context so both stay in sync.

The design follows the existing project conventions: functional components with hooks, data passed as props from `database.js`, component-scoped `<style jsx>` blocks, CSS variables from `src/index.css`, and no state-management library.

## Architecture

### High-level flow

```
main.jsx
  └─ App.jsx
       └─ LanguageProvider            (new: holds activeLanguage + t() + setLanguage)
            └─ Router
                 ├─ Header            → LanguageSelector (desktop)
                 ├─ AnimatedRoutes    → section components call useLanguage().t(entry)
                 ├─ Footer
                 ├─ MobileBottomNav    → LanguageSelector (mobile)
                 └─ WhatsApp button   → aria-label from UI-strings via useLanguage()
```

- `LanguageProvider` wraps the entire app tree inside `App.jsx` (Requirement 7.2). It sits above `Router` so every route and both navigation surfaces share one language state.
- Components read language via the `useLanguage()` hook. There is a single source of truth (the context value), so a change from either `LanguageSelector` is reflected everywhere (Requirements 5.4, 1.3).
- Content data continues to flow as props from `portfolioData` in `database.js` (Requirement 7.3). Components resolve locale-keyed fields through the `t()` helper.

### Module layout

New and changed files, consistent with the flat `src/components/` and `src/hooks/` structure:

```
src/
├── context/
│   └── LanguageContext.jsx     # new: createContext + LanguageProvider
├── hooks/
│   └── useLanguage.js          # new: useLanguage() hook (throws outside provider)
├── i18n/
│   └── uiStrings.js            # new: UI-strings translation store (labels/buttons/titles/aria)
├── components/
│   ├── LanguageSelector.jsx    # new: two-option selector (id / en)
│   ├── Header.jsx              # changed: render <LanguageSelector />
│   └── MobileBottomNav.jsx     # changed: render <LanguageSelector />, labels via t()
├── database.js                 # changed: body content becomes { id, en } locale objects
├── App.jsx                     # changed: wrap tree in <LanguageProvider>, aria-label via t()
└── main.jsx                    # unchanged
```

> Note: introducing `src/context/` and `src/i18n/` adds two folders. This is a small, purposeful deviation from the strictly flat layout to keep cross-cutting concerns (context, translation store) separate from view components. If preferred, both files can live directly under `src/` to stay fully flat — the design does not otherwise depend on the folder location.

## Components and Interfaces

### LanguageContext + LanguageProvider (`src/context/LanguageContext.jsx`)

Holds the active language and derives the translation helper. Reads the initial value from `localStorage` with validation and writes on every change.

```jsx
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
```

### useLanguage hook (`src/hooks/useLanguage.js`)

Exposes `language`, `setLanguage`, and `t`. Throws if used outside the provider (Requirement 6.5).

```js
import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext.jsx'

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === null) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context // { language, setLanguage, t }
}
```

Hook contract:

| Member | Type | Behavior |
|--------|------|----------|
| `language` | `'id' \| 'en'` | Current Active_Language (Req 6.1) |
| `setLanguage(next)` | `(string) => void` | Sets Active_Language to a supported value; ignores unsupported (Req 6.2, 1.2) |
| `t(entryOrKey)` | `(object\|string) => string` | Resolves locale-keyed entry or UI-string key to Active_Language, falling back to `'id'` (Req 6.3, 6.4) |

### LanguageSelector (`src/components/LanguageSelector.jsx`)

Presents exactly two options and highlights the active one. Used in both header and mobile nav; both instances read/write the same context so they stay consistent (Req 1.1, 1.4, 5.4).

```jsx
import React from 'react'
import { useLanguage } from '../hooks/useLanguage.js'

const OPTIONS = [
  { code: 'id', label: 'ID' },
  { code: 'en', label: 'EN' }
]

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="lang-selector" role="group" aria-label="Language">
      {OPTIONS.map((opt) => (
        <button
          key={opt.code}
          type="button"
          className={`lang-btn ${language === opt.code ? 'active' : ''}`}
          aria-pressed={language === opt.code}
          onClick={() => setLanguage(opt.code)}
        >
          {opt.label}
        </button>
      ))}

      <style jsx>{`
        .lang-selector {
          display: inline-flex;
          gap: 0.25rem;
          border: 1px solid var(--border-color);
          border-radius: 6px;
          padding: 0.15rem;
        }
        .lang-btn {
          background: transparent;
          color: var(--text-light);
          border: none;
          border-radius: 4px;
          padding: 0.25rem 0.6rem;
          font-size: 0.8rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .lang-btn:hover {
          color: var(--text-primary);
          background: rgba(148, 163, 184, 0.1);
        }
        .lang-btn.active {
          color: var(--primary-color);
          background: rgba(100, 181, 246, 0.1);
        }
      `}</style>
    </div>
  )
}

export default LanguageSelector
```

### Header changes (`src/components/Header.jsx`)

- Import and render `<LanguageSelector />` inside `.nav`, after `.nav-menu` (Req 5.1).
- Replace the hardcoded nav labels (`Home`, `Skills`, `Experience`, `Others`) with `t('nav.home')`, `t('nav.skills')`, `t('nav.experience')`, `t('nav.others')` via `useLanguage()` (Req 3.1, 3.3).
- Keep the existing `<style jsx>` block; add rules for placement of the selector within the header. The header remains hidden under 768px (unchanged media query).

### MobileBottomNav changes (`src/components/MobileBottomNav.jsx`)

- Derive `navItems` labels from `t()` (e.g. `label: t('nav.home')`) so labels translate (Req 3.2).
- Render `<LanguageSelector />` within the mobile nav so mobile visitors can switch language (Req 5.2). The selector stays interactive at viewport ≤ 768px (Req 5.3); no `pointer-events`/`disabled` gating is applied at mobile widths.
- Keep the existing bottom-nav `<style jsx>` block and add layout rules for the selector.

### App changes (`src/App.jsx`)

- Wrap the entire `<div className="App">` tree in `<LanguageProvider>` (inside or outside `<Router>`; placing it outside keeps context above routing) (Req 7.2).
- Replace the hardcoded WhatsApp `aria-label="Hubungi via WhatsApp"` with a value resolved from the UI-strings store. Because the anchor sits at the `App` level, either read it through a tiny wrapper that calls `useLanguage()`, or move the WhatsApp button into a small `WhatsAppButton` component that calls `t('aria.whatsapp')` (Req 3.4, 3.5).
- Section components continue receiving `portfolioData.*` as props; each resolves locale-keyed fields with `t()`.

## Data Models

### Locale-keyed value shape

Any translatable body string becomes a locale object:

```js
// LocaleString
{ id: "teks Bahasa Indonesia", en: "English text" }
```

Non-translatable fields (names, emails, URLs, icons, dates, technology tags, skill levels) stay as plain values.

### UI-strings store (`src/i18n/uiStrings.js`)

Flat map of UI-string keys to `LocaleString`, covering nav labels, buttons, section titles, and the WhatsApp aria-label (Req 3.1–3.5).

```js
export const uiStrings = {
  'nav.home':        { id: 'Beranda',     en: 'Home' },
  'nav.skills':      { id: 'Keahlian',    en: 'Skills' },
  'nav.experience':  { id: 'Pengalaman',  en: 'Experience' },
  'nav.work':        { id: 'Kerja',       en: 'Work' },
  'nav.others':      { id: 'Lainnya',     en: 'Others' },
  'nav.more':        { id: 'Lainnya',     en: 'More' },
  'section.about':   { id: 'Tentang',     en: 'About' },
  'section.projects':{ id: 'Proyek',      en: 'Projects' },
  'section.services':{ id: 'Layanan',     en: 'Services' },
  'section.education':{ id: 'Pendidikan', en: 'Education' },
  'section.certificate':{ id: 'Sertifikat', en: 'Certificates' },
  'section.contact': { id: 'Kontak',      en: 'Contact' },
  'btn.downloadCv':  { id: 'Unduh CV',    en: 'Download CV' },
  'btn.contactMe':   { id: 'Hubungi Saya', en: 'Contact Me' },
  'aria.whatsapp':   { id: 'Hubungi via WhatsApp', en: 'Contact via WhatsApp' }
}
```

(Keys above are representative; the implementation task will enumerate every hardcoded label found across components.)

### Restructured `database.js`

Every body-content string gains both locales. Illustrative before/after:

```js
// personal (Req 4.1)
personal: {
  name: "Aditya",                       // unchanged
  title:    { id: "Full Stack Developer (Backend-Oriented)",
              en: "Full Stack Developer (Backend-Oriented)" },
  subtitle: { id: "Frontend & Backend Developer",
              en: "Frontend & Backend Developer" },
  bio: {
    id: "Full Stack Developer dengan pengalaman lebih dari 6 tahun ...",
    en: "Full Stack Developer with over 6 years of experience ..."
  },
  email: "adityainfojob@gmail.com",     // unchanged
  avatar: "/image/adit.jpeg"            // unchanged
}

// experience[].description (Req 4.2)
{ id: 1, company: "PT. Sentra Inovasi Solusindo", position: "Programmer",
  description: { id: "Mengembangkan berbagai proyek ...",
                 en: "Developed various key projects ..." } }

// services[].title + description (Req 4.3)
{ id: 1, icon: "💻",
  title: { id: "Web Development", en: "Web Development" },
  description: { id: "Pembuatan website responsive ...",
                 en: "Building responsive, modern websites ..." } }

// projects[].description (Req 4.4)
{ id: 1, title: "HRIS — Absensi",
  description: { id: "Human Resource Management System dengan fitur absensi ...",
                 en: "Human Resource Management System with attendance ..." },
  technologies: ["Laravel", "PHP", "MySQL", "Bootstrap"] }

// education[].description (Req 4.5)
{ id: 1, institution: "Institut Teknologi dan Bisnis Swadharma",
  description: { id: "Berlokasi di Jakarta Pusat. IPK: 3.79/4.00.",
                 en: "Located in Central Jakarta. GPA: 3.79/4.00." } }

// certificates[].description (Req 4.6)
{ id: 1, title: "Database Management System",
  description: { id: "Sertifikasi di bidang Database Management System ...",
                 en: "Certification in Database Management System ..." },
  skills: ["Database", "SQL", "DBMS"] }
```

Translatable fields per collection:

| Data | Translated fields |
|------|-------------------|
| `personal` | `title`, `subtitle`, `bio` |
| `experience[]` | `description` |
| `services[]` | `title`, `description` |
| `projects[]` | `description` |
| `education[]` | `description` |
| `certificates[]` | `description` |

Fields left untranslated: names, `company`, `position`, `location`, `period`, `institution`, `degree`, `issuer`, `date`, `skills[]`, `technologies[]`, URLs, `icon`. These are proper nouns, dates, or technical terms that stay as-is per the product's language convention.

## Error Handling

- **Invalid persisted value:** `readInitialLanguage()` validates against `SUPPORTED_LANGUAGES`; any value not in `['id','en']` (including `null`, unexpected strings) resolves to `DEFAULT_LANGUAGE` (`'id'`) (Req 2.3, 2.4).
- **localStorage unavailable/throwing:** reads and writes are wrapped in `try/catch`; on failure the provider keeps an in-memory language and defaults to `'id'` on read.
- **Missing locale in an entry:** `resolve()` falls back to the `'id'` value when the active-language value is `undefined`, `null`, or empty (Req 6.4).
- **Hook used outside provider:** `useLanguage()` throws a descriptive error naming `LanguageProvider` (Req 6.5).
- **Unsupported `setLanguage` argument:** the setter ignores values outside `SUPPORTED_LANGUAGES`, keeping the current valid language.

## Testing Strategy

No test framework is currently configured in the project. If tests are introduced later, Vitest with React Testing Library is the natural fit for this Vite + React stack, and `fast-check` would supply property generators. The properties below are written to be executable under such a setup; until then they serve as the correctness specification and can be exercised manually.

- **Unit / example tests:** selector renders two options and marks the active one; hook throws outside the provider; empty storage yields `'id'`; each component renders expected labels for a given language.
- **Property tests:** the properties below, each run with at least 100 generated iterations, tagged `Feature: multilanguage-support, Property {n}: {property text}`. Generators draw from `SUPPORTED_LANGUAGES`, arbitrary strings (for invalid-storage and fallback cases), and constructed locale-keyed entries.
- **Manual checks:** responsive behavior of the mobile selector at ≤ 768px (media queries are not evaluated in jsdom); confirmation that `package.json` dependencies are unchanged (Req 7.1); confirmation the translation store originates in `database.js` / `uiStrings.js` (Req 7.3).

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system — essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: Setting the language updates the shared Active_Language

*For any* value drawn from the supported languages (`"id"`, `"en"`), calling `setLanguage` with that value SHALL make the Active_Language exposed by the hook equal to that value, and every consumer of the context SHALL observe the same value.

**Validates: Requirements 1.2, 5.4, 6.2**

### Property 2: Language persistence round trip

*For any* supported language value, selecting it (which writes to `localStorage`) and then re-initializing the provider from `localStorage` SHALL yield an Active_Language equal to the originally selected value.

**Validates: Requirements 2.1, 2.2**

### Property 3: Invalid persisted value falls back to Indonesian

*For any* stored string that is not exactly `"id"` or `"en"` (including absent values), initializing the Language_Provider SHALL set the Active_Language to Indonesian (`"id"`).

**Validates: Requirements 2.3, 2.4**

### Property 4: Translation store locale completeness

*For any* localized content entry in the Translation_Store (personal bio/title/subtitle, and every experience, service, project, education, and certificate translated field) and every UI-string entry, both an `"id"` value and an `"en"` value SHALL be present and non-empty.

**Validates: Requirements 4.1, 4.2, 4.3, 4.4, 4.5, 4.6**

### Property 5: Translation helper resolves to the Active_Language

*For any* locale-keyed entry that has values for both languages, and *for any* supported Active_Language, the translation helper SHALL return the value corresponding to the Active_Language.

**Validates: Requirements 1.3, 3.1, 3.2, 3.3, 3.4, 3.5, 4.7, 6.3**

### Property 6: Translation helper falls back to Indonesian for a missing locale

*For any* locale-keyed entry whose value for the Active_Language is absent or empty but whose Indonesian value is present, the translation helper SHALL return the Indonesian value.

**Validates: Requirements 6.4**
