"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
];

export default function Navbar() {
  const { resolvedTheme } = useTheme();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  /* =========================
     Scroll Detection
  ========================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =========================
     Lock Body When Menu Open
  ========================= */

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isDark = mounted ? resolvedTheme === "dark" : true;

  const navTextColor = scrolled
    ? "text-white"
    : isDark
      ? "text-white"
      : "text-black";

  return (
    <>
      {/* =========================================
          FIXED NAVBAR
      ========================================= */}

      <header className="fixed inset-x-0 top-0 z-[9999] w-full">
        <Container>
          <motion.nav
            initial={false}
            animate={{
              y: scrolled ? 12 : 0,
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
              w-full
              items-center
              justify-between
              rounded-full
              px-5
              sm:px-6
              md:px-8
              transition-all
              duration-500
              ease-out

              ${
                scrolled || menuOpen
                  ? `
                    border
                    border-white/10
                    bg-black/50
                    backdrop-blur-[22px]
                    shadow-[0_20px_60px_rgba(0,0,0,.25)]
                  `
                  : `
                    border
                    border-transparent
                    bg-transparent
                    shadow-none
                  `
              }
            `}
          >
            {/* =========================================
                LOGO
            ========================================= */}

            <Link
              href="/"
              className="relative z-[10001] shrink-0"
              onClick={() => setMenuOpen(false)}
            >
              <Image
                src="/logos/Arodev.png"
                alt="Arodev"
                width={185}
                height={42}
                priority
                unoptimized
                className="h-auto w-[130px] sm:w-[150px] md:w-[185px]"
              />
            </Link>

            {/* =========================================
                DESKTOP NAVIGATION
            ========================================= */}

            <ul className="hidden items-center gap-12 lg:flex">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`
                      group
                      relative
                      text-[15px]
                      font-medium
                      tracking-[0.02em]
                      transition-colors
                      duration-300
                      ${navTextColor}
                    `}
                  >
                    {link.name}

                    <span
                      className="
                        absolute
                        -bottom-2
                        left-0
                        h-[2px]
                        w-0
                        rounded-full
                        bg-gradient-to-r
                        from-[#2563EB]
                        to-[#60A5FA]
                        transition-all
                        duration-300
                        group-hover:w-full
                      "
                    />
                  </Link>
                </li>
              ))}
            </ul>

            {/* =========================================
                DESKTOP RIGHT
            ========================================= */}

            <div className="hidden items-center gap-4 lg:flex">
              <ThemeToggle />

              <Link
                href="/contact"
                className="group relative overflow-hidden rounded-full"
              >
                <span
                  className="
                    absolute
                    inset-0
                    rounded-full
                    bg-gradient-to-r
                    from-[#2563EB]
                    via-[#3B82F6]
                    to-[#1D4ED8]
                    transition
                    duration-500
                    group-hover:scale-105
                  "
                />

                <span
                  className="
                    absolute
                    inset-0
                    rounded-full
                    bg-gradient-to-r
                    from-[#2563EB]
                    to-[#60A5FA]
                    opacity-0
                    blur-xl
                    transition
                    duration-500
                    group-hover:opacity-100
                  "
                />

                <span
                  className="
                    relative
                    flex
                    items-center
                    gap-2
                    px-7
                    py-3
                    text-[15px]
                    font-semibold
                    text-white
                  "
                >
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

            {/* =========================================
                MOBILE CONTROLS
            ========================================= */}

            <div className="relative z-[10001] flex items-center gap-3 lg:hidden">
              <ThemeToggle />

              {/* Hamburger / Close */}

              <button
                type="button"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((prev) => !prev)}
                className="
                  relative
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  active:scale-95
                "
              >
                <div className="relative h-5 w-5">
                  {/* TOP LINE */}

                  <motion.span
                    className="
                      absolute
                      left-0
                      top-[5px]
                      block
                      h-[2px]
                      w-5
                      rounded-full
                      bg-white
                    "
                    animate={{
                      rotate: menuOpen ? 45 : 0,
                      y: menuOpen ? 4 : 0,
                    }}
                    transition={{
                      duration: 0.35,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />

                  {/* BOTTOM LINE */}

                  <motion.span
                    className="
                      absolute
                      left-0
                      top-[13px]
                      block
                      h-[2px]
                      w-5
                      rounded-full
                      bg-white
                    "
                    animate={{
                      rotate: menuOpen ? -45 : 0,
                      y: menuOpen ? -4 : 0,
                    }}
                    transition={{
                      duration: 0.35,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />
                </div>
              </button>
            </div>
          </motion.nav>
        </Container>
      </header>

      {/* =========================================
          MOBILE MENU
      ========================================= */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="
              fixed
              inset-0
              z-[9990]
              bg-[#050816]
              lg:hidden
            "
          >
            <div className="flex h-full flex-col px-6 pb-10 pt-32 sm:px-8">
              {/* Mobile Links */}

              <div className="flex flex-1 flex-col justify-center">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{
                      opacity: 0,
                      y: 25,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: index * 0.07,
                      duration: 0.45,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="
                        group
                        flex
                        items-center
                        justify-between
                        border-b
                        border-white/10
                        py-5
                        text-3xl
                        font-medium
                        text-white
                        transition-colors
                        duration-300
                        hover:text-blue-400
                        sm:text-4xl
                      "
                    >
                      <span>{link.name}</span>

                      <span
                        className="
                          text-xl
                          text-white/30
                          transition-all
                          duration-300
                          group-hover:translate-x-1
                          group-hover:text-blue-400
                        "
                      >
                        ↗
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Bottom CTA */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.4,
                  duration: 0.5,
                }}
              >
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="
                    flex
                    w-full
                    items-center
                    justify-center
                    rounded-full
                    bg-gradient-to-r
                    from-[#2563EB]
                    to-[#60A5FA]
                    px-6
                    py-4
                    text-base
                    font-semibold
                    text-white
                    transition-transform
                    duration-300
                    active:scale-[0.98]
                  "
                >
                  Get in touch →
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}