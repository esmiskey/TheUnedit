"use client"

import type React from "react"
import { useState, useCallback, useRef } from "react"
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion"

const T = {
  light:  "#EDE4D8",
  bone:   "#D4C4B0",
  garnet: "#B85C38",
  wine:   "#1C1008",
}

const testimonials = [
  {
    quote: "I'd rebuilt my website twice in two years and it still felt wrong. After these sessions I understood why — I'd been building on the wrong foundation. The positioning work changed everything.",
    author: "K.L.",
    role: "Brand Consultant & Creative Strategist",
  },
  {
    quote: "I thought I needed a rebrand. What I actually needed was clarity on who I'm for and why I'm different. The playbook I walked away with is the most useful document in my business.",
    author: "R.M.",
    role: "Business Coach, 5 Years in Practice",
  },
  {
    quote: "Within a month of getting clear on my positioning, I raised my prices and filled the first round. My brand was finally showing the value I was already delivering.",
    author: "J.W.",
    role: "Marketing Consultant & Copywriter",
  },
]

function SplitText({ text }: { text: string }) {
  const words = text.split(" ")
  return (
    <span className="inline">
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.45,
            delay: i * 0.028,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}

export function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const cursorX = useSpring(mouseX, { damping: 25, stiffness: 150 })
  const cursorY = useSpring(mouseY, { damping: 25, stiffness: 150 })

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      mouseX.set(e.clientX - rect.left)
      mouseY.set(e.clientY - rect.top)
    },
    [mouseX, mouseY],
  )

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % testimonials.length)
  const current = testimonials[activeIndex]

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-2xl mx-auto py-20 px-8 select-none"
      style={{ cursor: "none" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleNext}
    >
      {/* Magnetic cursor */}
      <motion.div
        className="pointer-events-none absolute z-50"
        style={{ x: cursorX, y: cursorY, translateX: "-50%", translateY: "-50%" }}
      >
        <motion.div
          className="rounded-full flex items-center justify-center"
          style={{ background: T.garnet }}
          animate={{
            width: isHovered ? 72 : 0,
            height: isHovered ? 72 : 0,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ type: "spring", damping: 20, stiffness: 200 }}
        >
          <motion.span
            style={{
              color: T.light,
              fontSize: 9,
              fontFamily: "var(--font-cinzel)",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ delay: 0.08 }}
          >
            Next
          </motion.span>
        </motion.div>
      </motion.div>

      {/* Index counter */}
      <motion.div
        className="absolute top-8 right-8 flex items-baseline gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.span
          style={{
            fontFamily: "var(--font-cormorant)",
            fontStyle: "italic",
            fontSize: 28,
            fontWeight: 300,
            color: T.light,
          }}
          key={activeIndex}
          initial={{ y: 8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {String(activeIndex + 1).padStart(2, "0")}
        </motion.span>
        <span style={{ color: `rgba(237,228,216,0.2)`, fontSize: 13 }}>/</span>
        <span style={{ color: `rgba(237,228,216,0.2)`, fontSize: 13 }}>
          {String(testimonials.length).padStart(2, "0")}
        </span>
      </motion.div>

      {/* Quote */}
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.18 } }}
            style={{
              fontFamily: "var(--font-cormorant)",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: "clamp(22px, 2.6vw, 32px)",
              lineHeight: 1.55,
              letterSpacing: "-0.01em",
              color: T.light,
            }}
          >
            <SplitText text={`"${current.quote}"`} />
          </motion.blockquote>
        </AnimatePresence>

        {/* Author */}
        <motion.div className="mt-10 relative" layout>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              className="relative pl-5"
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 8 }}
              transition={{ duration: 0.3 }}
            >
              {/* Accent line */}
              <motion.div
                className="absolute left-0 top-0 bottom-0 w-px"
                style={{ background: T.garnet, originY: 0 }}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.4, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              />
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--font-cinzel)",
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: "0.14em",
                  color: T.bone,
                }}
              >
                {current.author}
              </span>
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--font-cinzel)",
                  fontSize: 11,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: `rgba(237,228,216,0.45)`,
                  marginTop: 6,
                }}
              >
                {current.role}
              </span>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Progress bar */}
        <div
          className="mt-14 relative overflow-hidden"
          style={{ height: 1, background: "rgba(237,228,216,0.08)" }}
        >
          <motion.div
            className="absolute inset-y-0 left-0"
            style={{ background: T.garnet }}
            initial={{ width: "0%" }}
            animate={{ width: `${((activeIndex + 1) / testimonials.length) * 100}%` }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>

        {/* Hint */}
        <motion.div
          className="absolute -bottom-10 left-0"
          animate={{ opacity: isHovered ? 0.35 : 0.15 }}
          transition={{ duration: 0.3 }}
        >
          <span
            style={{
              fontSize: 9,
              fontFamily: "var(--font-cinzel)",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: `rgba(237,228,216,0.5)`,
            }}
          >
            Click anywhere to advance
          </span>
        </motion.div>
      </div>
    </div>
  )
}
