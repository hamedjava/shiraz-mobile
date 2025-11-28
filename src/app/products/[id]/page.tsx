"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Filter, 
  LayoutGrid, 
  List, 
  ChevronDown, 
  SlidersHorizontal
} from "lucide-react";

// ایمپورت کامپوننت‌های جداگانه برای تمیزی کد
import { ProductCard } from "@/core/components/product/ProductCard";
import { ProductFilters } from "@/modules/product/presentation/components/ProductFilters"; 

// --- MOCK DATA (اصلاح شده با اضافه شدن تصویر) ---
const PRODUCTS = Array.from({ length: 8 }).map((_, i) => ({
  id: i + 1,
  title: i % 2 === 0 ? "گوشی موبایل سامسونگ Galaxy S24 Ultra" : "هدفون بی‌سیم سونی مدل WH-1000XM5",
  model: i % 2 === 0 ? "256GB - ویتنام" : "Noise Cancelling",
  price: i % 2 === 0 ? "۶۵,۵۰۰,۰۰۰" : "۱۲,۵۰۰,۰۰۰",
  image: "/placeholder.png", // اضافه شد تا کارت بدون عکس نماند
  isNew: i < 3,
}));

export default function ProductsPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false); // برای مدیریت فیلتر موبایل

  return (
    <div className="min-h-screen bg-[#F8F9FA] pb-20">
      
      {/* --- HEADER SECTION --- */}
      <div className="bg-white border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4 py-8 md:py-10">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
              <Link href="/" className="hover:text-slate-800 transition-colors">خانه</Link>
              <span>/</span>
              <span className="text-slate-800 font-bold">محصولات</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              فروشگاه محصولات
            </h1>
            <p className="text-slate-500 text-sm max-w-2xl leading-relaxed">
              جدیدترین محصولات دیجیتال را با بهترین قیمت بررسی و مقایسه کنید. تضمین اصالت و بهترین قیمت بازار.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* --- SIDEBAR FILTERS --- */}
          {/* در دسکتاپ ۳ ستون را می‌گیرد و در موبایل مخفی است (یا می‌توان مودال باز کرد) */}
          <aside className="hidden lg:block lg:col-span-3">
            <ProductFilters />
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="lg:col-span-9">
            
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sticky top-4 z-30 bg-white/80 backdrop-blur-md p-3 rounded-2xl border border-white/50 shadow-sm ring-1 ring-slate-900/5">
              
              {/* Mobile Filter Trigger */}
              <button 
                onClick={() => setIsMobileFilterOpen(true)}
                className="lg:hidden flex items-center justify-center gap-2 text-white font-bold text-sm bg-slate-900 px-4 py-3 rounded-xl w-full sm:w-auto hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20"
              >
                <SlidersHorizontal size={18} />
                فیلتر پیشرفته
              </button>

              {/* Sort Options */}
              <div className="flex items-center gap-2 text-sm text-slate-500 overflow-x-auto pb-1 sm:pb-0 scrollbar-hide w-full sm:w-auto px-2 sm:px-0">
                <span className="whitespace-nowrap font-bold text-slate-700 hidden sm:inline">مرتب‌سازی:</span>
                {['پربازدیدترین', 'جدیدترین', 'ارزان‌ترین', 'گران‌ترین'].map((sort, idx) => (
                  <button 
                    key={idx} 
                    className={`whitespace-nowrap px-3 py-1.5 rounded-lg transition-all text-xs sm:text-sm ${
                      idx === 1 
                      ? 'bg-yellow-500 text-white font-bold shadow-md shadow-yellow-500/30' 
                      : 'hover:bg-slate-100 text-slate-600 font-medium'
                    }`}
                  >
                    {sort}
                  </button>
                ))}
              </div>

              {/* View Toggle (Desktop) */}
              <div className="hidden sm:flex items-center gap-1 bg-slate-100 p-1 rounded-xl ml-auto sm:ml-0">
                <button 
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
                  title="نمایش شبکه‌ای"
                >
                  <LayoutGrid size={18} />
                </button>
                <button 
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-lg transition-all ${viewMode === 'list' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
                  title="نمایش لیستی"
                >
                  <List size={18} />
                </button>
              </div>
            </div>

            {/* Products Grid / List Logic */}
            <div className={
              viewMode === "grid" 
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                : "flex flex-col gap-4" // حالت لیستی
            }>
              {PRODUCTS.map((product) => (
                <div key={product.id} className={viewMode === 'list' ? 'w-full' : ''}>
                   {/* در حالت لیست، می‌توانیم استایل متفاوتی به کارت بدهیم یا همان کارت را استفاده کنیم */}
                   <ProductCard product={product} /> 
                </div>
              ))}
            </div>

            {/* Pagination / Load More */}
            <div className="mt-16 flex flex-col items-center gap-4">
              <span className="text-slate-400 text-xs font-medium">
                نمایش ۸ از ۱۲۴ محصول
              </span>
              <div className="w-64 h-1 bg-slate-100 rounded-full overflow-hidden">
                  <div className="w-8 h-full bg-yellow-500 rounded-full"></div>
              </div>
              <button className="px-8 py-3 mt-2 rounded-xl border-2 border-slate-200 text-slate-600 font-bold hover:border-yellow-500 hover:text-slate-900 transition-all flex items-center gap-2 group">
                مشاهده محصولات بیشتر
                <ChevronDown size={18} className="group-hover:translate-y-1 transition-transform" />
              </button>
            </div>

          </main>
        </div>
      </div>
    </div>
  );
}
