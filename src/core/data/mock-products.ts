// src/core/data/mock-products.ts

import { Product } from "@/types";

// این یک نسخه ساده شده از تایپ Product است.
// شما می‌توانید آن را بر اساس نیاز خود کامل‌تر کنید.
export interface MockProduct {
  id: number;
  attributes: {
    title: string;
    slug: string;
    price: number;
    // مهم: به جای ساختار پیچیده Strapi، فقط آدرس محلی را نگه می‌داریم
    coverUrl: string; 
    category?: {
      title: string;
    };
  };
}


export const mockPopularProducts: MockProduct[] = [
  {
    id: 1,
    attributes: {
      title: "Apple iPhone 15 Pro",
      slug: "apple-iphone-15-pro",
      price: 55000000,
      coverUrl: "/images/products/Apple-iPhone-15-Pro.webp",
      category: { title: "گوشی موبایل" },
    },
  },
  {
    id: 2,
    attributes: {
      title: "Samsung Galaxy S24 Ultra",
      slug: "samsung-galaxy-s24-ultra",
      price: 62000000,
      coverUrl: "/images/products/samsung-galaxy-s24ultra-mytell-01.webp",
      category: { title: "گوشی موبایل" },
    },
  },
  {
    id: 3,
    attributes: {
      title: "Apple Watch Series 9",
      slug: "apple-watch-9",
      price: 21000000,
      coverUrl: "/images/products/Apple-Watch-9-Red-1.webp",
      category: { title: "ساعت هوشمند" },
    },
  },
  {
    id: 4,
    attributes: {
      title: "AirPods Pro (Silver)",
      slug: "airpods-pro-silver",
      price: 8500000,
      coverUrl: "/images/products/airpod_silver.webp",
      category: { title: "لوازم جانبی" },
    },
  },
  // در صورت نیاز محصولات بیشتری اضافه کنید
];
