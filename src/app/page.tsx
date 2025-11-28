import React from "react";
// ✅ اصلاح مسیر: ایمپورت از ماژول‌ها
import { HeroSection } from "@/modules/home/presentation/components/HeroSection"; 
import { FeaturesBar, PromoBanners } from "@/modules/home/presentation/components/HomeBanners";
import { PopularProducts } from "@/modules/home/presentation/components/PopularProducts";

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      
      <HeroSection />

      <PromoBanners />

      <PopularProducts />

      {/* نوار ویژگی‌ها در انتهای صفحه */}
      <div className="mt-auto">
        <FeaturesBar />
      </div>

    </main>
  );
}
