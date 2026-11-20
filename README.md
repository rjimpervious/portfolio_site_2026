# rjlopez.me

Personal portfolio of Rannie John Lopez, Data Platform Engineer. It's a static site built with Astro and Tailwind CSS, hosted for free on GitHub Pages.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview  # serve the production build locally
```

- **Content:** all text, jobs, skills and photos are in `src/data/profile.ts`.
- **Photos:** `src/assets/photos/`. Run `npm run images` to regenerate the headshot crop and `public/og-image.png`.
- **Deploying:** see [DEPLOY.md](DEPLOY.md).
