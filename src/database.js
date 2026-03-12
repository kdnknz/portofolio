export const portfolioData = {
  // Informasi Pribadi
  personal: {
    name: "Aditya",
    title: "Full Stack Developer (Backend-Oriented)",
    subtitle: "Frontend & Backend Developer",
    email: "email@example.com",
    phone: "+62 812-3456-7890",
    location: "Jakarta, Indonesia",
    bio: "Full Stack Developer (Backend-Oriented) dengan pengalaman membangun API dan aplikasi web yang dilengkapi audit log untuk mempercepat proses debugging dan troubleshooting. Pernah mengembangkan Courier Management System, Petty Cash System, Messaging Channel System, E-Commerce Application, dan lain-lain. Terbiasa melakukan integrasi dengan berbagai sistem lain serta berusaha mampu mendesain solusi secara mandiri ketika kebutuhan atau arahan dari project manager belum sepenuhnya tersedia.",
    avatar: "/image/adet.png", // Letakkan foto di folder public
    resume: "https://drive.google.com/file/d/1234567890abcdef/view?usp=sharing" // CV dummy URL
  },

  // Social Media Links
  social: {
    github: "https://github.com/adityauser",
    linkedin: "https://linkedin.com/in/aditya-developer",
    instagram: "https://instagram.com/aditya.dev",
    twitter: "https://twitter.com/adityacode",
    website: "https://aditya-portfolio.vercel.app"
  },

  // Skills
  skills: {
    frontend: [
      { name: "HTML5", icon: "🌐", color: "#E34F26", level: 90 },
      { name: "JavaScript", icon: "⚡", color: "#F7DF1E", level: 85 },
      { name: "React.js", icon: "⚛️", color: "#61DAFB", level: 60 },
      { name: "Bootstrap", icon: "🅱️", color: "#7952B3", level: 90 }
    ],
    backend: [
      { name: "PHP", icon: "🐘", color: "#777BB4", level: 90 },
      { name: "Laravel", icon: "🔥", color: "#777BB4", level: 90 },
      { name: "CakePHP", icon: "🎂", color: "#777BB4", level: 90 },
      { name: "Node.js", icon: "🟢", color: "#339933", level: 75 },
      { name: "Express.js", icon: "🚀", color: "#339933", level: 70 },
      { name: "Go", icon: "🐹", color: "#339933", level: 70 },
      { name: "REST API", icon: "�", color: "#FF6B35", level: 90 }
    ],
    database: [
      { name: "PostgreSQL", icon: "🐘", color: "#336791", level: 90 },
      { name: "MySQL", icon: "🐬", color: "#4479A1", level: 90 },
      { name: "Firebase", icon: "�", color: "#FFCA28", level: 60 }
    ],
    tools: [
      { name: "VS Code", icon: "�", color: "#007ACC", level: 95 },
      { name: "Postman", icon: "📮", color: "#FF6C37", level: 80 },
      { name: "Git", icon: "📝", color: "#F05032", level: 70 },
      { name: "GitHub", icon: "�", color: "#380395ff", level: 70 },
      { name: "Docker", icon: "🐳", color: "#2496ED", level: 70 }
    ]
  },

  // Projects
  projects: [
    {
      id: 1,
      title: "E-Commerce Website",
      description: "Website e-commerce lengkap dengan sistem pembayaran dan manajemen produk",
      image: "/image/vaksin.jpeg",
      technologies: ["React.js", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://ecommerce-demo.vercel.app",
      githubUrl: "https://github.com/adityauser/ecommerce-website",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Aplikasi manajemen tugas dengan fitur real-time collaboration",
      image: "/image/vaksin.jpeg",
      technologies: ["Vue.js", "Laravel", "MySQL", "Socket.io"],
      liveUrl: "https://taskmanager-app.netlify.app",
      githubUrl: "https://github.com/adityauser/task-management-app",
      featured: true
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Website portfolio responsive dengan desain modern dan clean",
      image: "/image/vaksin.jpeg",
      technologies: ["React.js", "Tailwind CSS", "Vite"],
      liveUrl: "https://aditya-portfolio.vercel.app",
      githubUrl: "https://github.com/adityauser/portfolio-website",
      featured: false
    }
  ],

  // Experience
  experience: [
    {
      id: 1,
      company: "PT. Tech Solutions",
      position: "Frontend Developer",
      period: "2023 - Sekarang",
      description: "Mengembangkan aplikasi web menggunakan React.js dan Vue.js, berkolaborasi dengan tim backend untuk integrasi API"
    },
    {
      id: 2,
      company: "CV. Digital Agency",
      position: "Web Developer",
      period: "2022 - 2023",
      description: "Membuat website company profile dan e-commerce menggunakan Laravel dan WordPress"
    },
    {
      id: 3,
      company: "Freelancer",
      position: "Full Stack Developer",
      period: "2021 - 2022",
      description: "Mengerjakan berbagai project web development untuk klien lokal dan internasional"
    }
  ],

  // Education
  education: [
    {
      id: 1,
      institution: "Universitas Indonesia",
      degree: "S1 Teknik Informatika",
      period: "2019 - 2023",
      description: "Fokus pada pengembangan software dan web development. IPK: 3.75/4.00. Aktif dalam organisasi mahasiswa dan berbagai kompetisi programming."
    },
    {
      id: 2,
      institution: "SMA Negeri 1 Jakarta",
      degree: "Ilmu Pengetahuan Alam (IPA)",
      period: "2016 - 2019",
      description: "Jurusan IPA dengan fokus pada Matematika dan Fisika. Aktif dalam ekstrakurikuler robotika dan olimpiade sains."
    },
    {
      id: 3,
      institution: "Bootcamp Full Stack Developer",
      degree: "Sertifikat Full Stack Web Development",
      period: "2011",
      description: "Intensive bootcamp covering modern web technologies including React.js, Node.js, dan database management. Menyelesaikan 5 project portfolio."
    }
  ],

  // Services
  services: [
    {
      id: 1,
      title: "Web Development",
      description: "Pembuatan website responsive dan modern sesuai kebutuhan bisnis Anda",
      icon: "💻"
    },
    {
      id: 2,
      title: "Mobile App Development",
      description: "Pengembangan aplikasi mobile cross-platform menggunakan React Native",
      icon: "📱"
    },
    {
      id: 3,
      title: "UI/UX Design",
      description: "Desain antarmuka yang user-friendly dan menarik untuk meningkatkan user experience",
      icon: "🎨"
    },
    {
      id: 4,
      title: "API Development",
      description: "Pembuatan REST API yang scalable dan secure untuk kebutuhan aplikasi",
      icon: "🔗"
    }
  ],

  // Certificates
  certificates: [
    {
      id: 1,
      title: "React Developer Certification",
      issuer: "Meta (Facebook)",
      date: "2023",
      description: "Comprehensive certification covering React fundamentals, hooks, state management, and advanced patterns",
      image: "/image/vaksin.jpeg",
      credentialUrl: "https://coursera.org/verify/professional-certificates/react-developer-meta",
      certificateUrl: "https://drive.google.com/file/d/1234567890/view?usp=sharing",
      credentialId: "REACT2023001",
      skills: ["React.js", "JavaScript", "JSX", "Hooks", "State Management"]
    },
    {
      id: 2,
      title: "Full Stack Web Development",
      issuer: "freeCodeCamp",
      date: "2023",
      description: "300-hour curriculum covering responsive web design, JavaScript algorithms, frontend libraries, and backend development",
      image: "/image/vaksin.jpeg",
      credentialUrl: "https://freecodecamp.org/certification/adityauser/full-stack-web-development",
      certificateUrl: "https://drive.google.com/file/d/0987654321/view?usp=sharing",
      credentialId: "FCC2023002",
      skills: ["HTML5", "CSS3", "JavaScript", "Node.js", "MongoDB", "Express.js"]
    },
    {
      id: 3,
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2023",
      description: "Foundational understanding of AWS Cloud concepts, services, security, architecture, pricing, and support",
      image: "/image/vaksin.jpeg",
      credentialUrl: "https://aws.amazon.com/verification/AWSCP2023003",
      certificateUrl: "https://drive.google.com/file/d/1122334455/view?usp=sharing",
      credentialId: "AWS2023003",
      skills: ["AWS", "Cloud Computing", "EC2", "S3", "Lambda", "RDS"]
    },
    {
      id: 4,
      title: "Google Analytics Certified",
      issuer: "Google",
      date: "2022",
      description: "Proficiency in Google Analytics including setup, configuration, data collection, and reporting",
      image: "/image/vaksin.jpeg",
      credentialUrl: "https://skillshop.exceedlms.com/student/award/GA2022004",
      certificateUrl: "https://drive.google.com/file/d/5566778899/view?usp=sharing",
      credentialId: "GA2022004",
      skills: ["Google Analytics", "Data Analysis", "Web Analytics", "Reporting"]
    },
    {
      id: 5,
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "2022",
      description: "Comprehensive course covering JavaScript fundamentals, ES6, regular expressions, debugging, and algorithm scripting",
      image: "/image/vaksin.jpeg",
      credentialUrl: "https://freecodecamp.org/certification/adityauser/javascript-algorithms-data-structures",
      certificateUrl: "https://drive.google.com/file/d/9988776655/view?usp=sharing",
      credentialId: "FCC2022005",
      skills: ["JavaScript", "ES6", "Algorithms", "Data Structures", "Problem Solving"]
    },
    {
      id: 6,
      title: "UI/UX Design Specialization",
      issuer: "California Institute of the Arts",
      date: "2022",
      description: "Comprehensive program covering design thinking, user research, prototyping, and visual design principles",
      image: "/image/vaksin.jpeg",
      credentialUrl: "https://coursera.org/verify/specialization/CALARTS2022006",
      certificateUrl: "https://drive.google.com/file/d/4433221100/view?usp=sharing",
      credentialId: "CALARTS2022006",
      skills: ["UI Design", "UX Research", "Prototyping", "Figma", "Design Thinking"]
    }
  ]
}