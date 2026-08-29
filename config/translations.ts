import { type Language } from "@/app/store/use-language";

// `en` is the canonical shape. `Translations` is derived from it, so the `id`
// tree below must match it key-for-key — missing/extra keys are compile errors.
const en = {
  nav: {
    home: "Home",
    skills: "Skills",
    experience: "Experience",
    contact: "Contact",
    about: "About",
    dashboard: "Dashboard",
    more: "More",
  },
  hero: {
    greeting:
      "Explore my code space, and let’s build something amazing together.",
    role: "Developer",
    ctaGithub: "GitHub",
    ctaDashboard: "Dashboard",
    ctaContact: "Contact",
  },
  sections: {
    skillsTitle: "Currently Learning",
    skillsDesc: "Technologies and tools I'm actively focused on learning right now.",
    expTitle: "Project Experience",
    expDesc:
      "My development journey — from building ideas to making an impact.",
    viewAll: "View All",
  },
  experience: {
    readMore: "Read more",
    backToPortfolio: "Back to Portfolio",
    techStack: "Tech Stack",
    projectShowcase: "Project Showcase",
    present: "Present",
  },
  contact: {
    title: "Get in Touch",
    desc: "Let's connect and explore collaborations.",
    githubCard: {
      title: "Interested in the code?",
      desc: "This project is open source. Explore the code on GitHub.",
      button: "Source Code",
    },
    form: {
      name: "Name",
      namePlaceholder: "Enter your name",
      email: "Email",
      emailPlaceholder: "Enter your email",
      message: "Message",
      messagePlaceholder: "Enter your message",
      social: "Social (optional)",
      socialPlaceholder: "Link for social account",
      submit: "Submit",
      submitting: "Sending...",
      successTitle: "Thank you!",
      successDesc:
        "Your message has been received! I appreciate your contact and will get back to you shortly.",
      errorTitle: "Something went wrong",
      errorDesc:
        "We couldn't send your message. Please try again in a moment.",
      validation: {
        nameMin: "Name must contain at least 3 characters.",
        emailInvalid: "Please enter a valid email.",
        messageMin: "Please write something more descriptive.",
        socialInvalid: "Please enter a valid URL.",
      },
    },
  },
  pages: {
    experience: {
      title: "Project Experience",
      description: "Development journey — from ideas to making an impact.",
    },
    about: {
      title: "About Me",
      description:
        "My journey in code: projects, experience, skills, and education.",
    },
    contact: {
      title: "Get in Touch",
      description: "Let's connect and explore collaboration opportunities.",
    },
    dashboard: {
      title: "Developer Dashboard",
      description:
        "Real-time GitHub activity statistics and code contributions.",
      contributions: "My Contributions",
      contributionsDesc: "My contributions from last year on github.",
    },
  },
  dashboard: {
    total: "Total",
    thisWeek: "This Week",
    bestDay: "Best Day",
    average: "Average",
    perDay: "/ day",
    less: "Less",
    more: "More",
    contributionsOn: "contributions on",
    currentStreak: "Current Streak",
    longestStreak: "Longest Streak",
    days: "days",
  },
  about: {
    story: "My Story",
    resume: "Resume",
    skills: "Skills & Tools",
    career: "Career Journey",
    education: "Education",
    organization: "Organizations",
    certificate: "Certificates",
    careerDesc: "Professional journey.",
    educationDesc: "My educational journey.",
    orgDesc: "My organizational experience.",
    certDesc: "My professional certifications & credentials.",
  },
  footer: {
    rights: "All rights reserved.",
  },
};

export type Translations = typeof en;

export const translations: Record<Language, Translations> = {
  en,
  id: {
    nav: {
      home: "Beranda",
      skills: "Keahlian",
      experience: "Pengalaman",
      contact: "Kontak",
      about: "Tentang",
      dashboard: "Dashboard",
      more: "Lainnya",
    },
    hero: {
      greeting:
        "Jelajahi ruang kode saya, dan mari bangun sesuatu yang luar biasa bersama.",
      role: "Developer",
      ctaGithub: "GitHub",
      ctaDashboard: "Dashboard",
      ctaContact: "Kontak",
    },
    sections: {
      skillsTitle: "Sedang Dipelajari",
      skillsDesc: "Teknologi dan tools yang sedang aktif saya pelajari dan fokuskan saat ini.",
      expTitle: "Pengalaman Proyek",
      expDesc:
        "Perjalanan pengembangan saya — dari ide hingga memberikan dampak nyata.",
      viewAll: "Lihat Semua",
    },
    experience: {
      readMore: "Selengkapnya",
      backToPortfolio: "Kembali ke Portofolio",
      techStack: "Teknologi",
      projectShowcase: "Galeri Proyek",
      present: "Sekarang",
    },
    contact: {
      title: "Hubungi Saya",
      desc: "Mari terhubung dan jelajahi peluang kolaborasi.",
      githubCard: {
        title: "Tertarik dengan kodenya?",
        desc: "Proyek ini bersifat open source. Jelajahi kodenya di GitHub.",
        button: "Source Code",
      },
      form: {
        name: "Nama",
        namePlaceholder: "Masukkan nama Anda",
        email: "Email",
        emailPlaceholder: "Masukkan email Anda",
        message: "Pesan",
        messagePlaceholder: "Masukkan pesan Anda",
        social: "Sosial (opsional)",
        socialPlaceholder: "Tautan akun sosial Anda",
        submit: "Kirim",
        submitting: "Mengirim...",
        successTitle: "Terima kasih!",
        successDesc:
          "Pesan Anda telah diterima! Terima kasih telah menghubungi saya, saya akan segera membalasnya.",
        errorTitle: "Terjadi kesalahan",
        errorDesc: "Pesan Anda gagal terkirim. Silakan coba lagi sesaat lagi.",
        validation: {
          nameMin: "Nama harus terdiri dari minimal 3 karakter.",
          emailInvalid: "Masukkan alamat email yang valid.",
          messageMin: "Tuliskan pesan yang lebih deskriptif.",
          socialInvalid: "Masukkan URL yang valid.",
        },
      },
    },
    pages: {
      experience: {
        title: "Pengalaman Proyek",
        description:
          "Perjalanan pengembangan — dari ide hingga memberikan dampak nyata.",
      },
      about: {
        title: "Tentang Saya",
        description:
          "Perjalanan saya dalam kode: proyek, pengalaman, skill, dan pendidikan.",
      },
      contact: {
        title: "Hubungi Saya",
        description: "Mari terhubung dan jelajahi peluang kolaborasi.",
      },
      dashboard: {
        title: "Statistik Developer",
        description: "Aktivitas GitHub dan kontribusi kode secara real-time.",
        contributions: "Kontribusi Saya",
        contributionsDesc: "Kontribusi saya di GitHub selama setahun terakhir.",
      },
    },
    dashboard: {
      total: "Total",
      thisWeek: "Minggu Ini",
      bestDay: "Hari Terbaik",
      average: "Rata-rata",
      perDay: "/ hari",
      less: "Sedikit",
      more: "Banyak",
      contributionsOn: "kontribusi pada",
      currentStreak: "Streak Saat Ini",
      longestStreak: "Streak Terpanjang",
      days: "hari",
    },
    about: {
      story: "Cerita Saya",
      resume: "Resume",
      skills: "Keahlian & Tools",
      career: "Perjalanan Karier",
      education: "Pendidikan",
      organization: "Organisasi",
      certificate: "Sertifikat",
      careerDesc: "Perjalanan profesional saya.",
      educationDesc: "Riwayat pendidikan saya.",
      orgDesc: "Pengalaman berorganisasi saya.",
      certDesc: "Sertifikasi dan kredensial profesional saya.",
    },
    footer: {
      rights: "Hak cipta dilindungi.",
    },
  },
};
