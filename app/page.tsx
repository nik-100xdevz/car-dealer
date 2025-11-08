"use client";
import BrandShowcase from "@/components/BrandedTypes";
import FeaturedInventory from "@/components/FeaturedInventory";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <FeaturedInventory />
        <WhyChooseUs />
        <BrandShowcase />
      </main>
    </div>
  );
}
