"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { services } from "./data";

export default function StickyServices() {
  const [active, setActive] = useState(-1);
  const [isMobile, setIsMobile] = useState(false);

  const glowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const quickX = useRef<((value: number) => void)[]>([]);
  const quickY = useRef<((value: number) => void)[]>([]);

  /* ============================================
     Detect Mobile / Tablet
  ============================================ */

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.matchMedia("(max-width: 1023px)").matches);
    };

    checkDevice();

    window.addEventListener("resize", checkDevice);

    return () => {
      window.removeEventListener("resize", checkDevice);
    };
  }, []);

  /* ============================================
     GSAP Glow
  ============================================ */

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
  }, [active]);

  /* ============================================
     Card Interaction
  ============================================ */

  const handleCardClick = (index: number) => {
    if (!isMobile) return;

    setActive((prev) => (prev === index ? -1 : index));
  };

  return (
    <div className="w-full space-y-4 sm:space-y-5 md:space-y-6">
      {services.map((service, index) => (
        <div
          key={service.id}
          ref={(el) => {
            cardRefs.current[index] = el;
          }}
          onClick={() => handleCardClick(index)}
          onMouseEnter={() => {
            if (!isMobile) {
              setActive(index);
            }
          }}
          onMouseLeave={() => {
            if (!isMobile) {
              setActive(-1);
            }
          }}
          onMouseMove={(e) => {
            if (isMobile) return;

            const rect = e.currentTarget.getBoundingClientRect();

            quickX.current[index]?.(
              e.clientX - rect.left - 260
            );

            quickY.current[index]?.(
              e.clientY - rect.top - 260
            );
          }}
          className={`
            relative
            w-full
            overflow-hidden
            rounded-[22px]
            cursor-pointer
            transition-all
            duration-500
            sm:rounded-[26px]
            md:rounded-[30px]
            lg:rounded-[32px]

            ${
              active === index
                ? "bg-[#101010]"
                : "bg-[#EFEFEF]"
            }
          `}
        >
          {/* ============================================
              BLUE GLOW
          ============================================ */}

          {active === index && (
            <div
              ref={(el) => {
                glowRefs.current[index] = el;
              }}
              className="
                pointer-events-none
                absolute
                left-0
                top-0
                h-[320px]
                w-[320px]
                rounded-full
                blur-[90px]
                will-change-transform

                sm:h-[400px]
                sm:w-[400px]
                sm:blur-[110px]

                md:h-[460px]
                md:w-[460px]
                md:blur-[120px]

                lg:h-[520px]
                lg:w-[520px]
                lg:blur-[130px]
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
          )}

          {/* ============================================
              MAIN CARD
          ============================================ */}

          <div
            className={`
              relative
              z-10
              overflow-hidden
              transition-all
              duration-500
              will-change-transform

              ${
                active === index
                  ? "h-[430px] sm:h-[450px] md:h-[460px] lg:h-[470px]"
                  : "h-[110px] sm:h-[120px] md:h-[130px] lg:h-[140px]"
              }
            `}
          >
            {/* ============================================
                CARD HEADER
            ============================================ */}

            <div
              className="
                flex
                h-[110px]
                items-center
                justify-between
                px-5

                sm:h-[120px]
                sm:px-7

                md:h-[130px]
                md:px-10

                lg:h-[140px]
                lg:px-14
              "
            >
              {/* Title */}

              <h2
                className={`
                  text-[32px]
                  font-light
                  leading-tight
                  tracking-[-1.5px]
                  transition-colors
                  duration-500

                  sm:text-[38px]
                  sm:tracking-[-1.8px]

                  md:text-[46px]
                  md:tracking-[-2px]

                  lg:text-[54px]

                  ${
                    active === index
                      ? "text-white"
                      : "text-black"
                  }
                `}
              >
                {service.title}
              </h2>

              {/* Number */}

              <span
                className={`
                  ml-4
                  shrink-0
                  text-[24px]
                  transition-colors
                  duration-500

                  sm:text-[28px]

                  md:text-[34px]

                  lg:text-[40px]

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

            {/* ============================================
                EXPANDED CONTENT
            ============================================ */}

            <div
              className={`
                px-5
                transition-all
                duration-500

                sm:px-7

                md:px-10

                lg:px-14

                ${
                  active === index
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }
              `}
            >
              <div
                className="
                  mt-2
                  flex
                  items-center
                  justify-between
                  gap-8

                  sm:gap-10

                  md:gap-12

                  lg:gap-16
                "
              >
                {/* ========================================
                    LEFT CONTENT
                ======================================== */}

                <div className="max-w-[560px]">
                  <p
                    className="
                      text-[16px]
                      leading-[1.7]
                      text-white/70

                      sm:text-[18px]
                      sm:leading-[1.75]

                      md:text-[20px]

                      lg:text-[22px]
                      lg:leading-[1.8]
                    "
                  >
                    {service.description}
                  </p>

                  {/* Learn More */}

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                    className="
                      mt-7
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-white/15
                      bg-white/5
                      px-6
                      py-3
                      text-sm
                      text-white
                      backdrop-blur-xl
                      transition-all
                      duration-300
                      hover:bg-white
                      hover:text-black

                      sm:mt-8
                      sm:gap-3
                      sm:px-7
                      sm:py-3.5
                      sm:text-base

                      md:mt-9

                      lg:mt-10
                      lg:px-8
                      lg:py-4
                    "
                  >
                    Learn More

                    <span className="text-lg sm:text-xl">
                      ↗
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}