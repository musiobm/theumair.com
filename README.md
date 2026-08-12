# theumair.com

Personal portfolio site — Next.js 14, TypeScript, Tailwind CSS, and a
React Three Fiber (Three.js) hero scene.

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Content is placeholder

Everything user-facing is placeholder copy, meant to be swapped:

- `app/page.tsx` — hero tagline/role, `PROJECTS` array, `SKILLS` array,
  stats row, contact email/social links.
- `app/layout.tsx` — page `<title>`/description metadata.

## Structure

```
app/
  layout.tsx       # fonts, metadata, root shell
  page.tsx          # all sections (Hero, About, Work, Skills, Contact)
  globals.css
components/
  Scene.tsx         # the 3D hero (React Three Fiber), client-only
  Nav.tsx           # fixed nav bar with scroll-aware background
  Reveal.tsx         # scroll-in-view fade/slide wrapper (framer-motion)
  ProjectCard.tsx   # project card with mouse-tilt 3D effect
```

## Deploy

Deploys cleanly to Vercel like any Next.js app — import the repo,
framework preset "Next.js", no environment variables required.
