"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

import Container from "@/components/layout/Container";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.58.11.79-.25.79-.56v-2.17c-3.2.69-3.88-1.36-3.88-1.36-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.69.41.35.78 1.04.78 2.1v3.11c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
      </svg>
    ),
  },

  {
    name: "LinkedIn",
    href: "https://linkedin.com/",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path d="M5.2 3.5A2.2 2.2 0 1 1 .8 3.5a2.2 2.2 0 0 1 4.4 0ZM1 8h4.3v13H1V8Zm6.8 0h4.1v1.8h.1c.57-1.08 1.97-2.22 4.06-2.22 4.34 0 5.14 2.86 5.14 6.58V21H17v-6.07c0-1.45-.03-3.31-2.02-3.31-2.02 0-2.33 1.58-2.33 3.21V21H7.8V8Z" />
      </svg>
    ),
  },

  {
    name: "Instagram",
    href: "https://instagram.com/",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle
          cx="17.5"
          cy="6.5"
          r="1"
          fill="currentColor"
          stroke="none"
        />
      </svg>
    ),
  },
];

const footerLinks = [
  {
    title: "Explore",
    links: [
      { name: "Home", href: "/" },
      { name: "Work", href: "/work" },
      { name: "Services", href: "/services" },
      { name: "About", href: "/about" },
    ],
  },

  {
    title: "Connect",
    links: [
      { name: "Contact", href: "/contact" },
      { name: "Careers", href: "/careers" },
      { name: "Clients", href: "/clients" },
    ],
  },
];

export default function Footer() {
  const { resolvedTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  /*
   * Prevent hydration mismatch
   */
  if (!mounted) {
    return (
      <footer className="relative overflow-hidden bg-white py-20 text-black dark:bg-[#050816] dark:text-white">
        <div className="h-[400px] w-full" />
      </footer>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <footer
      className={`relative overflow-hidden border-t transition-colors duration-500 ${
        isDark
          ? "border-white/10 bg-[#050816] text-white"
          : "border-black/10 bg-white text-black"
      }`}
    >
      <Container className="relative z-10">
        {/* =====================================================
            MAIN FOOTER
        ===================================================== */}

        <div className="grid gap-16 py-20 md:grid-cols-[1.4fr_1fr_1fr] md:gap-12">

          {/* BRAND */}

          <motion.div
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
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Logo */}

            <a
              href="/"
              className="inline-flex items-center"
            >
              <Image
                src="/logos/Arodev.png"
                alt="Arodev"
                width={185}
                height={50}
                priority
                className="h-20 w-auto object-contain"
              />
            </a>

            {/* Description */}

            <p
              className={`mt-7 max-w-sm text-base leading-7 transition-colors duration-500 ${
                isDark ? "text-white/55" : "text-black/55"
              }`}
            >
              We create digital experiences that combine strategy, design,
              technology and motion to help ambitious brands move forward.
            </p>

            {/* Email */}

            <a
              href="mailto:aroedev.official@gmail.com"
              className="group mt-8 inline-flex items-center gap-3 text-sm font-medium"
            >
              <Mail
                size={18}
                strokeWidth={1.7}
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              />

              <span className="relative">
                arodev.official@gmail.com

                <span
                  className={`absolute -bottom-1 left-1/2 h-px w-0 -translate-x-1/2 transition-all duration-300 group-hover:w-full ${
                    isDark ? "bg-white" : "bg-black"
                  }`}
                />
              </span>
            </a>
          </motion.div>

          {/* NAVIGATION */}

          <motion.div
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
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p
              className={`mb-7 text-xs font-medium uppercase tracking-[0.16em] transition-colors duration-500 ${
                isDark ? "text-white/45" : "text-black/45"
              }`}
            >
              Navigation
            </p>

            <div className="space-y-4">
              {footerLinks[0].links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="group flex w-fit items-center gap-2 text-base"
                >
                  <span className="relative">
                    {link.name}

                    <span
                      className={`absolute -bottom-1 left-1/2 h-px w-0 -translate-x-1/2 transition-all duration-300 group-hover:w-full ${
                        isDark ? "bg-white" : "bg-black"
                      }`}
                    />
                  </span>

                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.6}
                    className="opacity-0 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100"
                  />
                </a>
              ))}
            </div>
          </motion.div>

          {/* CONNECT */}

          <motion.div
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
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p
              className={`mb-7 text-xs font-medium uppercase tracking-[0.16em] transition-colors duration-500 ${
                isDark ? "text-white/45" : "text-black/45"
              }`}
            >
              Let's connect
            </p>

            <div className="space-y-4">
              {footerLinks[1].links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="group flex w-fit items-center gap-2 text-base"
                >
                  <span className="relative">
                    {link.name}

                    <span
                      className={`absolute -bottom-1 left-1/2 h-px w-0 -translate-x-1/2 transition-all duration-300 group-hover:w-full ${
                        isDark ? "bg-white" : "bg-black"
                      }`}
                    />
                  </span>

                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.6}
                    className="opacity-0 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100"
                  />
                </a>
              ))}
            </div>

            {/* SOCIAL ICONS */}

            <div className="mt-9 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className={`flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 hover:-translate-y-1 ${
                    isDark
                      ? "border-white/10 hover:bg-white hover:text-black"
                      : "border-black/10 hover:bg-black hover:text-white"
                  }`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* BOTTOM BAR */}

        <div
          className={`flex flex-col gap-5 border-t py-7 text-xs transition-colors duration-500 md:flex-row md:items-center md:justify-between ${
            isDark
              ? "border-white/10 text-white/50"
              : "border-black/10 text-black/50"
          }`}
        >
          {/* Copyright */}

          <p>
            © {new Date().getFullYear()} Arodev. All rights reserved.
          </p>

          {/* Legal Links */}

          <div className="flex flex-wrap gap-7">
            <a
              href="/privacy"
              className={`transition-colors duration-300 ${
                isDark ? "hover:text-white" : "hover:text-black"
              }`}
            >
              Privacy Policy
            </a>

            <a
              href="/terms"
              className={`transition-colors duration-300 ${
                isDark ? "hover:text-white" : "hover:text-black"
              }`}
            >
              Terms of Use
            </a>

            <a
              href="/sitemap"
              className={`transition-colors duration-300 ${
                isDark ? "hover:text-white" : "hover:text-black"
              }`}
            >
              Sitemap
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}