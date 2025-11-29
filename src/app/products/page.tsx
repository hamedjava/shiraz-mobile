// src/app/products/page.tsx

import React from "react";
import Image from "next/image";
import Link from "next/link";

// --- استایل فونت (برای اطمینان از لود شدن در این صفحه) ---
const FontStyle = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@100;300;400;500;700;900&display=swap');
    body { font-family: 'Vazirmatn', sans-serif; }
  `}</style>
);

// --- تابع کمکی تصویر ---
const getImageUrl = (coverData: any) => {
  if (!coverData) return null;
  let url = "";
  if (typeof coverData === 'string') {
      url = coverData;
  } else if (coverData.url) {
      url = coverData.url;
  } else if (coverData.data?.url) {
      url = coverData.data.url;
  } else if (coverData.data?.attributes?.url) {
      url = coverData.data.attributes.url;
  }
  if (!url) return null;
  if (url.startsWith("/")) {
    return `http://127.0.0.1:1337${url}`;
  }
  return url.replace("localhost", "127.0.0.1");
};

// --- فچ کردن همه محصولات ---
async function getAllProducts() {
  try {
    // درخواست برای گرفتن همه محصولات جدیدتر
    const res = await fetch(
      "http://127.0.0.1:1337/api/products?populate=*&sort[0]=createdAt:desc", 
      { cache: "no-store" }
    );
    if (!res.ok) throw new Error("Failed to fetch products");
    const json = await res.json();
    return json.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function ProductsPage() {
  const products = await getAllProducts();

  return (
    <>
      <FontStyle />
      <div className="bg-[#FAFAFA] min-h-screen pb-20 text-slate-700" dir="rtl">
        
        {/* هدر صفحه */}
        <div className="bg-white border-b border-slate-100 shadow-sm mb-10">
            <div className="container mx-auto px-4 lg:px-8 py-8">
                <h1 className="text-3xl font-black text-slate-800 mb-2">همه محصولات</h1>
                <p className="text-slate-500 text-sm">بهترین محصولات دیجیتال با ضمانت اصالت</p>
            </div>
        </div>

        <main className="container mx-auto px-4 lg:px-8">
          
          {products.length === 0 ? (
            <div className="text-center py-20 text-slate-400">
              <p>محصولی یافت نشد.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
              {products.map((product: any) => {
                const data = product.attributes || product;
                const { title, price, cover, slug, category } = data;
                const imageUrl = getImageUrl(cover);
                const categoryTitle = category?.data?.attributes?.title || category?.title;

                return (
                  <Link 
                    href={`/product/${slug}`} 
                    key={product.id}
                    className="group bg-white rounded-3xl p-4 border border-transparent hover:border-slate-100 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-300 flex flex-col"
                  >
                    {/* بخش تصویر */}
                    <div className="relative aspect-square mb-6 bg-slate-50 rounded-2xl overflow-hidden flex items-center justify-center">
                        {imageUrl ? (
                            <Image
                            src={imageUrl}
                            alt={title}
                            fill
                            className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                            unoptimized={true}
                            />
                        ) : (
                            <span className="text-slate-300 text-xs">بدون تصویر</span>
                        )}
                    </div>

                    {/* اطلاعات کارت */}
                    <div className="flex flex-col flex-grow">
                        {categoryTitle && (
                            <span className="text-xs text-indigo-500 font-bold mb-2 block">
                                {categoryTitle}
                            </span>
                        )}
                        <h2 className="text-lg font-bold text-slate-800 mb-1 leading-snug group-hover:text-indigo-700 transition-colors">
                            {title}
                        </h2>
                        
                        {/* قیمت و دکمه */}
                        <div className="mt-auto pt-4 flex items-center justify-between border-t border-slate-50">
                            <div className="flex flex-col">
                                <span className="text-slate-400 text-[10px]">قیمت:</span>
                                <span className="font-bold text-slate-900">
                                    {price ? Number(price).toLocaleString("fa-IR") : "---"} 
                                    <span className="text-xs font-normal text-slate-400 mr-1">تومان</span>
                                </span>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </div>
                        </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}

        </main>
      </div>
    </>
  );
}
