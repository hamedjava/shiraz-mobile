// src/core/components/features/home/PopularProducts.tsx

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeftIcon } from "@/core/components/icons/ArrowLeftIcon";
import { getStrapiMedia } from "@/core/lib/strapi-media";

// ما اینجا تایپ را کمی منعطف می‌کنیم تا هر دو نوع داده را قبول کند
// (هم داده‌ای که از Strapi می‌آید و هم داده Mock)
interface ProductData {
  id: number;
  attributes: {
    title: string;
    slug: string;
    price: number;
    
    // ساختار Strapi
    cover?: {
      data?: {
        attributes: {
          url: string;
        };
      };
    };
    category?: {
      data?: {
        attributes: {
          title: string;
        };
      };
    };

    // ساختار Local / Mock (که خودمان ساختیم)
    coverUrl?: string; 
    categoryTitle?: string; // برای سادگی در حالت ماک
  };
}

interface PopularProductsProps {
  products: any[]; // از any استفاده می‌کنیم تا فعلاً خطا ندهد (چون تایپ Mock و Strapi کمی فرق دارند)
}

export const PopularProducts: React.FC<PopularProductsProps> = ({ products }) => {

  if (!products || products.length === 0) {
    return (
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center text-gray-500">
          محصولی برای نمایش وجود ندارد.
        </div>
      </section>
    );
  }

  return (
    <section className="bg-slate-50 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-black text-gray-800">محصولات پرطرفدار</h2>
          <Link 
            href="/products" 
            className="group text-brand-dark font-bold flex items-center gap-2 hover:text-brand transition-colors duration-200"
          >
            <span>مشاهده همه</span>
            <ArrowLeftIcon className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product: ProductData) => {
            const p = product.attributes || product; // هندل کردن ساختارهای مختلف
            if (!p) return null;

            // ============================================================
            // منطق هوشمند انتخاب تصویر (Smart Image Logic)
            // ============================================================
            let finalImageUrl: string | null = null;

            // ۱. اگر عکس از Strapi آمده باشد (ساختار تو در تو)
            if (p.cover?.data?.attributes?.url) {
              finalImageUrl = getStrapiMedia(p.cover.data.attributes.url);
            }
            // ۲. اگر عکس لوکال باشد (ساختار ساده)
            else if (p.coverUrl) {
              finalImageUrl = p.coverUrl;
            }

            // ============================================================
            // منطق هوشمند انتخاب دسته‌بندی
            // ============================================================
            let categoryName = "";
            if (p.category?.data?.attributes?.title) {
              categoryName = p.category.data.attributes.title;
            } else if (p.categoryTitle) { // فرض می‌کنیم در ماک این فیلد را داریم یا ساختار مشابه
               // اگر در ماک ساختار category: { title: ... } داشتید:
               // @ts-ignore
               categoryName = p.category?.title || "";
            }

            return (
              <Link
                href={`/product/${p.slug}`}
                key={product.id}
                className="group block bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-64 w-full bg-gray-50 flex items-center justify-center p-4">
                  {finalImageUrl ? (
                    <Image
                      src={finalImageUrl}
                      alt={p.title || "محصول"}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  ) : (
                    <div className="text-gray-400 text-sm">بدون تصویر</div>
                  )}
                </div>

                <div className="p-5">
                  {categoryName && (
                    <div className="text-xs text-gray-500 mb-2 font-semibold">
                      {categoryName}
                    </div>
                  )}
                  <h3 className="font-bold text-gray-900 mb-4 line-clamp-2 h-14 leading-7">
                    {p.title || "بدون عنوان"}
                  </h3>
                  <div className="flex items-center justify-end pt-3 border-t border-gray-100">
                    <span className="text-xl font-black text-gray-900">
                      {p.price ? p.price.toLocaleString("fa-IR") : "---"}
                      <span className="text-xs font-medium text-gray-500 mr-1">تومان</span>
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
