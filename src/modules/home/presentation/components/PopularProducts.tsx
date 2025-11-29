// src/modules/home/presentation/components/PopularProducts.tsx

import React from "react";
import Link from "next/link";
import Image from "next/image"; 
import { Product } from "@/app/page";

interface PopularProductsProps {
  products: Product[];
}

const getImageUrl = (coverData: any) => {
  if (!coverData) return null;
  let url = "";
  if (typeof coverData === 'string') {
      url = coverData;
  } else if (coverData.url) {
      url = coverData.url;
  } else if (coverData.data?.attributes?.url) {
      url = coverData.data.attributes.url;
  }
  if (!url) return null;
  if (url.startsWith("/")) {
    return `http://127.0.0.1:1337${url}`;
  }
  return url.replace("localhost", "127.0.0.1");
};

export const PopularProducts: React.FC<PopularProductsProps> = ({ products }) => {

  if (!products || products.length === 0) {
    return (
      <section className="py-10 container mx-auto px-4 text-center text-gray-500">
        محصولی برای نمایش وجود ندارد.
      </section>
    );
  }

  return (
    <section className="py-10 container mx-auto px-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">محصولات پرطرفدار</h2>
        <Link href="/products" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
          مشاهده همه
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => {
          const imageUrl = getImageUrl(product.cover);
          
          return (
            <Link
              // ✅ نکته حیاتی: چون پوشه را product کردی، اینجا هم باید product باشد (بدون s)
              href={`/product/${product.slug}`}
              key={product.id}
              className="group block bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-56 w-full bg-gray-50 flex items-center justify-center p-4">
                {imageUrl ? (
                  <div className="relative w-full h-full">
                    <Image
                      src={imageUrl}
                      alt={product.title}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      unoptimized={true} 
                    />
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-gray-400">
                    <svg className="w-10 h-10 mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm">بدون تصویر</span>
                  </div>
                )}
              </div>

              <div className="p-4">
                {product.category && (
                   <div className="text-xs text-gray-500 mb-1">
                     {(product.category as any).title || (product.category as any).attributes?.title}
                   </div>
                )}
                
                <h3 className="font-semibold text-gray-900 mb-3 line-clamp-2 h-12 leading-6">
                  {product.title}
                </h3>

                <div className="flex items-center justify-between pt-2 border-t border-gray-50">
                  <span className="text-lg font-bold text-gray-900">
                    {Number(product.price).toLocaleString("fa-IR")}
                    <span className="text-xs font-normal text-gray-500 mr-1">تومان</span>
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
