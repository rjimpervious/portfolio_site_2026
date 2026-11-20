// All site content lives here. Edit this file to update the portfolio.
import seceda from '../assets/photos/seceda.webp';
import winterSummit from '../assets/photos/winter-summit.webp';
import koenigssee from '../assets/photos/koenigssee.webp';
import breithorn from '../assets/photos/breithorn.webp';
import cadini from '../assets/photos/cadini.webp';
import treCime from '../assets/photos/tre-cime.webp';
import fushimi from '../assets/photos/fushimi-inari.webp';

export const profile = {
  name: 'Rannie John Lopez',
  shortName: 'RJ Lopez',
  role: 'Data Platform Engineer',
  pitch: 'I build reliable data platforms on AWS, Airflow & Kubernetes.',
  location: 'Munich, Germany',
  workAuth: 'EU citizen, no visa sponsorship required',
  email: 'contact@rjlopez.me',
  links: {
    github: 'https://github.com/rjimpervious',
    linkedin: 'https://www.linkedin.com/in/ranniejohnlopez',
  },
  summary: [
    'Data Platform Engineer with 5+ years of experience building scalable data pipelines and cloud infrastructure.',
    'I design production-grade ETL systems with Python and Apache Airflow, run them on AWS with Terraform and Kubernetes, and keep the platforms underneath them reliable. Before data, I wrote backend services for e-commerce, embedded C/C++ for medical devices, and commissioned industrial machines, so I care about systems that work end to end.',
  ],
  facts: [
    { value: '5+', label: 'years in software' },
    { value: '100s', label: 'daily Airflow workflows' },
    { value: 'EN · DE', label: 'C1 English, B2 German' },
    { value: 'EU', label: 'citizen, based in Munich' },
  ],
};

export const experience = [
  {
    company: 'Vitafy GmbH',
    role: 'Data Platform Engineer',
    location: 'Munich, Germany',
    period: 'Oct 2021 – Present',
    points: [
      'Design and maintain scalable ETL pipelines in Python and Apache Airflow.',
      'Orchestrate hundreds of daily workflows across multiple data sources.',
      'Manage AWS infrastructure: S3, Redshift, EKS, EC2 and IAM.',
      'Automate infrastructure provisioning with Terraform and Ansible.',
      'Deploy containerized workloads with Docker and Kubernetes.',
    ],
    tags: ['Python', 'Airflow', 'AWS', 'Terraform', 'Ansible', 'Kubernetes', 'Docker'],
  },
  {
    company: 'Evozone GmbH',
    role: 'Software Development Engineer',
    location: 'Reutlingen, Germany',
    period: 'Sep 2019 – Sep 2021',
    points: [
      'Developed backend services for an e-commerce platform in Python and JavaScript.',
      'Designed embedded software in C/C++ for medical devices.',
    ],
    tags: ['Python', 'JavaScript', 'HTML/CSS', 'C/C++'],
  },
  {
    company: 'Haver Middle East',
    role: 'Service Engineer',
    location: 'Ras Al Khaimah, UAE',
    period: 'Mar 2016 – Mar 2018',
    points: ['Commissioned and programmed industrial machines with Siemens Step 7.'],
    tags: ['C/C++', 'Siemens Step 7', 'PLC'],
  },
];

export const education = {
  school: 'Ateneo de Davao University',
  degree: 'BSc Electrical Engineering',
  location: 'Davao City, Philippines',
  period: '2010 – 2015',
};

export const skills = [
  { group: 'Cloud & DevOps', items: ['AWS (S3, Redshift, EKS, EC2, IAM)', 'Terraform', 'Kubernetes', 'Docker', 'Ansible'] },
  { group: 'Data Engineering', items: ['Python', 'Apache Airflow', 'ETL pipelines'] },
  { group: 'Databases', items: ['PostgreSQL', 'MariaDB', 'Redshift'] },
  { group: 'Programming', items: ['Python', 'Go', 'C/C++', 'JavaScript'] },
  { group: 'Tools', items: ['Git', 'GitLab CI/CD', 'Linux', 'Bash'] },
  { group: 'Languages', items: ['English (C1, IELTS 8.0)', 'German (B2, telc)'] },
];

// ---------- Life outside work (the /life page) ----------
export const life = {
  intro:
    'Away from the terminal I am on a trail, a summit ridge or a start line. Mountains, long-distance running and travel keep me patient, consistent and comfortable with long, hard problems.',
  stats: [
    { value: '4:29', label: 'marathon PB', icon: 'clock' },
    { value: 'Ultra', label: 'Grossglockner Ultra-Trail', icon: 'run' },
    { value: '4,164 m', label: 'highest summit, Breithorn', icon: 'mountain' },
    { value: '23', label: 'countries visited', icon: 'globe' },
  ],
  summits: [
    { name: 'Breithorn', height: '4,164 m', where: 'Pennine Alps, Switzerland', note: 'First 4,000er: glacier, crampons and rope.' },
    { name: 'Zugspitze', height: '2,962 m', where: 'Wetterstein, Germany', note: "Germany's highest peak." },
    { name: 'Mt. Apo', height: '2,954 m', where: 'Mindanao, Philippines', note: 'Highest mountain in the Philippines, my home island.' },
  ],
  running: [
    { title: 'Marathon', value: '4:29', note: 'Personal best over 42.195 km.' },
    { title: 'Ultramarathon', value: 'Grossglockner Ultra-Trail', note: "Trail ultra around Austria's highest mountain." },
  ],
  // Grouped by region. Codes are ISO 3166 alpha-2.
  travel: [
    {
      region: 'Europe',
      countries: [
        ['DE', 'Germany'], ['AT', 'Austria'], ['CH', 'Switzerland'], ['IT', 'Italy'], ['FR', 'France'],
        ['NL', 'Netherlands'], ['CZ', 'Czechia'], ['SK', 'Slovakia'], ['HU', 'Hungary'], ['SI', 'Slovenia'],
        ['HR', 'Croatia'], ['GR', 'Greece'], ['ES', 'Spain'], ['DK', 'Denmark'], ['NO', 'Norway'], ['SE', 'Sweden'],
      ],
    },
    {
      region: 'Asia & Middle East',
      countries: [
        ['PH', 'Philippines'], ['JP', 'Japan'], ['SG', 'Singapore'], ['AE', 'UAE'], ['OM', 'Oman'], ['SA', 'Saudi Arabia'],
      ],
    },
    { region: 'Oceania', countries: [['AU', 'Australia']] },
  ],
  photos: [
    { src: breithorn, alt: 'RJ with arms spread on the snowy Breithorn summit ridge', caption: 'Breithorn summit, 4,164 m', wide: true },
    { src: cadini, alt: 'RJ sitting on a rocky outcrop facing the Cadini di Misurina spires', caption: 'Cadini di Misurina, Dolomites' },
    { src: seceda, alt: 'RJ at the Seceda ridge in the Dolomites', caption: 'Seceda, Dolomites' },
    { src: treCime, alt: 'The Tre Cime di Lavaredo towers under dramatic clouds', caption: 'Tre Cime di Lavaredo' },
    { src: koenigssee, alt: 'RJ above Lake Königssee in the Berchtesgaden Alps', caption: 'Above Königssee, Berchtesgaden' },
    { src: fushimi, alt: 'Stone steps through the orange torii gates of Fushimi Inari', caption: 'Fushimi Inari, Kyoto' },
    { src: winterSummit, alt: 'RJ on a snowy summit above a sea of clouds', caption: 'Winter summit above the clouds' },
  ],
};
