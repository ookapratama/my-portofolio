export interface OrganizationProps {
  name: string;
  type: string;
  focus: string;
  logo: string;
  location: string;
  start_year: number;
  end_year: number | null;
  link: string;
}

export const ORGANIZATION: OrganizationProps[] = [
  {
    name: 'Dipanegara Computer Club',
    type: 'Study Club',
    focus: 'Information Technology',
    logo: '/organization/dcc.png',
    location: 'Makassar',
    start_year: 2021,
    end_year: null,
    link: 'https://dcc-dp.com',
  },
];
