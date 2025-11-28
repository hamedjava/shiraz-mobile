"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Logo } from "@/core/components/ui/Logo"; // مطمئن شو مسیر لوگو درسته
import { 
  Search, 
  ShoppingBag, 
  User, 
  LayoutGrid, 
  Heart, 
  ChevronLeft,
  Smartphone,
  Laptop,
  Watch,
  Headphones,
  Camera
} from "lucide-react";

// --- داده‌های نمونه برای منو ---
const MENU_ITEMS = [
  {
    id: 1,
    title: "موبایل",
    icon: <Smartphone size={20} />,
    brands: ["سامسونگ", "اپل", "شیائومی", "هواوی", "نوکیا"],
    featured: "سری S24 سامسونگ"
  },
  {
    id: 2,
    title: "لپ‌تاپ",
    icon: <Laptop size={20} />,
    brands: ["مک‌بوک", "ایسوس", "لنوو", "HP", "MSI"],
    featured: "لپ‌تاپ‌های گیمینگ"
  },
  {
    id: 3,
    title: "ساعت هوشمند",
    icon: <Watch size={20} />,
    brands: ["اپل واچ", "گلکسی واچ", "شیائومی", "گارمین"],
    featured: "بند و لوازم جانبی"
  },
  {
    id: 4,
    title: "هدفون و هندزفری",
    icon: <Headphones size={20} />,
    brands: ["ایرپاد", "گلکسی بادز", "QCY", "سونی"],
    featured: "هدفون‌های نویز کنسلینگ"
  },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
        setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`
          sticky top-0 z-50 bg-white/90 backdrop-blur-xl
          transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
          ${isScrolled ? 'shadow-lg shadow-gray-200/40 py-3' : 'py-5 border-b border-gray-100'}
      `}
    >
      <div className="container mx-auto px-4 lg:px-8 flex items-center gap-4 lg:gap-8 justify-between">
        
        {/* 1. Right Section: Logo & Category (With MEGA MENU) */}
        <div className="flex items-center gap-4 lg:gap-6 shrink-0">
            
            {/* LOGO */}
            <Link href="/" className="group relative z-50">
               <div className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-105">
                   <Logo />
               </div>
               <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-1 bg-brand-yellow/50 blur-sm rounded-full group-hover:w-3/4 transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
            </Link>

            {/* CATEGORIES BUTTON & MEGA MENU WRAPPER */}
            <div className="relative group">
              {/* Button */}
              <button className="flex items-center gap-2 px-4 lg:px-5 py-2.5 bg-gray-50 rounded-full text-gray-700 font-bold text-sm transition-all duration-300 border border-transparent group-hover:border-brand-yellow/30 group-hover:bg-brand-yellow/5 relative z-20">
                  <LayoutGrid size={18} className="transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:rotate-180 text-gray-500 group-hover:text-brand-yellow" />
                  <span className="transition-transform duration-300 group-hover:translate-x-1">دسته‌بندی‌ها</span>
              </button>

              {/* --- THE MEGA MENU (Design Magic Here) --- */}
              <div className="absolute top-full right-0 pt-4 w-[800px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out translate-y-4 group-hover:translate-y-0 z-10 pointer-events-none group-hover:pointer-events-auto">
                <div className="bg-white rounded-3xl shadow-2xl shadow-gray-200/50 border border-gray-100 overflow-hidden flex p-2">
                  
                  {/* Sidebar of Menu */}
                  <div className="w-1/3 bg-gray-50/50 rounded-2xl p-4 flex flex-col gap-2">
                    {MENU_ITEMS.map((item) => (
                       <div key={item.id} className="flex items-center justify-between p-3 rounded-xl hover:bg-white hover:shadow-sm hover:shadow-gray-100 cursor-pointer transition-all group/item text-gray-600 hover:text-gray-900">
                          <div className="flex items-center gap-3">
                            <span className="text-gray-400 group-hover/item:text-brand-yellow transition-colors">{item.icon}</span>
                            <span className="font-bold text-sm">{item.title}</span>
                          </div>
                          <ChevronLeft size={14} className="text-gray-300 group-hover/item:-translate-x-1 transition-transform" />
                       </div>
                    ))}
                    <div className="mt-auto p-3 rounded-xl bg-brand-yellow/10 border border-brand-yellow/20">
                       <p className="text-xs font-bold text-brand-yellow mb-1">پیشنهاد ویژه</p>
                       <p className="text-[10px] text-gray-600">فروش ویژه محصولات شیائومی با گارانتی طلایی</p>
                    </div>
                  </div>

                  {/* Content of Menu */}
                  <div className="w-2/3 p-6 grid grid-cols-2 gap-6 content-start">
                      <div>
                         <h4 className="font-black text-gray-800 mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow"></span>
                            محبوب‌ترین برندها
                         </h4>
                         <ul className="space-y-2.5 border-r-2 border-gray-100 pr-4">
                            {['سامسونگ', 'اپل (آیفون)', 'شیائومی', 'هواوی', 'آنر'].map((brand, idx) => (
                              <li key={idx}>
                                <Link href="#" className="text-sm text-gray-500 hover:text-brand-yellow hover:font-bold transition-all flex items-center gap-2 group/link">
                                  <span className="w-1 h-1 rounded-full bg-gray-300 group-hover/link:bg-brand-yellow transition-colors"></span>
                                  {brand}
                                </Link>
                              </li>
                            ))}
                         </ul>
                      </div>
                      
                      <div>
                         <h4 className="font-black text-gray-800 mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow"></span>
                            دسترسی سریع
                         </h4>
                         <div className="space-y-3">
                           <div className="bg-gray-50 rounded-xl p-3 hover:bg-gray-100 transition-colors cursor-pointer">
                              <span className="text-xs font-bold text-gray-800 block mb-1">گوشی‌های پرچمدار</span>
                              <span className="text-[10px] text-gray-400">S24 Ultra, iPhone 15 Pro...</span>
                           </div>
                           <div className="bg-gray-50 rounded-xl p-3 hover:bg-gray-100 transition-colors cursor-pointer">
                              <span className="text-xs font-bold text-gray-800 block mb-1">گوشی‌های اقتصادی</span>
                              <span className="text-[10px] text-gray-400">زیر ۱۰ میلیون تومان</span>
                           </div>
                         </div>
                      </div>
                  </div>

                </div>
              </div>
              {/* --- END MEGA MENU --- */}
              
            </div>
        </div>

        {/* 2. Center Section: Search Bar */}
        <div className={`hidden md:flex flex-1 max-w-xl mx-auto transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isSearchFocused ? 'scale-105 max-w-2xl' : ''}`}>
          <div 
              className={`
                  relative w-full flex items-center rounded-2xl overflow-hidden border-2
                  transition-all duration-300
                  ${isSearchFocused 
                      ? 'bg-white border-brand-yellow shadow-[0_0_0_4px_rgba(255,193,7,0.15)]' 
                      : 'bg-gray-50 border-transparent hover:bg-gray-100'
                  }
              `}
          >
              <input 
                  type="text" 
                  placeholder="جستجو در میان محصولات..." 
                  className="w-full h-12 pr-5 pl-12 bg-transparent outline-none text-gray-700 placeholder:text-gray-400 text-sm font-medium"
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
              />
              <button className={`absolute left-2 p-2 rounded-xl transition-all duration-300 ${isSearchFocused ? 'bg-brand-yellow text-white rotate-90' : 'text-gray-400 hover:text-gray-600'}`}>
                  <Search size={20} />
              </button>
          </div>
        </div>

        {/* 3. Left Section: Action Buttons */}
        <div className="flex items-center gap-2 lg:gap-3">
          <Link href="/auth/login" className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-gray-700 hover:text-gray-900 transition-colors relative group overflow-hidden">
              <span className="relative z-10">ورود | ثبت‌نام</span>
              <User size={18} className="relative z-10" />
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-200 group-hover:bg-brand-yellow transition-colors duration-300"></span>
          </Link>

          <Link href="/wishlist" className="flex items-center justify-center w-11 h-11 rounded-2xl bg-white border border-gray-100 text-gray-400 hover:text-red-500 hover:border-red-100 hover:bg-red-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-red-100">
              <Heart size={22} />
          </Link>

          <Link href="/cart" className="group relative flex items-center justify-center w-12 h-12 rounded-2xl bg-gray-50 border-2 border-transparent hover:border-brand-yellow transition-all duration-300">
              <div className="absolute inset-0 rounded-2xl bg-brand-yellow opacity-0 scale-50 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"></div>
              <ShoppingBag size={22} className="text-gray-700 relative z-10 transition-colors duration-300 group-hover:text-white" />
              <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-brand-yellow text-white text-[10px] font-bold ring-2 ring-white group-hover:ring-brand-yellow group-hover:bg-white group-hover:text-brand-yellow transition-all duration-300 shadow-sm">
                  2
              </span>
          </Link>
        </div>

      </div>
    </header>
  );
};
