"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

import Container from "@/components/layout/Container";

const projects = [
  {
    id: 1,
    title: "Digital Commerce",
    category: "E-Commerce",
    video: "/video/cover1.mp4",
    size: "large",
  },
  {
    id: 2,
    title: "Digital Experience",
    category: "Web Design",
    video: "/video/cover2.mp4",
    size: "small",
  },
  {
    id: 3,
    title: "Creative Platform",
    category: "Development",
    video: "/video/cover3.mp4",
    size: "small",
  },
  {
    id: 4,
    title: "AI Experience",
    category: "AI & Technology",
    video: "/video/cover4.mp4",
    size: "large",
  },
];

type Project = (typeof projects)[number];

function ProjectCard({ project }: { project: Project }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleMouseEnter = () => {
    const video = videoRef.current;

    if (!video) return;

    video.currentTime = 0;

    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise.catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    const video = videoRef.current;

    if (!video) return;

    video.pause();
    video.currentTime = 0;
  };

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
        amount: 0.2,
      }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group relative overflow-hidden rounded-[28px] ${
        project.size === "large"
          ? "h-[560px] md:h-[650px]"
          : "h-[480px] md:h-[560px]"
      }`}
    >
      {/* Video */}

      <video
        ref={videoRef}
        src={project.video}
        muted
        playsInline
        preload="auto"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          transition-transform
          duration-1000
          ease-out
          group-hover:scale-[1.04]
        "
      />

      {/* Video Overlay */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/85
          via-black/15
          to-transparent
          opacity-75
          transition-opacity
          duration-700
          group-hover:opacity-90
        "
      />

      {/* Project Info */}

      <div className="absolute inset-x-0 bottom-0 z-10 p-7 md:p-9">
        <p
          className="
            mb-3
            text-sm
            font-medium
            uppercase
            tracking-[0.16em]
            text-white/60
          "
        >
          {project.category}
        </p>

        <div className="flex items-end justify-between gap-5">
          <h3
            className="
              text-3xl
              font-semibold
              tracking-[-0.04em]
              text-white
              md:text-4xl
            "
          >
            {project.title}
          </h3>

          {/* Arrow */}

          <div
            className="
              flex
              h-12
              w-12
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-white/20
              bg-white/10
              backdrop-blur-xl
              transition-all
              duration-300
              group-hover:bg-white
            "
          >
            <span
              className="
                text-xl
                text-white
                transition-colors
                duration-300
                group-hover:text-black
              "
            >
              ↗
            </span>
          </div>
        </div>
      </div>

      {/* Card Border */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-[28px]
          border
          border-white/10
          transition-all
          duration-700
          group-hover:border-white/25
        "
      />
    </motion.article>
  );
}

export default function SelectedWork() {
  const { resolvedTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  /*
   * Prevent hydration mismatch.
   * Theme is applied only after next-themes is ready.
   */

  if (!mounted) {
    return (
      <section className="relative overflow-hidden bg-white py-32 lg:py-40">
        <Container>
          <div className="h-[700px]" />
        </Container>
      </section>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <section
      className={`
        relative
        overflow-hidden
        py-32
        transition-colors
        duration-500
        lg:py-40
        ${
          isDark
            ? "bg-[#050816]"
            : "bg-white"
        }
      `}
    >
      {/* Background Glow */}

      <div
        className={`
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-[650px]
          w-[650px]
          -translate-x-1/2
          rounded-full
          blur-[180px]
          transition-all
          duration-700
          ${
            isDark
              ? "bg-blue-500/[0.08]"
              : "bg-blue-500/[0.04]"
          }
        `}
      />

      {/* Secondary Glow */}

      <div
        className={`
          pointer-events-none
          absolute
          right-[10%]
          top-[35%]
          h-[400px]
          w-[400px]
          rounded-full
          blur-[160px]
          transition-all
          duration-700
          ${
            isDark
              ? "bg-cyan-500/[0.06]"
              : "bg-cyan-500/[0.025]"
          }
        `}
      />

      {/* Orange Floating Dot */}

      <motion.div
        className="
          pointer-events-none
          absolute
          left-[62%]
          top-[35%]
          z-[1]
          h-3
          w-3
          rounded-full
          bg-orange-400
          shadow-[0_0_25px_rgba(251,146,60,0.8)]
        "
        animate={{
          y: [0, -12, 0],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <Container className="relative z-10">
        {/* Header */}

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
          className="mb-20 md:mb-24"
        >
          {/* Label */}

          <span
            className={`
              mb-6
              block
              text-sm
              font-medium
              uppercase
              tracking-[0.18em]
              transition-colors
              duration-500
              ${
                isDark
                  ? "text-white/45"
                  : "text-black/45"
              }
            `}
          >
            Selected Work
          </span>

          {/* Heading */}

          <h2
            className={`
              max-w-4xl
              text-5xl
              font-semibold
              leading-[0.95]
              tracking-[-0.055em]
              transition-colors
              duration-500
              sm:text-6xl
              md:text-7xl
              lg:text-[88px]
              ${
                isDark
                  ? "text-white"
                  : "text-black"
              }
            `}
          >
            Work that
            <br />

            <span
              className={
                isDark
                  ? "text-white/35"
                  : "text-black/35"
              }
            >
              speaks for itself.
            </span>
          </h2>

          {/* Description */}

          <p
            className={`
              mt-8
              max-w-xl
              text-base
              leading-7
              transition-colors
              duration-500
              md:text-lg
              ${
                isDark
                  ? "text-white/55"
                  : "text-black/55"
              }
            `}
          >
            We create digital experiences that combine strategy,
            design, technology and motion to help ambitious brands
            move forward.
          </p>
        </motion.div>

        {/* Projects */}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
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
            duration: 0.7,
            delay: 0.2,
          }}
          className="mt-16 flex justify-center md:mt-20"
        >
          <a
            href="/clients"
            className={`
              group
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              px-7
              py-4
              text-sm
              font-medium
              transition-all
              duration-300
              ${
                isDark
                  ? `
                    border-white/10
                    text-white
                    hover:border-white/20
                    hover:bg-white
                    hover:text-black
                  `
                  : `
                    border-black/10
                    text-black
                    hover:border-black/20
                    hover:bg-black
                    hover:text-white
                  `
              }
            `}
          >
            View all work

            <span
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            >
              →
            </span>
          </a>
        </motion.div>
      </Container>
    </section>
  );
}