"use client";

import { BrainCircuit, CloudUpload, LifeBuoy, Lock, MapPinned, Smartphone } from "lucide-react";
import { motion } from "framer-motion";
import { technologyItems } from "@/constants";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";

const iconMap = {
  BrainCircuit,
  Smartphone,
  Lock,
  CloudUpload,
  MapPinned,
  LifeBuoy,
};

export function Technology() {
  return (
    <section id="technology" className="bg-[#dce5de] px-4 py-16 text-[#060B11] sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Technology"
          title="Smart systems that feel effortless"
          description="From AI-assisted insight to remote security and OTA upgrades, every feature is designed to make each ride more intuitive."
          align="center"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {technologyItems.map((item, index) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
              >
                <Card className="p-7 text-left" hover>
                  <div className="mb-5 inline-flex rounded-full bg-[#84E436]/15 p-3 text-[#84E436]">
                    <Icon size={24} strokeWidth={1.8} />
                  </div>
                  <h3 className="text-xl font-semibold text-[#fff]">{item.title}</h3>
                  <p className="mt-3 text-base leading-7 text-[#6B7280]">{item.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
