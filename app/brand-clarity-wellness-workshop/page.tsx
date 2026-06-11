"use client";

import Link from "next/link";
import Image from "next/image";
import heroImage from "../../wellness-hero.jpg";
import logoImage from "../../LogoHeader.png";
import { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowRight,
  Clock3,
  FileText,
  Mail,
  MessageSquareQuote,
  Plus,
  Sparkles,
  SwatchBook,
  UsersRound,
} from "lucide-react";
import { ArrowLeft } from "lucide-react";

const HERO_IMAGE_SRC = heroImage;
const LOGO_IMAGE_SRC = logoImage;
const BOOKING_URL = "https://cal.com/the-unedit-agency/20min";

const navItems = [
  { label: "THE PROBLEM", href: "#problem" },
  { label: "THE SHIFT", href: "#shift" },
  { label: "THE PROCESS", href: "#process" },
  { label: "THE OFFER", href: "#offer" },
  { label: "THE QUESTION", href: "#questions" },
] as const;

/* ─── brand tokens ─── */
const T = {
  night:  "#1A1714",
  wine:   "#1C1008",
  garnet: "#B85C38",
  bone:   "#D4C4B0",
  light:  "#EDE4D8",
  ash:    "#3D2E28",
  cream:  "#F4F0EB",
};

const benefits = [
  {
    number: "01",
    title: "Know exactly who you're for",
    body: "Get clear on your primary audience at a level that actually informs your marketing — not just \"women 25–45 who care about wellness.\"",
  },
  {
    number: "02",
    title: "See your competitive landscape clearly",
    body: "Understand who else is operating in your space and where you genuinely stand out — so you stop second-guessing yourself.",
  },
  {
    number: "03",
    title: "Own your differentiator",
    body: "Find the thing that makes your practice distinctly yours and learn how to position it so the right people immediately understand why you're the one.",
  },
  {
    number: "04",
    title: "A Brand Playbook + 'What Now' page",
    body: "Not a mood board. A 3–4 page document capturing your strategy, plus channel direction and messaging angles you can put to use immediately.",
  },
] as const;

const processSteps = [
  {
    number: "1",
    eyebrow: "BEFORE WE MEET",
    title: "You fill out a detailed questionnaire",
    body: "Questions about your practice, your clients, and where you want to go. We walk into Session One already knowing the essentials — no fumbling for context on the call.",
  },
  {
    number: "2",
    eyebrow: "SESSION ONE + TWO",
    title: "We build your strategy together",
    body: "Two 2-hour virtual sessions, spaced a few days apart. Session One covers your audience and competitive landscape. Session Two zeros in on your differentiator and positioning. You're in the room as it's built — not receiving a document cold.",
  },
  {
    number: "3",
    eyebrow: "UNDER A MONTH",
    title: "Your Brand Playbook is delivered",
    body: "A 3–4 page document capturing everything we built together, plus a \"What Now\" page with channel direction and 2–3 messaging angles tailored to your audience and positioning.",
  },
] as const;

const testimonials = [
  {
    quote: "I went from not knowing how to explain what I do to having a clear answer that actually makes people lean in. The playbook gave me language I've used in every conversation since.",
    author: "S.M.",
    role: "Somatic Health Coach",
  },
  {
    quote: "Before this, I was attracting clients who weren't quite right for my work. Within weeks of getting clear on my positioning, the inquiries shifted. The quality is completely different.",
    author: "T.R.",
    role: "Integrative Nutrition Practitioner",
  },
  {
    quote: "I've tried three different branding approaches over the years. This is the first one where I felt like something real was being built — not just something that looks nice. The difference is strategy first.",
    author: "A.K.",
    role: "Yoga Studio Owner, 7 Years in Practice",
  },
] as const;

const deliverables = [
  {
    icon: FileText,
    title: "Pre-session questionnaire to maximize our time together",
    body: "Focused prompts that help us arrive with the right context before the strategy work begins.",
  },
  {
    icon: Clock3,
    title: "Two 2-hour virtual brand strategy sessions",
    body: "A structured pair of sessions designed to go deep without dragging the process out.",
  },
  {
    icon: UsersRound,
    title: "Session 1: Primary audience deep-dive + competitive landscape",
    body: "Define who you serve best and where your practice sits inside the market around you.",
  },
  {
    icon: Sparkles,
    title: "Session 2: Differentiator identification + positioning strategy",
    body: "Clarify what makes your practice distinct and how to communicate that value with confidence.",
  },
  {
    icon: SwatchBook,
    title: "Brand Playbook (3–4 pages) delivered within one week",
    body: "A concise strategic document capturing the strategy and language you can keep using.",
  },
  {
    icon: MessageSquareQuote,
    title: "'What Now' page with channel direction and 2–3 messaging angles",
    body: "Practical next steps for turning strategy into visible brand and marketing decisions.",
  },
] as const;

const faqs = [
  {
    question: "Do you work with any type of wellness business?",
    answer:
      "Yes — health coaches, yoga studios, somatic practitioners, nutritionists, acupuncturists, breathwork facilitators, and others. If you have a wellness practice that serves real clients, this work applies to you.",
  },
  {
    question: "I'm not sure I'm ready. How do I know?",
    answer:
      "If you've been in practice for at least two years and can describe three to five clients you've genuinely helped, you're ready. This isn't for people still figuring out their service — it's for people who know what they do, just not how to position it.",
  },
  {
    question: "What if I already have a brand and just need a refresh?",
    answer:
      "This often works even better for established businesses. What we build together might confirm what you already have, or it might clarify why something has felt slightly off. Either outcome is valuable.",
  },
  {
    question: "Do the sessions have to happen on consecutive days?",
    answer:
      "No. Most clients space them a few days to a week apart, which gives time to sit with what comes out of Session One before we move into positioning. We'll find timing that works for your schedule.",
  },
  {
    question: "Will this help if I want to raise my prices?",
    answer:
      "Often, yes. Clear positioning is one of the strongest supports for pricing confidence. When you can articulate precisely who you serve and why you're the right choice, price resistance drops significantly.",
  },
  {
    question: "What's the difference between this and a full brand strategy?",
    answer:
      "A full brand strategy covers everything — substance, messaging framework, brand voice, visual direction. This session focuses specifically on the highest-leverage pieces: your audience, your competitive position, and your differentiator. It's a focused foundation, not the whole building.",
  },
] as const;

const resultBullets = [
  "You've been in practice at least 2 years and have real clients and results",
  "You know your work is good but your brand doesn't reflect it",
  "You're attracting inconsistent clients or the wrong clients",
  "You want clarity fast — not a 3-month process",
  "You're ready to invest in your brand, not just a prettier logo",
] as const;

const footerLinks = [
  { label: "The Problem", href: "#problem" },
  { label: "The Shift", href: "#shift" },
  { label: "The Process", href: "#process" },
  { label: "The Offer", href: "#offer" },
  { label: "The Question", href: "#questions" },
] as const;

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookies", href: "#" },
] as const;

const socialLinks = [
  { label: "Instagram", href: "#", icon: InstagramIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/eastonsmiskey/", icon: LinkedinIcon },
  { label: "Email", href: "mailto:hello@theunedit.com", icon: Mail },
] as const;

const faqColumns = [faqs.slice(0, 3), faqs.slice(3)];
const motionViewport = { once: true, amount: 0.25 };
const bookingTarget = BOOKING_URL.startsWith("http")
  ? { target: "_blank", rel: "noreferrer" }
  : {};

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M7 10v7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 17v-4.2a2.3 2.3 0 0 1 4.6 0V17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 10v7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="7" cy="7" r="1.2" fill="currentColor" />
    </svg>
  );
}

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

function FadeIn({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
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

function SectionEyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`mb-5 font-[family:var(--font-cinzel)] text-[12px] leading-6 tracking-[0.10em] sm:text-[14px] md:text-[16px] ${light ? "text-[var(--ss-muted)]" : "text-[var(--ss-bronze)]"}`}>
      {children}
    </p>
  );
}

function CtaLink({ href, children, variant = "primary", className = "", ...props }: { href: string; children: React.ReactNode; variant?: "primary" | "secondary" | "ghost"; className?: string } & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className">) {
  const base = "inline-flex max-w-full items-center justify-center gap-2 whitespace-nowrap rounded-[4px] border text-center text-[10px] font-semibold leading-[1.2] tracking-[0.18em] uppercase transition duration-300 ease-out will-change-transform hover:scale-[1.03] focus-visible:ring-2 focus-visible:ring-[var(--ss-bronze-soft)]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent sm:tracking-[0.22em]";
  const variantClass =
    variant === "primary"
      ? "border-[var(--ss-bronze)] bg-[var(--ss-bronze)] text-[var(--ss-light)] hover:border-[var(--ss-bronze-hover)] hover:bg-[var(--ss-bronze-hover)]"
      : variant === "secondary"
        ? "border-white/40 bg-transparent text-[var(--ss-light)] hover:border-[var(--ss-bronze-soft)] hover:text-[var(--ss-bronze-soft)]"
        : "border-[var(--ss-soft-border)] bg-white/70 text-[var(--ss-dark-text)] hover:border-[var(--ss-bronze)] hover:text-[var(--ss-bronze)]";
  return (
    <a href={href} {...(href === BOOKING_URL ? bookingTarget : {})} {...props} className={`${base} ${variantClass} ${className}`}>
      {children}
    </a>
  );
}

function BrandMark() {
  return (
    <Link href="/" className="inline-flex h-[52px] w-[118px] shrink-0 items-center" aria-label="The Unedit home">
      <Image src={LOGO_IMAGE_SRC} alt="The Unedit" sizes="118px" className="h-full w-full select-none object-contain" />
    </Link>
  );
}

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/18 bg-[rgba(20,13,9,0.98)] backdrop-blur-md">
      <div className="mx-auto flex h-[64px] max-w-[1400px] items-center justify-between gap-3 px-4 sm:gap-6 sm:px-6 md:h-[68px] lg:px-8">
        <div className="shrink-0 lg:ml-[4px]"><BrandMark /></div>
        <nav className="hidden items-center gap-6 pt-1 xl:flex 2xl:gap-8">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-[12px] font-medium tracking-[0.1em] text-[var(--ss-light)] transition hover:text-[var(--ss-bronze-soft)]">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden md:block">
            <CtaLink href={BOOKING_URL} className="-translate-y-[1px] px-4 py-3 font-semibold shadow-[0_10px_24px_rgba(182,101,56,0.18)] hover:scale-105 md:px-5">
              BOOK NOW
            </CtaLink>
          </div>
          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((v) => !v)}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-[4px] border border-[var(--ss-soft-border)] bg-white/70 text-[var(--ss-dark-text)] transition hover:border-[var(--ss-bronze)] hover:text-[var(--ss-bronze)] xl:hidden"
          >
            <span className="relative block h-3.5 w-5">
              <span className={`absolute left-0 top-0 h-[1.5px] w-5 bg-current transition duration-300 ${mobileMenuOpen ? "translate-y-[6px] rotate-45" : ""}`} />
              <span className={`absolute left-0 top-[6px] h-[1.5px] w-5 bg-current transition duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 top-[12px] h-[1.5px] w-5 bg-current transition duration-300 ${mobileMenuOpen ? "-translate-y-[6px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>
      <motion.div
        initial={false}
        animate={{ height: mobileMenuOpen ? "auto" : 0, opacity: mobileMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden border-t border-[var(--ss-soft-border)] bg-[rgba(245,241,236,0.98)] xl:hidden"
      >
        <div className="max-h-[calc(100vh-64px)] space-y-2 overflow-y-auto px-4 py-4 sm:px-6 md:max-h-[calc(100vh-68px)]">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)} className="block rounded-[4px] border border-transparent px-3 py-3 text-[12px] font-medium tracking-[0.16em] text-[var(--ss-dark-text)]/88 transition hover:border-[var(--ss-bronze)]/35 hover:bg-[rgba(182,101,56,0.04)] hover:text-[var(--ss-bronze)]">
              {item.label}
            </a>
          ))}
          <CtaLink href={BOOKING_URL} className="mt-2 w-full px-4 py-3">
            BOOK NOW <ArrowRight className="size-3.5" strokeWidth={1.7} />
          </CtaLink>
        </div>
      </motion.div>
    </header>
  );
}

function HeroSection() {
  return (
    <section id="top" className="pt-[64px] md:pt-[68px]">
      <div className="grid min-h-[calc(100svh-64px)] md:min-h-[calc(100svh-68px)] md:grid-cols-2">

        {/* Left — text */}
        <div className="flex items-center bg-[var(--ss-cream)] px-6 py-14 sm:px-10 md:px-10 lg:px-14 xl:px-20">
          <div className="w-full max-w-[560px]">
            <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
              <SectionEyebrow>FOR WELLNESS BUSINESS OWNERS</SectionEyebrow>
              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="font-[family:var(--font-cormorant)] text-[clamp(2.6rem,4.5vw,3.4rem)] leading-[1.04] tracking-[-0.04em] text-[var(--ss-dark-text)]"
              >
                Your work is extraordinary.<br />
                Your brand should <em className="text-[var(--ss-bronze)]">say so.</em>
              </motion.h1>
            </motion.div>
            <FadeIn delay={0.3}>
              <p className="mt-7 text-[15px] leading-[1.85] text-[var(--ss-dark-text)]/65">
                You&apos;ve built something real. You know your practice inside and out. But when it comes to explaining what makes you different — or attracting the right clients consistently — the words just don&apos;t come. That&apos;s not a marketing problem. It&apos;s a brand clarity problem. And it&apos;s fixable in two focused sessions.
              </p>
            </FadeIn>
            <FadeIn delay={0.46} className="mt-9 flex flex-wrap gap-4">
              <CtaLink href={BOOKING_URL} variant="primary" className="px-6 py-4">LET&apos;S TALK</CtaLink>
              <CtaLink href="#process" variant="ghost" className="px-6 py-4">SEE HOW IT WORKS</CtaLink>
            </FadeIn>
          </div>
        </div>

        {/* Right — photo */}
        <div className="relative hidden min-h-[400px] md:block">
          <Image
            src={HERO_IMAGE_SRC}
            alt="Wellness practitioner in their studio"
            fill
            priority
            sizes="50vw"
            className="object-cover object-[center_30%]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(20,13,9,0.18)_0%,rgba(20,13,9,0)_40%)]" />
        </div>

      </div>
    </section>
  );
}

const painPoints = [
  "Someone asks what makes your practice different from others in town and you give a different answer every time.",
  "You send your website link with a mental apology — \"I know it's not quite right yet…\"",
  "You've spent money on a logo or a Canva refresh, but the clients you're attracting still don't feel like your clients.",
  "You have big ideas for where your practice is going — new offerings, higher prices, a different clientele — but your current brand doesn't match that version of you yet.",
] as const;

function ProblemStatsSection() {
  return (
    <section id="problem" className="bg-[var(--ss-ink-2)] text-[var(--ss-light)]">
      <div className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6 md:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-[860px]">
          <FadeIn>
            <SectionEyebrow light>SOUND FAMILIAR?</SectionEyebrow>
            <h3 className="font-[family:var(--font-cormorant)] text-[clamp(2.38rem,2.55vw,3.2rem)] leading-[1.05] tracking-[-0.03em] text-[var(--ss-light)]">
              You&apos;re excellent at what you do.<br />That part was never the problem.
            </h3>
            <div className="mt-6 space-y-4 text-[15px] leading-[1.8] text-[var(--ss-muted)]">
              <p>
                You&apos;ve spent years perfecting your practice. You have clients who love working with you. You get results that genuinely change people&apos;s lives. But your brand? It&apos;s not telling that story.
              </p>
              <p>
                Maybe you&apos;ve redone your website twice and it still doesn&apos;t feel right. Maybe every Instagram caption starts with a blank stare at the screen. Maybe you&apos;re pulling in clients who are a little bit off — not your dream people, just whoever happens to find you.
              </p>
              <p>
                None of that is about how good you are at your work. It&apos;s about not having a clear brand foundation to build everything else on.
              </p>
            </div>
          </FadeIn>
          <div className="mt-8 grid sm:grid-cols-2 sm:gap-x-10">
            {painPoints.map((point, i) => (
              <FadeIn key={i} delay={0.08 * i}>
                <div className="border-t border-white/10 py-5">
                  <p className="mb-2 font-[family:var(--font-cormorant)] text-[11px] uppercase tracking-[0.18em] text-[var(--ss-bronze-soft)]">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="text-[15px] leading-[1.75] text-[var(--ss-muted)]">{point}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function GetSection() {
  return (
    <section id="shift" className="bg-[var(--ss-cream)]">
      <div className="mx-auto grid max-w-[1400px] gap-8 px-4 py-12 sm:px-6 md:py-14 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-16">
        <FadeIn>
          <SectionEyebrow>THE SHIFT</SectionEyebrow>
          <h3 className="mt-5 max-w-[440px] font-[family:var(--font-cormorant)] text-[clamp(2.2rem,2.5vw,3.25rem)] leading-[1.02] tracking-[-0.03em] text-[var(--ss-dark-text)]">
            From clarity, ease.
          </h3>
          <p className="mt-6 max-w-[400px] text-[15px] leading-7 text-[var(--ss-dark-text)]/68">
            After two 2-hour sessions, you&apos;ll have a documented brand strategy covering the highest-leverage pieces of your positioning — plus a clear picture of where to focus next.
          </p>
        </FadeIn>
        <div className="divide-y divide-[var(--ss-soft-border)] border-y border-[var(--ss-soft-border)]">
          {benefits.map((item, index) => (
            <FadeIn key={item.number} delay={0.08 * index} className="grid gap-2 py-3 sm:grid-cols-[72px_1fr] sm:gap-1 sm:py-3">
              <p className="pt-1 font-[family:var(--font-cormorant)] text-[30px] leading-none tracking-[-0.03em] text-[var(--ss-bronze)]">{item.number}</p>
              <div>
                <h3 className="text-[22px] leading-[1.15] text-[var(--ss-dark-text)] sm:text-[18px]">{item.title}</h3>
                <p className="mt-2.5 max-w-[540px] text-[14px] leading-6 text-[var(--ss-dark-text)]/65">{item.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section id="process" className="bg-[var(--ss-ink-2)] text-[var(--ss-light)]">
      <div className="mx-auto grid max-w-[1400px] gap-8 px-4 py-12 sm:px-6 md:py-14 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-16">
        <FadeIn>
          <SectionEyebrow light>THE PROCESS</SectionEyebrow>
          <h2 className="mt-5 max-w-[350px] font-[family:var(--font-cormorant)] text-[clamp(2.1rem,3.7vw,3.2rem)] leading-[1.03] tracking-[-0.03em] text-[var(--ss-light)]">
            How we&apos;ll get it done together.
          </h2>
          <p className="mt-6 max-w-[350px] text-[14px] leading-7 text-[var(--ss-muted)]">
            No months-long back and forth. No overwhelming homework. Just two focused sessions and a clear document you can actually use — delivered within four weeks.
          </p>
        </FadeIn>
        <div className="space-y-6">
          {processSteps.map((step, index) => (
            <FadeIn key={step.number} delay={index * 0.06} className="grid gap-4 border-t border-white/10 pt-5 sm:grid-cols-[88px_1fr]">
              <div className="flex items-start gap-3 sm:block">
                <p className="font-[family:var(--font-cormorant)] text-[32px] leading-none text-[var(--ss-bronze)]/72">{step.number}</p>
                <p className="font-[family:var(--font-cinzel)] text-[10px] uppercase tracking-[0.2em] text-[var(--ss-bronze-soft)]/68 sm:mt-3">{step.eyebrow}</p>
              </div>
              <div>
                <h3 className="text-[16px] leading-6 text-[var(--ss-light)]">{step.title}</h3>
                <p className="mt-2 text-[13px] leading-6 text-[var(--ss-muted)]">{step.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function CandleDivider() {
  return (
    <div className="relative h-[280px] w-full overflow-hidden sm:h-[320px]">
      <Image
        src="/candles.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-[center_55%]"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(20,13,9,0.45)_0%,rgba(20,13,9,0.15)_50%,rgba(20,13,9,0.45)_100%)]" />
    </div>
  );
}

function TestimonialSection() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;
  const active = testimonials[index];
  return (
    <section className="bg-[var(--ss-cream)]">
      <div className="mx-auto max-w-[1180px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-start">
          <FadeIn className="max-w-[760px]">
            <p className="font-[family:var(--font-cormorant)] text-[24px] italic text-[var(--ss-bronze)]">What clients say</p>
            <blockquote className="mt-8 font-[family:var(--font-cormorant)] text-[clamp(1.6rem,3.6vw,2rem)] italic leading-[1.14] tracking-[-0.03em] text-[var(--ss-dark-text)]">
              &quot;{active.quote}&quot;
            </blockquote>
            <div className="mt-8 border-t border-[var(--ss-bronze)]/25 pt-5">
              <p className="font-[family:var(--font-cinzel)] text-[10px] uppercase tracking-[0.24em] text-[var(--ss-bronze)]">{active.author}</p>
              <p className="mt-2 text-[12px] uppercase tracking-[0.18em] text-[var(--ss-dark-text)]/50">{active.role}</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.08} className="flex items-center gap-3 lg:pt-8">
            <button type="button" onClick={() => setIndex((v) => (v - 1 + total) % total)} className="inline-flex size-11 items-center justify-center rounded-full border border-[var(--ss-bronze)]/25 text-[var(--ss-dark-text)]/60 transition hover:border-[var(--ss-bronze)] hover:text-[var(--ss-bronze)]">
              <ArrowLeft className="size-4" />
            </button>
            <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--ss-dark-text)]/45">
              {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </p>
            <button type="button" onClick={() => setIndex((v) => (v + 1) % total)} className="inline-flex size-11 items-center justify-center rounded-full border border-[var(--ss-bronze)]/25 text-[var(--ss-dark-text)]/60 transition hover:border-[var(--ss-bronze)] hover:text-[var(--ss-bronze)]">
              <ArrowRight className="size-4" />
            </button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function Offer() {
  return (
    <section id="offer" className="bg-[var(--ss-ink-2)] px-4 py-14 text-[var(--ss-light)] sm:px-6 md:py-16 lg:px-8 lg:py-[72px]">
      <div className="mx-auto max-w-[1180px]">
        <SectionEyebrow light>THE OFFER</SectionEyebrow>
        <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-baseline sm:gap-x-4">
          <h2 className="font-[family:var(--font-cormorant)] text-[2.1rem] font-light leading-[1.04] text-[var(--ss-light)] sm:text-[2.65rem] lg:text-[3.2rem]">
            Your Brand Clarity Session
          </h2>
        </div>
        <p className="mt-3 font-[family:var(--font-cinzel)] text-[11px] uppercase leading-5 tracking-[0.1em] text-[var(--ss-light)]/35 sm:text-[12px]">
          Full investment, paid at booking
        </p>
        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(310px,370px)] lg:items-start lg:gap-12">
          <div>
            {deliverables.map((d) => (
              <div key={d.title} style={{ display: "flex", gap: 16, alignItems: "flex-start", padding: "12px 0", borderBottom: "0.5px solid rgba(237,228,216,0.08)", fontSize: 15, color: T.bone, lineHeight: 1.45 }}>
                <span style={{ color: T.garnet, flexShrink: 0, marginTop: 3, fontSize: 14 }}>→</span>
                {d.title}
              </div>
            ))}
          </div>
          <div className="flex min-w-0 flex-col gap-4 border border-[var(--ss-soft-border)] bg-[var(--ss-cream)] p-5 sm:p-6 lg:sticky lg:top-24">
            <div style={{ fontFamily: "var(--font-cinzel)", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(26,23,20,0.45)", marginBottom: 4 }}>
              Ready to commit?
            </div>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="flex w-full items-center justify-center rounded-[2px] bg-[var(--ss-bronze)] px-4 py-3.5 text-center font-[family:var(--font-cinzel)] text-[10px] font-semibold uppercase leading-5 tracking-[0.14em] text-[var(--ss-light)] no-underline shadow-[0_4px_20px_rgba(184,92,56,0.25)] transition hover:bg-[var(--ss-bronze-hover)] sm:px-6 sm:tracking-[0.2em]">
              Book Your Session
            </a>
            <p style={{ fontSize: 12, color: "rgba(26,23,20,0.45)", lineHeight: 1.5, letterSpacing: "0.02em" }}>
              A 20-minute call, no pitch. Just a conversation to see if it&apos;s a good fit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalResultSection() {
  return (
    <section className="bg-[var(--ss-cream)]">
      <div className="mx-auto grid max-w-[1180px] gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-2 lg:py-20">
        <FadeIn>
          <SectionEyebrow>THE FINAL RESULT</SectionEyebrow>
          <h2 className="mt-5 max-w-[430px] font-[family:var(--font-cormorant)] text-[clamp(2.05rem,3.5vw,3rem)] leading-[1.03] tracking-[-0.03em] text-[var(--ss-dark-text)]">
            Strategy first. Not aesthetics. Not advice. <em className="text-[var(--ss-bronze)]">A foundation.</em>
          </h2>
          <div className="mt-6 max-w-[430px] space-y-5 text-[14px] leading-7 text-[var(--ss-dark-text)]/68">
            <p>
              Your Brand Playbook isn&apos;t a mood board or a color palette. It&apos;s a strategic document — who you serve, how you&apos;re positioned, what makes you different, and where to focus next.
            </p>
            <p>
              Most branding services start with how things look. This one starts with what you actually stand for and why anyone should choose you. The visuals come after that. The marketing comes after that. This is the thinking that makes all of it work.
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={0.08}>
          <SectionEyebrow>This session is right for you if:</SectionEyebrow>
          <ul className="mt-6 space-y-4">
            {resultBullets.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[13px] leading-6 text-[var(--ss-dark-text)]/70">
                <span className="pt-[2px] text-[var(--ss-bronze)]">-&gt;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section id="questions" className="bg-[var(--ss-ink-2)] text-[var(--ss-light)]">
      <div className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6 md:py-14 lg:px-8 lg:py-16">
        <FadeIn>
          <SectionEyebrow light>QUESTIONS</SectionEyebrow>
          <h2 className="mt-5 font-[family:var(--font-cormorant)] text-[clamp(2.1rem,2.5vw,3rem)] leading-[1.04] tracking-[-0.03em] text-[var(--ss-light)]">Honest answers.</h2>
          <p className="mt-5 text-[14px] leading-7 text-[var(--ss-muted)]">
            If something isn&apos;t covered here, you&apos;re always welcome to reach out before booking.
          </p>
        </FadeIn>
        <div className="mt-7 grid gap-4 lg:grid-cols-2">
          {faqColumns.map((column, columnIndex) => (
            <div key={columnIndex} className="space-y-3">
              {column.map((faq, itemIndex) => (
                <AccordionItemDark key={faq.question} question={faq.question} answer={faq.answer} delay={0.05 * (columnIndex * 3 + itemIndex)} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalBanner() {
  return (
    <section className="bg-[var(--ss-bronze)] text-[var(--ss-light)]">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center px-4 py-12 text-center sm:px-6 md:py-14 lg:px-8 lg:py-16">
        <FadeIn>
          <h2 className="font-[family:var(--font-cormorant)] text-[clamp(2.3rem,3.8vw,3.35rem)] leading-[1.08] tracking-[-0.03em]">
            Your practice deserves a brand that works as hard as you do.
          </h2>
          <CtaLink href={`${BOOKING_URL}?month=2026-06`} target="_blank" rel="noopener noreferrer" variant="ghost" className="mt-7 px-7 py-4">
            Book now
          </CtaLink>
          <p className="mt-5 text-[14px] leading-6 text-[var(--ss-light)]/76">
            Book your 20-minute discovery call today.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[var(--ss-ink)] text-[var(--ss-light)]">
      <div className="mx-auto grid max-w-[1400px] gap-7 px-4 py-10 sm:px-6 md:py-12 lg:grid-cols-[1.2fr_0.7fr_0.7fr_1fr] lg:px-8">
        <div>
          <BrandMark />
          <p className="mt-5 max-w-[250px] text-[15px] leading-7 text-[var(--ss-muted)]">
            Helping wellness &amp; spiritual practitioners build brands that match the level they&apos;re actually operating at.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/10 p-2 text-[var(--ss-light)]/75 transition hover:border-[var(--ss-bronze)] hover:text-[var(--ss-bronze-soft)]" aria-label={item.label}>
                  <Icon className="size-4" strokeWidth={1.7} />
                </a>
              );
            })}
          </div>
        </div>
        <FooterColumn title="LINKS" items={footerLinks} />
        <FooterColumn title="LEGAL" items={legalLinks} />
        <div>
          <p className="font-[family:var(--font-cinzel)] text-[10px] tracking-[0.22em] text-[var(--ss-bronze-soft)]">LET&apos;S CONNECT</p>
          <p className="mt-5 max-w-[260px] text-[15px] leading-7 text-[var(--ss-muted)]">Have questions or ready to get clear on your brand? We&apos;d love to hear from you.</p>
          <a href="mailto:hello@theunedit.com" className="mt-5 inline-flex items-center gap-2 text-[15px] text-[var(--ss-light)] hover:text-[var(--ss-bronze-soft)]">
            <Mail className="size-4" strokeWidth={1.8} />
            hello@theunedit.com
          </a>
        </div>
      </div>
      <div className="mx-auto flex max-w-[1400px] flex-col gap-3 border-t border-white/10 px-4 py-4 text-[11px] text-[var(--ss-light)]/45 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <p>© 2026 The Unedit. All rights reserved.</p>
      </div>
    </footer>
  );
}

function FloatingSocialProof() {
  return (
    <motion.aside
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.65 }}
      className="fixed bottom-6 right-6 z-40 hidden w-[260px] rounded-[4px] border border-[var(--ss-soft-border)] bg-[rgba(245,241,236,0.96)] p-3.5 shadow-[0_20px_55px_rgba(0,0,0,0.18)] backdrop-blur xl:block"
    >
      <div className="flex items-start gap-3">
        <div className="mt-0.5 rounded-full border border-[var(--ss-soft-border)] bg-white p-2 text-[var(--ss-bronze)]">
          <UsersRound className="size-4" strokeWidth={1.8} />
        </div>
        <div>
          <p className="font-medium text-[var(--ss-dark-text)]">3 spots remaining</p>
          <p className="mt-1 text-[13px] leading-5 text-[var(--ss-dark-text)]/70">This week for discovery calls</p>
        </div>
      </div>
    </motion.aside>
  );
}

function StickyCTA() {
  return (
    <div className="fixed inset-x-3 bottom-3 z-40 hidden xl:block">
      <div className="mx-auto flex max-w-[560px] items-center justify-between gap-4 rounded-[6px] border border-[var(--ss-soft-border)] bg-[rgba(245,241,236,0.96)] p-3 shadow-[0_18px_45px_rgba(0,0,0,0.18)] backdrop-blur">
        <p className="hidden flex-1 text-[13px] leading-5 text-[var(--ss-dark-text)]/78 sm:block">
          Ready to build a brand that speaks to the right clients?
        </p>
        <CtaLink href={BOOKING_URL} className="w-full min-w-0 px-4 py-3 sm:w-auto">BOOK NOW</CtaLink>
      </div>
    </div>
  );
}

function AccordionItem({ question, answer, delay }: { question: string; answer: string; delay: number }) {
  const [open, setOpen] = useState(false);
  return (
    <FadeIn delay={delay}>
      <div className="overflow-hidden rounded-[4px] border border-[var(--ss-soft-border)] bg-white/60 shadow-[0_8px_24px_rgba(33,21,15,0.03)] transition duration-300 hover:border-[var(--ss-bronze)]/30">
        <button type="button" onClick={() => setOpen((v) => !v)} className="flex w-full items-center justify-between gap-4 px-5 py-4.5 text-left">
          <span className="text-[15px] leading-7 text-[var(--ss-dark-text)]">{question}</span>
          <Plus className={`size-4 shrink-0 text-[var(--ss-bronze)] transition-transform duration-300 ${open ? "rotate-45" : ""}`} strokeWidth={1.8} />
        </button>
        <motion.div initial={false} animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }} transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
          <div className="px-5 pb-5 text-[13px] leading-7 text-[var(--ss-dark-text)]/72">{answer}</div>
        </motion.div>
      </div>
    </FadeIn>
  );
}

function AccordionItemDark({ question, answer, delay }: { question: string; answer: string; delay: number }) {
  const [open, setOpen] = useState(false);
  return (
    <FadeIn delay={delay}>
      <div className="overflow-hidden rounded-[4px] border border-white/10 bg-white/[0.03] transition duration-300 hover:border-[var(--ss-bronze)]/25">
        <button type="button" onClick={() => setOpen((v) => !v)} className="flex w-full items-center justify-between gap-4 px-5 py-4.5 text-left">
          <span className="text-[15px] leading-7 text-[var(--ss-light)]">{question}</span>
          <Plus className={`size-4 shrink-0 text-[var(--ss-bronze-soft)] transition-transform duration-300 ${open ? "rotate-45" : ""}`} strokeWidth={1.8} />
        </button>
        <motion.div initial={false} animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }} transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
          <div className="px-5 pb-5 text-[13px] leading-7 text-[var(--ss-muted)]">{answer}</div>
        </motion.div>
      </div>
    </FadeIn>
  );
}

function FooterColumn({ title, items }: { title: string; items: readonly { label: string; href: string }[] }) {
  return (
    <div>
      <p className="font-[family:var(--font-cinzel)] text-[10px] tracking-[0.22em] text-[var(--ss-bronze-soft)]">{title}</p>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item.label}>
            <a href={item.href} className="text-[15px] text-[var(--ss-muted)] hover:text-[var(--ss-bronze-soft)]">{item.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function WellnessPage() {
  return (
    <main className="bg-[var(--ss-ink)] text-[var(--ss-light)]">
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <ProblemStatsSection />
      <GetSection />
      <ProcessSection />
      <CandleDivider />
      <TestimonialSection />
      <Offer />
      <FinalResultSection />
      <FAQSection />
      <FinalBanner />
      <Footer />
      <FloatingSocialProof />
      <StickyCTA />
    </main>
  );
}
