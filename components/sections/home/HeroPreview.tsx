"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";

export default function HeroPreview() {
  return (
  <section className="relative overflow-hidden bg-background pt-36 pb-20">
      <Container>
        <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="max-w-5xl text-[48px] font-bold leading-[1.05] tracking-[-0.04em] text-foreground sm:text-[72px] lg:text-[96px] xl:text-[110px]"
          >
            Digital design & development agency
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.7,
            }}
            className="mt-8 max-w-2xl text-[18px] leading-8 text-foreground/60 lg:text-[22px]"
          >
            We create premium digital products, websites, brands and AI
            experiences that help ambitious companies stand out.
          </motion.p>
        </div>
      </Container>

      {/* Video */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 60 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          delay: 0.35,
          duration: 0.8,
        }}
        className="mx-auto mt-20 w-full max-w-[1550px] px-5 sm:px-8"
      >
        <div className="overflow-hidden rounded-[34px] border border-white/10 bg-white/5 shadow-[0_0_80px_rgba(255,255,255,0.03)]">
          <video
            src="/video/hero.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="aspect-[16/9] h-full w-full object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
}