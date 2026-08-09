"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactSuccess() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 text-foreground">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="w-full max-w-2xl text-center"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            delay: 0.15,
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-[#2563EB] to-[#60A5FA] text-2xl text-white"
        >
          ✓
        </motion.div>

        <h1 className="text-5xl font-medium tracking-[-0.04em] md:text-7xl">
          Thank you!
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-foreground/60 md:text-xl">
          Your request has been successfully submitted. You will get a mail
          shortly, and one of our representatives will reach out to you soon.
        </p>

        <Link
          href="/"
          className="group mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#2563EB] to-[#60A5FA] px-7 py-3.5 font-medium text-white transition-all duration-300 hover:scale-[1.03]"
        >
          Back to Home
          <span className="transition-transform duration-300 group-hover:-translate-x-1">
            ←
          </span>
        </Link>
      </motion.div>
    </main>
  );
}