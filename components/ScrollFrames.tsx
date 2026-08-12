"use client";

import { useEffect, useRef } from "react";

const FRAME_COUNT = 300;
const framePath = (n: number) => `/hero-frames/frame-${String(n).padStart(3, "0")}.jpg`;

// Fixed full-viewport canvas that scrubs through a 300-frame sequence as the
// page scrolls, used as the site's background. Frames load progressively in
// the background; draw() always falls back to the nearest already-loaded
// frame so playback stays smooth before the full set has arrived.
export default function ScrollFrames() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const frames: (HTMLImageElement | undefined)[] = new Array(FRAME_COUNT);
    let drawnIndex = -1;
    let wantedIndex = 0;

    const draw = () => {
      let i = wantedIndex;
      while (i >= 0 && !frames[i]) i--;
      if (i < 0 || i === drawnIndex) return;
      drawnIndex = i;
      const img = frames[i]!;
      const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
      const w = img.width * scale;
      const h = img.height * scale;
      ctx.drawImage(img, (canvas.width - w) / 2, (canvas.height - h) / 2, w, h);
    };

    const computeWanted = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      wantedIndex = Math.min(FRAME_COUNT - 1, Math.max(0, Math.round(progress * (FRAME_COUNT - 1))));
    };

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        computeWanted();
        draw();
        ticking = false;
      });
    };

    const onResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawnIndex = -1;
      draw();
    };

    computeWanted();
    onResize();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new window.Image();
      img.onload = () => {
        frames[i] = img;
        if (i <= wantedIndex && i > drawnIndex) draw();
      };
      img.src = framePath(i + 1);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0"
    />
  );
}
