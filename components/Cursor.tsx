"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function Cursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const x = useSpring(mouseX, {
    stiffness: 550,
    damping: 35,
    mass: 0.2,
  });

  const y = useSpring(mouseY, {
    stiffness: 550,
    damping: 35,
    mass: 0.2,
  });

  const [isDark, setIsDark] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const updateTheme = () => {
      const bg = getComputedStyle(document.body).backgroundColor;

      setIsDark(
        bg === "rgb(0, 0, 0)" ||
          bg === "rgb(5, 8, 22)" ||
          bg === "rgb(10, 10, 10)"
      );
    };

    const checkDevice = () => {
      const desktop =
        window.matchMedia("(hover: hover) and (pointer: fine)").matches;

      setEnabled(desktop);
    };

    updateTheme();
    checkDevice();

    const observer = new MutationObserver(updateTheme);

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class", "style"],
    });

    window.addEventListener("resize", checkDevice);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", checkDevice);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX - 7);
      mouseY.set(e.clientY - 7);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [mouseX, mouseY, enabled]);

  if (!enabled) return null;

  return (
    <motion.div
      style={{ x, y }}
      className={`pointer-events-none fixed left-0 top-0 z-[9999] h-[14px] w-[14px] rounded-full ${
        isDark
          ? "bg-gradient-to-br from-[#FFB347] via-[#FF8C42] to-[#FF5F00] shadow-[0_0_18px_rgba(255,140,66,0.55)]"
          : "bg-black"
      }`}
    />
  );
}