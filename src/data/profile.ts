// All site content lives here. Edit this file to update the portfolio.
import seceda from '../assets/photos/seceda.webp';
import winterSummit from '../assets/photos/winter-summit.webp';
import koenigssee from '../assets/photos/koenigssee.webp';
import breithorn from '../assets/photos/breithorn.webp';
import cadini from '../assets/photos/cadini.webp';
import treCime from '../assets/photos/tre-cime.webp';
import fushimi from '../assets/photos/fushimi-inari.webp';
import olperer from '../assets/photos/olperer-bridge.webp';
import elNido from '../assets/photos/el-nido-drone.webp';
import oeschinensee from '../assets/photos/oeschinensee.png';
import parthenon from '../assets/photos/parthenon.webp';
import munichBotanical from '../assets/photos/munich-botanical.webp';
import trailRace from '../assets/photos/trail-race.png';

export const profile = {
  name: 'Rannie John Lopez',
  shortName: 'RJ Lopez',
  role: 'Data Platform Engineer',
  pitch: 'I build reliable data platforms on AWS, Airflow & Kubernetes.',
  years: '5+',
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
    'Away from the terminal I am on a trail, a summit ridge or a start line, usually with a camera or a drone in my pack. Mountains, long-distance running, travel and photography keep me patient, consistent and comfortable with long, hard problems.',
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
  // Countries visited. `id` is the ISO 3166 numeric code (matches world-atlas),
  // `at` is [longitude, latitude] of the capital, used for the map marker.
  travel: [
    { code: 'DE', name: 'Germany', id: '276', region: 'Europe', at: [13.4, 52.52], home: true },
    { code: 'AT', name: 'Austria', id: '040', region: 'Europe', at: [16.37, 48.21] },
    { code: 'CH', name: 'Switzerland', id: '756', region: 'Europe', at: [7.45, 46.95] },
    { code: 'IT', name: 'Italy', id: '380', region: 'Europe', at: [12.5, 41.9] },
    { code: 'FR', name: 'France', id: '250', region: 'Europe', at: [2.35, 48.86] },
    { code: 'NL', name: 'Netherlands', id: '528', region: 'Europe', at: [4.9, 52.37] },
    { code: 'CZ', name: 'Czechia', id: '203', region: 'Europe', at: [14.42, 50.09] },
    { code: 'SK', name: 'Slovakia', id: '703', region: 'Europe', at: [17.11, 48.15] },
    { code: 'HU', name: 'Hungary', id: '348', region: 'Europe', at: [19.04, 47.5] },
    { code: 'SI', name: 'Slovenia', id: '705', region: 'Europe', at: [14.51, 46.06] },
    { code: 'HR', name: 'Croatia', id: '191', region: 'Europe', at: [15.98, 45.81] },
    { code: 'GR', name: 'Greece', id: '300', region: 'Europe', at: [23.73, 37.98] },
    { code: 'ES', name: 'Spain', id: '724', region: 'Europe', at: [-3.7, 40.42] },
    { code: 'DK', name: 'Denmark', id: '208', region: 'Europe', at: [12.57, 55.68] },
    { code: 'NO', name: 'Norway', id: '578', region: 'Europe', at: [10.75, 59.91] },
    { code: 'SE', name: 'Sweden', id: '752', region: 'Europe', at: [18.07, 59.33] },
    { code: 'PH', name: 'Philippines', id: '608', region: 'Asia & Middle East', at: [120.98, 14.6], home: true },
    { code: 'JP', name: 'Japan', id: '392', region: 'Asia & Middle East', at: [139.69, 35.69] },
    { code: 'SG', name: 'Singapore', id: '702', region: 'Asia & Middle East', at: [103.82, 1.35] },
    { code: 'AE', name: 'UAE', id: '784', region: 'Asia & Middle East', at: [54.37, 24.45] },
    { code: 'OM', name: 'Oman', id: '512', region: 'Asia & Middle East', at: [58.41, 23.59] },
    { code: 'SA', name: 'Saudi Arabia', id: '682', region: 'Asia & Middle East', at: [46.68, 24.71] },
    { code: 'AU', name: 'Australia', id: '036', region: 'Oceania', at: [149.13, -35.28] },
  ] as { code: string; name: string; id: string; region: string; at: [number, number]; home?: boolean }[],
  // Photography: camera and drone. `kind` shows as a small tag on the photo.
  photography: [
    { src: elNido, alt: 'Aerial drone view of limestone cliffs, a white beach and turquoise reef in El Nido, Palawan', caption: 'El Nido, Palawan', kind: 'drone' },
    { src: oeschinensee, alt: 'Turquoise Oeschinensee lake below snowy cliffs, two trees on a grassy ridge in the foreground', caption: 'Oeschinensee, Switzerland', kind: 'camera' },
    { src: parthenon, alt: 'The Parthenon on the Acropolis against a deep blue sky', caption: 'Parthenon, Athens', kind: 'camera' },
    { src: munichBotanical, alt: 'Spring flower beds in front of the Botanical Garden building in Munich', caption: 'Botanical Garden, Munich', kind: 'camera' },
    { src: treCime, alt: 'The Tre Cime di Lavaredo towers under dramatic clouds', caption: 'Tre Cime di Lavaredo', kind: 'camera' },
    { src: fushimi, alt: 'Stone steps through the orange torii gates of Fushimi Inari', caption: 'Fushimi Inari, Kyoto', kind: 'camera' },
  ],
  runningPhoto: { src: trailRace, alt: 'RJ running a mountain trail race with poles and a race bib', caption: 'Race day on the trail' },
  // Trail photos of RJ (gallery at the bottom of /life). The first one is also the summits photo.
  photos: [
    { src: breithorn, alt: 'RJ with arms spread on the snowy Breithorn summit ridge', caption: 'Breithorn summit, 4,164 m' },
    { src: olperer, alt: 'RJ hanging from the suspension bridge above Schlegeis reservoir in the Zillertal Alps', caption: 'Olperer suspension bridge, Zillertal' },
    { src: cadini, alt: 'RJ sitting on a rocky outcrop facing the Cadini di Misurina spires', caption: 'Cadini di Misurina, Dolomites' },
    { src: seceda, alt: 'RJ at the Seceda ridge in the Dolomites', caption: 'Seceda, Dolomites' },
    { src: koenigssee, alt: 'RJ above Lake Königssee in the Berchtesgaden Alps', caption: 'Above Königssee, Berchtesgaden' },
    { src: winterSummit, alt: 'RJ on a snowy summit above a sea of clouds', caption: 'Winter summit above the clouds' },
  ],
};
