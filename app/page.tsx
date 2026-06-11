"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";
import logoImage from "../LogoHeader.png";

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
            className="text-[11px] font-medium tracking-[0.18em] uppercase text-[var(--ss-light)]/65 transition hover:text-[var(--ss-bronze-soft)]"
          >
            Our Work
          </Link>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-[3px] border border-[var(--ss-bronze)] bg-[var(--ss-bronze)] px-4 py-2.5 text-[10px] font-semibold tracking-[0.2em] uppercase text-[var(--ss-light)] transition duration-300 hover:border-[var(--ss-bronze-hover)] hover:bg-[var(--ss-bronze-hover)] hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-[var(--ss-bronze-soft)]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ss-ink)]"
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

function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[var(--ss-ink)] pt-[64px]">
      {/* Background image */}
      <Image
        src="/new-hero-cover.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
        aria-hidden
      />

      {/* Subtle overlay for text readability */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,13,9,0.62)_0%,rgba(20,13,9,0.45)_30%,rgba(20,13,9,0.18)_58%,rgba(20,13,9,0.04)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,5,4,0.05)_0%,rgba(8,5,4,0.28)_100%)]" />

      <div className="relative mx-auto flex min-h-[calc(100vh-64px)] max-w-[1400px] items-center px-5 py-16 sm:px-6 lg:px-8">
        <div className="w-full max-w-[620px]">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8 font-[family:var(--font-cinzel)] text-[11px] tracking-[0.22em] uppercase text-[var(--ss-bronze-soft)]"
          >
            Brand Strategy Studio
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.07, ease: [0.22, 1, 0.36, 1] }}
            className="font-[family:var(--font-cormorant)] text-[clamp(2.8rem,5.5vw,4.2rem)] leading-[1.05] tracking-[-0.04em] text-[var(--ss-light)]"
          >
            Let&apos;s be real, your brand needs an upgrade.
          </motion.h1>

          <FadeIn delay={0.22}>
            <div className="mt-7 space-y-4">
              <p className="text-[15px] leading-[1.85] text-[var(--ss-light)]/82">
                Brand is so much more than a logo. It&apos;s the late nights, the pivots, the moments
                you almost walked away. The vision you couldn&apos;t shake no matter how hard things got.
              </p>
              <p className="text-[15px] leading-[1.85] text-[var(--ss-light)]/82">
                There&apos;s a reason you built this. And the right brand makes sure everyone else
                understands why.
              </p>
              <p className="font-[family:var(--font-cormorant)] text-[17px] italic leading-7 text-[var(--ss-muted)]">
                Your brand is the raw, unedited version of your story.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.5}>
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
      </div>
    </section>
  );
}

function OfferSection() {
  return (
    <section className="bg-[var(--ss-ink)]">
      <div className="mx-auto max-w-[1400px] px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
        <FadeIn className="mx-auto max-w-[680px] text-center">
          <p className="mb-6 font-[family:var(--font-cinzel)] text-[11px] tracking-[0.22em] text-[var(--ss-bronze)] uppercase">
            Work Together
          </p>
          <h2 className="font-[family:var(--font-cormorant)] text-[clamp(2rem,3.5vw,2.8rem)] leading-[1.1] tracking-[-0.03em] text-[var(--ss-light)]">
            Tell it, sell it.
          </h2>
          <p className="mx-auto mt-6 max-w-[520px] text-[15px] leading-[1.85] text-[var(--ss-muted)]">
            Most business owners start with our Brand Clarity Workshop. Two focused sessions.
          </p>
          <p className="mx-auto mt-3 max-w-[520px] text-[15px] leading-[1.85] text-[var(--ss-muted)]">
            Then it&apos;s <strong><em>hello</em></strong> to attractive offers, green-flag clients, and the kind of clarity that actually moves money.
          </p>
          <Link
            href="/brand-clarity-wellness-workshop"
            className="mt-9 inline-flex items-center gap-2.5 rounded-[3px] border border-[var(--ss-bronze)] bg-[var(--ss-bronze)] px-6 py-4 text-[10px] font-semibold tracking-[0.22em] uppercase text-[var(--ss-light)] transition duration-300 will-change-transform hover:scale-[1.02] hover:border-[var(--ss-bronze-hover)] hover:bg-[var(--ss-bronze-hover)]"
          >
            Show me the workshop <ArrowRight className="size-3.5" strokeWidth={1.7} />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

const clientLogos = [
  { src: "/logos/plp-logo-under-brumate.png", alt: "BrüMate", cls: "h-[48px] w-auto", invert: false },
  { src: "/logos/marionparket.png", alt: "Marion Parke", cls: "h-[160px] w-auto", invert: false },
  { src: "/logos/schwans-logo-png_seeklogo-323974.png", alt: "Schwan's", cls: "h-[84px] w-auto", invert: false },
  { src: "/forward-outdoor/logos/fo-logo-navy-horz.png", alt: "Forward Outdoor", cls: "h-[84px] w-auto", invert: false },
  { src: "/pause-please/logos/Pause-Please-Primary-Logo-Peony-transparent.png", alt: "Pause Please", cls: "h-[96px] w-auto", invert: false },
];

function CredibilitySection() {
  return (
    <section className="border-y border-[var(--ss-soft-border)] bg-[var(--ss-cream)]">
      <div className="mx-auto max-w-[1400px] px-5 py-12 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-16">
            {clientLogos.slice(0, 3).map((logo) => (
              <div
                key={logo.alt}
                className="opacity-80 transition duration-300 hover:opacity-100"
                style={{ mixBlendMode: logo.invert ? "normal" : "multiply" }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={400}
                  height={160}
                  className={`${logo.cls} object-contain${logo.invert ? " invert" : ""}`}
                />
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-10 sm:gap-16">
            {clientLogos.slice(3).map((logo) => (
              <div
                key={logo.alt}
                className="opacity-80 transition duration-300 hover:opacity-100"
                style={{ mixBlendMode: logo.invert ? "normal" : "multiply" }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={400}
                  height={160}
                  className={`${logo.cls} object-contain${logo.invert ? " invert" : ""}`}
                />
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

const testimonials = [
  {
    quote: "I hired Easton on the spot. She has an uncanny ability to uncover the truths that aren't easy to get to on your own — and gave me the words I felt but couldn't find. The branding deliverables 1000% align with my voice.",
    author: "Melissa K.",
    role: "Founder, Stargazer SEO",
    photo: "/testimonials/1740597591593.jpeg",
  },
  {
    quote: "Her brand voice was spot on. She was a pleasure to work with, timely, and listened to our vision while bringing it to life.",
    author: "Kurt B.",
    role: "Owner, Forward Outdoor",
    photo: "/testimonials/1605549523930.jpeg",
  },
  {
    quote: "She hit the ground running, emulating our brand voice with an impeccable attention to detail.",
    author: "Wade C.",
    role: "Creative Director, BrüMate",
    photo: "/testimonials/1774555921604.jpeg",
  },
];

function GreeneryDivider() {
  return (
    <div className="relative h-[380px] w-full overflow-hidden sm:h-[440px]">
      <Image
        src="/divider-workspace.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-top"
        aria-hidden
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(20,13,9,0.35)_0%,rgba(20,13,9,0.1)_50%,rgba(20,13,9,0.35)_100%)]" />
    </div>
  );
}

function AccreditationStrip() {
  return (
    <section className="bg-[var(--ss-ink)]">
      <div className="mx-auto max-w-[1400px] px-5 py-14 sm:px-6 lg:px-8 lg:py-16">
        <FadeIn>
          <div className="mx-auto max-w-[680px] text-center">
            <Image
              src="/logos/bma-logo.png"
              alt="Brand Master Academy"
              width={300}
              height={90}
              className="mx-auto mb-10 h-[80px] w-auto object-contain"
            />
            <h2 className="font-[family:var(--font-cormorant)] text-[clamp(1.8rem,3vw,2.4rem)] leading-[1.1] tracking-[-0.02em] text-[var(--ss-light)]">
              The mind behind winning brands.
            </h2>
            <p className="mx-auto mt-4 max-w-[520px] text-[15px] leading-[1.8] text-[var(--ss-muted)]">
              I am <a href="https://brandmasteracademy.com/" target="_blank" rel="noreferrer" className="text-[var(--ss-bronze-soft)] underline underline-offset-2 transition hover:text-[var(--ss-bronze)]">Brand Master Academy</a> certified. This means every brand is built on psychology, empathy, and the ability to feel into what your audience actually wants — before they even say it.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="bg-[var(--ss-cream)]">
      <div className="mx-auto max-w-[1180px] px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
        <FadeIn>
          <p className="mb-14 font-[family:var(--font-cinzel)] text-[11px] tracking-[0.22em] uppercase text-[var(--ss-bronze)]">
            Clients
          </p>
        </FadeIn>
        <div className="grid gap-12 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6 h-[140px] w-[140px] overflow-hidden rounded-full border-2 border-[var(--ss-soft-border)] shadow-[0_8px_24px_rgba(33,21,15,0.1)]">
                  <Image src={t.photo} alt={t.author} fill className="object-cover object-center" sizes="140px" />
                </div>
                <p className="mb-1 font-[family:var(--font-cormorant)] text-[52px] leading-none text-[var(--ss-bronze)]/25">
                  &ldquo;
                </p>
                <blockquote className="font-[family:var(--font-cormorant)] text-[clamp(1.05rem,1.6vw,1.25rem)] leading-[1.65] tracking-[-0.01em] text-[var(--ss-dark-text)]">
                  {t.quote}
                </blockquote>
                <div className="mt-6 border-t border-[var(--ss-soft-border)] pt-5">
                  <p className="font-[family:var(--font-cinzel)] text-[10px] uppercase tracking-[0.22em] text-[var(--ss-bronze)]">
                    {t.author}
                  </p>
                  <p className="mt-1 text-[12px] text-[var(--ss-dark-text)]/50">{t.role}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
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

export default function Home() {
  return (
    <main className="bg-[var(--ss-ink)]">
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <OfferSection />
      <GreeneryDivider />
      <CredibilitySection />
      <AccreditationStrip />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}