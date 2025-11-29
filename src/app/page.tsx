// src/app/page.tsx

import { HeroSection } from "@/modules/home/presentation/components/HeroSection";
import { FeaturesBar, PromoBanners } from "@/modules/home/presentation/components/HomeBanners";
import { PopularProducts } from "@/modules/home/presentation/components/PopularProducts";

// --- تعریف اینترفیس‌ها (بهتر است بعدا به فایل types منتقل شوند) ---
export interface StrapiImage {
  id: number;
  url: string;
  width?: number;
  height?: number;
  alternativeText?: string;
}

export interface Category {
  title: string;
  slug: string;
}

export interface Product {
  id: number;
  documentId?: string;
  title: string;
  slug: string;
  price: number;
  description?: any;
  cover: StrapiImage | null; 
  category?: Category | null;
}

// --- تابع دریافت دیتا ---
async function getProducts(): Promise<Product[]> {
  const STRAPI_URL = "http://127.0.0.1:1337";

  try {
    const res = await fetch(`${STRAPI_URL}/api/products?populate=*`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    const json = await res.json();
    return json.data || [];
  } catch (error) {
    console.error("Error loading products:", error);
    return [];
  }
}

export default async function Home() {
  const products = await getProducts();

  return (
    // استفاده از Fragment به جای تگ main تکراری
    <>
      <HeroSection />
      <PromoBanners />
      <PopularProducts products={products} />
      
      {/* بخش فیچرها می‌تواند چسبیده به فوتر باشد */}
      <div className="mt-12">
        <FeaturesBar />
      </div>
    </>
  );
}
