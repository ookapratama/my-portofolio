import { title } from "process";
import { ValidPages } from "./constants";
import { metadata } from "@/app/layout";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
    // featuredDescription: string;
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description:
      "Selamat datang di ruang kode saya. Mari membangun sesuatu yang luar biasa.",
    metadata: {
      title: "Backend Developer Portfolio",
      description:
        "Portofolio Profesional Ooka Pratama - Backend Developer berpengalaman dalam Laravel dan Machine Learning.",
    },
  },
  skills: {
    title: "Skills & Expertise",
    description: "Fokus teknologi dan keahlian pengembangan saat ini.",
    metadata: {
      title: "Keahlian & Teknologi",
      description:
        "Daftar skill dan teknologi yang dikuasai oleh Ooka Pratama.",
    },
  },
  experience: {
    title: "Project Experience",
    description:
      "Perjalanan pengembangan — dari ide hingga memberikan dampak nyata.",
    metadata: {
      title: "Pengalaman Proyek",
      description:
        "Daftar proyek dan pengalaman profesional Ooka Pratama sebagai pengembang.",
    },
  },
  contact: {
    title: "Get in Touch",
    description: "Mari terhubung dan jelajahi peluang kolaborasi.",
    metadata: {
      title: "Kontak Ooka Pratama",
      description:
        "Hubungi Ooka Pratama untuk kolaborasi atau pertanyaan proyek.",
    },
  },
  contributions: {
    title: "Contributions",
    description: "Kontribusi open-source dan keterlibatan dalam komunitas.",
    metadata: {
      title: "Kontribusi",
      description: "Daftar kontribusi open-source Ooka Pratama di GitHub.",
    },
  },
  resume: {
    title: "Resume",
    description: "Ringkasan profesional dan kualifikasi.",
    metadata: {
      title: "Resume & CV",
      description:
        "Unduh resume dan lihat kualifikasi profesional Ooka Pratama.",
    },
  },
  about: {
    title: "About Me",
    description:
      "Perjalanan saya dalam kode: proyek, pengalaman, skill, dan pendidikan.",
    metadata: {
      title: "Tentang Ooka Pratama",
      description:
        "Pelajari lebih lanjut tentang latar belakang dan motivasi Ooka Pratama sebagai developer.",
    },
  },
  career: {
    title: "Career Journey",
    description: "Timeline perjalanan profesional dan pendidikan.",
    metadata: {
      title: "Timeline Karier",
      description: "Riwayat karier dan perjalanan profesional Ooka Pratama.",
    },
  },
  dashboard: {
    title: "Developer Dashboard",
    description:
      "Statistik aktivitas GitHub dan kontribusi kode secara real-time.",
    metadata: {
      title: "Statistik Developer",
      description:
        "Melihat aktivitas koding dan kontribusi GitHub Ooka Pratama secara transparan.",
    },
  },
};
