# Implementation Plan: Multi-language Support

## Overview

Add two-language (Indonesian / English) support to the React portfolio using React Context, a custom `useLanguage()` hook, a UI-strings store, and a restructured `database.js` where body content carries `{ id, en }` locale objects. No new dependencies. The plan builds bottom-up: the context/hook core first, then the string stores and selector, then wiring into `App.jsx`, then translating each navigation surface and section component.

Since no test framework is configured, all test sub-tasks are marked optional (`*`) and are not implemented as part of task execution. They capture the design's correctness properties for a future Vitest + React Testing Library + fast-check setup.

## Tasks

- [x] 1. Create the language context core and hook
  - [x] 1.1 Create `src/context/LanguageContext.jsx`
    - Create `src/context/` folder and the `LanguageContext.jsx` file
    - Export `STORAGE_KEY`, `DEFAULT_LANGUAGE` (`'id'`), `SUPPORTED_LANGUAGES` (`['id','en']`), and `LanguageContext`
    - Implement `readInitialLanguage()` reading `localStorage` with `try/catch`, validating against `SUPPORTED_LANGUAGES`, falling back to `'id'`
    - Implement `resolve(entry, language)` returning the active-language value and falling back to the `'id'` value when it is `undefined`, `null`, or empty
    - Implement `LanguageProvider` with `useState(readInitialLanguage)`, a `useEffect` that writes to `localStorage` on change (wrapped in `try/catch`), a `setLanguage(next)` that ignores unsupported values, and a `t(entryOrKey)` helper that resolves either a UI-string key or a locale-keyed entry
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 6.2, 6.4, 7.1_

  - [x] 1.2 Create `src/hooks/useLanguage.js`
    - Implement `useLanguage()` reading `LanguageContext` via `useContext`
    - Throw a descriptive error naming `LanguageProvider` when the context is `null`
    - Return `{ language, setLanguage, t }`
    - _Requirements: 6.1, 6.2, 6.3, 6.5_

  - [ ]* 1.3 Write property test for language state and persistence
    - **Property 1: Setting the language updates the shared Active_Language**
    - **Property 2: Language persistence round trip**
    - **Property 3: Invalid persisted value falls back to Indonesian**
    - **Validates: Requirements 1.2, 2.1, 2.2, 2.3, 2.4, 5.4, 6.2**

  - [ ]* 1.4 Write property test for the translation helper
    - **Property 5: Translation helper resolves to the Active_Language**
    - **Property 6: Translation helper falls back to Indonesian for a missing locale**
    - Include a unit test asserting `useLanguage()` throws outside the provider
    - **Validates: Requirements 1.3, 6.3, 6.4, 6.5**

- [x] 2. Create the UI-strings store
  - [x] 2.1 Create `src/i18n/uiStrings.js`
    - Create `src/i18n/` folder and the `uiStrings.js` file
    - Export a flat `uiStrings` map of `{ id, en }` entries for every hardcoded label
    - Enumerate all nav labels (desktop header + mobile bottom nav), button labels (Download CV, Contact Me), every section title, and the WhatsApp `aria-label` — audit `Header.jsx`, `MobileBottomNav.jsx`, `App.jsx`, `SectionTitle.jsx`, and each section component for hardcoded strings
    - Ensure both `id` and `en` values are present and non-empty for every key
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5_

  - [ ]* 2.2 Write property test for UI-strings completeness
    - **Property 4: Translation store locale completeness (UI-strings portion)**
    - Assert every `uiStrings` entry has non-empty `id` and `en` values
    - **Validates: Requirements 3.1, 3.2, 3.3, 3.4, 3.5**

- [x] 3. Create the LanguageSelector component
  - [x] 3.1 Create `src/components/LanguageSelector.jsx`
    - Render exactly two options (`ID` / `EN`) as buttons within a `role="group"` container
    - Read `language` and `setLanguage` from `useLanguage()`
    - Apply an `active` class and `aria-pressed` to the button matching the current language
    - Include a component-scoped `<style jsx>` block using CSS variables from `src/index.css`
    - _Requirements: 1.1, 1.4, 5.4_

- [x] 4. Restructure the content data store
  - [x] 4.1 Convert body content in `src/database.js` to locale objects
    - Convert `personal.title`, `personal.subtitle`, and `personal.bio` to `{ id, en }` objects
    - Convert each `experience[].description` to `{ id, en }`
    - Convert each `services[].title` and `services[].description` to `{ id, en }`
    - Convert each `projects[].description` to `{ id, en }`
    - Convert each `education[].description` to `{ id, en }`
    - Convert each `certificates[].description` to `{ id, en }`
    - Leave names, company, position, location, period, institution, degree, issuer, date, `skills[]`, `technologies[]`, URLs, and `icon` as plain values
    - Provide accurate English translations for every converted field
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 7.3_

  - [ ]* 4.2 Write property test for database locale completeness
    - **Property 4: Translation store locale completeness (database portion)**
    - Assert every converted field across `personal`, `experience`, `services`, `projects`, `education`, and `certificates` has non-empty `id` and `en` values
    - **Validates: Requirements 4.1, 4.2, 4.3, 4.4, 4.5, 4.6**

- [x] 5. Checkpoint - Verify the core builds
  - Run `npm run build` to confirm the context, hook, stores, selector, and restructured database compile without errors. Ask the user if questions arise.

- [x] 6. Wire the provider into the app
  - [x] 6.1 Wrap the app tree and translate the WhatsApp aria-label in `src/App.jsx`
    - Import and wrap the `<div className="App">` tree in `<LanguageProvider>` (above `<Router>`)
    - Replace the hardcoded WhatsApp `aria-label="Hubungi via WhatsApp"` with a value resolved from `uiStrings` via `t('aria.whatsapp')` — extract the WhatsApp button into a small component that calls `useLanguage()` so it can access the context inside the provider
    - _Requirements: 3.4, 3.5, 7.2_

- [ ] 7. Translate the navigation surfaces
  - [x] 7.1 Update `src/components/Header.jsx`
    - Read `t` from `useLanguage()` and replace hardcoded nav labels with `t('nav.*')` keys
    - Import and render `<LanguageSelector />` inside `.nav` after `.nav-menu`
    - Add `<style jsx>` rules for selector placement; keep the existing 768px media query
    - _Requirements: 3.1, 3.3, 5.1_

  - [x] 7.2 Update `src/components/MobileBottomNav.jsx`
    - Read `t` from `useLanguage()` and derive `navItems` labels from `t('nav.*')` keys
    - Render `<LanguageSelector />` within the mobile nav, keeping it interactive at viewport ≤ 768px (no `pointer-events`/`disabled` gating)
    - Add `<style jsx>` layout rules for the selector
    - _Requirements: 3.2, 5.2, 5.3_

- [x] 8. Translate the section components
  - [x] 8.1 Update section titles and static labels
    - Update `src/components/SectionTitle.jsx` (or callers) so section titles resolve via `t('section.*')`
    - Translate button labels (Download CV, Contact Me) in `Hero.jsx` / `Contact.jsx` via `t('btn.*')`
    - _Requirements: 3.3, 4.7_

  - [x] 8.2 Resolve locale-keyed content in About and Hero
    - In `About.jsx` and `Hero.jsx`, resolve `personal.title`, `personal.subtitle`, and `personal.bio` through `t()`
    - _Requirements: 4.1, 4.7_

  - [x] 8.3 Resolve locale-keyed content in Experience and Services
    - In `Experience.jsx`, resolve each `description` through `t()`
    - In `Services.jsx`, resolve each `title` and `description` through `t()`
    - _Requirements: 4.2, 4.3, 4.7_

  - [x] 8.4 Resolve locale-keyed content in Projects, Education, and Certificate
    - In `Projects.jsx`, resolve each `description` through `t()`
    - In `Education.jsx`, resolve each `description` through `t()`
    - In `Certificate.jsx`, resolve each `description` through `t()`
    - _Requirements: 4.4, 4.5, 4.6, 4.7_

  - [ ]* 8.5 Write component render tests for language switching
    - For a sampled set of components, assert expected labels/content render for each Active_Language
    - **Validates: Requirements 1.3, 3.1, 3.2, 3.3, 4.7**

- [x] 9. Final checkpoint - Verify the full build
  - Run `npm run build` and confirm all navigation surfaces and sections compile and switch language. Confirm `package.json` dependencies are unchanged. Ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional test tasks and are skipped during execution (no test framework is configured).
- Each task references specific requirements for traceability.
- Checkpoints ensure incremental validation via `npm run build`.
- Property tests capture the design's universal correctness properties for a future test setup.
- The build order keeps every piece integrated: the context/hook and stores come first, the provider wires into `App.jsx`, then each consuming surface is translated — no orphaned code.

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1.1", "2.1", "4.1"] },
    { "id": 1, "tasks": ["1.2", "1.3", "2.2", "4.2"] },
    { "id": 2, "tasks": ["1.4", "3.1"] },
    { "id": 3, "tasks": ["6.1"] },
    { "id": 4, "tasks": ["7.1", "7.2"] },
    { "id": 5, "tasks": ["8.1", "8.2", "8.3", "8.4"] },
    { "id": 6, "tasks": ["8.5"] }
  ]
}
```
