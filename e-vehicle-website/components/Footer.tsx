import { Facebook, Instagram, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";

const footerColumns = [
  {
    title: "Products",
    links: ["S1 Pro", "S1 Lite", "Accessories", "Fleet"],
  },
  {
    title: "Company",
    links: ["About Us", "Our Story", "Investors", "Media"],
  },
  {
    title: "Support",
    links: ["Help Center", "Warranty", "Contact", "FAQ"],
  },
];

export function Footer() {
  return (
    <footer id="contact" className="border-t border-[#262F3A] bg-[#0A1018] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#84E436] bg-[#84E436]/10 text-lg font-semibold text-[#84E436]">
              D
            </div>
            <span className="text-xl font-semibold tracking-[0.2em] text-white">DOCK-Y</span>
          </div>
          <p className="mt-6 max-w-lg text-base leading-8 text-[#A3A3A3]">
            Premium electric scooters for bold urban riders who value design, performance, and responsible mobility.
          </p>
          <div className="mt-8 flex gap-3">
            {[Facebook, Instagram, Linkedin].map((Icon, index) => (
              <a
                key={index}
                href="#"
                aria-label="Social link"
                className="rounded-full border border-[#262F3A] p-3 text-[#A3A3A3] transition hover:border-[#84E436] hover:text-[#84E436]"
              >
                <Icon size={18} strokeWidth={1.8} />
              </a>
            ))}
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-[1fr_1fr]">
          <div className="space-y-5">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#84E436]">{column.title}</h3>
                <ul className="mt-4 space-y-3">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm text-[#A3A3A3] transition hover:text-white">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="rounded-[28px] border border-[#262F3A] bg-[#111827] p-6">
            <h3 className="text-lg font-semibold text-white">Stay updated</h3>
            <p className="mt-3 text-sm leading-7 text-[#A3A3A3]">
              Join our newsletter for new launches, events, and exclusive offers.
            </p>
            <div className="mt-6 flex items-center gap-3 rounded-full border border-[#262F3A] bg-[#060B11] px-3 py-2">
              <input
                type="email"
                aria-label="Email address"
                placeholder="Email address"
                className="w-full bg-transparent px-2 py-1 text-sm text-white outline-none placeholder:text-[#6B7280]"
              />
              <button type="button" aria-label="Subscribe" className="rounded-full bg-[#84E436] p-2.5 text-[#060B11] transition hover:bg-[#72CC2F]">
                <Send size={16} strokeWidth={1.8} />
              </button>
            </div>
            <div className="mt-6">
              <Button href="#home" variant="primary" className="px-5 py-2.5">
                View Inventory
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
