# Requirements Document

## Introduction

This feature adds multi-language (internationalization) support to the React portfolio website. The site currently presents all UI and content in Indonesian (Bahasa Indonesia). This feature introduces a language selector offering exactly two options — Indonesian and English — that switches both UI labels (navigation, buttons, aria-labels, section titles) and all body content (bio, experience descriptions, services, projects, education, certificates).

The implementation uses React Context and a custom hook with no new dependencies, consistent with the project's dependency-light, `useState`/`useEffect`-only approach. The selected language persists across browser sessions via `localStorage`, defaulting to Indonesian on first visit. The language selector appears in both the desktop header and the mobile bottom navigation.

## Glossary

- **Portfolio_App**: The React single-page application defined in `src/App.jsx` that renders the portfolio.
- **Language_Provider**: The React Context provider component that holds the active language state and exposes it to descendant components.
- **Language_Selector**: The UI control that lets a Visitor choose between Indonesian and English.
- **Translation_Store**: The data structure holding both Indonesian and English versions of all UI labels and body content, sourced from `src/database.js`.
- **Active_Language**: The currently selected language, one of the two values `"id"` (Indonesian) or `"en"` (English).
- **Language_Hook**: The custom `useLanguage()` hook that exposes the Active_Language, a setter, and a translation helper to components.
- **Visitor**: A person viewing the portfolio website in a browser.
- **Persisted_Language**: The Active_Language value stored in browser `localStorage` under a defined key.

## Requirements

### Requirement 1

**User Story:** As a Visitor, I want to choose between Indonesian and English, so that I can read the portfolio in my preferred language.

#### Acceptance Criteria

1. THE Language_Selector SHALL present exactly two language options: Indonesian and English.
2. WHEN a Visitor selects a language option, THE Language_Provider SHALL set the Active_Language to the selected value.
3. WHEN the Active_Language changes, THE Portfolio_App SHALL render all UI labels and body content in the Active_Language.
4. THE Language_Selector SHALL visually indicate which language is currently the Active_Language.

### Requirement 2

**User Story:** As a Visitor, I want my language choice to be remembered, so that I do not have to reselect it on every visit.

#### Acceptance Criteria

1. WHEN a Visitor selects a language option, THE Language_Provider SHALL write the selected value to the Persisted_Language in `localStorage`.
2. WHEN the Portfolio_App loads AND a Persisted_Language value exists, THE Language_Provider SHALL initialize the Active_Language to the Persisted_Language value.
3. WHEN the Portfolio_App loads AND no Persisted_Language value exists, THE Language_Provider SHALL initialize the Active_Language to Indonesian.
4. IF the Persisted_Language value is neither `"id"` nor `"en"`, THEN THE Language_Provider SHALL initialize the Active_Language to Indonesian.

### Requirement 3

**User Story:** As a Visitor, I want the whole interface translated, so that navigation and controls make sense in my chosen language.

#### Acceptance Criteria

1. WHILE the Active_Language is English, THE Portfolio_App SHALL render all navigation labels in the desktop header in English.
2. WHILE the Active_Language is English, THE Portfolio_App SHALL render all navigation labels in the mobile bottom navigation in English.
3. WHILE the Active_Language is English, THE Portfolio_App SHALL render all button labels and section titles in English.
4. WHILE the Active_Language is English, THE Portfolio_App SHALL render the WhatsApp floating button `aria-label` in English.
5. WHILE the Active_Language is Indonesian, THE Portfolio_App SHALL render all navigation labels, button labels, section titles, and the WhatsApp floating button `aria-label` in Indonesian.

### Requirement 4

**User Story:** As a Visitor, I want the body content translated, so that I can understand the bio, experience, services, and other sections in my chosen language.

#### Acceptance Criteria

1. THE Translation_Store SHALL contain an Indonesian version and an English version for the personal bio, title, and subtitle.
2. THE Translation_Store SHALL contain an Indonesian version and an English version for each experience description.
3. THE Translation_Store SHALL contain an Indonesian version and an English version for each service title and description.
4. THE Translation_Store SHALL contain an Indonesian version and an English version for each project description.
5. THE Translation_Store SHALL contain an Indonesian version and an English version for each education description.
6. THE Translation_Store SHALL contain an Indonesian version and an English version for each certificate description.
7. WHEN the Active_Language changes, THE Portfolio_App SHALL render the body content of every affected section in the Active_Language.

### Requirement 5

**User Story:** As a Visitor, I want the language control available on both desktop and mobile layouts, so that I can switch language regardless of screen size.

#### Acceptance Criteria

1. THE Portfolio_App SHALL render a Language_Selector within the desktop header component defined in `src/components/Header.jsx`.
2. THE Portfolio_App SHALL render a Language_Selector within the mobile bottom navigation component defined in `src/components/MobileBottomNav.jsx`.
3. WHILE the viewport width is 768 pixels or less, THE Portfolio_App SHALL keep the mobile bottom navigation Language_Selector interactive.
4. WHEN a Visitor selects a language on either Language_Selector, THE Language_Provider SHALL apply the same Active_Language across both selectors.

### Requirement 6

**User Story:** As a component developer, I want a single hook to access language state and translations, so that components can read the active language and translated strings consistently.

#### Acceptance Criteria

1. THE Language_Hook SHALL expose the Active_Language value to any component that calls the hook.
2. THE Language_Hook SHALL expose a setter that updates the Active_Language.
3. THE Language_Hook SHALL expose a translation helper that returns the string matching the Active_Language for a given content entry.
4. WHERE a component requests a translation entry that has no value for the Active_Language, THE translation helper SHALL return the Indonesian value for that entry.
5. IF a component calls the Language_Hook outside the Language_Provider, THEN THE Language_Hook SHALL throw an error identifying that the hook must be used within the Language_Provider.

### Requirement 7

**User Story:** As a maintainer, I want the feature built without new dependencies, so that the project stays lightweight and consistent with its existing architecture.

#### Acceptance Criteria

1. THE feature SHALL be implemented using React Context and a custom hook without adding new entries to `package.json` dependencies.
2. THE Language_Provider SHALL wrap the Portfolio_App component tree in `src/App.jsx`.
3. THE Translation_Store SHALL be sourced from the existing `src/database.js` module and passed to components as props consistent with the current data-driven pattern.
