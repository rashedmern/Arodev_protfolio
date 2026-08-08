"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Container from "@/components/layout/Container";

const testimonials = [
  {
    id: 1,
    text: "Arodev completed a complete transformation of our digital presence. The quality of the team's work exceeded our expectations, and the final result was outstanding.",
    company: "Zelt",
  },
  {
    id: 2,
    text: "We worked with the Arodev team over a several month project on a complete website overhaul, including new copy, design, and code. Several things stood out in our interaction with Arodev.",
    company: "LoanPro",
  },
  {
    id: 3,
    text: "Arodev was engaged in developing our website and additional marketing materials. Their efforts were highly satisfactory, and we were impressed with the team's collaborative approach.",
    company: "Potion",
  },
  {
    id: 4,
    text: "I'd like to extend a heartfelt gratitude to the Arodev team for their exceptional support throughout the website development process. Your responsiveness has been invaluable.",
    company: "Livespot",
  },
  {
    id: 5,
    text: "We had a great experience working with Arodev on our website redesign project. Their team brought a strong mix of creativity, technical skill and strategic thinking to the project.",
    company: "SCA",
  },
];

export default function ClientTestimonials() {
  const { resolvedTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  /*
   * Prevent hydration/theme mismatch
   */
  if (!mounted) {
    return (
      <section className="relative overflow-hidden bg-white py-32 md:py-40">
        <Container>
          <div className="h-[100px]" />
        </Container>
      </section>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <section
      className={`relative overflow-hidden py-32 transition-colors duration-500 md:py-40 ${
        isDark ? "bg-[#050816]" : "bg-white"
      }`}
    >
      {/* Background Glow */}

      <div
        className={`pointer-events-none absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full blur-[160px] ${
          isDark ? "bg-blue-500/[0.06]" : "bg-blue-500/[0.035]"
        }`}
      />

      <Container className="relative z-10">
        {/* ================================
            SECTION HEADING
        ================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
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
          className="text-center"
        >
          <h2
            className={`text-5xl font-semibold tracking-[-0.055em] md:text-7xl lg:text-[84px] ${
              isDark ? "text-white" : "text-black"
            }`}
          >
            Trusted by our clients
          </h2>
        </motion.div>

        {/* ================================
            TOP 3 CARDS
        ================================= */}

        <div className="relative mx-auto mt-24 max-w-[1200px] md:mt-32">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-5">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                index={index}
                isDark={isDark}
              />
            ))}
          </div>

          {/* ================================
              BOTTOM 2 CARDS
          ================================= */}

          <div className="mx-auto mt-6 grid max-w-[800px] grid-cols-1 gap-6 md:grid-cols-2 md:gap-5">
            {testimonials.slice(3).map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                index={index + 3}
                isDark={isDark}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   TESTIMONIAL CARD
========================================================= */

function TestimonialCard({
  testimonial,
  index,
  isDark,
}: {
  testimonial: (typeof testimonials)[number];
  index: number;
  isDark: boolean;
}) {
  /*
   * Blue gradient cards
   *
   * Light mode:
   * soft blue gradient
   *
   * Dark mode:
   * deep navy / electric blue gradient
   */
  const cardGradient = isDark
    ? "bg-gradient-to-br from-[#07142f] via-[#0b2450] to-[#102f6b]"
    : "bg-gradient-to-br from-[#eef5ff] via-[#dcecff] to-[#c8ddff]";

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 60,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -8,
        transition: {
          duration: 0.3,
        },
      }}
      className={`group relative min-h-[390px] overflow-hidden rounded-[4px] p-8 transition-colors duration-500 md:min-h-[430px] md:p-10 ${cardGradient}`}
    >
      {/* ================================
          SUBTLE CARD GLOW
      ================================= */}

      <div
        className={`pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full blur-3xl transition-opacity duration-500 group-hover:opacity-100 ${
          isDark
            ? "bg-blue-400/10 opacity-60"
            : "bg-blue-400/20 opacity-50"
        }`}
      />

      {/* ================================
          QUOTE
      ================================= */}

      <div
        className={`relative z-10 mb-10 text-5xl leading-none ${
          isDark ? "text-white/20" : "text-blue-900/15"
        }`}
      >
        ”
      </div>

      {/* ================================
          TESTIMONIAL TEXT
      ================================= */}

      <p
        className={`relative z-10 text-lg leading-7 tracking-[-0.02em] md:text-xl md:leading-8 ${
          isDark ? "text-white/85" : "text-slate-900/85"
        }`}
      >
        “{testimonial.text}“
      </p>

      {/* ================================
          COMPANY
      ================================= */}

      <div className="absolute bottom-8 left-8 right-8 md:bottom-10 md:left-10 md:right-10">
        {/* Divider */}

        <div
          className={`mb-6 h-px w-16 ${
            isDark ? "bg-white/20" : "bg-blue-900/20"
          }`}
        />

        {/* Company */}

        <p
          className={`text-xl font-semibold tracking-[-0.03em] ${
            isDark ? "text-white" : "text-slate-950"
          }`}
        >
          {testimonial.company}
        </p>
      </div>

      {/* ================================
          CARD BORDER
      ================================= */}

      <div
        className={`pointer-events-none absolute inset-0 rounded-[4px] border transition-colors duration-500 ${
          isDark
            ? "border-white/[0.08] group-hover:border-blue-400/20"
            : "border-blue-900/[0.08] group-hover:border-blue-500/20"
        }`}
      />
    </motion.article>
  );
}