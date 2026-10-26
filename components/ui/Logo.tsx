"use client";

import Image from "next/image";

interface LogoProps {
  isWhite?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function Logo({
  isWhite = true,
  size = "md",
  className = "",
}: LogoProps) {
  const sizeClasses = {
    sm: {
      rev: "h-6 sm:h-7 w-auto",
      auto: "h-[9px] sm:h-[10px] w-auto",
      gap: "gap-2 sm:gap-2.5",
      offset: "translate-y-[5.5px] sm:translate-y-[6.5px]",
    },
    md: {
      rev: "h-7 sm:h-[28px] md:h-[30px] w-auto",
      auto: "h-[10px] sm:h-[11px] md:h-[11.5px] w-auto",
      gap: "gap-2.5 sm:gap-3",
      offset: "translate-y-[6.5px] md:translate-y-[7.5px]",
    },
    lg: {
      rev: "h-10 sm:h-12 md:h-14 w-auto",
      auto: "h-[15px] sm:h-[18px] md:h-[21px] w-auto",
      gap: "gap-3.5 sm:gap-4",
      offset: "translate-y-[10px] md:translate-y-[12px]",
    },
  }[size];

  return (
    <div
      className={`inline-flex items-center select-none ${sizeClasses.gap} ${className} transition-opacity duration-300 hover:opacity-90`}
    >
      <Image
        src={isWhite ? "/logos/rev-white.png" : "/logos/rev-black.png"}
        alt="Rev."
        width={486}
        height={147}
        priority
        unoptimized
        className={`${sizeClasses.rev} object-contain transition-opacity duration-300`}
      />
      <Image
        src={
          isWhite
            ? "/logos/autowares-font-white.png"
            : "/logos/autowares-font-black.png"
        }
        alt="AUTOWARES"
        width={698}
        height={46}
        priority
        unoptimized
        className={`${sizeClasses.auto} ${sizeClasses.offset} object-contain transition-opacity duration-300`}
      />
    </div>
  );
}
