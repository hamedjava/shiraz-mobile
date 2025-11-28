"use client";

import React from "react";
import Link from "next/link";
import { ShoppingBag, Heart, Star } from "lucide-react";

// 1. تعریف اینترفیس محصول (قابل استفاده در جاهای دیگر)
export interface Product {
  id: number;
  title: string;
  model: string;
  price: string;
  image?: string;
  isNew?: boolean;
}

// 2. تغییر ورودی کامپوننت برای دریافت یک آبجکت واحد 'product'
interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link
      href={`/products/${product.id}`}
      className="group block relative w-full h-full select-none" // select-none برای تجربه بهتر هنگام درگ کردن
    >
      {/* --- بخش تصویر (Image Area) --- */}
      <div className="relative w-full aspect-[4/5] bg-gray-50 rounded-[2rem] overflow-hidden mb-5 border border-transparent group-hover:border-gray-200 transition-all duration-500">
        
        {/* بج جدید */}
        {product.isNew && (
          <span className="absolute top-4 right-4 bg-black text-white text-[10px] font-black tracking-wider px-3 py-1.5 rounded-full z-10 shadow-lg shadow-black/20">
            NEW
          </span>
        )}

        {/* دکمه لایک */}
        <button
          onClick={(e) => {
            e.preventDefault(); // جلوگیری از رفتن به لینک هنگام کلیک روی قلب
            console.log("Like Clicked for", product.id);
          }}
          className="absolute top-4 left-4 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-400 hover:text-red-500 hover:bg-white transition-all duration-300 z-10 translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 shadow-sm"
        >
          <Heart size={18} strokeWidth={2.5} />
        </button>

        {/* تصویر محصول */}
        <div className="w-full h-full flex items-center justify-center p-8">
          <div className="w-full h-full bg-gray-200 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-700 ease-out overflow-hidden">
             {/* فعلاً آیکون نگهدارنده (بعداً <Image src={product.image} ... /> جایگزین شود) */}
             {product.image && product.image !== "/placeholder.png" ? (
                // اگر عکس واقعی داشتیم (این بخش برای آینده است)
                <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
             ) : (
                <ShoppingBag className="text-gray-300 w-16 h-16" />
             )}
          </div>
        </div>

        {/* دکمه افزودن (ظاهر شدن از پایین) */}
        <div className="absolute bottom-4 left-0 w-full px-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-20">
            <button 
                onClick={(e) => {
                    e.preventDefault();
                    console.log("Add to cart", product.id);
                }}
                className="w-full py-3.5 bg-gray-900 text-white rounded-xl font-bold text-sm shadow-xl hover:bg-yellow-500 hover:text-black transition-colors flex items-center justify-center gap-2"
            >
                افزودن به سبد
            </button>
        </div>
      </div>

      {/* --- بازطراحی بخش توضیحات (Info Area) --- */}
      <div className="px-2">
        {/* تایتل و مدل */}
        <div className="mb-3">
          <h3 className="text-gray-900 font-black text-lg leading-tight mb-1.5 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {product.title}
          </h3>
          <p className="text-gray-400 text-xs font-medium flex items-center gap-1">
            {product.model}
          </p>
        </div>

        {/* قیمت و امتیاز */}
        <div className="flex items-end justify-between border-t border-gray-100 pt-3 mt-2">
          
          {/* قیمت با استایل جدید */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-1">
                <span className="text-gray-900 font-black text-xl tracking-tight">
                {product.price}
                </span>
                <span className="text-[11px] font-bold text-gray-500 -mb-1">تومان</span>
            </div>
          </div>

            {/* امتیاز فیک برای زیبایی (اختیاری) */}
           <div className="flex items-center gap-1 text-yellow-500 bg-yellow-50 px-2 py-1 rounded-lg">
                <span className="text-xs font-bold text-yellow-700 mt-0.5">4.8</span>
                <Star size={12} fill="currentColor" />
           </div>
        </div>
      </div>
    </Link>
  );
};
