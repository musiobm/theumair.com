"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Newspaper } from "lucide-react";
import Reveal from "@/components/Reveal";
import { NEWS, ArticleImage } from "@/lib/news";

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-bg text-white">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-4xl items-center gap-3 px-4 py-4 sm:px-6 sm:py-5">
          <Link href="/" aria-label="Back home" className="flex-shrink-0 rounded-lg p-1.5 text-muted transition hover:bg-white/5 hover:text-white">
            <ArrowLeft size={18} />
          </Link>
          <span className="truncate font-display text-sm font-semibold">umair<span className="text-gradient">.</span> / News</span>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
        <Reveal>
          <p className="mb-2 flex items-center gap-2 font-mono text-sm text-accent2">
            <Newspaper size={14} /> Press
          </p>
          <h1 className="font-display text-3xl font-bold sm:text-4xl">In the news</h1>
          <p className="mt-3 max-w-xl text-sm text-muted">
            Coverage of Muhammad Umair Saeed and IoBM from independent outlets. Linked out to
            the original source — this page doesn&apos;t reproduce full articles.
          </p>
        </Reveal>

        <div className="mt-10 flex flex-col gap-4">
          {NEWS.map((item, i) => (
            <Reveal key={item.url} delay={0.04 * i}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-4 rounded-xl border border-white/10 bg-panel p-5 transition hover:border-accent/40 hover:bg-white/5 sm:flex-row"
              >
                <ArticleImage src={item.image} alt={item.title} />
                <div className="flex flex-1 flex-col gap-2">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-xs text-muted">
                      <span className="font-medium text-accent2">{item.outlet}</span>
                      {item.date && (
                        <>
                          <span aria-hidden>·</span>
                          <span>{item.date}</span>
                        </>
                      )}
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="flex-shrink-0 text-muted transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
                    />
                  </div>
                  <h2 className="break-words font-display text-base font-semibold leading-snug text-white">
                    {item.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-muted">{item.blurb}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  );
}
