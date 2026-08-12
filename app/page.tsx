"use client";

import dynamic from "next/dynamic";
import { ArrowDown, Github, Linkedin, Mail, Twitter } from "lucide-react";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";

// Three.js touches `window` on mount — keep it out of the server render entirely.
const Scene = dynamic(() => import("@/components/Scene"), { ssr: false });

// ---------------------------------------------------------------
// PLACEHOLDER CONTENT — swap everything below for the real thing.
// ---------------------------------------------------------------
const PROJECTS = [
  {
    title: "Project One",
    description: "One-line placeholder description of what this project does and the impact it had.",
    tags: ["Next.js", "TypeScript"],
    gradient: "bg-accent",
  },
  {
    title: "Project Two",
    description: "One-line placeholder description of what this project does and the impact it had.",
    tags: ["React", "Node.js"],
    gradient: "bg-accent2",
  },
  {
    title: "Project Three",
    description: "One-line placeholder description of what this project does and the impact it had.",
    tags: ["Design", "Product"],
    gradient: "bg-accent",
  },
  {
    title: "Project Four",
    description: "One-line placeholder description of what this project does and the impact it had.",
    tags: ["API", "Cloud"],
    gradient: "bg-accent2",
  },
];

const SKILLS = [
  "TypeScript", "React", "Next.js", "Node.js", "Python",
  "UI/UX Design", "Three.js", "Cloud Infra", "SQL", "Product Strategy",
];

export default function Home() {
  return (
    <main id="top" className="relative min-h-screen bg-bg text-white">
      <Nav />

      {/* ---- Hero ---- */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <div className="absolute inset-0 bg-grid-fade" />
        <Scene />
        <div className="relative z-10 mx-auto max-w-6xl px-6 pt-20">
          <p className="mb-4 font-mono text-sm text-accent2">Hi, my name is</p>
          <h1 className="font-display text-5xl font-extrabold tracking-tight sm:text-7xl">
            Umair<span className="text-gradient">.</span>
          </h1>
          <h2 className="mt-3 font-display text-2xl font-semibold text-muted sm:text-3xl">
            [Placeholder role/title]
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
            Placeholder tagline — a short line about what you build, who you build it for,
            and what makes your work distinct. Swap this out with the real pitch.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#work"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-accent hover:bg-accent/10"
            >
              Get in touch
            </a>
          </div>
        </div>
        <a
          href="#about"
          aria-label="Scroll to About"
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-muted transition hover:text-white"
        >
          <ArrowDown size={20} className="animate-bounce" />
        </a>
      </section>

      {/* ---- About ---- */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-28">
        <Reveal>
          <p className="mb-2 font-mono text-sm text-accent2">01. About</p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">A little about me</h2>
        </Reveal>
        <Reveal delay={0.1} className="mt-6 max-w-2xl">
          <p className="text-base leading-relaxed text-muted">
            Placeholder bio paragraph. Two or three sentences about your background,
            what you focus on today, and what drives your work. Replace with the real story.
          </p>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {[
            { label: "Years experience", value: "X+" },
            { label: "Projects shipped", value: "X" },
            { label: "Happy clients", value: "X" },
            { label: "Cups of coffee", value: "∞" },
          ].map((s, i) => (
            <Reveal key={s.label} delay={0.05 * i}>
              <div className="rounded-xl border border-white/10 bg-panel p-4">
                <p className="font-display text-2xl font-bold text-gradient">{s.value}</p>
                <p className="mt-1 text-xs text-muted">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---- Work ---- */}
      <section id="work" className="mx-auto max-w-6xl px-6 py-28">
        <Reveal>
          <p className="mb-2 font-mono text-sm text-accent2">02. Work</p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Selected projects</h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={0.08 * i}>
              <ProjectCard {...p} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---- Skills ---- */}
      <section id="skills" className="mx-auto max-w-6xl px-6 py-28">
        <Reveal>
          <p className="mb-2 font-mono text-sm text-accent2">03. Skills</p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Tools I work with</h2>
        </Reveal>
        <Reveal delay={0.1} className="mt-8 flex flex-wrap gap-3">
          {SKILLS.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/10 bg-panel px-4 py-2 text-sm text-muted transition hover:border-accent hover:text-white"
            >
              {skill}
            </span>
          ))}
        </Reveal>
      </section>

      {/* ---- Contact ---- */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-28 text-center">
        <Reveal>
          <p className="mb-2 font-mono text-sm text-accent2">04. Contact</p>
          <h2 className="font-display text-3xl font-bold sm:text-5xl">Let&apos;s build something.</h2>
          <p className="mx-auto mt-4 max-w-md text-base text-muted">
            Placeholder CTA — swap in a real invitation to reach out, plus your actual email.
          </p>
          <a
            href="mailto:hello@theumair.com"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black transition hover:bg-white/90"
          >
            hello@theumair.com
          </a>
        </Reveal>
        <div className="mt-10 flex items-center justify-center gap-6 text-muted">
          <a href="#" aria-label="GitHub" className="transition hover:text-white"><Github size={20} /></a>
          <a href="#" aria-label="LinkedIn" className="transition hover:text-white"><Linkedin size={20} /></a>
          <a href="#" aria-label="Twitter" className="transition hover:text-white"><Twitter size={20} /></a>
          <a href="mailto:hello@theumair.com" aria-label="Email" className="transition hover:text-white"><Mail size={20} /></a>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-xs text-muted">
        © {new Date().getFullYear()} theumair.com — built with Next.js &amp; Three.js
      </footer>
    </main>
  );
}
