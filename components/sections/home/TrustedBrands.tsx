"use client";

import BrandCanvas from "@/components/sections/home/BrandCanvas";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import Container from "@/components/layout/Container";
import { useEffect, useState } from "react";

const brands = Array.from({ length: 12 }, (_, index) => ({
  id: index + 1,
  name: "Mapbox",
  logo: "/logos/mapbox.svg",
}));

export default function TrustedBrands() {
  const { resolvedTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Wait until next-themes resolves the current theme
  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <section
      className={`relative overflow-hidden py-32 transition-colors duration-500 lg:py-40 ${
        isDark ? "bg-[#050816]" : "bg-white"
      }`}
    >
      {/* Background Glow */}
      <div
        className={`absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full blur-[180px] ${
          isDark ? "bg-blue-500/10" : "bg-blue-500/5"
        }`}
      />

      <div
        className={`absolute bottom-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full blur-[150px] ${
          isDark ? "bg-cyan-500/10" : "bg-cyan-500/5"
        }`}
      />

      <Container className="relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* Badge */}
          <span
            className={`inline-flex rounded-full border px-5 py-2 text-sm font-medium backdrop-blur-xl ${
              isDark
                ? "border-white/10 bg-white/5 text-white/60"
                : "border-black/10 bg-black/5 text-black/60"
            }`}
          >
            Trusted Worldwide
          </span>

          {/* Heading */}
          <h2
            className={`mt-8 text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-6xl lg:text-7xl ${
              isDark ? "text-white" : "text-black"
            }`}
          >
            Trusted by
            <br />
            remarkable global brands
          </h2>

          {/* Description */}
          <p
            className={`mx-auto mt-8 max-w-2xl text-lg leading-8 ${
              isDark ? "text-white/60" : "text-black/60"
            }`}
          >
            We partner with ambitious companies to design, build and launch
            exceptional digital products, AI experiences and premium websites
            that drive measurable growth.
          </p>
        </motion.div>

        {/* Logo Grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          className="relative mt-24 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4"
        >
          {brands.map((brand, index) => (
            <motion.div
              key={brand.id}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 40,
                },
                show: {
                  opacity: 1,
                  y: 0,
                },
              }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
              animate={{
                y: [0, -6, 0],
              }}
              whileHover={{
                y: -10,
                scale: 1.04,
              }}
              style={{
                animationDelay: `${index * 0.2}s`,
              }}
              className={`
                group
                relative
                flex
                h-40
                items-center
                justify-center
                overflow-hidden
                rounded-3xl
                border
                transition-all
                duration-500

                ${
                  isDark
                    ? "border-white/10 bg-white/[0.03] hover:border-blue-500/30 hover:bg-white/[0.06]"
                    : "border-black/10 bg-black/[0.02] hover:border-blue-500/20 hover:bg-black/[0.04]"
                }
              `}
            >
              {/* Hover Glow */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-r
                  from-blue-500/10
                  via-cyan-400/10
                  to-blue-500/10
                  opacity-0
                  blur-3xl
                  transition-all
                  duration-500
                  group-hover:opacity-100
                "
              />

              {/* Animated Border */}
              <div
                className="
                  absolute
                  inset-0
                  rounded-3xl
                  bg-gradient-to-r
                  from-blue-500/20
                  via-transparent
                  to-cyan-400/20
                  p-[1px]
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              >
                <div
                  className={`h-full w-full rounded-3xl ${
                    isDark ? "bg-[#050816]" : "bg-white"
                  }`}
                />
              </div>

              {/* Logo */}
              <motion.div
                whileHover={{
                  scale: 1.08,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                }}
                className="relative z-10"
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={170}
                  height={50}
                  className={`
                    h-10
                    w-auto
                    transition-all
                    duration-500

                    ${
                      isDark
                        ? "invert opacity-60 group-hover:opacity-100"
                        : "opacity-60 group-hover:opacity-100"
                    }
                  `}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="mt-28"
        >
          {/* Divider */}
          <div
            className={`relative mb-16 h-px w-full overflow-hidden ${
              isDark
                ? "bg-gradient-to-r from-transparent via-white/10 to-transparent"
                : "bg-gradient-to-r from-transparent via-black/10 to-transparent"
            }`}
          >
            <motion.div
              className="absolute top-0 h-full w-32"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(37,99,235,0.6), rgba(255,255,255,1), rgba(37,99,235,0.6), transparent)",
                filter: "blur(0.8px)",
              }}
              initial={{ x: "-140px" }}
              animate={{ x: "calc(100vw + 140px)" }}
              transition={{
                duration: 3,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
            {[
              {
                value: "150+",
                label: "Projects Delivered",
              },
              {
                value: "35+",
                label: "Global Clients",
              },
              {
                value: "99%",
                label: "Client Satisfaction",
              },
              {
                value: "6+",
                label: "Years Experience",
              },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.12,
                  duration: 0.55,
                }}
                whileHover={{
                  y: -5,
                }}
                className="text-center"
              >
                <h3
                  className={`text-4xl font-bold md:text-5xl ${
                    isDark ? "text-white" : "text-black"
                  }`}
                >
                  {item.value}
                </h3>

                <p
                  className={`mt-3 text-sm md:text-base ${
                    isDark ? "text-white/55" : "text-black/55"
                  }`}
                >
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}