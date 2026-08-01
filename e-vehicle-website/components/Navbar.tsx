"use client";

import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import { navigationItems } from "@/constants";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/components/CartProvider";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { itemCount } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`sticky top-0 z-50 border-b border-[#262F3A]/80 backdrop-blur-xl transition-all ${
        scrolled ? "bg-[#0A1018]/85" : "bg-[#0A1018]/60"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3" aria-label="Dock-y home">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#84E436] bg-[#84E436]/10 text-lg font-semibold text-[#84E436]">
            D
          </div>
          <span className="text-xl font-semibold tracking-[0.2em] text-white">DOCK-Y</span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {navigationItems.map((item) => (
            <a key={item.label} href={item.href} className="text-sm text-[#A3A3A3] transition hover:text-[#84E436]">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            aria-label="View cart"
            onClick={() => {
              const preview = document.getElementById("cart-preview");
              if (preview) {
                const top = preview.getBoundingClientRect().top + window.pageYOffset - 96;
                window.scrollTo({ top, behavior: "smooth" });
              }
            }}
            className="relative rounded-full border border-[#262F3A] p-2.5 text-[#A3A3A3] transition hover:border-[#84E436] hover:text-[#84E436]"
          >
            <ShoppingCart size={18} strokeWidth={1.8} />
            <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-[#84E436] text-[10px] font-semibold text-[#060B11]">
              {itemCount}
            </span>
          </button>
          <div className="hidden sm:block">
            <Button href='#book-test-ride' variant="primary" className="px-5 py-2.5 text-sm">
              Book a Test Ride
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
