"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { useCart } from "@/components/CartProvider";

const details = [
  "150 KM IDC Range",
  "90 KM/H Top Speed",
  "5 kWh Battery",
  "Regenerative Braking",
  "Keyless Start",
];

const carouselSlides = [
  { src: "/images/scooter-showcase.jpg", label: "Front view" },
  { src: "/images/scooter-front.jpg", label: "Studio view" },
  { src: "/images/scooter-side.jpg", label: "Side view" },
  { src: "/images/scooter-angled.jpg", label: "Angled view" },
];

export function ProductShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { addItem, items, removeItem } = useCart();

  return (
    <section id="scooters" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="space-y-8">
          <SectionTitle
            eyebrow="Signature Series"
            title="DOCK-Y S1 Pro"
            description="A premium machine built around comfort, intelligence, and everyday performance."
          />
          <div className="flex items-center gap-2 text-[#FFC94A]">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} size={18} fill="currentColor" strokeWidth={1.3} />
            ))}
            <span className="ml-2 text-sm text-[#A3A3A3]">4.9 | 1.2k riders</span>
          </div>
          <div className="text-4xl font-semibold text-white">₹1,49,999</div>
          <ul className="grid gap-3 text-sm text-[#A3A3A3] sm:grid-cols-2">
            {details.map((detail) => (
              <li key={detail} className="rounded-full border border-[#262F3A] bg-[#111827]/80 px-4 py-3">
                {detail}
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => addItem({ id: "docky-s1-pro", name: "DOCK-Y S1 Pro", price: 149999 })}
              className="inline-flex items-center justify-center rounded-full bg-[#84E436] px-7 py-3.5 text-sm font-medium text-[#060B11] transition hover:bg-[#72CC2F]"
            >
              <ShoppingCart size={16} className="mr-2" strokeWidth={1.8} />
              Add to Cart
            </button>
            <Button href="#about" variant="secondary" className="px-7 py-3.5">
              Learn More
            </Button>
          </div>

          <div id="cart-preview" className="rounded-[24px] border border-[#262F3A] bg-[#111827]/80 p-5">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">Cart Preview</h3>
              <span className="text-sm text-[#A3A3A3]">{items.length} item{items.length === 1 ? "" : "s"}</span>
            </div>
            {items.length === 0 ? (
              <p className="mt-3 text-sm text-[#A3A3A3]">Your selected scooter will appear here.</p>
            ) : (
              <ul className="mt-4 space-y-3">
                {items.map((item) => (
                  <li key={item.id} className="flex items-center justify-between rounded-full border border-[#262F3A] px-4 py-3 text-sm text-white">
                    <span>{item.name}</span>
                    <div className="flex items-center gap-3">
                      <span>₹{item.price.toLocaleString()}</span>
                      <button type="button" aria-label={`Remove ${item.name}`} onClick={() => removeItem(item.id)} className="text-[#84E436]">
                        Remove
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <Card className="overflow-hidden p-6 sm:p-8 lg:p-10">
            <div className="rounded-[28px] border border-[#262F3A] bg-gradient-to-br from-[#111827] via-[#0D1420] to-[#060B11] p-6 sm:p-8">
              <div className="relative min-h-[320px] overflow-hidden rounded-[20px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={carouselSlides[activeIndex].src}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                    className="flex justify-center"
                  >
                    <Image
                      src={carouselSlides[activeIndex].src}
                      alt={`${carouselSlides[activeIndex].label} of Dock-Y S1 Pro`}
                      width={900}
                      height={680}
                      className="w-full max-w-[620px] object-contain"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
            <div className="mt-6 flex justify-center gap-2">
              {carouselSlides.map((slide, index) => (
                <button
                  key={slide.label}
                  type="button"
                  aria-label={`View ${slide.label}`}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    index === activeIndex ? "w-8 bg-[#84E436]" : "w-2.5 bg-[#262F3A] hover:bg-[#84E436]/70"
                  }`}
                />
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
