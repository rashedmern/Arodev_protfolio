"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "./Container";

const navLinks = [
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Commerce",
    href: "/commerce",
  },
  {
    name: "Solutions",
    href: "/solutions",
  },
  {
    name: "Clients",
    href: "/clients",
  },
  {
    name: "About Us",
    href: "/about",
  },
  {
    name: "Insights",
    href: "/blog",
  },
];

export default function Navbar() {
  const [hovered, setHovered] = useState(false);

  return (
    <header
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
   className={`fixed left-0 top-0 z-50 h-20 w-full transition-colors duration-300 ${
  hovered ? "bg-[#111111]" : "bg-transparent"
}`}
    >
      <Container className="h-full">
        <nav className="flex h-full items-center justify-between">
          {/* Logo */}
          <Link href="/">
         <Image
  src="/logos/Arodev.png"
  alt="Arodev"
  width={185}
  height={42}
  priority
  unoptimized
/>
          </Link>

          {/* Navigation */}
          <ul className="hidden items-center gap-12 lg:flex">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="group relative text-[16px] font-medium text-white transition duration-300"
                >
                  {link.name}

                  <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#2563EB] transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Link
            href="/contact"
            className="hidden items-center gap-2 rounded-full border border-white/20 px-7 py-3 text-[15px] font-semibold text-white transition-all duration-300 hover:scale-105 hover:border-[#2563EB] hover:bg-gradient-to-r hover:from-[#2563EB] hover:to-[#0F3CC9] lg:flex"
          >
            Get in touch
            <span>→</span>
          </Link>
        </nav>
      </Container>
    </header>
  );
}