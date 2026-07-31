export const portfolioData = {
  // Informasi Pribadi
  personal: {
    name: "Aditya",
    title: "Full Stack Developer (Backend-Oriented)",
    subtitle: "Frontend & Backend Developer",
    email: "aditgumay68@gmail.com",
    phone: "+62 895-7012-39090",
    location: "Jakarta Selatan, Indonesia",
    address: "JL. Mampang Prapatan VIII, RT.004/001, Kel. Tegal Parang, 12790 Jakarta Selatan",
    birthDate: "19 April 2001",
    birthPlace: "Pandeglang",
    nationality: "WNI",
    bio: "Full Stack Developer dengan pengalaman lebih dari 6 tahun dalam pengembangan perangkat lunak. Terbiasa terlibat dalam proses pengembangan mulai dari analisis kebutuhan hingga pemeliharaan sistem, dengan fokus pada kualitas, keandalan, dan penyelesaian masalah secara efektif.",
    avatar: "/image/adet.png",
    resume: "https://drive.google.com/file/d/1234567890abcdef/view?usp=sharing"
  },

  // Social Media Links
  social: {
    github: "https://github.com/kdnknz",
    linkedin: "http://linkedin.com/in/aditya-392174237",
    instagram: "",
    twitter: "",
    website: "https://adityeuh.vercel.app"
  },

  // Skills
  skills: {
    frontend: [
      { name: "HTML5", icon: "\uD83C\uDF10", color: "#E34F26", level: 90 },
      { name: "JavaScript", icon: "\u26A1", color: "#F7DF1E", level: 85 },
      { name: "TypeScript", icon: "\uD83D\uDD37", color: "#3178C6", level: 75 },
      { name: "React.js", icon: "\u269B\uFE0F", color: "#61DAFB", level: 75 },
      { name: "Bootstrap", icon: "\uD83C\uDD71\uFE0F", color: "#7952B3", level: 90 }
    ],
    backend: [
      { name: "PHP", icon: "\uD83D\uDC18", color: "#777BB4", level: 90 },
      { name: "Laravel", icon: "\uD83D\uDD25", color: "#FF2D20", level: 90 },
      { name: "Node.js", icon: "\uD83D\uDFE2", color: "#339933", level: 80 },
      { name: "REST API", icon: "\uD83D\uDD17", color: "#FF6B35", level: 90 },
      { name: "Go", icon: "\uD83D\uDC39", color: "#00ADD8", level: 65 },
      { name: "Java", icon: "\u2615", color: "#ED8B00", level: 60 },
      { name: "Python", icon: "\uD83D\uDC0D", color: "#3776AB", level: 60 }
    ],
    database: [
      { name: "PostgreSQL", icon: "\uD83D\uDC18", color: "#336791", level: 90 },
      { name: "MySQL", icon: "\uD83D\uDC2C", color: "#4479A1", level: 90 }
    ],
    tools: [
      { name: "VS Code", icon: "\uD83D\uDCBB", color: "#007ACC", level: 95 },
      { name: "Postman", icon: "\uD83D\uDCEE", color: "#FF6C37", level: 80 },
      { name: "Git", icon: "\uD83D\uDCDD", color: "#F05032", level: 75 },
      { name: "GitHub", icon: "\uD83D\uDC19", color: "#181717", level: 75 },
      { name: "Docker", icon: "\uD83D\uDC33", color: "#2496ED", level: 70 }
    ]
  },

  // Projects
  projects: [
    {
      id: 1,
      title: "E-Commerce Application",
      description: "Aplikasi e-commerce lengkap dengan manajemen produk, keranjang belanja, dan sistem pembayaran",
      image: "/image/vaksin.jpeg",
      technologies: ["Laravel", "PHP", "MySQL", "Bootstrap"],
      liveUrl: "",
      githubUrl: "https://github.com/kdnknz",
      featured: true
    },
    {
      id: 2,
      title: "Courier Management System",
      description: "Sistem manajemen pengiriman kurir dengan tracking paket dan manajemen rute pengiriman",
      image: "/image/vaksin.jpeg",
      technologies: ["Laravel", "Node.js", "PostgreSQL", "REST API"],
      liveUrl: "",
      githubUrl: "https://github.com/kdnknz",
      featured: true
    },
    {
      id: 3,
      title: "Petty Cash System",
      description: "Sistem pengelolaan kas kecil perusahaan dengan laporan keuangan dan audit trail",
      image: "/image/vaksin.jpeg",
      technologies: ["Laravel", "PHP", "MySQL", "Bootstrap"],
      liveUrl: "",
      githubUrl: "https://github.com/kdnknz",
      featured: true
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Website portfolio personal dengan desain modern, animasi interaktif, dan responsive design",
      image: "/image/vaksin.jpeg",
      technologies: ["React.js", "Vite", "JavaScript"],
      liveUrl: "https://adityeuh.vercel.app",
      githubUrl: "https://github.com/kdnknz",
      featured: false
    }
  ],

  // Experience
  experience: [
    {
      id: 1,
      company: "PT. Sentra Inovasi Solusindo",
      position: "Full Stack Developer",
      period: "2019 - Sekarang",
      description: "Bekerja sebagai Full Stack Developer selama lebih dari 6 tahun. Terlibat dalam pengembangan berbagai sistem mulai dari analisis kebutuhan hingga pemeliharaan. Mengembangkan Courier Management System, Petty Cash System, Messaging Channel System, E-Commerce Application, dan berbagai proyek lainnya menggunakan Laravel, Node.js, PostgreSQL, dan MySQL."
    }
  ],

  // Education
  education: [
    {
      id: 1,
      institution: "Universitas (S1 Teknik Informatika)",
      degree: "S1 Teknik Informatika",
      period: "Sep 2021 - Sep 2025",
      description: "Program studi Teknik Informatika dengan fokus pada pengembangan perangkat lunak dan sistem informasi. IPK: 3.79/4.00."
    }
  ],

  // Services
  services: [
    {
      id: 1,
      title: "Web Development",
      description: "Pembuatan website responsive dan modern sesuai kebutuhan bisnis Anda, mulai dari company profile hingga aplikasi web kompleks",
      icon: "\uD83D\uDCBB"
    },
    {
      id: 2,
      title: "Backend Development",
      description: "Pengembangan server-side application, REST API, dan sistem manajemen database yang scalable dan reliable",
      icon: "\uD83D\uDD27"
    },
    {
      id: 3,
      title: "API Development",
      description: "Perancangan dan pengembangan REST API yang terstruktur, aman, dan terdokumentasi dengan baik",
      icon: "\uD83D\uDD17"
    },
    {
      id: 4,
      title: "Database Design",
      description: "Perancangan skema database yang efisien dan optimal menggunakan PostgreSQL atau MySQL",
      icon: "\uD83D\uDDC4\uFE0F"
    }
  ],

  // Certificates
  certificates: [
    {
      id: 1,
      title: "Database Management System",
      issuer: "Dicoding / Platform Sertifikasi",
      date: "2024",
      description: "Sertifikasi di bidang Database Management System mencakup konsep dan implementasi database relasional",
      image: "/image/vaksin.jpeg",
      credentialUrl: "",
      certificateUrl: "/image/cert/cert_dbms.pdf",
      credentialId: "",
      skills: ["Database", "SQL", "DBMS"]
    },
    {
      id: 2,
      title: "HR & Database Management System",
      issuer: "Dicoding / Platform Sertifikasi",
      date: "2024",
      description: "Sertifikasi pengelolaan HR dan sistem manajemen database dalam konteks bisnis",
      image: "/image/vaksin.jpeg",
      credentialUrl: "",
      certificateUrl: "/image/cert/cert_hr_dbms.pdf",
      credentialId: "",
      skills: ["HR Management", "Database", "DBMS"]
    },
    {
      id: 3,
      title: "PHP Pemula",
      issuer: "Dicoding",
      date: "2023",
      description: "Sertifikasi pemrograman PHP untuk pemula mencakup dasar-dasar bahasa PHP dan pengembangan web",
      image: "/image/vaksin.jpeg",
      credentialUrl: "",
      certificateUrl: "/image/cert/cert_php_pemula.pdf",
      credentialId: "",
      skills: ["PHP", "Web Development"]
    },
    {
      id: 4,
      title: "PostgreSQL",
      issuer: "Platform Sertifikasi",
      date: "2023",
      description: "Sertifikasi penggunaan dan pengelolaan database PostgreSQL",
      image: "/image/vaksin.jpeg",
      credentialUrl: "",
      certificateUrl: "/image/cert/cert_postgresql.pdf",
      credentialId: "",
      skills: ["PostgreSQL", "Database", "SQL"]
    },
    {
      id: 5,
      title: "SQL Basic",
      issuer: "HackerRank",
      date: "2023",
      description: "Sertifikasi kemampuan dasar SQL mencakup query, join, dan manipulasi data",
      image: "/image/vaksin.jpeg",
      credentialUrl: "",
      certificateUrl: "/image/cert/cert_sql_basic.pdf",
      credentialId: "",
      skills: ["SQL", "Database"]
    },
    {
      id: 6,
      title: "SQL for Data Science",
      issuer: "Platform Sertifikasi",
      date: "2023",
      description: "Sertifikasi penggunaan SQL dalam konteks data science dan analisis data",
      image: "/image/vaksin.jpeg",
      credentialUrl: "",
      certificateUrl: "/image/cert/cert_sql_data_science.pdf",
      credentialId: "",
      skills: ["SQL", "Data Science", "Data Analysis"]
    },
    {
      id: 7,
      title: "Web Development",
      issuer: "Platform Sertifikasi",
      date: "2023",
      description: "Sertifikasi pengembangan web mencakup frontend dan backend development",
      image: "/image/vaksin.jpeg",
      credentialUrl: "",
      certificateUrl: "/image/cert/cert_web_dev.pdf",
      credentialId: "",
      skills: ["Web Development", "HTML", "CSS", "JavaScript"]
    },
    {
      id: 8,
      title: "Sertifikasi Kompetensi (UKOM)",
      issuer: "Lembaga Sertifikasi Profesi",
      date: "2024",
      description: "Uji kompetensi profesi di bidang teknologi informasi",
      image: "/image/vaksin.jpeg",
      credentialUrl: "",
      certificateUrl: "/image/cert/cert_ukom.pdf",
      credentialId: "",
      skills: ["Kompetensi IT", "Profesional"]
    },
    {
      id: 9,
      title: "Sertifikat Magang",
      issuer: "PT. Sentra Inovasi Solusindo",
      date: "2022",
      description: "Sertifikat penyelesaian program magang sebagai Full Stack Developer",
      image: "/image/vaksin.jpeg",
      credentialUrl: "",
      certificateUrl: "/image/cert/cert_magang.pdf",
      credentialId: "",
      skills: ["Full Stack Development", "Laravel", "PHP"]
    },
    {
      id: 10,
      title: "Futsal Championship",
      issuer: "Panitia Turnamen",
      date: "2023",
      description: "Sertifikat partisipasi dalam kejuaraan futsal",
      image: "/image/vaksin.jpeg",
      credentialUrl: "",
      certificateUrl: "/image/cert/cert_futsal.pdf",
      credentialId: "",
      skills: ["Futsal", "Olahraga"]
    },
    {
      id: 11,
      title: "Seminar Technopreneurship",
      issuer: "Penyelenggara Seminar",
      date: "2023",
      description: "Sertifikat keikutsertaan dalam seminar technopreneurship tentang inovasi teknologi dan kewirausahaan",
      image: "/image/vaksin.jpeg",
      credentialUrl: "",
      certificateUrl: "/image/cert/Sertifikat Seminar Technopreneurship.pdf.pdf",
      credentialId: "",
      skills: ["Technopreneurship", "Inovasi", "Kewirausahaan"]
    },
    {
      id: 12,
      title: "Webinar Swadharma",
      issuer: "Swadharma",
      date: "2023",
      description: "Sertifikat keikutsertaan dalam webinar Swadharma",
      image: "/image/vaksin.jpeg",
      credentialUrl: "",
      certificateUrl: "/image/cert/Sertifikasi Webinar Swadharma Aditya.pdf",
      credentialId: "",
      skills: ["Webinar", "Pengembangan Diri"]
    }
  ]
}
