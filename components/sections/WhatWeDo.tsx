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
      className={`relative overflow-hidden py-32 transition-colors duration-500 ${
        isDark ? "bg-transparent" : "bg-white"
      }`}
    >
      <Container>
        {/* Top */}
        <div className="grid grid-cols-12 gap-12">
          {/* Left */}
          <div className="col-span-3">
            <p
              className={`text-[18px] font-semibold uppercase tracking-[0.12em] ${
                isDark
                  ? "bg-gradient-to-r from-[#2563EB] to-[#60A5FA] bg-clip-text text-transparent"
                  : "text-[#2563EB]"
              }`}
            >
              WHAT WE DO
            </p>
          </div>

          {/* Right */}
          <div className="col-span-9">
            <h2
              className={`max-w-[930px] text-[56px] font-normal leading-[1.15] transition-colors duration-500 ${
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
        <div className="mt-28">
          <StickyServices />
        </div>
      </Container>
    </section>
  );
}