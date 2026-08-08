"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import Container from "@/components/layout/Container";

const faqs = [
  {
    question:
      "What does the typical website redesign or revamp process look like?",
    answer:
      "Every project starts with understanding your business, users and goals. Before designing anything, we analyze your current website, identify pain points and define opportunities for improvement.\n\nOur typical process includes Discovery, UX research, information architecture, wireframing, UI design, prototyping, development, QA and launch. Throughout the project, you have full visibility into progress, regular design reviews and direct communication with our team.\n\nWhether it's a landing page or a large enterprise platform, our goal is always the same: create a website that looks exceptional, performs flawlessly and helps your business grow.",
  },
  {
    question: "What services does Arodev provide?",
    answer:
      "Arodev provides strategy, UI/UX design, website development, web applications, AI solutions, automation and digital product development. We combine design, technology and strategy to create digital experiences that help businesses grow.",
  },
  {
    question: "Do you build websites using Webflow or custom code?",
    answer:
      "Yes. We can work with Webflow when it is the right solution for the project, or build fully custom websites using modern technologies such as React, Next.js and other suitable tools.",
  },
  {
    question: "Can you help launch an MVP quickly?",
    answer:
      "Absolutely. We can help define the MVP scope, design the experience, build the product and prepare it for launch. Our focus is on getting the essential product into users' hands quickly without sacrificing quality.",
  },
  {
    question: "Which CMS do you recommend?",
    answer:
      "The right CMS depends on your content, team and business requirements. We can work with solutions such as WordPress, Sanity, Contentful or custom CMS architectures depending on the project.",
  },
  {
    question: "Do you work on fixed-price projects or Time & Materials?",
    answer:
      "We support both approaches. Fixed-price projects work well when the scope is clearly defined, while Time & Materials is often better for products that evolve during development.",
  },
  {
    question: "Do you offer SEO services?",
    answer:
      "Yes. We can build SEO-friendly websites and help with technical SEO, performance optimization, content structure, metadata, accessibility and other foundations required for strong organic visibility.",
  },
  {
    question:
      "My website has poor PageSpeed scores. Can you help improve them?",
    answer:
      "Yes. We can audit your website and improve performance through image optimization, code splitting, caching, font optimization, lazy loading, rendering improvements and other technical performance techniques.",
  },
];

export default function FAQ() {
  const { resolvedTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  /*
   * Prevent hydration/theme mismatch
   */
  if (!mounted) {
    return (
      <section className="bg-white py-24 md:py-32 dark:bg-[#050816]">
        <Container>
          <div className="h-[500px]" />
        </Container>
      </section>
    );
  }

  const isDark = resolvedTheme === "dark";

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section
      className={`relative overflow-hidden py-24 transition-colors duration-500 md:py-32 ${
        isDark ? "bg-[#050816]" : "bg-white"
      }`}
    >
      <Container>
        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-16 md:mb-20"
        >
          <h2
            className={`text-6xl font-semibold tracking-[-0.06em] md:text-7xl lg:text-[88px] ${
              isDark ? "text-white" : "text-black"
            }`}
          >
            FAQ
          </h2>
        </motion.div>

        {/* =====================================================
            FAQ LIST
        ====================================================== */}

        <div className="w-full">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const isLast = index === faqs.length - 1;

            return (
              <motion.div
                key={faq.question}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.04,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative"
              >
                {/* =================================================
                    TOP DIVIDER + MOVING LIGHT
                ================================================== */}

                <div
                  className={`relative h-px w-full overflow-hidden ${
                    isDark ? "bg-white/10" : "bg-black/10"
                  }`}
                >
                  <motion.div
                    initial={{
                      x: "-120%",
                    }}
                    whileInView={{
                      x: "520%",
                    }}
                    viewport={{
                      once: false,
                      amount: 0.2,
                    }}
                    transition={{
                      duration: 2.8,
                      delay: index * 0.12,
                      repeat: Infinity,
                      repeatDelay: 2,
                      ease: "easeInOut",
                    }}
                    className={`absolute top-0 h-px w-[22%] ${
                      isDark
                        ? "bg-gradient-to-r from-transparent via-white/80 to-transparent"
                        : "bg-gradient-to-r from-transparent via-black/45 to-transparent"
                    }`}
                  />
                </div>

                {/* =================================================
                    QUESTION
                ================================================== */}

                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="group flex w-full items-center justify-between gap-8 py-6 text-left md:py-7"
                >
                  <span
                    className={`text-base font-medium tracking-[-0.025em] transition-colors duration-300 md:text-lg ${
                      isOpen
                        ? isDark
                          ? "text-white"
                          : "text-black"
                        : isDark
                          ? "text-white/80 group-hover:text-white"
                          : "text-black/80 group-hover:text-black"
                    }`}
                  >
                    {faq.question}
                  </span>

                  {/* =================================================
                      PLUS / CROSS ICON
                  ================================================== */}

                  <span
                    className={`relative flex h-8 w-8 shrink-0 items-center justify-center ${
                      isDark ? "text-white" : "text-black"
                    }`}
                  >
                    {/* Horizontal */}
                    <motion.span
                      animate={{
                        rotate: isOpen ? 45 : 0,
                      }}
                      transition={{
                        duration: 0.3,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="absolute h-px w-4 bg-current"
                    />

                    {/* Vertical */}
                    <motion.span
                      animate={{
                        rotate: isOpen ? 135 : 0,
                        opacity: 1,
                      }}
                      transition={{
                        duration: 0.3,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="absolute h-px w-4 bg-current"
                    />
                  </span>
                </button>

                {/* =================================================
                    ANSWER
                ================================================== */}

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        height: {
                          duration: 0.45,
                          ease: [0.22, 1, 0.36, 1],
                        },
                        opacity: {
                          duration: 0.25,
                        },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 pr-12 md:pb-10 md:pr-20">
                        <p
                          className={`max-w-4xl whitespace-pre-line text-sm leading-6 tracking-[-0.01em] md:text-base md:leading-7 ${
                            isDark ? "text-white/60" : "text-black/60"
                          }`}
                        >
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* =================================================
                    LAST DIVIDER
                ================================================== */}

                {isLast && (
                  <div
                    className={`relative h-px w-full overflow-hidden ${
                      isDark ? "bg-white/10" : "bg-black/10"
                    }`}
                  >
                    {/* Moving light */}
                    <motion.div
                      initial={{
                        x: "-120%",
                      }}
                      whileInView={{
                        x: "520%",
                      }}
                      viewport={{
                        once: false,
                        amount: 0.2,
                      }}
                      transition={{
                        duration: 2.8,
                        repeat: Infinity,
                        repeatDelay: 2,
                        ease: "easeInOut",
                      }}
                      className={`absolute top-0 h-px w-[22%] ${
                        isDark
                          ? "bg-gradient-to-r from-transparent via-white/80 to-transparent"
                          : "bg-gradient-to-r from-transparent via-black/45 to-transparent"
                      }`}
                    />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

{/* =========================================================
    IDEA CTA
========================================================= */}

<motion.div
  initial={{
    opacity: 0,
    y: 35,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
  }}
  viewport={{
    once: true,
    amount: 0.3,
  }}
  transition={{
    duration: 0.9,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="relative flex justify-center py-32 md:py-40"
>
  {/* Subtle Background Glow */}

  <div
    className={`pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px] ${
      isDark ? "bg-blue-500/10" : "bg-blue-500/5"
    }`}
  />

  {/* CTA */}

  <a
    href="/contact"
    className="group relative z-10 inline-block"
  >
    {/* TEXT */}

    <h2
      className={`text-5xl font-normal leading-[0.95] tracking-[-0.055em] md:text-6xl lg:text-[72px] ${
        isDark ? "text-white" : "text-black"
      }`}
    >
      Have an idea?
      <br />

      {/* UNDERLINED TEXT */}

      <span className="relative inline-block">
        Tell us about it.

        {/* Base underline */}

        <span
          className={`absolute -bottom-3 left-0 h-px w-full ${
            isDark ? "bg-white/20" : "bg-black/20"
          }`}
        />

        {/* Center → Both Sides Animation */}

        <span
          className={`absolute -bottom-3 left-0 h-px w-full origin-center scale-x-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100 ${
            isDark ? "bg-white" : "bg-black"
          }`}
        />
      </span>
    </h2>
  </a>
</motion.div>
      </Container>
    </section>
  );
}