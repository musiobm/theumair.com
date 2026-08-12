"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "/news", label: "News" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 transition-all ${
        scrolled ? "border-b border-white/10 bg-bg/70 backdrop-blur-lg" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-lg font-bold tracking-tight">
          umair<span className="text-gradient">.</span>
        </a>
        <div className="hidden items-center gap-8 text-sm text-muted md:flex">
          {LINKS.map((l) =>
            l.href.startsWith("/") ? (
              <Link key={l.href} href={l.href} className="transition hover:text-white">
                {l.label}
              </Link>
            ) : (
              <a key={l.href} href={l.href} className="transition hover:text-white">
                {l.label}
              </a>
            )
          )}
        </div>
        <a
          href="#contact"
          className="rounded-full border border-white/15 px-4 py-1.5 text-sm font-medium text-white transition hover:border-accent hover:bg-accent/10"
        >
          Let&apos;s talk
        </a>
      </nav>
    </header>
  );
}
