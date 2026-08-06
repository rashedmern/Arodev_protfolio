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

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isDark = resolvedTheme === "dark";

  const navTextColor = scrolled
    ? "text-white"
    : isDark
    ? "text-white"
    : "text-black";

  return (
    <header className="fixed inset-x-0 top-0 z-50 pointer-events-none">
      <Container>
        <motion.nav
          initial={false}
          animate={{
            y: scrolled ? 16 : 0,
            scale: scrolled ? 0.985 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 140,
            damping: 20,
            mass: 1,
          }}
          className={`
            pointer-events-auto
            flex
            h-20
            items-center
            justify-between
            overflow-hidden
            rounded-full
            px-8
            transition-all
            duration-700
            ease-out

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
              {/* Background */}
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#1D4ED8] transition duration-500 group-hover:scale-105" />

              {/* Glow */}
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#2563EB] to-[#60A5FA] opacity-0 blur-xl transition duration-500 group-hover:opacity-100" />

              {/* Text */}
              <span className="relative flex items-center gap-2 px-7 py-3 text-[15px] font-semibold text-white">
                Get in touch

                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
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

<button
  type="button"
  aria-label={menuOpen ? "Close menu" : "Open menu"}
  onClick={() => setMenuOpen((prev) => !prev)}
  className={`
    relative
    flex
    h-11
    w-11
    items-center
    justify-center
    rounded-full
    transition-all
    duration-300
    ${
      scrolled || menuOpen
        ? "border border-white/10 bg-white/10 backdrop-blur-xl"
        : "border border-transparent"
    }
  `}
>
  <div className="relative h-5 w-5">
    {/* Top */}
    <motion.span
      className="absolute left-0 top-[2px] h-[2px] w-5 rounded-full"
      style={{
        background:
          scrolled || isDark || menuOpen ? "#fff" : "#111827",
      }}
      animate={{
        rotate: menuOpen ? 45 : 0,
        y: menuOpen ? 7 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 34,
        mass: 0.7,
      }}
    />

    {/* Middle */}
    <motion.span
      className="absolute left-0 top-[9px] h-[2px] w-5 rounded-full"
      style={{
        background:
          scrolled || isDark || menuOpen ? "#fff" : "#111827",
      }}
      animate={{
        opacity: menuOpen ? 0 : 1,
        scaleX: menuOpen ? 0 : 1,
      }}
      transition={{
        duration: 0.18,
      }}
    />

    {/* Bottom */}
    <motion.span
      className="absolute right-0 top-[16px] h-[2px] rounded-full"
      style={{
        background:
          scrolled || isDark || menuOpen ? "#fff" : "#111827",
      }}
      animate={{
        rotate: menuOpen ? -45 : 0,
        y: menuOpen ? -7 : 0,
        width: menuOpen ? 20 : 14,
        x: menuOpen ? 0 : 6,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 34,
        mass: 0.7,
      }}
    />
  </div>
</button>
          </div>
        </motion.nav>
      </Container>
    </header>
  );
}