"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(132,228,54,0.15),_transparent_42%)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.45em] text-[#84E436]">
            Premium Electric Mobility
          </p>
          <h1 className="max-w-2xl text-5xl font-semibold leading-[0.95] text-white sm:text-6xl lg:text-[72px]">
            Redefining <span className="text-[#84E436]">urban mobility</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-[#A3A3A3] sm:text-xl">
            Premium electric scooters built for performance, design, and sustainability.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="#scooters" variant="primary" className="px-7 py-3.5">
              Explore Scooters
            </Button>
          </div>
          <div className="mt-12 flex items-center gap-3 text-sm text-[#A3A3A3]">
            <span className="h-2.5 w-2.5 rounded-full bg-[#84E436]" />
            <span>Trusted by riders who demand more</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="absolute inset-x-10 top-10 h-72 rounded-full bg-[#84E436]/20 blur-[120px]" />
          <div className="relative overflow-hidden rounded-[36px] border border-[#262F3A] bg-gradient-to-br from-[#111827] via-[#0D1420] to-[#060B11] p-6 shadow-2xl shadow-black/30 sm:p-8 lg:p-10">
            <div className="absolute right-5 top-5 rounded-full border border-[#84E436]/20 bg-[#84E436]/10 px-3 py-1 text-sm text-[#84E436]">
              New 2026 Model
            </div>
            <Image
              src="/images/scooter-hero.jpg"
              alt="Dock-Y premium electric scooter"
              width={720}
              height={540}
              priority
              className="w-full object-contain"
            />
          </div>
          <button
            type="button"
            aria-label="Scroll to products"
            onClick={() => {
              document.getElementById("scooters")?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="absolute right-3 top-1/2 hidden -translate-y-1/2 cursor-pointer flex-col items-center gap-3 lg:flex"
          >
            <span className="text-xs uppercase tracking-[0.35em] text-[#A3A3A3]">Scroll</span>
            <div className="h-24 w-px bg-[#A3A3A3]" />
            <ArrowRight className="rotate-90 text-[#84E436]" size={18} strokeWidth={1.8} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
