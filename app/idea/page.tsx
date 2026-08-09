"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  Lightbulb,
  Paperclip,
  User,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
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

export default function IdeaPage() {
  const [selectedService, setSelectedService] = useState("");
  const [selectedBudget, setSelectedBudget] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [idea, setIdea] = useState("");
  const [fileName, setFileName] = useState("");

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (
      !selectedService ||
      !selectedBudget ||
      !name.trim() ||
      !email.trim() ||
      !idea.trim()
    ) {
      return;
    }

    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Container>
        <div className="min-h-screen py-8 sm:py-10 md:py-12">
          <AnimatePresence mode="wait">
            {!submitted ? (
              /* =====================================================
                 FORM PAGE
              ====================================================== */
              <motion.section
                key="form"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mx-auto max-w-[900px]"
              >
                {/* Heading */}
                <div className="pt-20 text-center sm:pt-24 md:pt-28">
                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="
                      mb-7
                      text-sm
                      font-medium
                      uppercase
                      tracking-[0.2em]
                      text-foreground/45
                    "
                  >
                    Let&apos;s work together
                  </motion.p>

                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.1,
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="
                      text-[48px]
                      font-medium
                      leading-[0.95]
                      tracking-[-0.06em]
                      sm:text-[68px]
                      md:text-[82px]
                    "
                  >
                    Have an{" "}
                    <span className="text-[#3B82F6]">idea?</span>
                    <br />
                    Tell us about it.
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.2,
                      duration: 0.7,
                    }}
                    className="
                      mx-auto
                      mt-8
                      max-w-[560px]
                      text-base
                      leading-7
                      text-foreground/55
                      sm:text-lg
                    "
                  >
                    Share your idea with us and we&apos;ll get back to you
                    with the best possible solution.
                  </motion.p>

                  {/* Trust Information */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.35,
                      duration: 0.7,
                    }}
                    className="
                      mt-8
                      flex
                      flex-wrap
                      items-center
                      justify-center
                      gap-5
                      text-sm
                      text-foreground/60
                      sm:gap-7
                    "
                  >
                    {/* Quick Response */}
                    <div className="flex items-center gap-2">
                      <span
                        className="
                          flex
                          h-7
                          w-7
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-foreground/10
                          bg-foreground/5
                        "
                      >
                        <span className="text-xs">◷</span>
                      </span>

                      <span>Quick response</span>
                    </div>

                    {/* Confidential */}
                    <div className="flex items-center gap-2">
                      <span
                        className="
                          flex
                          h-7
                          w-7
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-foreground/10
                          bg-foreground/5
                        "
                      >
                        <span className="text-xs">♙</span>
                      </span>

                      <span>100% confidential</span>
                    </div>
                  </motion.div>
                </div>

                {/* =================================================
                    FORM CARD
                ================================================== */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.2,
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    mx-auto
                    mt-16
                    max-w-[720px]
                    rounded-[24px]
                    border
                    border-foreground/10
                    bg-foreground/[0.025]
                    p-6
                    sm:p-8
                    md:p-10
                  "
                >
                  {/* About Your Idea */}
                  <div>
                    <div className="mb-7 flex items-center gap-3">
                      <div
                        className="
                          flex
                          h-9
                          w-9
                          items-center
                          justify-center
                          rounded-lg
                          bg-[#2563EB]/10
                          text-[#3B82F6]
                        "
                      >
                        <Lightbulb size={18} />
                      </div>

                      <h2 className="text-base font-semibold">
                        About your idea
                      </h2>
                    </div>

                    {/* Service + Budget */}
                    <div className="grid gap-6 sm:grid-cols-2">
                      {/* Service */}
                      <div>
                        <label className="mb-3 block text-sm text-foreground/70">
                          What&apos;s your idea about?
                        </label>

                        <select
                          value={selectedService}
                          onChange={(e) =>
                            setSelectedService(e.target.value)
                          }
                          className="
                            w-full
                            appearance-none
                            rounded-lg
                            border
                            border-foreground/15
                            bg-transparent
                            px-4
                            py-3
                            text-sm
                            outline-none
                            transition-colors
                            focus:border-[#3B82F6]
                          "
                        >
                          <option
                            value=""
                            className="bg-background"
                          >
                            Select a category
                          </option>

                          {services.map((service) => (
                            <option
                              key={service}
                              value={service}
                              className="bg-background"
                            >
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Budget */}
                      <div>
                        <label className="mb-3 block text-sm text-foreground/70">
                          Project budget (USD)
                        </label>

                        <select
                          value={selectedBudget}
                          onChange={(e) =>
                            setSelectedBudget(e.target.value)
                          }
                          className="
                            w-full
                            appearance-none
                            rounded-lg
                            border
                            border-foreground/15
                            bg-transparent
                            px-4
                            py-3
                            text-sm
                            outline-none
                            transition-colors
                            focus:border-[#3B82F6]
                          "
                        >
                          <option
                            value=""
                            className="bg-background"
                          >
                            Select your budget
                          </option>

                          {budgets.map((budget) => (
                            <option
                              key={budget}
                              value={budget}
                              className="bg-background"
                            >
                              {budget}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Idea Description */}
                    <div className="mt-7">
                      <label className="mb-3 block text-sm text-foreground/70">
                        Tell us more about your idea
                      </label>

                      <textarea
                        value={idea}
                        onChange={(e) => setIdea(e.target.value)}
                        maxLength={1000}
                        rows={6}
                        placeholder="Write a few lines about your idea, goals, and what you're looking to build..."
                        className="
                          w-full
                          resize-none
                          rounded-lg
                          border
                          border-foreground/15
                          bg-transparent
                          px-4
                          py-4
                          text-sm
                          leading-6
                          outline-none
                          transition-colors
                          placeholder:text-foreground/35
                          focus:border-[#3B82F6]
                        "
                      />

                      <div className="mt-2 text-right text-xs text-foreground/35">
                        {idea.length} / 1000
                      </div>
                    </div>
                  </div>

                  {/* =================================================
                      YOUR DETAILS
                  ================================================== */}
                  <div className="mt-10">
                    <div className="mb-7 flex items-center gap-3">
                      <div
                        className="
                          flex
                          h-9
                          w-9
                          items-center
                          justify-center
                          rounded-lg
                          bg-[#2563EB]/10
                          text-[#3B82F6]
                        "
                      >
                        <User size={18} />
                      </div>

                      <h2 className="text-base font-semibold">
                        Your details
                      </h2>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      {/* Name */}
                      <div>
                        <label className="mb-3 block text-sm text-foreground/70">
                          Your name
                        </label>

                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Enter your name"
                          className="
                            w-full
                            rounded-lg
                            border
                            border-foreground/15
                            bg-transparent
                            px-4
                            py-3
                            text-sm
                            outline-none
                            transition-colors
                            placeholder:text-foreground/35
                            focus:border-[#3B82F6]
                          "
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="mb-3 block text-sm text-foreground/70">
                          Email address
                        </label>

                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email"
                          className="
                            w-full
                            rounded-lg
                            border
                            border-foreground/15
                            bg-transparent
                            px-4
                            py-3
                            text-sm
                            outline-none
                            transition-colors
                            placeholder:text-foreground/35
                            focus:border-[#3B82F6]
                          "
                        />
                      </div>
                    </div>
                  </div>

                  {/* =================================================
                      ATTACHMENT
                  ================================================== */}
                  <div className="mt-8">
                    <label className="mb-3 block text-sm text-foreground/70">
                      Attach anything{" "}
                      <span className="text-foreground/40">
                        (optional)
                      </span>
                    </label>

                    <label
                      className="
                        flex
                        min-h-[110px]
                        cursor-pointer
                        flex-col
                        items-center
                        justify-center
                        rounded-lg
                        border
                        border-dashed
                        border-foreground/20
                        px-5
                        text-center
                        transition-colors
                        hover:border-[#3B82F6]/60
                      "
                    >
                      <Paperclip
                        size={22}
                        className="mb-3 text-[#3B82F6]"
                      />

                      <span className="text-sm">
                        {fileName || "Click to upload"}
                      </span>

                      <span className="mt-1 text-xs text-foreground/40">
                        PDF, DOC, PNG, JPG
                      </span>

                      <input
                        type="file"
                        className="hidden"
                        onChange={(e) => {
                          setFileName(
                            e.target.files?.[0]?.name || ""
                          );
                        }}
                      />
                    </label>
                  </div>

                  {/* =================================================
                      SUBMIT
                  ================================================== */}
                  <motion.button
                    type="button"
                    onClick={handleSubmit}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="
                      mt-8
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-2
                      rounded-lg
                      bg-gradient-to-r
                      from-[#2563EB]
                      to-[#4F7FFF]
                      px-6
                      py-4
                      text-sm
                      font-semibold
                      text-white
                      transition-all
                      duration-300
                      hover:shadow-[0_15px_40px_rgba(37,99,235,.25)]
                    "
                  >
                    Send my idea
                    <ArrowUpRight size={17} />
                  </motion.button>

                  <p className="mt-4 text-center text-xs text-foreground/40">
                    We usually reply within 24 hours.
                  </p>
                </motion.div>
              </motion.section>
            ) : (
              /* =====================================================
                 SUCCESS / THANK YOU
              ====================================================== */
              <motion.section
                key="success"
                initial={{
                  opacity: 0,
                  scale: 0.97,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  flex
                  min-h-[85vh]
                  items-center
                  justify-center
                "
              >
                <div className="w-full max-w-[700px] text-center">
                  {/* Success Icon */}
                  <motion.div
                    initial={{
                      scale: 0,
                      rotate: -20,
                    }}
                    animate={{
                      scale: 1,
                      rotate: 0,
                    }}
                    transition={{
                      delay: 0.15,
                      type: "spring",
                      stiffness: 180,
                      damping: 14,
                    }}
                    className="
                      mx-auto
                      flex
                      h-24
                      w-24
                      items-center
                      justify-center
                      rounded-full
                      bg-gradient-to-br
                      from-[#60A5FA]
                      to-[#2563EB]
                      shadow-[0_20px_60px_rgba(37,99,235,.25)]
                    "
                  >
                    <Check
                      size={44}
                      strokeWidth={2}
                      className="text-white"
                    />
                  </motion.div>

                  {/* Status */}
                  <motion.p
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.3,
                    }}
                    className="
                      mt-10
                      text-sm
                      font-medium
                      uppercase
                      tracking-[0.2em]
                      text-[#3B82F6]
                    "
                  >
                    Successfully submitted
                  </motion.p>

                  {/* Thank You */}
                  <motion.h1
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
                    }}
                    className="
                      mt-4
                      text-[52px]
                      font-medium
                      tracking-[-0.055em]
                      sm:text-[72px]
                    "
                  >
                    Thank you!
                  </motion.h1>

                  {/* Message */}
                  <motion.p
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.5,
                    }}
                    className="
                      mx-auto
                      mt-6
                      max-w-[560px]
                      text-base
                      leading-7
                      text-foreground/55
                      sm:text-lg
                    "
                  >
                    Your idea has been submitted successfully.
                    <br />
                    You will receive a confirmation email, and one of
                    our representatives will reach out to you soon.
                  </motion.p>

                  {/* Back to Home - ONLY AFTER SUCCESS */}
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
                      delay: 0.65,
                    }}
                  >
                    <Link
                      href="/"
                      className="
                        group
                        mt-10
                        inline-flex
                        items-center
                        gap-3
                        rounded-full
                        border
                        border-foreground/20
                        px-7
                        py-3.5
                        text-sm
                        font-medium
                        transition-all
                        duration-300
                        hover:border-foreground
                        hover:bg-foreground
                        hover:text-background
                      "
                    >
                      <ArrowLeft
                        size={17}
                        className="
                          transition-transform
                          duration-300
                          group-hover:-translate-x-1
                        "
                      />

                      Back to home
                    </Link>
                  </motion.div>
                </div>
              </motion.section>
            )}
          </AnimatePresence>
        </div>
      </Container>
    </main>
  );
}