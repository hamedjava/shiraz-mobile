// src/app/page.tsx

import { HeroSection } from "@/core/components/features/home/HeroSection";
import { FeaturesBar } from "@/core/components/features/home/FeaturesBar";
import { PromoBanners } from "@/core/components/features/home/PromoBanners";
import { PopularProducts } from "@/core/components/features/home/PopularProducts";
import { mockPopularProducts } from "@/core/data/mock-products";
// import { getHomePageData } from "@/core/services/api/get-home-page-data"; // این خط فعلا کامنت است

export default async function Home() {
  
  // ============================================================
  // سوئیچ بین داده واقعی و آزمایشی
  // ============================================================
  
  // حالت ۱: استفاده از داده‌های لوکال (فعلی)
  const products = mockPopularProducts;

  // حالت ۲: استفاده از داده‌های Strapi (آینده - وقتی آماده بودید کامنت‌ها را بردارید)
  // const strapiData = await getHomePageData();
  // const products = strapiData?.products || mockPopularProducts; // اگر API خالی بود، باز هم Mock را نشان بده
  
  // ============================================================

  return (
    <main>
      <HeroSection />
      <FeaturesBar />
      <PromoBanners />
      
      {/* این کامپوننت الان هوشمند است و با هر دو نوع داده کار می‌کند */}
      <PopularProducts products={products} />
    </main>
  );
}
