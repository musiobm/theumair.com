# theumair.com

Personal portfolio site — Next.js 14, TypeScript, Tailwind CSS, and a
React Three Fiber (Three.js) hero scene.

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Content

Bio, role, and the `PROJECTS` list (IoBM, Yoojel, DigiEx, Cellisys, RupeeCoin)
in `app/page.tsx` are sourced from public reporting (see commit history for
sources — Gulf Times, Outlook India, The Org, LinkedIn). Contact email and
Instagram were provided directly. Still missing: a headshot/photo — swap in
when available.

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
