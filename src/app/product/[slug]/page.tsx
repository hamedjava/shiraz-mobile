// src/app/product/[slug]/page.tsx

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { mockPopularProducts } from "@/core/data/mock-products"; // اضافه شده

// --- استایل فونت وزیرمتن ---
const FontStyle = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@100;300;400;500;700;900&display=swap');
    body { font-family: 'Vazirmatn', sans-serif; }
  `}</style>
);

// --- توابع کمکی ---
const getImageUrl = (coverData: any) => {
  if (!coverData) return null;
  
  // حالت ۱: آدرس ساده (برای محصولات دستی)
  if (typeof coverData === 'string') {
      return coverData;
  }
  
  // حالت ۲: ساختار استرپی
  let url = "";
  if (coverData.url) {
      url = coverData.url;
  } else if (coverData.data?.url) {
      url = coverData.data.url;
  } else if (coverData.data?.attributes?.url) {
      url = coverData.data.attributes.url;
  }
  
  if (!url) return null;
  
  // اگر آدرس نسبی بود، آدرس پایه را اضافه کن
  if (url.startsWith("/")) {
    return `http://127.0.0.1:1337${url}`;
  }
  return url.replace("localhost", "127.0.0.1");
};

// --- تابع اصلی دریافت محصول (اصلاح شده) ---
async function getProduct(slug: string) {
  
  // ۱. اول چک می‌کنیم محصول دستی (Mock) است؟
  const localProduct = mockPopularProducts.find(p => p.attributes.slug === slug);
  if (localProduct) {
    // تبدیل ساختار Mock به ساختاری که کامپوننت انتظار دارد
    return {
      ...localProduct.attributes,
      // در داده‌های ماک ما coverUrl داریم، اینجا آن را به cover تبدیل می‌کنیم
      cover: localProduct.attributes.coverUrl, 
      category: {
        title: localProduct.attributes.category?.title
      },
      // توضیحات پیش‌فرض برای محصولات دستی
      description: "این یک محصول فوق‌العاده با کیفیت عالی و قیمت مناسب است که به صورت آزمایشی در سیستم ثبت شده است." 
    };
  }

  // ۲. اگر دستی نبود، از API می‌گیریم
  try {
    const res = await fetch(
      `http://127.0.0.1:1337/api/products?filters[slug][$eq]=${slug}&populate=*`,
      { cache: "no-store" } 
    );
    if (!res.ok) return null;
    const json = await res.json();
    if (!json.data || json.data.length === 0) return null;
    
    // بازگرداندن attributes محصول استرپی
    return json.data[0].attributes || json.data[0];
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

// --- آیکون‌ها ---
const Icons = {
  Bag: () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>,
  Heart: () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>,
  Shield: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>,
  Truck: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" /></svg>
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductDetailsPage(props: PageProps) {
  const params = await props.params;
  const { slug } = params;
  
  // فراخوانی تابع اصلاح شده
  const productData = await getProduct(slug);

  if (!productData) notFound();

  // استخراج داده‌ها (الان productData یک آبجکت تمیز است)
  const { title, description, price, cover, category } = productData;
  const imageUrl = getImageUrl(cover);
  
  // هندل کردن تایتل دسته بندی برای هر دو حالت
  const categoryTitle = category?.title || category?.data?.attributes?.title || category?.data?.title;

  return (
    <>
      <FontStyle />
      <div className="bg-[#FAFAFA] min-h-screen pb-20 text-slate-700" dir="rtl">
        
        {/* نوار نویگیشن */}
        <nav className="container mx-auto px-4 lg:px-8 py-6 text-sm flex items-center gap-3 text-slate-400 overflow-x-auto">
            <Link href="/" className="hover:text-indigo-600 transition-colors">فروشگاه</Link>
            <span className="text-slate-300">/</span>
            <Link href="/products" className="hover:text-indigo-600 transition-colors">محصولات</Link>
            <span className="text-slate-300">/</span>
            <span className="text-slate-800 font-medium">{title}</span>
        </nav>

        <main className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* گالری تصویر */}
            <div className="lg:col-span-7 bg-white rounded-[2rem] p-8 lg:p-16 relative group">
               <button className="absolute top-6 right-6 p-3 rounded-full bg-gray-50 text-gray-400 hover:bg-red-50 hover:text-red-500 transition-all duration-300">
                 <Icons.Heart />
               </button>

               <div className="relative w-full aspect-square max-w-lg mx-auto">
                {imageUrl ? (
                  <Image
                    src={imageUrl}
                    alt={title || "تصویر محصول"}
                    fill
                    className="object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-500 ease-out"
                    priority
                    unoptimized={true}
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-slate-300 bg-slate-50 rounded-3xl">
                     <span>بدون تصویر</span>
                  </div>
                )}
               </div>
            </div>

            {/* اطلاعات محصول */}
            <div className="lg:col-span-5 flex flex-col gap-8 sticky top-10">
              
              <div>
                 {categoryTitle && (
                    <span className="text-indigo-500 font-bold text-sm tracking-wide mb-2 block">
                        {categoryTitle}
                    </span>
                 )}
                 <h1 className="text-3xl lg:text-4xl font-black text-slate-800 leading-tight mb-4">
                   {title}
                 </h1>
                 <div className="flex items-center gap-4 text-sm text-slate-500">
                    <span className="flex items-center gap-1"><Icons.Shield /> ضمانت اصالت کالا</span>
                    <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                    <span className="flex items-center gap-1"><Icons.Truck /> ارسال رایگان</span>
                 </div>
              </div>

              {/* توضیحات */}
              <div className="text-slate-500 leading-loose text-justify border-t border-slate-100 pt-6">
                  {description || "توضیحاتی برای این محصول ثبت نشده است."}
              </div>

              {/* باکس قیمت و خرید */}
              <div className="mt-auto pt-6">
                  <div className="flex items-end gap-2 mb-6">
                      <span className="text-4xl font-bold text-slate-800 tracking-tight">
                          {price ? Number(price).toLocaleString("fa-IR") : "---"}
                      </span>
                      <span className="text-lg text-slate-400 mb-2 font-medium">تومان</span>
                  </div>

                  <div className="flex gap-4">
                      <button className="flex-1 bg-slate-900 hover:bg-slate-800 text-white text-lg font-bold py-5 px-8 rounded-2xl transition-all shadow-lg shadow-slate-200 hover:shadow-xl flex items-center justify-center gap-3 active:scale-95">
                          افزودن به سبد خرید
                          <Icons.Bag />
                      </button>
                  </div>
                  
                  <p className="mt-4 text-center text-xs text-slate-400">
                    تحویل اکسپرس ۲۴ ساعته در تهران • ۷ روز ضمانت بازگشت
                  </p>
              </div>

            </div>
          </div>
        </main>
      </div>
    </>
  );
}
