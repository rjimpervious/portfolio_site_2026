// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Fully static site, deployed to GitHub Pages on the custom domain rjlopez.me.
export default defineConfig({
  site: 'https://rjlopez.me',
  vite: { plugins: [tailwindcss()] },
});
