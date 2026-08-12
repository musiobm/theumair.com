"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#press", label: "Google" },
  { href: "/news", label: "News" },
  { href: "#contact", label: "Contact" },
];

function NavLink({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) {
  if (href.startsWith("/")) {
    return (
      <Link href={href} onClick={onClick} className="transition hover:text-white">
        {label}
      </Link>
    );
  }
  return (
    <a href={href} onClick={onClick} className="transition hover:text-white">
      {label}
    </a>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu automatically if the viewport grows past the
  // breakpoint (e.g. unfolding a foldable phone) while it's open.
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 transition-all ${
        scrolled || menuOpen ? "border-b border-white/10 bg-bg/70 backdrop-blur-lg" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6 sm:py-4">
        <a href="#top" onClick={() => setMenuOpen(false)} className="flex-shrink-0 font-display text-base font-bold tracking-tight sm:text-lg">
          umair<span className="text-gradient">.</span>
        </a>
        <div className="hidden items-center gap-8 text-sm text-muted md:flex">
          {LINKS.map((l) => (
            <NavLink key={l.href} {...l} />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="hidden rounded-full border border-white/15 px-4 py-1.5 text-sm font-medium text-white transition hover:border-accent hover:bg-accent/10 sm:inline-block"
          >
            Let&apos;s talk
          </a>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="rounded-lg p-2 text-white transition hover:bg-white/5 md:hidden"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-white/10 bg-bg/95 px-4 py-4 backdrop-blur-lg md:hidden">
          <div className="flex flex-col gap-1 text-sm text-muted">
            {LINKS.map((l) => (
              <div key={l.href} onClick={() => setMenuOpen(false)} className="rounded-lg px-2 py-2.5 hover:bg-white/5">
                <NavLink {...l} />
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
