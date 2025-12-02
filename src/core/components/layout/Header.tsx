"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Logo } from "@/core/components/ui/Logo";
import { 
  Search, 
  ShoppingBag, 
  User, 
  Menu as MenuIcon, // برای آیکون همبرگری
  X, // برای آیکون بستن
  LayoutGrid, 
  Heart, 
  ChevronLeft,
  Smartphone,
  Laptop,
  Watch,
  Headphones
} from "lucide-react";

// --- داده‌های نمونه برای مگامنو ---
// این داده‌ها فعلاً استاتیک هستند و بعداً می‌توانند از API گرفته شوند.
const MENU_ITEMS = [
  { id: 1, title: "موبایل", icon: <Smartphone size={20} />, slug: "/products?category=mobile" },
  { id: 2, title: "لپ‌تاپ", icon: <Laptop size={20} />, slug: "/products?category=laptop" },
  { id: 3, title: "ساعت هوشمند", icon: <Watch size={20} />, slug: "/products?category=smartwatch" },
  { id: 4, title: "هدفون", icon: <Headphones size={20} />, slug: "/products?category=headphones" },
];

const BRAND_LINKS = [
  { name: 'سامسونگ', slug: '/products?brand=samsung' },
  { name: 'اپل (آیفون)', slug: '/products?brand=apple' },
  { name: 'شیائومی', slug: '/products?brand=xiaomi' },
  { name: 'هواوی', slug: '/products?brand=huawei' },
  { name: 'آنر', slug: '/products?brand=honor' },
];

// کامپوننت جدید: دکمه‌های اکشن (سبد خرید، کاربر و ...)
const ActionButtons = () => (
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
        0
      </span>
    </Link>
  </div>
);

// کامپوننت جدید: باکس جستجو
const SearchBar = () => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className={`hidden lg:flex flex-1 max-w-xl mx-auto transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isFocused ? 'scale-105 max-w-2xl' : ''}`}>
      <div className={`relative w-full flex items-center rounded-2xl overflow-hidden border-2 transition-all duration-300 ${isFocused ? 'bg-white border-brand-yellow shadow-[0_0_0_4px_rgba(255,193,7,0.15)]' : 'bg-gray-50 border-transparent hover:bg-gray-100'}`}>
        <input 
          type="text" 
          placeholder="جستجو در میان محصولات..." 
          className="w-full h-12 pr-5 pl-12 bg-transparent outline-none text-gray-700 placeholder:text-gray-400 text-sm font-medium"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <button className={`absolute left-2 p-2 rounded-xl transition-all duration-300 ${isFocused ? 'bg-brand-yellow text-white rotate-90' : 'text-gray-400 hover:text-gray-600'}`}>
          <Search size={20} />
        </button>
      </div>
    </div>
  );
};

// کامپوننت جدید: مگا منو برای دسکتاپ
const MegaMenu = () => (
  <div className="relative group hidden lg:block">
    <Link href="/products" className="flex items-center gap-2 px-4 lg:px-5 py-2.5 bg-gray-50 rounded-full text-gray-700 font-bold text-sm transition-all duration-300 border border-transparent group-hover:border-brand-yellow/30 group-hover:bg-brand-yellow/5 relative z-20">
      <LayoutGrid size={18} className="transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:rotate-180 text-gray-500 group-hover:text-brand-yellow" />
      <span className="transition-transform duration-300 group-hover:translate-x-1">دسته‌بندی‌ها</span>
    </Link>
    {/* --- THE MEGA MENU --- */}
    <div className="absolute top-full right-0 pt-4 w-[800px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out translate-y-4 group-hover:translate-y-0 z-10 pointer-events-none group-hover:pointer-events-auto">
      <div className="bg-white rounded-3xl shadow-2xl shadow-gray-200/50 border border-gray-100 overflow-hidden flex p-2">
        {/* Sidebar of Menu */}
        <div className="w-1/3 bg-gray-50/50 rounded-2xl p-4 flex flex-col gap-2">
          {MENU_ITEMS.map((item) => (
             <Link href={item.slug} key={item.id} className="flex items-center justify-between p-3 rounded-xl hover:bg-white hover:shadow-sm hover:shadow-gray-100 cursor-pointer transition-all group/item text-gray-600 hover:text-gray-900">
                <div className="flex items-center gap-3">
                  <span className="text-gray-400 group-hover/item:text-brand-yellow transition-colors">{item.icon}</span>
                  <span className="font-bold text-sm">{item.title}</span>
                </div>
                <ChevronLeft size={14} className="text-gray-300 group-hover/item:-translate-x-1 transition-transform" />
             </Link>
          ))}
          <div className="mt-auto p-3 rounded-xl bg-brand-yellow/10 border border-brand-yellow/20">
             <p className="text-xs font-bold text-brand-yellow mb-1">پیشنهاد ویژه</p>
             <p className="text-[10px] text-gray-600">فروش ویژه محصولات شیائومی با گارانتی طلایی</p>
          </div>
        </div>
        {/* Content of Menu */}
        <div className="w-2/3 p-6 grid grid-cols-2 gap-6 content-start">
            <div>
               <h4 className="font-black text-gray-800 mb-4 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-yellow"></span>محبوب‌ترین برندها</h4>
               <ul className="space-y-2.5 border-r-2 border-gray-100 pr-4">
                  {BRAND_LINKS.map((brand, idx) => (
                    <li key={idx}>
                      <Link href={brand.slug} className="text-sm text-gray-500 hover:text-brand-yellow hover:font-bold transition-all flex items-center gap-2 group/link">
                        <span className="w-1 h-1 rounded-full bg-gray-300 group-hover/link:bg-brand-yellow transition-colors"></span>
                        {brand.name}
                      </Link>
                    </li>
                  ))}
               </ul>
            </div>
            <div>
               <h4 className="font-black text-gray-800 mb-4 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-yellow"></span>دسترسی سریع</h4>
               <div className="space-y-3">
                 <Link href="/products?tag=flagship" className="block bg-gray-50 rounded-xl p-3 hover:bg-gray-100 transition-colors cursor-pointer">
                    <span className="text-xs font-bold text-gray-800 block mb-1">گوشی‌های پرچمدار</span>
                    <span className="text-[10px] text-gray-400">S24 Ultra, iPhone 15 Pro...</span>
                 </Link>
                 <Link href="/products?price_range=0-10000000" className="block bg-gray-50 rounded-xl p-3 hover:bg-gray-100 transition-colors cursor-pointer">
                    <span className="text-xs font-bold text-gray-800 block mb-1">گوشی‌های اقتصادی</span>
                    <span className="text-[10px] text-gray-400">زیر ۱۰ میلیون تومان</span>
                 </Link>
               </div>
            </div>
        </div>
      </div>
    </div>
  </div>
);

// کامپوننت اصلی Header
export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // قفل کردن اسکرول صفحه هنگام باز بودن منوی موبایل
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <header 
        className={`sticky top-0 z-50 bg-white/90 backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isScrolled ? 'shadow-lg shadow-gray-200/40 py-3' : 'py-5 border-b border-gray-100'}`}
      >
        <div className="container mx-auto px-4 lg:px-8 flex items-center gap-4 lg:gap-8 justify-between">
          
          {/* Right Section: Logo & Category */}
          <div className="flex items-center gap-4 lg:gap-6 shrink-0">
            <Link href="/" className="group relative z-50">
               <div className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-105"><Logo /></div>
            </Link>
            <MegaMenu />
          </div>

          {/* Center Section: Search Bar */}
          <SearchBar />

          {/* Left Section: Action Buttons */}
          <div className="hidden lg:flex">
            <ActionButtons />
          </div>

          {/* --- Mobile Menu Button --- */}
          <div className="flex lg:hidden items-center gap-2">
            <Link href="/cart" className="relative flex items-center justify-center w-11 h-11 rounded-full bg-gray-50">
              <ShoppingBag size={20} className="text-gray-600" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-brand-yellow text-white text-[9px] font-bold ring-2 ring-white">0</span>
            </Link>
            <button onClick={() => setIsMobileMenuOpen(true)} className="flex items-center justify-center w-11 h-11 rounded-full bg-gray-50 text-gray-600">
              <MenuIcon size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* --- Mobile Menu Panel --- */}
      <div 
        className={`fixed inset-0 z-[100] transition-opacity duration-300 lg:hidden ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

        {/* Panel */}
        <div 
          className={`absolute top-0 right-0 h-full w-[85%] max-w-[320px] bg-white shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-100">
            <Logo />
            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 rounded-full text-gray-400 hover:bg-gray-100">
              <X size={20} />
            </button>
          </div>

          {/* Menu Content */}
          <div className="p-4 flex flex-col h-[calc(100%-70px)]">
              {/* Search */}
              <div className="relative mb-6">
                <input type="text" placeholder="جستجو..." className="w-full h-12 pr-4 pl-10 rounded-xl bg-gray-100 border-2 border-transparent focus:border-brand-yellow outline-none text-sm"/>
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>

              {/* Links */}
              <div className="flex-grow overflow-y-auto space-y-2">
                <Link href="/products" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 p-3 rounded-lg bg-brand-yellow/10 text-brand-yellow font-bold">
                  <LayoutGrid size={20} />
                  <span>همه محصولات</span>
                </Link>
                {MENU_ITEMS.map(item => (
                  <Link href={item.slug} key={item.id} onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 font-medium text-gray-700">
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                ))}
              </div>

              {/* Footer Buttons */}
              <div className="mt-auto pt-4 border-t border-gray-100 space-y-3">
                 <Link href="/auth/login" className="flex items-center justify-center gap-3 w-full h-12 rounded-xl bg-gray-100 text-gray-800 font-bold">
                    <User size={20} />
                    <span>ورود | ثبت نام</span>
                 </Link>
                 <Link href="/wishlist" className="flex items-center justify-center gap-3 w-full h-12 rounded-xl bg-gray-100 text-gray-800 font-bold">
                    <Heart size={20} />
                    <span>لیست علاقه‌مندی‌ها</span>
                 </Link>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};
