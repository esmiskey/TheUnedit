"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const PP = {
  peony:  "#D16E82",
  petal:  "#E4B4BB",
  ivory:  "#F0E5E5",
  basil:  "#778A67",
  fern:   "#213A25",
  onyx:   "#0E1212",
};

const motionViewport = { once: true, amount: 0.15 };

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
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={motionViewport}
      transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

const services = [
  "Audience Research",
  "Brand Substance",
  "Positioning Strategy",
  "Messaging Framework",
  "Brand Voice",
  "Brand Rename",
  "Creative Direction",
];

const palette = [
  { name: "PEONY",        hex: "#D16E82" },
  { name: "PETAL",        hex: "#E4B4BB" },
  { name: "IVORY BLUSH",  hex: "#F0E5E5" },
  { name: "BASIL",        hex: "#778A67" },
  { name: "FERN",         hex: "#213A25" },
  { name: "ONYX",         hex: "#0E1212" },
];

const logos = [
  {
    src:   "/pause-please/logos/Pause-Please-Primary-Logo-ivory-blush-transparent.png",
    bg:    PP.fern,
    label: "PRIMARY — IVORY",
    light: true,
  },
  {
    src:   "/pause-please/logos/Pause-Please-Primary-Logo-Peony-transparent.png",
    bg:    PP.ivory,
    label: "PRIMARY — PEONY",
    light: false,
  },
  {
    src:   "/pause-please/logos/Pause-Please-mark-basil-transparent.png",
    bg:    PP.petal,
    label: "MARK — BASIL",
    light: false,
  },
];

const mockups = [
  { src: "/pause-please/stock/pp-candle-mockup.png",  alt: "Candle with Pause Please label" },
  { src: "/pause-please/stock/pp-tote-lifestyle.png", alt: "Branded tote bag" },
  { src: "/pause-please/stock/pp-cup-blossoms.png",   alt: "Branded cup with blossoms" },
  { src: "/pause-please/stock/pp-serum-bottle.png",   alt: "Branded serum bottle" },
  { src: "/pause-please/stock/pp-tote-overhead.png",  alt: "Tote bag overhead" },
  { src: "/pause-please/stock/notebook-roses.jpg",    alt: "Notebook with roses" },
];

export default function PausePleaseCaseStudy() {
  return (
    <main style={{ background: PP.onyx, color: PP.ivory, fontFamily: "var(--font-outfit)" }}>

      {/* ── Floating nav ── */}
      <nav className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-5 lg:px-10"
        style={{ background: "linear-gradient(to bottom, rgba(10,7,5,0.85) 0%, rgba(10,7,5,0) 100%)" }}
      >
        <Link
          href="/"
          className="group inline-flex items-center gap-2 transition"
          style={{ fontFamily: "var(--font-cinzel)", fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(241,231,222,0.65)" }}
        >
          <ArrowLeft className="size-3 transition-transform group-hover:-translate-x-1" strokeWidth={1.8} />
          The Unedit
        </Link>
        <p style={{ fontFamily: "var(--font-cinzel)", fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(241,231,222,0.4)" }}>
          Our Work
        </p>
      </nav>

      {/* ── Hero ── */}
      <section className="relative min-h-screen overflow-hidden">
        <Image
          src="/pause-please/photos/venlo-studio-3416.jpg"
          alt="Pause Please brand shoot — yoga mat ritual scene"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* gradient overlays */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(10,7,5,0.5) 0%, rgba(10,7,5,0.18) 38%, rgba(10,7,5,0.78) 100%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(10,7,5,0.52) 0%, rgba(10,7,5,0) 60%)" }} />

        {/* Content — bottom left */}
        <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pb-16 text-center lg:px-16 lg:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 44 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
          >
            <p style={{ fontFamily: "var(--font-cinzel)", fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", color: PP.petal, marginBottom: 16 }}>
              Brand Strategy &amp; Identity — 2025
            </p>
            <h1
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(4.5rem, 11vw, 9rem)",
                lineHeight: 0.9,
                letterSpacing: "-0.04em",
                color: PP.ivory,
              }}
            >
              Pause<br />Please
            </h1>
            <p style={{ marginTop: 24, maxWidth: 480, fontSize: 14, lineHeight: 1.85, color: "rgba(241,231,222,0.68)" }}>
              An Ayurveda and restorative yoga wellness brand centered on soft, meaningful healing — one breath, one moment at a time.
            </p>
          </motion.div>
        </div>

        {/* Scroll line */}
        <motion.div
          className="absolute bottom-8 right-8 flex flex-col items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.7 }}
        >
          <span style={{ fontFamily: "var(--font-cinzel)", fontSize: 8, letterSpacing: "0.3em", color: "rgba(241,231,222,0.35)", writingMode: "vertical-rl" }}>SCROLL</span>
          <motion.div
            style={{ width: 1, height: 52, background: "rgba(241,231,222,0.25)", transformOrigin: "top" }}
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </section>

      {/* ── Project brief ── */}
      <section style={{ background: PP.ivory, color: PP.onyx }}>
        <div className="mx-auto grid max-w-[1400px] gap-14 px-6 py-20 lg:grid-cols-[280px_1fr] lg:px-16 lg:py-28">

          {/* Services */}
          <FadeIn>
            <p style={{ fontFamily: "var(--font-cinzel)", fontSize: 10, letterSpacing: "0.28em", textTransform: "uppercase", color: PP.peony, marginBottom: 24 }}>
              Services
            </p>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s} className="flex items-start gap-3" style={{ fontSize: 13, lineHeight: 1.7, color: PP.onyx }}>
                  <span style={{ color: PP.peony, marginTop: 2, flexShrink: 0 }}>—</span>
                  {s}
                </li>
              ))}
            </ul>
            <div className="mt-10 border-t pt-8" style={{ borderColor: `${PP.peony}30` }}>
              <p style={{ fontFamily: "var(--font-cinzel)", fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: `${PP.onyx}60`, marginBottom: 6 }}>
                Client
              </p>
              <p style={{ fontSize: 14, color: PP.onyx }}>Pause Please</p>
              <p style={{ fontFamily: "var(--font-cinzel)", fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: `${PP.onyx}60`, marginTop: 16, marginBottom: 6 }}>
                Year
              </p>
              <p style={{ fontSize: 14, color: PP.onyx }}>2025</p>
              <p style={{ fontFamily: "var(--font-cinzel)", fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: `${PP.onyx}60`, marginTop: 16, marginBottom: 6 }}>
                Strategy
              </p>
              <p style={{ fontSize: 14, color: PP.onyx }}>Easton Smiskey</p>
            </div>
          </FadeIn>

          {/* Description */}
          <FadeIn delay={0.1}>
            <p style={{ fontFamily: "var(--font-cinzel)", fontSize: 10, letterSpacing: "0.28em", textTransform: "uppercase", color: PP.peony, marginBottom: 24 }}>
              The Project
            </p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                lineHeight: 1.06,
                letterSpacing: "-0.03em",
                color: PP.onyx,
                marginBottom: 24,
              }}
            >
              Built by women, for women — a guide through life&apos;s in-between seasons.
            </h2>
            <div className="space-y-4" style={{ fontSize: 14, lineHeight: 1.85, color: `${PP.onyx}b0` }}>
              <p>
                Pause Please is an Ayurveda and restorative yoga wellness brand centered on soft, meaningful healing and resilience that unfolds slowly — one breath, one moment at a time.
              </p>
              <p>
                Our work covered the full strategic foundation: deep audience research to understand who she truly serves, competitive positioning to carve out clear white space in a crowded wellness market, a complete brand rename, and creative direction that gave the visual identity a clear emotional logic to grow from.
              </p>
              <p>
                The result is a brand that doesn&apos;t try to speak to everyone. It speaks so clearly to the right women that the wrong ones disqualify themselves — less selling, less explaining, less time on calls that go nowhere.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Full-width divider photo ── */}
      <div className="relative h-[55vh] overflow-hidden">
        <Image
          src="/pause-please/photos/pp-journal.jpg"
          alt="Journaling with peonies"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(33,58,37,0.2) 0%, rgba(33,58,37,0) 50%, rgba(33,58,37,0.15) 100%)" }} />
      </div>

      {/* ── Brand identity — dark fern ── */}
      <section style={{ background: PP.fern }}>
        <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-16 lg:py-28">

          <FadeIn>
            <p style={{ fontFamily: "var(--font-cinzel)", fontSize: 10, letterSpacing: "0.28em", textTransform: "uppercase", color: PP.petal, marginBottom: 16 }}>
              Brand Identity
            </p>
            <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 3.2vw, 2.8rem)", lineHeight: 1.06, letterSpacing: "-0.03em", color: PP.ivory }}>
              A soft, grounded femininity.
            </h2>
          </FadeIn>

          {/* Logo suite */}
          <div className="mt-14 grid gap-4 sm:grid-cols-3">
            {logos.map((logo, i) => (
              <FadeIn key={logo.label} delay={0.07 * i}>
                <div
                  className="flex flex-col items-center justify-center rounded-[4px] p-10"
                  style={{ background: logo.bg, border: `1px solid rgba(255,255,255,0.07)` }}
                >
                  <div className="relative h-28 w-full">
                    <Image src={logo.src} alt={logo.label} fill sizes="300px" className="object-contain" />
                  </div>
                  <p style={{ fontFamily: "var(--font-cinzel)", fontSize: 9, letterSpacing: "0.26em", marginTop: 24, color: logo.light ? PP.ivory : PP.onyx }}>
                    {logo.label}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Color palette */}
          <FadeIn className="mt-16">
            <p style={{ fontFamily: "var(--font-cinzel)", fontSize: 10, letterSpacing: "0.28em", textTransform: "uppercase", color: PP.petal, marginBottom: 24 }}>
              Colour Palette
            </p>
            <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
              {palette.map((c) => (
                <div key={c.name}>
                  <div className="h-20 rounded-[4px]" style={{ background: c.hex }} />
                  <p style={{ fontFamily: "var(--font-cinzel)", fontSize: 8, letterSpacing: "0.18em", color: PP.ivory, marginTop: 8 }}>{c.name}</p>
                  <p style={{ fontSize: 10, color: `${PP.ivory}66`, marginTop: 2 }}>{c.hex}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Typography */}
          <FadeIn className="mt-16">
            <p style={{ fontFamily: "var(--font-cinzel)", fontSize: 10, letterSpacing: "0.28em", textTransform: "uppercase", color: PP.petal, marginBottom: 24 }}>
              Typography
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { role: "Header",  sample: "LAROSA",           note: "Larosa Regular — geometric sans",    size: "2rem",  style: { letterSpacing: "0.1em" } },
                { role: "Subhead", sample: "La Belle Aurore",  note: "Script — warmth & femininity",       size: "1.9rem", style: { fontStyle: "italic", fontFamily: "var(--font-cormorant)" } },
                { role: "Body",    sample: "Baskervville Rg.", note: "Serif body — editorial authority",   size: "1.1rem", style: { fontFamily: "Georgia, serif", lineHeight: 1.7 } },
              ].map((t) => (
                <div key={t.role} className="rounded-[4px] p-6" style={{ border: `1px solid rgba(240,229,229,0.12)` }}>
                  <p style={{ fontFamily: "var(--font-cinzel)", fontSize: 9, letterSpacing: "0.22em", color: PP.petal, marginBottom: 16 }}>{t.role.toUpperCase()}</p>
                  <p style={{ fontSize: t.size, color: PP.ivory, ...t.style }}>{t.sample}</p>
                  <p style={{ fontSize: 11, color: `${PP.ivory}55`, marginTop: 12 }}>{t.note}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Photo gallery ── */}
      <section style={{ background: PP.ivory }}>
        <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-16 lg:py-28">
          <FadeIn>
            <p style={{ fontFamily: "var(--font-cinzel)", fontSize: 10, letterSpacing: "0.28em", textTransform: "uppercase", color: PP.peony, marginBottom: 48 }}>
              Brand Photography
            </p>
          </FadeIn>

          {/* Asymmetric editorial grid */}
          <div className="grid gap-4 sm:grid-cols-12">
            <FadeIn className="sm:col-span-7">
              <div className="relative overflow-hidden rounded-[4px]" style={{ height: 500 }}>
                <Image src="/pause-please/photos/pp-portrait.jpg" alt="Pause Please founder portrait" fill sizes="(max-width:640px) 100vw, 58vw" className="object-cover object-top" />
              </div>
            </FadeIn>
            <FadeIn delay={0.08} className="sm:col-span-5 flex flex-col gap-4">
              <div className="relative flex-1 overflow-hidden rounded-[4px]" style={{ minHeight: 240 }}>
                <Image src="/pause-please/photos/pp-bouquet.jpg" alt="Peony bouquet" fill sizes="(max-width:640px) 100vw, 42vw" className="object-cover object-center" />
              </div>
              <div className="relative flex-1 overflow-hidden rounded-[4px]" style={{ minHeight: 240 }}>
                <Image src="/pause-please/photos/pp-ritual.jpg" alt="Wellness ritual setup" fill sizes="(max-width:640px) 100vw, 42vw" className="object-cover object-top" />
              </div>
            </FadeIn>
            <FadeIn delay={0.05} className="sm:col-span-8">
              <div className="relative overflow-hidden rounded-[4px]" style={{ height: 420 }}>
                <Image src="/pause-please/photos/pp-yoga-mat.jpg" alt="Rolling out branded yoga mat" fill sizes="(max-width:640px) 100vw, 67vw" className="object-cover object-center" />
              </div>
            </FadeIn>
            <FadeIn delay={0.12} className="sm:col-span-4">
              <div className="relative overflow-hidden rounded-[4px]" style={{ height: 420 }}>
                <Image src="/pause-please/photos/pp-couch.jpg" alt="Founder lifestyle shot" fill sizes="(max-width:640px) 100vw, 33vw" className="object-cover object-top" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Brand in the world ── */}
      <section style={{ background: PP.petal }}>
        <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-16 lg:py-28">
          <FadeIn>
            <p style={{ fontFamily: "var(--font-cinzel)", fontSize: 10, letterSpacing: "0.28em", textTransform: "uppercase", color: PP.fern, marginBottom: 12 }}>
              Brand in the World
            </p>
            <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 3vw, 2.6rem)", lineHeight: 1.06, letterSpacing: "-0.03em", color: PP.onyx, marginBottom: 48 }}>
              The brand, applied.
            </h2>
          </FadeIn>

          {/* Row 1 — two side by side */}
          <div className="grid gap-4 sm:grid-cols-2" style={{ marginBottom: 16 }}>
            <FadeIn>
              <Image src="/pause-please/stock/pp-candle-mockup.png" alt="Candle with Pause Please label" width={1200} height={1200} style={{ width: "100%", height: "auto", display: "block", borderRadius: 4 }} />
            </FadeIn>
            <FadeIn delay={0.08}>
              <Image src="/pause-please/stock/pp-tote-overhead.png" alt="Branded tote bag" width={1200} height={1200} style={{ width: "100%", height: "auto", display: "block", borderRadius: 4 }} />
            </FadeIn>
          </div>

          {/* Row 2 — full width with logo overlay */}
          <FadeIn delay={0.05}>
            <div className="relative overflow-hidden rounded-[4px]">
              <Image src="/pause-please/stock/notebook-roses.jpg" alt="Notebook with roses" width={2400} height={1600} style={{ width: "100%", height: "auto", display: "block" }} />
              <div className="absolute inset-0 flex items-center justify-center" style={{ background: "rgba(14,18,18,0.18)" }}>
                <div className="relative" style={{ width: "28%", maxWidth: 320 }}>
                  <Image src="/pause-please/logos/Pause-Please-Primary-Logo-ivory-blush-transparent.png" alt="Pause Please logo" width={640} height={320} style={{ width: "100%", height: "auto", filter: "brightness(0) invert(1)", opacity: 0.92 }} />
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Row 3 — two side by side */}
          <div className="grid gap-4 sm:grid-cols-2" style={{ marginTop: 16 }}>
            <FadeIn delay={0.05}>
              <Image src="/pause-please/stock/pp-cup-blossoms.png" alt="Branded cup with blossoms" width={1200} height={1200} style={{ width: "100%", height: "auto", display: "block", borderRadius: 4 }} />
            </FadeIn>
            <FadeIn delay={0.1}>
              <Image src="/pause-please/stock/pp-serum-bottle.png" alt="Branded serum bottle" width={1200} height={1200} style={{ width: "100%", height: "auto", display: "block", borderRadius: 4 }} />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Pattern / quote ── */}
      <section className="relative overflow-hidden py-28" style={{ background: PP.fern }}>
        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage: `url(/pause-please/patterns/Peony-Pattern.png)`,
            backgroundSize: "420px",
            backgroundRepeat: "repeat",
          }}
        />
        <FadeIn className="relative z-10 mx-auto max-w-[760px] px-6 text-center">
          <p style={{ fontFamily: "var(--font-cinzel)", fontSize: 10, letterSpacing: "0.28em", textTransform: "uppercase", color: PP.petal, marginBottom: 28 }}>
            Brand Philosophy
          </p>
          <blockquote
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(1.65rem, 3vw, 2.3rem)",
              fontStyle: "italic",
              lineHeight: 1.18,
              letterSpacing: "-0.02em",
              color: PP.ivory,
            }}
          >
            &ldquo;Soft, grounded femininity — balanced, wholesome, and ready to bloom with just the right light and care.&rdquo;
          </blockquote>
          <p style={{ fontFamily: "var(--font-cinzel)", fontSize: 9, letterSpacing: "0.26em", color: `${PP.petal}80`, marginTop: 24 }}>
            — PAUSE PLEASE BRAND GUIDE
          </p>
        </FadeIn>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "var(--ss-ink)" }}>
        <div className="mx-auto flex max-w-[1400px] flex-col items-center px-6 py-24 text-center lg:px-16 lg:py-32">
          <FadeIn>
            <p style={{ fontFamily: "var(--font-cinzel)", fontSize: 10, letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--ss-bronze-soft)", marginBottom: 20 }}>
              Ready to build your brand?
            </p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                lineHeight: 1.06,
                letterSpacing: "-0.04em",
                color: "var(--ss-light)",
                marginBottom: 36,
                maxWidth: 640,
              }}
            >
              Let&apos;s create something this intentional for you.
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://cal.com/the-unedit-agency/20min"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "14px 28px",
                  borderRadius: 4,
                  border: `1px solid var(--ss-bronze)`,
                  background: "var(--ss-bronze)",
                  color: "var(--ss-light)",
                  fontFamily: "var(--font-cinzel)",
                  fontSize: 10,
                  fontWeight: 600,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  transition: "background 300ms, border-color 300ms",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "var(--ss-bronze-hover)"; e.currentTarget.style.borderColor = "var(--ss-bronze-hover)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "var(--ss-bronze)"; e.currentTarget.style.borderColor = "var(--ss-bronze)"; }}
              >
                Book a Discovery Call
              </a>
              <Link
                href="/"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "14px 28px",
                  borderRadius: 4,
                  border: "1px solid rgba(241,231,222,0.22)",
                  color: "rgba(241,231,222,0.72)",
                  fontFamily: "var(--font-cinzel)",
                  fontSize: 10,
                  fontWeight: 600,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  transition: "border-color 300ms, color 300ms",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--ss-bronze-soft)"; e.currentTarget.style.color = "var(--ss-bronze-soft)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(241,231,222,0.22)"; e.currentTarget.style.color = "rgba(241,231,222,0.72)"; }}
              >
                <ArrowLeft className="size-3" strokeWidth={1.8} />
                Back Home
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

    </main>
  );
}
