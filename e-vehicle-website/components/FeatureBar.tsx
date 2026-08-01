"use client";

import { BatteryCharging, BadgeCheck, Leaf, ShieldCheck, Wifi } from "lucide-react";
import { motion } from "framer-motion";
import { featureItems } from "@/constants";
import { Card } from "@/components/ui/Card";

const iconMap = {
  Leaf,
  Wifi,
  ShieldCheck,
  BatteryCharging,
  BadgeCheck,
};

export function FeatureBar() {
  return (
    <section className="px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <div className="mx-auto max-w-7xl">
        <Card className="overflow-hidden p-4 sm:p-6 lg:p-8" hover={false}>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {featureItems.map((feature, index) => {
              const Icon = iconMap[feature.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.35, delay: index * 0.07 }}
                  className="rounded-[24px] border border-[#262F3A] bg-[#060B11]/80 p-5 transition hover:border-[#84E436]/60"
                >
                  <div className="mb-4 inline-flex rounded-full bg-[#84E436]/10 p-3 text-[#84E436]">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#A3A3A3]">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </Card>
      </div>
    </section>
  );
}
