// UI-strings translation store.
//
// A flat map of UI-string keys to locale objects ({ id, en }) covering every
// hardcoded label across the app: navigation (desktop header + mobile bottom
// nav), buttons, section titles and subtitles, the WhatsApp aria-label, and a
// few static labels. Body content (bio, experience, services, etc.) lives in
// src/database.js as locale-keyed values and is not duplicated here.
//
// Keys resolved via useLanguage().t('some.key'). Every entry MUST have a
// non-empty `id` and `en` value.

export const uiStrings = {
  // Navigation — desktop header (Header.jsx)
  'nav.home': { id: 'Beranda', en: 'Home' },
  'nav.skills': { id: 'Keahlian', en: 'Skills' },
  'nav.experience': { id: 'Pengalaman', en: 'Experience' },
  'nav.others': { id: 'Lainnya', en: 'Others' },

  // Navigation — mobile bottom nav (MobileBottomNav.jsx)
  'nav.work': { id: 'Kerja', en: 'Work' },
  'nav.more': { id: 'Lainnya', en: 'More' },

  // Buttons (Hero.jsx / Contact.jsx)
  'btn.downloadCv': { id: 'Unduh CV', en: 'Download CV' },
  'btn.contactMe': { id: 'Hubungi Saya', en: 'Contact Me' },

  // WhatsApp floating button aria-label (App.jsx)
  'aria.whatsapp': { id: 'Hubungi via WhatsApp', en: 'Contact via WhatsApp' },

  // Section titles
  'section.about': { id: 'Tentang Saya', en: 'About Me' },
  'section.skills': { id: 'Skills & Keahlian', en: 'Skills & Expertise' },
  'section.experience': { id: 'Pengalaman Kerja', en: 'Work Experience' },
  'section.projects': { id: 'Projects', en: 'Projects' },
  'section.services': { id: 'Layanan', en: 'Services' },
  'section.education': { id: 'Riwayat Pendidikan', en: 'Education' },
  'section.certificate': { id: 'Sertifikat', en: 'Certificates' },
  'section.contact': { id: 'Hubungi Saya', en: 'Contact Me' },
  'section.others': { id: 'Explore More', en: 'Explore More' },

  // Section subtitles
  'section.about.subtitle': {
    id: 'Background dan pengalaman saya',
    en: 'My background and experience'
  },
  'section.skills.subtitle': {
    id: 'Teknologi dan tools yang saya kuasai',
    en: 'Technologies and tools I work with'
  },
  'section.experience.subtitle': {
    id: 'Perjalanan karir dan pengalaman profesional saya',
    en: 'My career journey and professional experience'
  },
  'section.projects.subtitle': {
    id: 'Beberapa project yang telah saya kerjakan',
    en: 'A selection of projects I have worked on'
  },
  'section.services.subtitle': {
    id: 'Layanan yang saya tawarkan',
    en: 'Services I offer'
  },
  'section.education.subtitle': {
    id: 'Perjalanan akademik saya',
    en: 'My academic journey'
  },
  'section.certificate.subtitle': {
    id: 'Sertifikat dan pencapaian profesional',
    en: 'Certificates and professional achievements'
  },
  'section.contact.subtitle': {
    id: 'Mari berkolaborasi dan wujudkan project Anda',
    en: "Let's collaborate and bring your project to life"
  },
  'section.others.subtitle': {
    id: 'Jelajahi lebih dalam tentang saya',
    en: 'Explore more about me'
  },

  // Hero greeting (Hero.jsx)
  'hero.greeting': { id: 'Hi, saya', en: "Hi, I'm" }
}
