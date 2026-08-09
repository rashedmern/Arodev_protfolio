"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import Container from "@/components/layout/Container";
import StickyServices from "@/components/ui/StickyServices";

export default function WhatWeDo() {
  const { resolvedTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <section
      className={`relative overflow-hidden py-20 sm:py-24 md:py-28 lg:py-32 transition-colors duration-500 ${
        isDark ? "bg-transparent" : "bg-white"
      }`}
    >
      <Container>
        {/* Top */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-10 lg:gap-12">
          {/* Left */}
          <div className="md:col-span-3">
            <p
              className={`text-[15px] font-semibold uppercase tracking-[0.12em] sm:text-[16px] md:text-[18px] ${
                isDark
                  ? "bg-gradient-to-r from-[#2563EB] to-[#60A5FA] bg-clip-text text-transparent"
                  : "text-[#2563EB]"
              }`}
            >
              WHAT WE DO
            </p>
          </div>

          {/* Right */}
          <div className="md:col-span-9">
            <h2
              className={`max-w-[930px] text-[32px] font-normal leading-[1.15] transition-colors duration-500 sm:text-[40px] md:text-[48px] lg:text-[56px] ${
                isDark ? "text-white" : "text-black"
              }`}
            >
              Since 2010, we've partnered with startups, scale-ups and global
              companies to design brands, websites and digital products that
              combine beautiful visuals with measurable business results.
            </h2>
          </div>
        </div>

        {/* Services */}
        <div className="mt-16 sm:mt-20 md:mt-24 lg:mt-28">
          <StickyServices />
        </div>
      </Container>
    </section>
  );
}