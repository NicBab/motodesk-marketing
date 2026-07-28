import type { Metadata } from "next";

import Nav from "@/components/landing/Nav";
import Hero from "@/components/landing/Hero";
import LogoCloud from "@/components/landing/LogoCloud";
import Features from "@/components/landing/Features";
import Showcase from "@/components/landing/Showcase";
import Stats from "@/components/landing/Stats";
import Pricing from "@/components/landing/Pricing";
import Testimonials from "@/components/landing/Testimonials";
import FAQ from "@/components/landing/FAQ";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "MotoDesk — The operating system for powersports dealers",
  description:
    "MotoDesk is the cloud platform powering powersports dealerships, service centers, and repair shops. Replace paperwork, spreadsheets, and disconnected tools with one modern system.",
  openGraph: {
    title: "MotoDesk — Dealership management, reimagined",
    description:
      "One modern cloud platform for powersports sales, service, parts, and CRM. Start your 14-day free trial.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Nav />

      <main>
        <Hero />
        <LogoCloud />
        <Features />
        <Showcase />
        <Stats />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}