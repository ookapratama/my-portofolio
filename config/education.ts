export interface EducationProps {
  school: string;
  major: string;
  logo: string;
  location: string;
  degree: string;
  start_year: number;
  end_year: number;
  link: string;
}

export const EDUCATION: EducationProps[] = [
  {
    school: 'Dipa Makassar University',
    major: 'Informatics Engineering, (S.Kom)',
    logo: '/education/undipa.png',
    location: 'Makassar',
    degree: "Bachelor's degree",
    start_year: 2020,
    end_year: 2025,
    link: 'https://undipa.ac.id',
  },
  {
    school: 'SMKN 2 Makassar',
    major: 'Network and Computer Engineering (TKJ)',
    logo: '/education/smk2.png',
    location: 'Makassar',
    degree: "Vocational High School Diploma",
    start_year: 2017,
    end_year: 2020,
    link: 'https://smkn2mks.sch.id/',
  },
];
