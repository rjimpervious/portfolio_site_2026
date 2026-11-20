// Builds derived images from the original photos:
//   src/assets/photos/headshot.webp  square head-and-shoulders crop of winter-summit.webp
//   public/og-image.png              1200x630 social preview card
// Run with: npm run images
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const src = `${root}src/assets/photos/winter-summit.webp`;
const headshotOut = `${root}src/assets/photos/headshot.webp`;
const ogOut = `${root}public/og-image.png`;

// Crop region in the 1500x2000 source, centred on the face.
const CROP = { left: 430, top: 560, width: 800, height: 800 };

await sharp(src).extract(CROP).resize(800, 800).webp({ quality: 88 }).toFile(headshotOut);

const portrait = await sharp(src).extract(CROP).resize(470, 470).png().toBuffer();
const mask = Buffer.from(
  '<svg width="470" height="470"><circle cx="235" cy="235" r="235" fill="#fff"/></svg>',
);
const round = await sharp(portrait).composite([{ input: mask, blend: 'dest-in' }]).png().toBuffer();

const card = Buffer.from(`
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0" stop-color="#39ff88"/><stop offset="1" stop-color="#ff2e97"/>
    </linearGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M40 0H0V40" fill="none" stroke="#39ff88" stroke-opacity=".07"/>
    </pattern>
  </defs>
  <rect width="1200" height="630" fill="#070b0a"/>
  <rect width="1200" height="630" fill="url(#grid)"/>
  <path d="M0 560 L160 420 L250 490 L420 300 L560 470 L680 380 L1200 600 L1200 630 L0 630Z" fill="#39ff88" fill-opacity=".06" stroke="#39ff88" stroke-opacity=".5" stroke-width="2"/>
  <circle cx="900" cy="315" r="243" fill="none" stroke="url(#g)" stroke-width="8"/>
  <text x="80" y="210" font-family="Consolas, monospace" font-size="26" fill="#ff2e97">// rjlopez.me</text>
  <text x="80" y="290" font-family="Segoe UI, Arial, sans-serif" font-weight="700" font-size="56" fill="#e6f2ec">Rannie John Lopez</text>
  <text x="80" y="350" font-family="Segoe UI, Arial, sans-serif" font-size="34" fill="#39ff88">Data Platform Engineer</text>
  <text x="80" y="405" font-family="Segoe UI, Arial, sans-serif" font-size="24" fill="#8fa69b">Python · Airflow · AWS · Terraform · Kubernetes</text>
</svg>`);

await sharp(card)
  .composite([{ input: round, left: 665, top: 80 }])
  .png()
  .toFile(ogOut);

console.log('Wrote', headshotOut, 'and', ogOut);
