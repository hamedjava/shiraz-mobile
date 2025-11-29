// src/app/page.tsx

import { HeroSection } from "@/modules/home/presentation/components/HeroSection";
import { FeaturesBar, PromoBanners } from "@/modules/home/presentation/components/HomeBanners";
import { PopularProducts } from "@/modules/home/presentation/components/PopularProducts";

// --- اینترفیس‌ها ---
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
  cover: StrapiImage | null; // ممکن است نال باشد
  category?: Category | null;
}

// --- تابع دریافت دیتا ---
async function getProducts(): Promise<Product[]> {
  const STRAPI_URL = "http://127.0.0.1:1337";

  try {
    // استفاده از populate=* برای گرفتن عکس‌ها و دسته‌بندی‌ها
    const res = await fetch(`${STRAPI_URL}/api/products?populate=*`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch products from Strapi");
    }

    const json = await res.json();

    if (!json.data) {
      return [];
    }

    return json.data as Product[];
  } catch (error) {
    console.error("Error loading products:", error);
    return [];
  }
}

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="min-h-screen bg-white flex flex-col" dir="rtl">
      <HeroSection />
      <PromoBanners />
      <PopularProducts products={products} />
      <div className="mt-auto">
        <FeaturesBar />
      </div>
    </main>
  );
}
