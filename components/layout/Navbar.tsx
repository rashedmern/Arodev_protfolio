"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

import Container from "./Container";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { name: "Services", href: "/services" },
  { name: "Commerce", href: "/commerce" },
  { name: "Solutions", href: "/solutions" },
  { name: "Clients", href: "/clients" },
  { name: "About Us", href: "/about" },
  { name: "Insights", href: "/blog" },
];

export default function Navbar() {
  const { resolvedTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  const navTextColor = scrolled
    ? "text-white"
    : isDark
    ? "text-white"
    : "text-black";

  return (
    <header className="fixed inset-x-0 top-0 z-[999] pointer-events-none">
      <Container>
        <motion.nav
          initial={false}
          animate={{
            y: scrolled ? 16 : 0,
            scale: scrolled ? 0.985 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 22,
            mass: 0.9,
          }}
          className={`
            pointer-events-auto
            flex
            h-20
            items-center
            justify-between
            rounded-full
            px-8

            transition-[background-color,border-color,box-shadow]
            duration-500

            ${
              scrolled
                ? `
                  border border-white/10
                  bg-black/45
                  backdrop-blur-[22px]
                  shadow-[0_20px_60px_rgba(0,0,0,.25)]
                `
                : `
                  border border-transparent
                  bg-transparent
                  shadow-none
                `
            }
          `}
        >
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/logos/Arodev.png"
              alt="Arodev"
              width={185}
              height={42}
              priority
              unoptimized
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-12 lg:flex">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`group relative text-[15px] font-medium tracking-[0.02em] transition-colors duration-300 ${navTextColor}`}
                >
                  {link.name}

                  <span className="absolute -bottom-2 left-0 h-[2px] w-0 rounded-full bg-gradient-to-r from-[#2563EB] to-[#60A5FA] transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>
                    {/* Right Side */}
          <div className="hidden items-center gap-4 lg:flex">
            <ThemeToggle />

            <Link
              href="/contact"
              className="group relative overflow-hidden rounded-full"
            >
              {/* Button Background */}
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#1D4ED8] transition-all duration-500 group-hover:scale-[1.03]" />

              {/* Glow */}
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#2563EB] to-[#60A5FA] opacity-0 blur-xl transition-all duration-500 group-hover:opacity-100" />

              {/* Text */}
              <span className="relative flex items-center gap-2 px-7 py-3 text-[15px] font-semibold text-white">
                Get in touch

                <motion.span
                  animate={{
                    x: [0, 4, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.6,
                    ease: "easeInOut",
                  }}
                >
                  →
                </motion.span>
              </span>
            </Link>
          </div>

          {/* Mobile */}
          <div className="flex items-center gap-3 lg:hidden">
            <ThemeToggle />


           
          </div>
        </motion.nav>

      </Container>
    </header>
  );
}