"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Paperclip } from "lucide-react";

import Container from "@/components/layout/Container";

const services = [
  "Site from scratch",
  "UX/UI design",
  "Product design",
  "Webflow site",
  "Motion design",
  "Branding",
  "Mobile development",
];

const budgets = ["10-20k", "30-40k", "40-50k", "50-100k", ">100k"];

const smoothEase = [0.22, 1, 0.36, 1];

export default function ContactPage() {
  const router = useRouter();

  const [selectedService, setSelectedService] = useState("");
  const [selectedBudget, setSelectedBudget] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/contact/success");
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Container>
        <section className="px-0 py-28 sm:py-32 md:py-36">

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
            }}
            className="mx-auto max-w-[650px] text-center text-[48px] font-medium leading-[0.95] tracking-[-0.055em] sm:text-[64px] md:text-[76px]"
          >
            Hey! Tell us all
            <br />
            the things
          </motion.h1>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.15,
              duration: 0.9,
              ease: "easeOut",
            }}
            className="mx-auto mt-20 max-w-[650px] sm:mt-24"
          >
            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.25,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
            >
              <p className="mb-5 text-base text-foreground">
                I'm interested in...
              </p>

              <div className="flex flex-wrap gap-3">
                {services.map((service, index) => {
                  const active = selectedService === service;

                  return (
                    <motion.button
                      key={service}
                      type="button"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.3 + index * 0.04,
                        duration: 0.5,
                        ease: "easeOut",
                      }}
                      whileHover={{
                        y: -2,
                        transition: { duration: 0.2 },
                      }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => setSelectedService(service)}
                      className={`rounded-full border px-4 py-2 text-sm transition-all duration-300 sm:text-base ${
                        active
                          ? "border-foreground bg-foreground text-background"
                          : "border-foreground/40 bg-transparent hover:border-foreground"
                      }`}
                    >
                      {service}
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.7,
                ease: "easeOut",
              }}
              className="mt-14"
            >
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="w-full border-0 border-b border-foreground/20 bg-transparent px-0 py-4 text-base outline-none transition-all duration-500 placeholder:text-foreground/50 focus:border-foreground/60"
              />
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.58,
                duration: 0.7,
                ease: "easeOut",
              }}
              className="mt-8"
            >
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full border-0 border-b border-foreground/20 bg-transparent px-0 py-4 text-base outline-none transition-all duration-500 placeholder:text-foreground/50 focus:border-foreground/60"
              />
            </motion.div>

            {/* Project */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.66,
                duration: 0.7,
                ease: "easeOut",
              }}
              className="mt-8"
            >
              <textarea
                name="project"
                placeholder="Tell us about your project"
                rows={2}
                required
                className="w-full resize-none border-0 border-b border-foreground/20 bg-transparent px-0 py-4 text-base outline-none transition-all duration-500 placeholder:text-foreground/50 focus:border-foreground/60"
              />
            </motion.div>

            {/* Budget */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.74,
                duration: 0.7,
                ease: "easeOut",
              }}
              className="mt-12"
            >
              <p className="mb-5 text-base text-foreground">
                Project budget (USD)
              </p>

              <div className="flex flex-wrap gap-3">
                {budgets.map((budget, index) => {
                  const active = selectedBudget === budget;

                  return (
                    <motion.button
                      key={budget}
                      type="button"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.78 + index * 0.05,
                        duration: 0.5,
                        ease: "easeOut",
                      }}
                      whileHover={{
                        y: -2,
                        transition: { duration: 0.2 },
                      }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => setSelectedBudget(budget)}
                      className={`rounded-full border px-4 py-2 text-sm transition-all duration-300 sm:text-base ${
                        active
                          ? "border-foreground bg-foreground text-background"
                          : "border-foreground/40 hover:border-foreground"
                      }`}
                    >
                      {budget}
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>

            {/* Attachment */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.9,
                duration: 0.7,
                ease: "easeOut",
              }}
              className="mt-12"
            >
              <label className="group inline-flex cursor-pointer items-center gap-2 border-b border-foreground/30 pb-1 text-sm font-medium transition-colors duration-300 hover:border-foreground">
                <Paperclip
                  size={16}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:-rotate-12"
                />

                Add attachment

                <input
                  type="file"
                  name="attachment"
                  className="hidden"
                />
              </label>
            </motion.div>

            {/* Submit */}
            <motion.button
              type="submit"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.98,
                duration: 0.7,
                ease: "easeOut",
              }}
              whileHover={{
                y: -3,
                transition: { duration: 0.25 },
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="mt-14 rounded-full border border-foreground/40 px-7 py-3 text-sm text-foreground/60 transition-all duration-300 hover:border-foreground hover:bg-foreground hover:text-background"
            >
              Send request
            </motion.button>
          </motion.form>
        </section>
      </Container>
    </main>
  );
}