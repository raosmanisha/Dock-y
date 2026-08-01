import { BookTestRide } from "@/components/BookTestRide";
import { FeatureBar } from "@/components/FeatureBar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Performance } from "@/components/Performance";
import { ProductShowcase } from "@/components/ProductShowcase";
import { Technology } from "@/components/Technology";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#060B11] text-white">
      <Navbar />
      <Hero />
      <FeatureBar />
      <ProductShowcase />
      <Performance />
      <Technology />
      <BookTestRide />
      <Footer />
    </main>
  );
}
