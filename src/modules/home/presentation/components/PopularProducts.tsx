"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { ShoppingBag, ArrowLeft, Star } from "lucide-react";

const PRODUCTS = [
  {
    id: 1,
    title: "هدفون بی‌سیم سونی",
    model: "WH-1000XM5 - Noise Canceling",
    price: "۱۲,۵۰۰,۰۰۰",
    rate: 4.8,
    image: "/placeholder.png",
    isNew: true,
  },
  {
    id: 2,
    title: "اپل واچ سری ۹",
    model: "Aluminum 45mm - GPS",
    price: "۱۸,۲۰۰,۰۰۰",
    rate: 4.9,
    image: "/placeholder.png",
    isNew: false,
  },
  {
    id: 3,
    title: "سامسونگ گلکسی S24",
    model: "Ultra 5G - 256GB Storage",
    price: "۶۵,۰۰۰,۰۰۰",
    rate: 4.7,
    image: "/placeholder.png",
    isNew: true,
  },
  {
    id: 4,
    title: "ایرپاد پرو ۲",
    model: "Type-C Charging Case",
    price: "۹,۸۰۰,۰۰۰",
    rate: 4.6,
    image: "/placeholder.png",
    isNew: false,
  },
  {
    id: 5,
    title: "پلی‌استیشن ۵ اسلیم",
    model: "Digital Edition - 1TB",
    price: "۲۶,۵۰۰,۰۰۰",
    rate: 5.0,
    image: "/placeholder.png",
    isNew: true,
  },
];

export const PopularProducts = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // --- Drag Logic ---
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };
  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="w-full py-20 bg-[#FDFDFD] relative overflow-hidden select-none">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* --- Header --- */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-6">
            <div className="flex items-start gap-4">
                {/* نوار عمودی زرد */}
                <div className="w-1.5 h-16 bg-[#FFD700] rounded-full mt-1 shadow-[0_0_15px_rgba(255,215,0,0.4)]"></div>
                
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 rounded-full bg-[#FFD700]/10 text-[#bfa200] text-xs font-bold border border-[#FFD700]/20">
                            محصولات منتخب هفته
                        </span>
                    </div>
                    {/* تیتر اصلی: خاکستری متوسط (Gray-600) */}
                    <h2 className="text-3xl lg:text-4xl font-black text-gray-600 tracking-tight">
                        محبوب‌ترین‌ها
                    </h2>
                </div>
            </div>

            {/* دکمه مشاهده همه */}
            <Link href="/products" className="text-sm font-bold text-gray-400 hover:text-gray-600 transition-colors flex items-center gap-2 group">
                مشاهده همه
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-[#FFD700] group-hover:text-white transition-all duration-300">
                     <ArrowLeft size={16} />
                </div>
            </Link>
        </div>

        {/* --- Slider --- */}
        <div 
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className={`
              flex gap-6 overflow-x-auto pb-16 -mx-4 px-4 lg:mx-0 lg:px-0
              scrollbar-hide cursor-grab active:cursor-grabbing pt-2
            `}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {PRODUCTS.map((product) => (
            <div key={product.id} className="flex-shrink-0 w-[280px]">
              <Link 
                href={`/products/${product.id}`}
                draggable={false}
                className="group block bg-white rounded-[24px] p-3 border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:shadow-gray-200 hover:-translate-y-1 relative h-full"
              >
                {/* Image Area */}
                <div className="relative w-full aspect-square bg-gray-50 rounded-2xl overflow-hidden mb-4">
                    {/* New Badge */}
                    {product.isNew && (
                        <span className="absolute top-3 right-3 bg-[#FFD700] text-white text-[10px] font-black px-3 py-1 rounded-full z-10 shadow-sm">
                            NEW
                        </span>
                    )}
                    
                    <div className="w-full h-full flex items-center justify-center p-6 group-hover:scale-105 transition-transform duration-500">
                         <ShoppingBag className="text-gray-300 w-24 h-24" />
                    </div>
                </div>

                {/* Content */}
                <div className="px-2 pb-2">
                    <div className="flex items-center gap-1 mb-2">
                        <Star size={12} className="fill-[#FFD700] text-[#FFD700]" />
                        <span className="text-xs font-bold text-gray-400">{product.rate}</span>
                    </div>

                    {/* Title: خاکستری متوسط (Gray-600) که در هاور کمی تیره میشود (Gray-800) اما سیاه نه */}
                    <h3 className="text-gray-600 font-bold text-base leading-snug mb-1 line-clamp-1 group-hover:text-gray-800 transition-colors">
                        {product.title}
                    </h3>
                    <p className="text-gray-400 text-xs mb-4 line-clamp-1">
                        {product.model}
                    </p>

                    {/* Price Area */}
                    <div className="flex items-center justify-between mt-4 border-t border-dashed border-gray-100 pt-3">
                        <div className="flex flex-col">
                            <span className="text-[10px] text-gray-400 font-medium">قیمت نهایی:</span>
                            <div className="flex items-center gap-1">
                                {/* Price: خاکستری تیره نرم (Gray-700) */}
                                <span className="text-gray-700 font-black text-lg">
                                    {product.price}
                                </span>
                                <span className="text-[10px] text-gray-400 font-bold">تومان</span>
                            </div>
                        </div>

                        {/* Add Button: خاکستری تیره نرم (Gray-700) */}
                        <button className="w-10 h-10 rounded-xl bg-gray-700 text-white flex items-center justify-center group-hover:bg-[#FFD700] group-hover:text-white transition-all duration-300 shadow-lg shadow-gray-200">
                            <ShoppingBag size={18} />
                        </button>
                    </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
