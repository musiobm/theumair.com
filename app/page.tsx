"use client";

import { useState } from "react";
import { ArrowDown, Globe, Instagram, Linkedin, Mail } from "lucide-react";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import ScrollFrames from "@/components/ScrollFrames";

const LINKEDIN_URL = "https://www.linkedin.com/in/muhammad-umair-saeed-8896641b/";
const IOBM_URL = "https://www.io-bm.com";
const INSTAGRAM_URL = "https://www.instagram.com/muhammedumairsaeed";
const EMAIL = "umair@io-bm.com";

const PROJECTS = [
  {
    title: "IoBM",
    description: "Founder, Chairman & CEO. A global tech company spanning AI, cybersecurity, robotics, blockchain, EVs, and satellite comms across UAE, EMEA, USA & Canada.",
    tags: ["AI", "Cybersecurity", "Robotics"],
    gradient: "bg-accent",
  },
  {
    title: "Yoojel",
    description: "IoBM's AI ecosystem — five platforms (Student, Professional, Business, Enterprise, MovieMaker) unifying education, enterprise ops, and creative production.",
    tags: ["AI Ecosystem", "Product Launch"],
    gradient: "bg-accent2",
  },
  {
    title: "DigiEx",
    description: "A post-quantum cryptocurrency exchange built for the next generation of digital-asset security.",
    tags: ["Post-Quantum", "Fintech"],
    gradient: "bg-accent",
  },
  {
    title: "Cellisys",
    description: "AI-led Human Cell Programming Lab applying synthetic biology to regenerative and precision medicine.",
    tags: ["Synthetic Biology", "AI"],
    gradient: "bg-accent2",
  },
  {
    title: "RupeeCoin",
    description: "Co-Founder & CEO since 2022 — a venture in the digital-currency and blockchain infrastructure space.",
    tags: ["Blockchain", "Co-Founder"],
    gradient: "bg-accent",
  },
];

const SKILLS = [
  "Cybersecurity", "AI Strategy", "Blockchain & Web3", "Post-Quantum Security",
  "Robotics & Automation", "Electric Vehicles", "Fintech", "Digital Identity",
  "Corporate Strategy", "Team Leadership",
];

export default function Home() {
  const [aboutExpanded, setAboutExpanded] = useState(false);

  return (
    <main id="top" className="relative min-h-screen text-white">
      <ScrollFrames />
      <Nav />

      {/* ---- Hero ---- */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <div className="absolute inset-0 bg-grid-fade" />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pt-20 sm:px-6">
          <p className="mb-4 font-mono text-sm text-accent2">Hi, my name is</p>
          <h1 className="break-words font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Muhammad
            <br />
            Umair Saeed<span className="text-gradient">.</span>
          </h1>
          <h2 className="mt-3 font-display text-xl font-semibold text-muted sm:text-3xl">
            Founder, Chairman &amp; CEO — IoBM
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
            &ldquo;AI should empower people and organisations by making knowledge more
            accessible, decisions more informed, and innovation more achievable.&rdquo;
          </p>
          <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
            <a
              href="#work"
              className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-white/90 sm:px-6 sm:py-3"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-accent hover:bg-accent/10 sm:px-6 sm:py-3"
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
      <section id="about" className="relative z-10 mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <Reveal>
          <p className="mb-2 font-mono text-sm text-accent2">01. About</p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Building What Comes Next</h2>
        </Reveal>
        <Reveal delay={0.1} className="mt-6 max-w-2xl">
          <p className="text-base leading-relaxed text-muted">
            Muhammad Umair Saeed is an entrepreneur, technology visionary, and the Founder of
            IoBM, a technology enterprise with a growing portfolio across some of the
            world&rsquo;s most consequential industries.{" "}
            <button
              type="button"
              onClick={() => setAboutExpanded((v) => !v)}
              className="font-semibold text-accent2 transition hover:text-white"
            >
              {aboutExpanded ? "(Less)" : "(More)"}
            </button>
          </p>
          {aboutExpanded && (
            <div className="mt-4 flex flex-col gap-4">
              <p className="text-base leading-relaxed text-muted">
                Under his leadership, IoBM has developed and introduced technology ventures
                and products including Yoojel, Cellisys, and Digiex, alongside initiatives in
                artificial intelligence, cybersecurity, robotics, Web3, post-quantum
                technologies, energy, electric mobility, healthcare, biotechnology, satellite
                communications, and advanced digital infrastructure.
              </p>
              <p className="text-base leading-relaxed text-muted">
                His approach to innovation is deliberately broad. He sees the future not as a
                collection of separate industries, but as an interconnected ecosystem in
                which technology, energy, mobility, healthcare, communications, and digital
                infrastructure increasingly converge.
              </p>
              <p className="text-base leading-relaxed text-muted">
                Yoojel reflects IoBM&rsquo;s ambition in artificial intelligence and
                next-generation digital discovery. Cellisys represents its work at the
                intersection of technology, biotechnology, and healthcare. Digiex extends
                IoBM&rsquo;s vision into digital finance and blockchain-enabled financial
                technology.
              </p>
              <p className="text-base leading-relaxed text-muted">
                Beyond its technology products, IoBM&rsquo;s wider initiatives encompass
                energy and power projects, electric-vehicle ecosystems, healthcare solutions,
                satellite communications, cybersecurity, robotics, and emerging digital
                infrastructure.
              </p>
              <p className="text-base leading-relaxed text-muted">
                For Umair, entrepreneurship is not simply about creating companies or
                launching products. It is about recognising possibilities before they become
                obvious and having the determination to turn ambitious ideas into something
                tangible.
              </p>
              <blockquote className="border-l-2 border-accent pl-4 text-base italic leading-relaxed text-muted">
                &laquo;&ldquo;The future does not belong to those who predict it. It belongs
                to those willing to build it.&rdquo;&raquo;
                <footer className="mt-2 text-sm font-semibold not-italic text-white">
                  Muhammad Umair Saeed
                </footer>
              </blockquote>
            </div>
          )}
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
          {[
            { label: "Years in IT leadership", value: "26+" },
            { label: "Founded IoBM", value: "2016" },
            { label: "Ventures led", value: "5+" },
            { label: "Markets served", value: "Global" },
          ].map((s, i) => (
            <Reveal key={s.label} delay={0.05 * i}>
              <div className="h-full rounded-xl border border-white/10 bg-panel p-3 sm:p-4">
                <p className="break-words font-display text-lg font-bold text-gradient sm:text-2xl">{s.value}</p>
                <p className="mt-1 text-xs text-muted">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---- Work ---- */}
      <section id="work" className="relative z-10 mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
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
      <section id="skills" className="relative z-10 mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
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
      <section id="contact" className="relative z-10 mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 sm:py-28">
        <Reveal>
          <p className="mb-2 font-mono text-sm text-accent2">04. Contact</p>
          <h2 className="font-display text-3xl font-bold sm:text-5xl">Let&apos;s build something.</h2>
          <p className="mx-auto mt-4 max-w-md text-base text-muted">
            For business inquiries, reach out directly.
          </p>
          <a
            href={`mailto:${EMAIL}`}
            className="mt-8 inline-block rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black transition hover:bg-white/90"
          >
            {EMAIL}
          </a>
        </Reveal>
        <div className="mt-10 flex items-center justify-center gap-6 text-muted">
          <a href={`mailto:${EMAIL}`} aria-label="Email" className="transition hover:text-white"><Mail size={20} /></a>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition hover:text-white"><Linkedin size={20} /></a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transition hover:text-white"><Instagram size={20} /></a>
          <a href={IOBM_URL} target="_blank" rel="noopener noreferrer" aria-label="IoBM website" className="transition hover:text-white"><Globe size={20} /></a>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 bg-bg/80 py-8 text-center text-xs text-muted backdrop-blur-md">
        © {new Date().getFullYear()} theumair.com — powered by{" "}
        <a href={IOBM_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-white transition hover:text-accent2">
          IoBM
        </a>
      </footer>
    </main>
  );
}
