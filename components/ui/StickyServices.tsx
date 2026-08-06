"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { services } from "./data";

export default function StickyServices() {
  const [active, setActive] = useState(-1);

  const glowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const quickX = useRef<((value: number) => void)[]>([]);
  const quickY = useRef<((value: number) => void)[]>([]);

  useEffect(() => {
    glowRefs.current.forEach((glow, index) => {
      if (!glow) return;

      quickX.current[index] = gsap.quickTo(glow, "x", {
        duration: 0.35,
        ease: "power3.out",
      });

      quickY.current[index] = gsap.quickTo(glow, "y", {
        duration: 0.35,
        ease: "power3.out",
      });
    });
  }, []);
  return (
    <section className="w-full py-24">
      <div className="mx-auto flex max-w-[1340px] flex-col gap-5">
        {services.map((service, index) => (
        <div
  key={service.id}
  ref={(el) => {
    cardRefs.current[index] = el;
  }}
  onMouseEnter={() => setActive(index)}
  onMouseLeave={() => setActive(-1)}
  onMouseMove={(e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    quickX.current[index]?.(e.clientX - rect.left - 260);
    quickY.current[index]?.(e.clientY - rect.top - 260);
  }}
            className={`
              relative
              overflow-hidden
              rounded-[32px]
              transition-all
              duration-500
              cursor-pointer
              ${
                active === index
                  ? "bg-[#101010]"
                  : "bg-[#EFEFEF]"
              }
            `}
          >
            {active === index && (
              <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[32px]">

        <div
  ref={(el) => {
    glowRefs.current[index] = el;
  }}
  className="
    absolute
    left-0
    top-0
    h-[520px]
    w-[520px]
    rounded-full
    blur-[130px]
    pointer-events-none
    will-change-transform
  "
  style={{
    background: `
      radial-gradient(
        circle,
        rgba(37,99,235,.60) 0%,
        rgba(59,130,246,.35) 25%,
        rgba(96,165,250,.18) 55%,
        transparent 100%
      )
    `,
  }}
/>

              </div>
            )}

            <div
              className={`
                relative
                z-10
                overflow-hidden
                transition-all
                duration-500
                hover:scale-[1.01]
                cursor-pointer
                will-change-transform
                ${
                  active === index
                    ? "h-[470px]"
                    : "h-[140px]"
                }
              `}
            >
              <div className="flex h-[140px] items-center justify-between px-14">

                <h2
                  className={`
                    text-[54px]
                    font-light
                    tracking-[-2px]
                    transition-colors
                    duration-500
                    ${
                      active === index
                        ? "text-white"
                        : "text-black"
                    }
                  `}
                >
                  {service.title}
                </h2>

                <span
                  className={`
                    text-[40px]
                    transition-colors
                    duration-500
                    ${
                      active === index
                        ? "text-white/40"
                        : "text-[#B7B7B7]"
                    }
                  `}
                >
                  {service.number}
                </span>

              </div>
                            {/* Expanded Content */}
              <div
                className={`
                  px-14
                  transition-all
                  duration-500
                  ${
                    active === index
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }
                `}
              >
                <div className="mt-2 flex items-center justify-between gap-16">

                  {/* Left Content */}
                  <div className="max-w-[560px]">

                    <p className="text-[22px] leading-[1.8] text-white/70">
                      {service.description}
                    </p>

                    <button
                      className="
                        mt-10
                        inline-flex
                        items-center
                        gap-3
                        rounded-full
                        border
                        border-white/15
                        bg-white/5
                        px-8
                        py-4
                        text-white
                        backdrop-blur-xl
                        transition-all
                        duration-300
                        hover:bg-white
                        hover:text-black
                      "
                    >
                      Learn More
                      <span className="text-xl">↗</span>
                    </button>

                  </div>

                  
               

                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}