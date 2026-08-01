"use client";

import { motion } from "framer-motion";
import { performanceStats } from "@/constants";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Performance() {
  return (
    <section id="about" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Performance"
          title="Engineered for every mile"
          description="Balanced power, precision braking, and an easy-to-live-with battery system that keeps pace with city life."
          align="center"
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-4">
          {performanceStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -6, scale: 1.02 }}
            >
              <Card className="flex flex-col items-center justify-center px-6 py-10 text-center">
                <div className="mb-4 h-32 w-32 rounded-full border-[10px] border-[#84E436]/20 bg-[conic-gradient(#84E436_0_75%,_#111827_75%)] p-2">
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-[#060B11] text-2xl font-semibold text-white">
                    {stat.value}
                  </div>
                </div>
                <h3 className="text-sm uppercase tracking-[0.3em] text-[#A3A3A3]">{stat.label}</h3>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
