"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  className?: string;
  ariaLabel?: string;
}

export function Button({
  children,
  variant = "primary",
  href,
  className = "",
  ariaLabel,
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#84E436] focus-visible:ring-offset-2 focus-visible:ring-offset-[#060B11]";

  const variantClasses =
    variant === "primary"
      ? "bg-[#84E436] text-[#060B11] hover:bg-[#72CC2F]"
      : "border border-[#262F3A] bg-transparent text-white hover:border-[#84E436] hover:text-[#84E436]";

  const content = (
    <motion.span
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <Link href={href} aria-label={ariaLabel} className="inline-flex">
        {content}
      </Link>
    );
  }

  return (
    <button type="button" aria-label={ariaLabel} className={`${baseClasses} ${variantClasses} ${className}`}>
      {children}
    </button>
  );
}
