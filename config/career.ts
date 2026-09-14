export interface CareerExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: string;
  endDate?: string | null;
  companyUrl?: string;
  logo?: string;
  locationType: string;
  type: string;
}

export const careerExperiences: CareerExperienceInterface[] = [
  {
    id: "freelance",
    position: "Freelance Software Engineer",
    company: "Freelance",
    location: "Makassar, Sulawesi Selatan",
    startDate: '2021-12',
    endDate: "",
    companyUrl: "/experience",
    logo: "/career/freelance.png",
    locationType:'Remote',
    type: 'Freelance'
  },
  {
    id: "caturPutraHarmonis",
    position: "IT Software (Web Developer & Help Desk)",
    company: "PT Catur Putra Harmonis",
    location: "Makassar, Sulawesi Selatan",
    startDate: '2026-01',
    endDate: "2026-03",
    logo: "/career/catur.png",
    locationType:'Onsite',
    type: 'Fulltime'
  },
  {
    id: "siddiSolution",
    position: "Fullstack Developer and Lecturer",
    company: "CV. Siddi Solution Technology",
    location: "Makassar, Sulawesi Selatan",
    startDate: '2024-04',
    endDate: "2025-07",
    companyUrl: "https://www.instagram.com/cv.siddisolutiontechno/",
    logo: "/career/siddi.png",
    locationType:'Hybrid Remote',
    type: 'Freelance'
  },
  {
    id: "pelindo",
    position: "IT Support Intern",
    company: "PT Pelabuhan Indonesia (Persero) Cabang Makassar",
    location: "Makassar, Sulawesi Selatan",
    startDate: '2019-05',
    endDate: "2019-09",
    companyUrl: "https://pelindo.co.id/port/pelabuhan-makassar",
    logo: "/career/pelindo1.png",
    locationType:'Onsite',
    type: 'Fulltime'
  },
];
