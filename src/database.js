export const portfolioData = {
  // Informasi Pribadi
  personal: {
    name: "Aditya",
    title: "Full Stack Developer (Backend-Oriented)",
    subtitle: "Frontend & Backend Developer",
    email: "adityainfojob@gmail.com",
    phone: "+62 895-7012-39090",
    location: "Jakarta Selatan, Indonesia",
    address: "JL. Mampang Prapatan VIII, RT.004/001, Kel. Tegal Parang, 12790 Jakarta Selatan",
    birthDate: "19 April 2001",
    birthPlace: "Pandeglang",
    nationality: "WNI",
    bio: "Full Stack Developer dengan pengalaman lebih dari 6 tahun dalam pengembangan perangkat lunak. Terbiasa terlibat dalam proses pengembangan mulai dari analisis kebutuhan hingga pemeliharaan sistem, dengan fokus pada kualitas, keandalan, dan penyelesaian masalah secara efektif.",
    avatar: "/image/adit.jpeg",
    resume: "/CV Aditya Full Stack Developer.pdf"
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
      { name: "CSS3", icon: "\uD83C\uDFA8", color: "#1572B6", level: 85 },
      { name: "JavaScript", icon: "\u26A1", color: "#F7DF1E", level: 85 },
      { name: "TypeScript", icon: "\uD83D\uDD37", color: "#3178C6", level: 75 }
    ],
    backend: [
      { name: "PHP", icon: "\uD83D\uDC18", color: "#777BB4", level: 90 },
      { name: "Node.js", icon: "\uD83D\uDFE2", color: "#339933", level: 80 },
      { name: "REST API", icon: "\uD83D\uDD17", color: "#FF6B35", level: 90 },
      { name: "Go", icon: "\uD83D\uDC39", color: "#00ADD8", level: 65 },
      { name: "Java", icon: "\u2615", color: "#ED8B00", level: 50 },
      { name: "Python", icon: "\uD83D\uDC0D", color: "#3776AB", level: 60 }
    ],
    framework: [
      { name: "React.js", icon: "\u269B\uFE0F", color: "#61DAFB", level: 75 },
      { name: "Next.js", icon: "\u25B2", color: "#000000", level: 70 },
      { name: "Vue.js", icon: "\uD83D\uDFE9", color: "#4FC08D", level: 70 },
      { name: "Bootstrap", icon: "\uD83C\uDD71\uFE0F", color: "#7952B3", level: 90 },
      { name: "Tailwind CSS", icon: "\uD83C\uDF2C\uFE0F", color: "#06B6D4", level: 80 },
      { name: "jQuery", icon: "\uD83D\uDCD8", color: "#0769AD", level: 80 },
      { name: "Vite", icon: "\u26A1", color: "#646CFF", level: 75 },
      { name: "Laravel", icon: "\uD83D\uDD25", color: "#FF2D20", level: 90 },
      { name: "Livewire", icon: "\uD83D\uDD04", color: "#FB70A9", level: 75 },
      { name: "Inertia.js", icon: "\uD83E\uDDED", color: "#9553E9", level: 75 },
      { name: "CodeIgniter", icon: "\uD83D\uDD25", color: "#EF4223", level: 80 },
      { name: "CakePHP", icon: "\uD83C\uDF70", color: "#D33C43", level: 70 },
      { name: "OpenCart", icon: "\uD83D\uDED2", color: "#2AA9E0", level: 70 },
      { name: "Express.js", icon: "\uD83D\uDE82", color: "#000000", level: 80 },
      { name: "Gin", icon: "\uD83C\uDF78", color: "#00ADD8", level: 65 }
    ],
    database: [
      { name: "PostgreSQL", icon: "\uD83D\uDC18", color: "#336791", level: 90 },
      { name: "MySQL", icon: "\uD83D\uDC2C", color: "#4479A1", level: 90 },
      { name: "MariaDB", icon: "\uD83E\uDD9C", color: "#003545", level: 80 },
      { name: "SQLite", icon: "\uD83E\uDEB6", color: "#003B57", level: 75 }
    ],
    tools: [
      { name: "VS Code", icon: "\uD83D\uDCBB", color: "#007ACC", level: 95 },
      { name: "Kiro (AWS)", icon: "\uD83E\uDD16", color: "#FF9900", level: 80 },
      { name: "Claude AI", icon: "\uD83E\uDDE0", color: "#6B4FBB", level: 85 },
      { name: "AWS", icon: "\u2601\uFE0F", color: "#FF9900", level: 70 },
      { name: "Linux Server", icon: "\uD83D\uDDA5\uFE0F", color: "#FCC624", level: 80 },
      { name: "Postman", icon: "\uD83D\uDCEE", color: "#FF6C37", level: 80 },
      { name: "Git", icon: "\uD83D\uDCDD", color: "#F05032", level: 75 },
      { name: "GitHub", icon: "\uD83D\uDC19", color: "#181717", level: 75 },
      { name: "GitLab", icon: "\uD83E\uDD8A", color: "#FC6D26", level: 75 },
      { name: "Docker", icon: "\uD83D\uDC33", color: "#2496ED", level: 70 },
      { name: "Nginx", icon: "\uD83D\uDFE9", color: "#009639", level: 75 },
      { name: "Apache", icon: "\uD83E\uDEB6", color: "#D22128", level: 75 }
    ]
  },

  // Projects
  projects: [
    {
      id: 1,
      title: "HRIS — Absensi",
      description: "Human Resource Management System dengan fitur absensi karyawan, rekap kehadiran, dan manajemen data pegawai",
      technologies: ["Laravel", "PHP", "MySQL", "Bootstrap"],
      liveUrl: "",
      githubUrl: "",
      featured: true
    },
    {
      id: 2,
      title: "Messaging Channel System",
      description: "Sistem pengiriman pesan terintegrasi dengan Meta API untuk mengirim WhatsApp secara otomatis ke pelanggan",
      technologies: ["Laravel", "Node.js", "REST API", "Meta API", "WhatsApp"],
      liveUrl: "",
      githubUrl: "",
      featured: true
    },
    {
      id: 3,
      title: "E-Commerce Application",
      description: "Aplikasi e-commerce lengkap dengan manajemen produk, keranjang belanja, dan sistem pembayaran",
      technologies: ["Laravel", "PHP", "MySQL", "Bootstrap"],
      liveUrl: "",
      githubUrl: "",
      featured: true
    },
    {
      id: 4,
      title: "LSM — Laporan Stok Malam",
      description: "Sistem laporan stok malam untuk Bakmie GM, mencatat dan merekap stok bahan baku setiap akhir hari operasional",
      technologies: ["Laravel", "PHP", "MySQL", "Bootstrap"],
      liveUrl: "",
      githubUrl: "",
      featured: true
    },
    {
      id: 5,
      title: "Courier Management System",
      description: "Sistem manajemen pengiriman kurir dengan tracking paket dan manajemen rute pengiriman",
      technologies: ["Laravel", "Node.js", "PostgreSQL", "REST API"],
      liveUrl: "",
      githubUrl: "",
      featured: false
    },
    {
      id: 6,
      title: "Petty Cash System",
      description: "Sistem pengelolaan kas kecil perusahaan dengan laporan keuangan dan audit trail",
      technologies: ["Laravel", "PHP", "MySQL", "Bootstrap"],
      liveUrl: "",
      githubUrl: "",
      featured: false
    },
    {
      id: 7,
      title: "Portfolio Website",
      description: "Website portfolio personal dengan desain modern, animasi interaktif, dan responsive design",
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
      position: "Programmer",
      location: "Jakarta Utara",
      period: "Mei 2022 - Sekarang",
      description: "Mengembangkan berbagai proyek penting seperti HRIS, CMS, E-Commerce, E-Ticketing, dan Pengelolaan Petty Cash serta proyek lainnya."
    },
    {
      id: 2,
      company: "PT. Sentra Inovasi Solusindo",
      position: "Junior Programmer",
      location: "Jakarta Utara",
      period: "Nov 2019 - Mei 2022",
      description: "Berperan sebagai Junior Programmer dalam tim pengembangan software, terlibat dalam proses pengembangan aplikasi dan sistem internal perusahaan."
    },
    {
      id: 3,
      company: "Kantor Pelayanan Pajak Pratama Cilogon",
      position: "Karyawan Magang",
      location: "Cilegon",
      period: "2019",
      description: "Ditempatkan pada Subbagian Umum Dan Kepatuhan Internal (SUKI). Mengerjakan laporan keluar masuk barang berupa ATK."
    }
  ],

  // Education
  education: [
    {
      id: 1,
      institution: "Institut Teknologi dan Bisnis Swadharma",
      degree: "S1 Teknik Informatika",
      period: "Sep 2021 - Sep 2025",
      description: "Berlokasi di Jakarta Pusat. IPK: 3.79/4.00."
    },
    {
      id: 2,
      institution: "SMK Negeri 1 Pandeglang",
      degree: "Sekolah Menengah Kejuruan",
      period: "2016 - 2019",
      description: "Berlokasi di Pandeglang, Banten."
    },
    {
      id: 3,
      institution: "SMP Negeri 2 Cimanuk",
      degree: "Sekolah Menengah Pertama",
      period: "2013 - 2016",
      description: "Berlokasi di Pandeglang, Banten."
    },
    {
      id: 4,
      institution: "SDN 2 Kadubungbang",
      degree: "Sekolah Dasar",
      period: "2007 - 2013",
      description: "Berlokasi di Pandeglang, Banten."
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
      credentialUrl: "",
      certificateUrl: "/image/cert/Sertifikasi Webinar Swadharma Aditya.pdf",
      credentialId: "",
      skills: ["Webinar", "Pengembangan Diri"]
    }
  ]
}
