import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";

const display = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "600", "700", "800"],
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Muhammad Umair Saeed — Founder & CEO, IoBM",
  description:
    "Muhammad Umair Saeed is the Founder, Chairman & CEO of IoBM, building across AI, cybersecurity, robotics, blockchain, and electric mobility.",
};

export const viewport = {
  themeColor: "#08080c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="font-sans antialiased">
        <div className="grain" aria-hidden />
        {children}
      </body>
    </html>
  );
}
