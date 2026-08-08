"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
  BriefcaseBusiness,
  Globe2,
  Star,
  Trophy,
  Workflow,
} from "lucide-react";

import Container from "@/components/layout/Container";

const stats = [
  {
    icon: Star,
    value: "15+",
    label: "YEARS OF EXPERIENCE",
    type: "number",
  },
  {
    icon: Trophy,
    value: "Recognized by leading",
    label: "design awards",
    type: "text",
  },
  {
    icon: Globe2,
    value: "300+",
    label: "PROJECTS DELIVERED WORLDWIDE",
    type: "number",
  },
  {
    icon: BriefcaseBusiness,
    value: "Long-term Partnerships with global brands",
    label: "",
    type: "text",
  },
  {
    icon: Workflow,
    value: "Strategy, design & development – all in-house",
    label: "",
    type: "text",
  },
];

export default function WhyArodev() {
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
      <section className="relative overflow-hidden bg-white py-24 md:py-32">
        <Container>
          <div className="h-[500px]" />
        </Container>
      </section>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <section
      className={`relative overflow-hidden py-24 transition-colors duration-500 md:py-32 ${
        isDark ? "bg-[#050816]" : "bg-white"
      }`}
    >
      {/* =========================================
          BACKGROUND GLOW
      ========================================== */}

      <div
        className={`pointer-events-none absolute left-1/2 top-24 h-[500px] w-[500px] -translate-x-1/2 rounded-full blur-[160px] ${
          isDark ? "bg-blue-500/[0.06]" : "bg-blue-500/[0.035]"
        }`}
      />

      <Container className="relative z-10">
        {/* =========================================
            ANIMATED DIVIDER
        ========================================== */}

        <div className="relative mb-10 h-px w-full overflow-hidden">
          <motion.div
            initial={{
              scaleX: 0,
              transformOrigin: "left",
            }}
            whileInView={{
              scaleX: 1,
            }}
            viewport={{
              once: true,
              amount: 0.7,
            }}
            transition={{
              duration: 1.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`h-px w-full origin-left ${
              isDark ? "bg-white/30" : "bg-black/30"
            }`}
          />
        </div>

        {/* =========================================
            INTRO
        ========================================== */}

        <div className="grid grid-cols-1 gap-12 md:grid-cols-[180px_1fr] md:gap-16 lg:grid-cols-[220px_1fr]">
          {/* Why Arodev */}

          <motion.div
            initial={{
              opacity: 0,
              x: -20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <span
              className="
                inline-block
                bg-gradient-to-r
                from-blue-600
                via-blue-500
                to-blue-500
                bg-clip-text
                text-base
                font-semibold
                uppercase
                tracking-[0.14em]
                text-transparent
                md:text-lg
              "
            >
              Why Arodev
            </span>
          </motion.div>

          {/* Description */}

          <motion.p
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
              amount: 0.4,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`max-w-3xl text-2xl font-medium leading-[1.25] tracking-[-0.035em] md:text-3xl lg:text-[32px] ${
              isDark ? "text-white" : "text-black"
            }`}
          >
            For over 6 years, we've been helping startups, scale-ups and
            ambitious companies transform bold ideas into successful digital
            products. Our work focuses on building long-term partnerships and
            delivering measurable business value.
          </motion.p>
        </div>

        {/* =========================================
            CARDS
        ========================================== */}

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-6">
          {stats.map((item, index) => {
            const Icon = item.icon;

            /*
             * EXACT SAME BLUE GRADIENT SYSTEM
             * AS CLIENT TESTIMONIAL CARDS
             */

            const cardGradient = isDark
              ? "bg-gradient-to-br from-[#07142f] via-[#0b2450] to-[#102f6b]"
              : "bg-gradient-to-br from-[#eef5ff] via-[#dcecff] to-[#c8ddff]";

            return (
              <motion.div
                key={item.label || item.value}
                initial={{
                  opacity: 0,
                  y: 70,
                  scale: 0.94,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -6,
                  transition: {
                    duration: 0.3,
                  },
                }}
                className={`group relative flex min-h-[240px] flex-col justify-between overflow-hidden rounded-2xl p-8 transition-all duration-500 md:p-8 ${
                  index === 3 || index === 4
                    ? "md:col-span-3"
                    : "md:col-span-2"
                } ${cardGradient}`}
              >
                {/* =================================
                    CARD GLOW
                ================================== */}

                <div
                  className={`pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full blur-3xl transition-opacity duration-500 group-hover:opacity-100 ${
                    isDark
                      ? "bg-blue-400/10 opacity-60"
                      : "bg-blue-400/20 opacity-50"
                  }`}
                />

                {/* =================================
                    ICON
                ================================== */}

                <Icon
                  size={28}
                  strokeWidth={1.7}
                  className={`relative z-10 transition-colors duration-500 ${
                    isDark ? "text-white/90" : "text-slate-900/90"
                  }`}
                />

                {/* =================================
                    CONTENT
                ================================== */}

                <div className="relative z-10">
                  {item.type === "number" ? (
                    <>
                      <h3
                        className={`text-6xl font-medium tracking-[-0.06em] md:text-7xl ${
                          isDark ? "text-white" : "text-slate-950"
                        }`}
                      >
                        {item.value}
                      </h3>

                      <p
                        className={`mt-1 text-xs font-medium uppercase tracking-[-0.01em] ${
                          isDark ? "text-white/60" : "text-slate-900/60"
                        }`}
                      >
                        {item.label}
                      </p>
                    </>
                  ) : (
                    <p
                      className={`max-w-[320px] text-2xl font-medium leading-[1.1] tracking-[-0.04em] ${
                        isDark ? "text-white" : "text-slate-950"
                      }`}
                    >
                      {item.value}

                      {item.label && (
                        <>
                          <br />
                          {item.label}
                        </>
                      )}
                    </p>
                  )}
                </div>

                {/* =================================
                    CARD BORDER
                ================================== */}

                <div
                  className={`pointer-events-none absolute inset-0 rounded-2xl border transition-colors duration-500 ${
                    isDark
                      ? "border-white/[0.08] group-hover:border-blue-400/20"
                      : "border-blue-900/[0.08] group-hover:border-blue-500/20"
                  }`}
                />
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}