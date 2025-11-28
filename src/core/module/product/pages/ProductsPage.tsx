"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  LayoutGrid, 
  List, 
  ChevronDown,
  SortAsc
} from "lucide-react";

// --- IMPORTS ---
import { ProductCard } from "@/core/components/product/ProductCard";
import { ProductFilters } from "@/modules/product/presentation/components/ProductFilters"; 

// --- MOCK DATA ---
const PRODUCTS = Array.from({ length: 8 }).map((_, i) => ({
  id: i + 1,
  title: i % 2 === 0 ? "گوشی موبایل سامسونگ Galaxy S24 Ultra" : "هدفون بی‌سیم سونی مدل WH-1000XM5",
  model: i % 2 === 0 ? "256GB - ویتنام" : "Noise Cancelling",
  price: i % 2 === 0 ? "۶۵,۵۰۰,۰۰۰" : "۱۲,۵۰۰,۰۰۰",
  image: "/placeholder.png",
  isNew: i < 3,
}));

export default function ProductsPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [activeSort, setActiveSort] = useState(1); // 0: Most Viewed, 1: Newest, etc.

  const sortOptions = ['پربازدیدترین', 'جدیدترین', 'ارزان‌ترین', 'گران‌ترین'];

  return (
    <div className="min-h-screen bg-slate-50/50">
      
      {/* --- HEADER SECTION --- */}
      <div className="bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 pt-8 pb-10">
          <div className="flex flex-col gap-3">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-slate-400 font-medium mb-2">
              <Link href="/" className="hover:text-slate-900 transition-colors">خانه</Link>
              <span className="text-slate-300">/</span>
              <span className="text-slate-800">محصولات</span>
            </div>
            
            {/* Title & Description */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h1 className="text-3xl font-black text-slate-900 tracking-tight mb-2">
                  فروشگاه محصولات
                </h1>
                <p className="text-slate-500 text-sm max-w-xl leading-relaxed">
                  بررسی، مقایسه و خرید آنلاین جدیدترین محصولات دیجیتال با ضمانت اصالت کالا.
                </p>
              </div>
              <div className="hidden md:block text-right">
                <span className="text-2xl font-bold text-slate-900">۱۲۴</span>
                <span className="text-sm text-slate-500 mr-2">کالا موجود است</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- CONTENT SECTION --- */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative">
          
          {/* 
            ========================================
            SIDEBAR FILTERS (DESKTOP ONLY)
            ========================================
            - hidden lg:block: فقط در سایز بزرگ نمایش داده می‌شود.
            - sticky top-4: وقتی اسکرول می‌شود، فیلتر بالا می‌چسبد.
          */}
          <aside className="hidden lg:block lg:col-span-3 h-fit sticky top-4 z-10">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-slate-100">
                <div className="w-1 h-5 bg-yellow-400 rounded-full"></div>
                <h3 className="font-bold text-slate-800 text-lg">فیلترها</h3>
              </div>
              
              {/* فراخوانی کامپوننت فیلترها */}
              <ProductFilters />
              
            </div>
          </aside>


          {/* 
            ========================================
            MAIN CONTENT (GRID / LIST)
            ========================================
          */}
          <main className="lg:col-span-9">
            
            {/* Toolbar */}
            <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-sm mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              
              {/* Sort Tabs */}
              <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0 scrollbar-hide px-1">
                <div className="flex items-center gap-2 text-slate-400 px-2 border-l border-slate-100 ml-2">
                  <SortAsc size={18} />
                  <span className="text-sm font-bold hidden sm:inline">مرتب‌سازی:</span>
                </div>
                {sortOptions.map((sort, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => setActiveSort(idx)}
                    className={`whitespace-nowrap px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                      activeSort === idx
                      ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/20' 
                      : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    {sort}
                  </button>
                ))}
              </div>

              {/* View Switcher */}
              <div className="hidden sm:flex bg-slate-100 p-1 rounded-xl">
                <button 
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-lg transition-all duration-200 ${viewMode === 'grid' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
                >
                  <LayoutGrid size={18} />
                </button>
                <button 
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-lg transition-all duration-200 ${viewMode === 'list' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
                >
                  <List size={18} />
                </button>
              </div>
            </div>

            {/* Products Grid */}
            <div className={
              viewMode === "grid" 
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                : "flex flex-col gap-4"
            }>
              {PRODUCTS.map((product) => (
                <div key={product.id} className={`transition-opacity duration-500 animate-in fade-in slide-in-from-bottom-4 ${viewMode === 'list' ? 'w-full' : ''}`}>
                   <ProductCard product={product} /> 
                </div>
              ))}
            </div>

            {/* Pagination Styled */}
            <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col items-center justify-center gap-6">
              <div className="flex flex-col items-center gap-2">
                <span className="text-slate-400 text-xs font-medium">
                  نمایش ۸ از ۱۲۴ محصول
                </span>
                <div className="w-48 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className="w-1/4 h-full bg-yellow-400 rounded-full"></div>
                </div>
              </div>
              
              <button className="group relative px-8 py-3 bg-white border border-slate-200 rounded-xl text-slate-600 font-bold hover:border-slate-300 hover:shadow-md transition-all flex items-center gap-3 overflow-hidden">
                <span className="relative z-10">مشاهده محصولات بیشتر</span>
                <ChevronDown size={18} className="relative z-10 group-hover:translate-y-0.5 transition-transform" />
                <div className="absolute inset-0 bg-slate-50 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </button>
            </div>

          </main>
        </div>
      </div>
    </div>
  );
}
