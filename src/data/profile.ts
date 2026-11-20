// All site content lives here. Edit this file to update the portfolio.
import seceda from '../assets/photos/seceda.webp';
import winterSummit from '../assets/photos/winter-summit.webp';
import koenigssee from '../assets/photos/koenigssee.webp';

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

export const outside = {
  intro:
    'Away from the terminal I am on a trail or a start line. Hiking the Alps and training for marathons keep me patient, consistent and comfortable with long, hard problems.',
  photos: [
    { src: seceda, alt: 'RJ at the Seceda ridge in the Dolomites', caption: 'Seceda, Dolomites' },
    { src: koenigssee, alt: 'RJ above Lake Königssee in the Berchtesgaden Alps', caption: 'Above Königssee, Berchtesgaden' },
    { src: winterSummit, alt: 'RJ on a snowy summit above a sea of clouds', caption: 'Winter summit above the clouds' },
  ],
  // TODO(RJ): replace these placeholders with your real numbers and races.
  stats: [
    { value: 'Alps', label: 'favourite playground', icon: 'mountain' },
    { value: '42.195 km', label: 'marathoner', icon: 'run' },
    { value: '—', label: 'marathon PB (add yours)', icon: 'clock' },
  ],
};
