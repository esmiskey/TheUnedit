"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const FO = {
  midnight:  "#16172d",
  sky:       "#c1d8e6",
  olive:     "#9f8d32",
  lime:      "#d7cc63",
  tangerine: "#f0832a",
  offwhite:  "#f7f9fb",
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

const strategyServices = [
  "Audience Research",
  "Brand Positioning",
  "Brand Archetypes",
  "Core Values Framework",
  "Messaging Framework",
  "Brand Voice",
  "Tone of Voice",
];

const visualServices = [
  "Logo System",
  "Colour Palette",
  "Typography",
  "Design Elements",
  "Brand Guide",
];

const palette = [
  { name: "MIDNIGHT",  hex: "#16172d" },
  { name: "SKY",       hex: "#c1d8e6" },
  { name: "OLIVE",     hex: "#9f8d32" },
  { name: "LIME",      hex: "#d7cc63" },
  { name: "TANGERINE", hex: "#f0832a" },
  { name: "POPPY",     hex: "#d43827" },
];

const logos: { src: string; bg: string; label: string; light: boolean; imgStyle: React.CSSProperties; fullBleed?: boolean }[] = [
  {
    src:      "/forward-outdoor/logos/fo-logo-navy-horz.png",
    bg:       FO.offwhite,
    label:    "HORIZONTAL — ON WHITE",
    light:    false,
    imgStyle: {},
  },
  {
    src:      "/forward-outdoor/photos/fo-cathylynne-1.png",
    bg:       FO.sky,
    label:    "STACKED — ON SKY",
    light:    false,
    imgStyle: {},
    fullBleed: true,
  },
  {
    src:      "/forward-outdoor/logos/fo-logo-navy-horz.png",
    bg:       FO.midnight,
    label:    "HORIZONTAL — ON MIDNIGHT",
    light:    true,
    imgStyle: { filter: "brightness(0) invert(1)" },
  },
];


export default function ForwardOutdoorCaseStudy() {
  return (
    <main style={{ background: FO.midnight, color: FO.sky }}>

      {/* ── Floating nav ── */}
      <nav
        className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-5 lg:px-10"
        style={{ background: "linear-gradient(to bottom, rgba(22,23,45,0.85) 0%, rgba(22,23,45,0) 100%)" }}
      >
        <Link
          href="/"
          className="group inline-flex items-center gap-2 transition"
          style={{ fontFamily: "var(--font-cinzel)", fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(193,216,230,0.65)" }}
        >
          <ArrowLeft className="size-3 transition-transform group-hover:-translate-x-1" strokeWidth={1.8} />
          The Unedit
        </Link>
        <p style={{ fontFamily: "var(--font-cinzel)", fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(193,216,230,0.4)" }}>
          Portfolio
        </p>
      </nav>

      {/* ── Hero ── */}
      <section className="relative min-h-screen overflow-hidden">
        <Image
          src="/forward-outdoor/photos/fo-cathylynne-2.png"
          alt="Forward Outdoor branded cap — outdoor lifestyle"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(22,23,45,0.45) 0%, rgba(22,23,45,0.15) 38%, rgba(22,23,45,0.85) 100%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(22,23,45,0.55) 0%, rgba(22,23,45,0) 60%)" }} />

        <div className="relative z-10 flex min-h-screen flex-col justify-end px-6 pb-16 lg:px-16 lg:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 44 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
          >
            <p style={{ fontFamily: "var(--font-cinzel)", fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", color: FO.lime, marginBottom: 16 }}>
              Brand Strategy &amp; Verbal Identity — 2024
            </p>
            <h1
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(4.5rem, 11vw, 9rem)",
                lineHeight: 0.9,
                letterSpacing: "-0.04em",
                color: FO.sky,
              }}
            >
              Forward<br />Outdoor
            </h1>
            <p style={{ marginTop: 24, maxWidth: 480, fontSize: 14, lineHeight: 1.85, color: "rgba(193,216,230,0.72)" }}>
              A Milwaukee outdoor adventure company making nature more accessible — for first-timers, seasoned explorers, corporate teams, and everyone in between.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 right-8 flex flex-col items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.7 }}
        >
          <span style={{ fontFamily: "var(--font-cinzel)", fontSize: 8, letterSpacing: "0.3em", color: "rgba(193,216,230,0.35)", writingMode: "vertical-rl" }}>SCROLL</span>
          <motion.div
            style={{ width: 1, height: 52, background: "rgba(193,216,230,0.25)", transformOrigin: "top" }}
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </section>

      {/* ── Project brief ── */}
      <section style={{ background: FO.sky, color: FO.midnight }}>
        <div className="mx-auto grid max-w-[1400px] gap-14 px-6 py-20 lg:grid-cols-[280px_1fr] lg:px-16 lg:py-28">

          {/* Services */}
          <FadeIn>
            <p style={{ fontFamily: "var(--font-cinzel)", fontSize: 10, letterSpacing: "0.28em", textTransform: "uppercase", color: FO.olive, marginBottom: 24 }}>
              Strategy &amp; Voice
            </p>
            <ul className="space-y-3">
              {strategyServices.map((s) => (
                <li key={s} className="flex items-start gap-3" style={{ fontSize: 13, lineHeight: 1.7, color: FO.midnight }}>
                  <span style={{ color: FO.olive, marginTop: 2, flexShrink: 0 }}>—</span>
                  {s}
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t pt-6" style={{ borderColor: `${FO.midnight}22` }}>
              <p style={{ fontFamily: "var(--font-cinzel)", fontSize: 10, letterSpacing: "0.28em", textTransform: "uppercase", color: FO.olive, marginBottom: 16 }}>
                Visual Identity
              </p>
              <ul className="space-y-3">
                {visualServices.map((s) => (
                  <li key={s} className="flex items-start gap-3" style={{ fontSize: 13, lineHeight: 1.7, color: `${FO.midnight}90` }}>
                    <span style={{ color: `${FO.midnight}55`, marginTop: 2, flexShrink: 0 }}>—</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 border-t pt-8" style={{ borderColor: `${FO.midnight}22` }}>
              <p style={{ fontFamily: "var(--font-cinzel)", fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: `${FO.midnight}55`, marginBottom: 6 }}>
                Client
              </p>
              <p style={{ fontSize: 14, color: FO.midnight }}>Forward Outdoor</p>
              <p style={{ fontFamily: "var(--font-cinzel)", fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: `${FO.midnight}55`, marginTop: 16, marginBottom: 6 }}>
                Year
              </p>
              <p style={{ fontSize: 14, color: FO.midnight }}>2024</p>
              <p style={{ fontFamily: "var(--font-cinzel)", fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: `${FO.midnight}55`, marginTop: 16, marginBottom: 6 }}>
                Brand Strategy
              </p>
              <p style={{ fontSize: 14, color: FO.midnight }}>Easton Smiskey</p>
              <p style={{ fontFamily: "var(--font-cinzel)", fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: `${FO.midnight}55`, marginTop: 16, marginBottom: 6 }}>
                Visual Identity
              </p>
              <p style={{ fontSize: 14, color: FO.midnight }}>Cathylynne Punnoose</p>
            </div>
          </FadeIn>

          {/* Description */}
          <FadeIn delay={0.1}>
            <p style={{ fontFamily: "var(--font-cinzel)", fontSize: 10, letterSpacing: "0.28em", textTransform: "uppercase", color: FO.olive, marginBottom: 24 }}>
              The Project
            </p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                lineHeight: 1.06,
                letterSpacing: "-0.03em",
                color: FO.midnight,
                marginBottom: 24,
              }}
            >
              Bridging the gap between adventure and access — for everyone who&apos;s ever wanted to step outside.
            </h2>
            <div className="space-y-4" style={{ fontSize: 14, lineHeight: 1.85, color: `${FO.midnight}b0` }}>
              <p>
                Forward Outdoor wanted to make the Milwaukee outdoors more accessible in an industry long dominated by technical jargon and gear culture geared toward seasoned adventurers. Our work built the full strategic foundation to change that.
              </p>
              <p>
                We started with deep audience research to map who Forward Outdoor truly serves — from first-timers to experienced explorers, corporate offsites to bachelorette weekends. That research anchored a positioning strategy built around the Sage archetype: a trusted guide who provides knowledge, safety, and thoughtful care to make any experience effortless and memorable.
              </p>
              <p>
                The result is a brand voice that doesn&apos;t exclude anyone. It meets people where they are, earns trust quickly, and makes them feel like they already belong outdoors — they just needed someone to plan the trip.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Full-width divider photo ── */}
      <div className="relative h-[55vh] overflow-hidden">
        <Image
          src="/forward-outdoor/photos/fo-kayak-sunset.jpg"
          alt="Kayaking at sunset on a tree-lined river"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(22,23,45,0.18) 0%, rgba(22,23,45,0) 50%, rgba(22,23,45,0.14) 100%)" }} />
      </div>

      {/* ── Core Values ── */}
      <section style={{ background: FO.offwhite }}>
        <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-16 lg:py-28">
          <FadeIn>
            <p style={{ fontFamily: "var(--font-cinzel)", fontSize: 10, letterSpacing: "0.28em", textTransform: "uppercase", color: FO.olive, marginBottom: 20 }}>
              Core Values
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.85, color: `${FO.midnight}99`, maxWidth: 680, marginBottom: 48 }}>
              Understanding and defining Forward Outdoor&apos;s core values set the foundation for a brand personality and visual identity that resonate with customers.
            </p>
          </FadeIn>
          <FadeIn>
            <div className="overflow-hidden rounded-[4px]">
              <Image src="/forward-outdoor/photos/fo-phone-orange.jpg" alt="Forward Outdoor brand guide — core values spread" width={2000} height={1333} style={{ width: "100%", height: "auto", display: "block" }} />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Brand Personality & Visual Identity ── */}
      <section style={{ background: FO.midnight }}>
        <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-16 lg:py-28">

          <FadeIn>
            <p style={{ fontFamily: "var(--font-cinzel)", fontSize: 10, letterSpacing: "0.28em", textTransform: "uppercase", color: FO.lime, marginBottom: 16 }}>
              Brand Personality &amp; Visual Identity
            </p>
            <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 3.2vw, 2.8rem)", lineHeight: 1.06, letterSpacing: "-0.03em", color: FO.sky }}>
              Warm, playful, and unapologetically welcoming.
            </h2>
            <p style={{ fontFamily: "var(--font-cinzel)", fontSize: 9, letterSpacing: "0.18em", color: `${FO.sky}55`, marginTop: 10 }}>
              Visual identity by Cathylynne Punnoose
            </p>
          </FadeIn>

          {/* Logo suite */}
          <div className="mt-14 grid gap-4 sm:grid-cols-3" style={{ alignItems: "stretch" }}>
            {logos.map((logo, i) => (
              <FadeIn key={logo.label} delay={0.07 * i} className="h-full">
                {logo.fullBleed ? (
                  <div className="relative overflow-hidden rounded-[4px] h-full" style={{ minHeight: 200, border: "1px solid rgba(255,255,255,0.07)" }}>
                    <Image src={logo.src} alt={logo.label} fill sizes="300px" className="object-cover" />
                    <p style={{ position: "absolute", bottom: 16, left: 0, right: 0, textAlign: "center", fontFamily: "var(--font-cinzel)", fontSize: 9, letterSpacing: "0.26em", color: FO.midnight }}>
                      {logo.label}
                    </p>
                  </div>
                ) : (
                  <div
                    className="flex flex-col items-center justify-center rounded-[4px] p-10 h-full"
                    style={{ background: logo.bg, border: "1px solid rgba(255,255,255,0.07)" }}
                  >
                    <div className="relative h-28 w-full">
                      <Image src={logo.src} alt={logo.label} fill sizes="300px" className="object-contain" style={logo.imgStyle} />
                    </div>
                    <p style={{ fontFamily: "var(--font-cinzel)", fontSize: 9, letterSpacing: "0.26em", marginTop: 24, color: logo.light ? FO.sky : FO.midnight }}>
                      {logo.label}
                    </p>
                  </div>
                )}
              </FadeIn>
            ))}
          </div>

          {/* Colour palette */}
          <FadeIn className="mt-16">
            <p style={{ fontFamily: "var(--font-cinzel)", fontSize: 10, letterSpacing: "0.28em", textTransform: "uppercase", color: FO.lime, marginBottom: 24 }}>
              Colour Palette
            </p>
            <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
              {palette.map((c) => (
                <div key={c.name}>
                  <div className="h-20 rounded-[4px]" style={{ background: c.hex }} />
                  <p style={{ fontFamily: "var(--font-cinzel)", fontSize: 8, letterSpacing: "0.18em", color: FO.sky, marginTop: 8 }}>{c.name}</p>
                  <p style={{ fontSize: 10, color: `${FO.sky}66`, marginTop: 2 }}>{c.hex}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Brand guide mockup */}
          <FadeIn className="mt-16">
            <div className="overflow-hidden rounded-[4px]">
              <Image src="/forward-outdoor/photos/fo-mockup-guide.jpg" alt="Forward Outdoor brand guide mockup" width={2000} height={1333} style={{ width: "100%", height: "auto", display: "block" }} />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Brand in the World ── */}
      <section style={{ background: FO.sky }}>
        <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-16 lg:py-28">
          <FadeIn>
            <p style={{ fontFamily: "var(--font-cinzel)", fontSize: 10, letterSpacing: "0.28em", textTransform: "uppercase", color: FO.midnight, marginBottom: 20 }}>
              Brand in the World
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.85, color: `${FO.midnight}99`, maxWidth: 680, marginBottom: 48 }}>
              It was important to create design elements that support the personality traits established earlier in the branding process and to provide the Forward Outdoor team with practical ways to implement them.
            </p>
          </FadeIn>

          {/* Tee + water bottle side by side */}
          <div className="grid gap-4 sm:grid-cols-2" style={{ marginBottom: 18 }}>
            <FadeIn>
              <div className="relative overflow-hidden rounded-[4px]">
                <Image src="/forward-outdoor/photos/fo-kayak-girl.jpg" alt="Woman kayaking at golden hour — Forward Outdoor" width={1988} height={1325} style={{ width: "100%", height: "auto", display: "block" }} />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(22,23,45,0.6) 0%, rgba(22,23,45,0.1) 50%, rgba(22,23,45,0) 100%)" }} />
                <div className="absolute bottom-6" style={{ left: "4%", width: "clamp(120px, 16%, 200px)" }}>
                  <Image src="/forward-outdoor/logos/fo-logo-navy-horz.png" alt="Forward Outdoor" width={600} height={216} style={{ width: "100%", height: "auto", display: "block", filter: "brightness(0) invert(1)" }} />
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.08}>
              <div className="overflow-hidden rounded-[4px]">
                <Image src="/forward-outdoor/photos/fo-water-bottle-dark.png" alt="Forward Outdoor branded water bottle" width={2500} height={1668} style={{ width: "100%", height: "auto", display: "block" }} />
              </div>
            </FadeIn>
          </div>

          {/* Full-width bike */}
          <FadeIn>
            <div className="overflow-hidden rounded-[4px]">
              <Image src="/forward-outdoor/photos/fo-bike.jpg" alt="Forward Outdoor branded t-shirt — man on bike" width={1920} height={1080} style={{ width: "100%", height: "auto", display: "block" }} />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Quote ── */}
      <section className="relative overflow-hidden py-28" style={{ background: FO.midnight }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(193,216,230,0.1) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <FadeIn className="relative z-10 mx-auto max-w-[760px] px-6 text-center">
          <p style={{ fontFamily: "var(--font-cinzel)", fontSize: 10, letterSpacing: "0.28em", textTransform: "uppercase", color: FO.lime, marginBottom: 28 }}>
            Client
          </p>
          <blockquote
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(1.65rem, 3vw, 2.3rem)",
              fontStyle: "italic",
              lineHeight: 1.18,
              letterSpacing: "-0.02em",
              color: FO.sky,
            }}
          >
            &ldquo;Easton worked with us on the branding for our new outdoor adventure company alongside Cathylynne Punnoose. Her brand voice was spot on. She was a pleasure to work with, timely, and listened to our vision while bringing it to life.&rdquo;
          </blockquote>
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="overflow-hidden rounded-full" style={{ width: 52, height: 52, flexShrink: 0, border: `2px solid ${FO.lime}40` }}>
              <Image src="/forward-outdoor/photos/fo-kurt.jpg" alt="Kurt — Forward Outdoor" width={52} height={52} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
            <div style={{ textAlign: "left" }}>
              <p style={{ fontFamily: "var(--font-cinzel)", fontSize: 9, letterSpacing: "0.22em", color: FO.sky }}>KURT</p>
              <p style={{ fontFamily: "var(--font-cinzel)", fontSize: 8, letterSpacing: "0.18em", color: `${FO.lime}80`, marginTop: 3 }}>FORWARD OUTDOOR</p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: FO.tangerine }}>
        <div className="mx-auto flex max-w-[1400px] flex-col items-center px-6 py-24 text-center lg:px-16 lg:py-32">
          <FadeIn>
            <p style={{ fontFamily: "var(--font-cinzel)", fontSize: 10, letterSpacing: "0.28em", textTransform: "uppercase", color: FO.midnight, opacity: 0.65, marginBottom: 20 }}>
              Ready to build your brand?
            </p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                lineHeight: 1.06,
                letterSpacing: "-0.04em",
                color: FO.midnight,
                marginBottom: 36,
                maxWidth: 640,
              }}
            >
              Let&apos;s create something this adventurous for you.
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
                  border: `1px solid ${FO.midnight}`,
                  background: FO.midnight,
                  color: FO.sky,
                  fontFamily: "var(--font-cinzel)",
                  fontSize: 10,
                  fontWeight: 600,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  transition: "background 300ms, border-color 300ms",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#0d0e1c"; e.currentTarget.style.borderColor = "#0d0e1c"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = FO.midnight; e.currentTarget.style.borderColor = FO.midnight; }}
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
                  border: `1px solid ${FO.midnight}55`,
                  color: FO.midnight,
                  fontFamily: "var(--font-cinzel)",
                  fontSize: 10,
                  fontWeight: 600,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  transition: "border-color 300ms, opacity 300ms",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = FO.midnight; e.currentTarget.style.opacity = "0.7"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = `${FO.midnight}55`; e.currentTarget.style.opacity = "1"; }}
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
