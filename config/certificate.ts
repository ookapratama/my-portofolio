export interface CertificateProps {
  name: string;
  type: string;
  focus: string;
  logo: string;
  location: string;
  start_year: number;
  end_year: number | null;
  link: string;
}

export const CERTIFICATION: CertificateProps[] = [
  {
    name: 'VSGA Associate Data Scientist',
    type: 'Certification',
    focus: 'Data Science & Machine Learning',
    logo: '/certificate/digitalent.png',
    location: 'Universitas Dipa Makassar',
    start_year: 2023,
    end_year: 2023,
    link: 'https://drive.google.com/file/d/1X45tLScIaP2oUOT3YzHNf4MoOR8SyDcS/view?usp=sharing',
  },
];
