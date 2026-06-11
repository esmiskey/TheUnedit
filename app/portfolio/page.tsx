"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import logoImage from "../../LogoHeader.png";

const BOOKING_URL = "https://cal.com/the-unedit-agency/20min";
const motionViewport = { once: true, amount: 0.2 };

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 130, damping: 24, mass: 0.2 });
  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-[var(--ss-bronze)]"
      style={{ scaleX }}
    />
  );
}

function FadeIn({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={motionViewport}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[rgba(20,13,9,0.97)] backdrop-blur-md">
      <div className="mx-auto flex h-[64px] max-w-[1400px] items-center justify-between px-5 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex h-[46px] w-[108px] shrink-0 items-center">
          <Image
            src={logoImage}
            alt="The Unedit Agency"
            className="h-full w-full select-none object-contain"
          />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/portfolio"
            className="text-[11px] font-medium tracking-[0.18em] uppercase text-[var(--ss-bronze-soft)] transition hover:text-[var(--ss-bronze-soft)]"
          >
            Our Work
          </Link>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-[3px] border border-[var(--ss-bronze)] bg-[var(--ss-bronze)] px-4 py-2.5 text-[10px] font-semibold tracking-[0.2em] uppercase text-[var(--ss-light)] transition duration-300 hover:scale-[1.02] hover:border-[var(--ss-bronze-hover)] hover:bg-[var(--ss-bronze-hover)] focus-visible:ring-2 focus-visible:ring-[var(--ss-bronze-soft)]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ss-ink)]"
          >
            Book a Call
          </a>
        </nav>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="inline-flex h-10 w-10 items-center justify-center rounded-[4px] border border-white/15 text-[var(--ss-light)]/70 transition hover:border-[var(--ss-bronze)]/50 hover:text-[var(--ss-bronze-soft)] md:hidden"
        >
          <span className="relative block h-3.5 w-5">
            <span className={`absolute left-0 top-0 h-[1.5px] w-5 bg-current transition duration-300 ${open ? "translate-y-[6px] rotate-45" : ""}`} />
            <span className={`absolute left-0 top-[6px] h-[1.5px] w-5 bg-current transition duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 top-[12px] h-[1.5px] w-5 bg-current transition duration-300 ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden border-t border-white/10 bg-[rgba(20,13,9,0.97)] md:hidden"
      >
        <div className="space-y-1 px-5 py-4">
          {[
            { label: "Our Work", href: "/portfolio" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-[4px] px-3 py-3 text-[12px] font-medium tracking-[0.16em] uppercase text-[var(--ss-light)]/80 transition hover:text-[var(--ss-bronze-soft)]"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-2 block rounded-[3px] border border-[var(--ss-bronze)] bg-[var(--ss-bronze)] px-3 py-3 text-center text-[10px] font-semibold tracking-[0.2em] uppercase text-[var(--ss-light)]"
          >
            Book a Call
          </a>
        </div>
      </motion.div>
    </header>
  );
}

const projects = [
  {
    id: "01",
    title: "Pause Please",
    category: "Wellness & Lifestyle",
    services: ["Brand Strategy", "Visual Identity"],
    href: "/portfolio/pause-please",
    hero: "/pause-please/photos/venlo-studio-3299.jpg",
    logo: "/pause-please/logos/Pause-Please-Primary-Logo-Peony-transparent.png",
    imageFilter: undefined as string | undefined,
  },
  {
    id: "02",
    title: "Forward Outdoor",
    category: "Outdoor Adventure",
    services: ["Brand Strategy", "Visual Identity"],
    href: "/portfolio/forward-outdoor",
    hero: "/forward-outdoor/photos/fo-trail-low.jpg",
    logo: "/forward-outdoor/logos/fo-logo-navy-horz.png",
    imageFilter: undefined as string | undefined,
  },
];

type Project = (typeof projects)[number];

function ProjectCard({ project, index: _index }: { project: Project; index: number }) {
  return (
      <Link
        href={project.href}
        className="group block overflow-hidden border border-[var(--ss-soft-border)] bg-white shadow-[0_12px_36px_rgba(33,21,15,0.05)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(33,21,15,0.10)]"
      >
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden bg-[var(--ss-light)]">
          <Image
            src={project.hero}
            alt={project.title}
            fill
            priority
            unoptimized
            sizes="(max-width: 768px) 100vw, 860px"
            className="object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-[1.03]"
            style={project.imageFilter ? { filter: project.imageFilter } : undefined}
          />
          {/* Subtle center vignette */}
          {project.logo && (
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(20,13,9,0.22)_0%,transparent_65%)]" />
          )}
          {/* Bronze tint on hover */}
          <div className="absolute inset-0 bg-[var(--ss-bronze)] opacity-0 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-10" />
          {/* White logo */}
          {project.logo && (
            <div className="absolute inset-0 flex items-center justify-center p-12">
              <Image
                src={project.logo}
                alt={`${project.title} logo`}
                width={280}
                height={140}
                className="h-auto w-[38%] max-w-[260px] object-contain brightness-0 invert opacity-92 drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]"
              />
            </div>
          )}
        </div>

      </Link>
  );
}

function Footer() {
  return (
    <footer className="bg-[var(--ss-ink)] text-[var(--ss-light)]">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-6 px-5 py-12 text-center sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex h-[46px] w-[108px] items-center opacity-75 transition hover:opacity-100">
          <Image
            src={logoImage}
            alt="The Unedit Agency"
            className="h-full w-full select-none object-contain"
          />
        </Link>
        <div className="flex items-center gap-8">
          <Link
            href="/portfolio"
            className="text-[11px] tracking-[0.18em] uppercase text-[var(--ss-light)]/45 transition hover:text-[var(--ss-bronze-soft)]"
          >
            Our Work
          </Link>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noreferrer"
            className="text-[11px] tracking-[0.18em] uppercase text-[var(--ss-light)]/45 transition hover:text-[var(--ss-bronze-soft)]"
          >
            Book a Call
          </a>
        </div>
        <p className="text-[11px] text-[var(--ss-light)]/28">
          © 2026 The Unedit Agency. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default function PortfolioPage() {
  return (
    <main className="bg-[var(--ss-cream)]">
      <ScrollProgress />
      <Navbar />

      {/* Page header */}
      <section className="relative pt-[64px] bg-[var(--ss-cream)]">
        <div className="mx-auto max-w-[960px] px-5 pb-8 pt-12 sm:px-6 lg:px-8 pl-[64px] md:pl-[76px] lg:pl-[84px]">
          <FadeIn>
            <p className="font-[family:var(--font-cinzel)] text-[11px] tracking-[0.22em] uppercase text-[var(--ss-bronze)]">
              Selected Work
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Projects */}
      <section className="relative mx-auto max-w-[960px] px-5 pb-24 pt-20 sm:px-6 lg:px-8 lg:pb-32">
        {/* Ghost word beside Pause Please */}
        <p className="pointer-events-none absolute -right-[2vw] top-[8%] select-none font-[family:var(--font-cormorant)] text-[9vw] font-light leading-none tracking-[-0.04em] text-[var(--ss-bronze)]/[0.18] whitespace-nowrap -rotate-90 origin-right">story</p>
        {/* Ghost word beside Forward Outdoor */}
        <p className="pointer-events-none absolute -left-[2vw] top-[52%] select-none font-[family:var(--font-cormorant)] text-[8vw] font-light leading-none tracking-[-0.04em] text-[var(--ss-bronze)]/[0.15] whitespace-nowrap rotate-90 origin-left">bold</p>
        <div className="flex flex-col gap-20">
          {projects.map((project, i) => (
            <FadeIn key={project.id} delay={i * 0.1}>
              <div className="flex items-start gap-5 md:gap-7">
                <span className="mt-1 w-6 shrink-0 font-[family:var(--font-cinzel)] text-[10px] tracking-[0.2em] text-[var(--ss-muted)]">
                  {project.id}
                </span>
                <div className="min-w-0 flex-1">
                  <ProjectCard project={project} index={i} />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA strip */}
      <section className="bg-[var(--ss-ink)]">
        <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
          <FadeIn className="mx-auto max-w-[580px] text-center">
            <p className="mb-6 font-[family:var(--font-cinzel)] text-[11px] tracking-[0.22em] uppercase text-[var(--ss-bronze)]">
              Have a Project in Mind?
            </p>
            <h2 className="font-[family:var(--font-cormorant)] text-[clamp(2rem,3.5vw,2.8rem)] leading-[1.1] tracking-[-0.03em] text-[var(--ss-light)]">
              Your story is next.
            </h2>
            <p className="mx-auto mt-5 max-w-[440px] text-[15px] leading-[1.85] text-[var(--ss-muted)]">
              Let&apos;s find the truth behind your brand and give it the language it deserves.
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-9 inline-flex items-center gap-2.5 rounded-[3px] border border-[var(--ss-bronze)] bg-[var(--ss-bronze)] px-6 py-4 text-[10px] font-semibold tracking-[0.22em] uppercase text-[var(--ss-light)] shadow-[0_10px_28px_rgba(182,101,56,0.22)] transition duration-300 will-change-transform hover:scale-[1.02] hover:border-[var(--ss-bronze-hover)] hover:bg-[var(--ss-bronze-hover)] focus-visible:ring-2 focus-visible:ring-[var(--ss-bronze-soft)]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ss-ink)]"
            >
              Book a Discovery Call <ArrowRight className="size-3.5" strokeWidth={1.7} />
            </a>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  );
}
