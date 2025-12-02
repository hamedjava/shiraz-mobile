import React from "react";
import Link from "next/link";
import { Instagram, Send, Phone, MapPin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-brand-dark text-gray-300 mt-20 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        {/* 
           اصلاح ریسپانسیو:
           - موبایل: 1 ستون (grid-cols-1)
           - تبلت: 2 ستون (md:grid-cols-2)
           - دسکتاپ: 4 ستون (lg:grid-cols-4)
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* ستون اول: درباره و شبکه اجتماعی */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 select-none">
                <div className="w-10 h-10 bg-brand-yellow rounded-xl flex items-center justify-center -rotate-3 hover:rotate-0 transition-transform duration-300">
                    <span className="font-black text-brand-dark text-xl">S</span>
                </div>
                <div className="flex flex-col leading-none">
                    <span className="font-black text-2xl text-white tracking-tighter">SHIRAZ</span>
                    <span className="text-[10px] font-bold text-brand-dark tracking-[0.2em] uppercase bg-brand-yellow px-1.5 py-0.5 rounded-sm mt-1 text-center">
                    Mobile
                    </span>
                </div>
            </div>
            <p className="text-sm leading-7 text-gray-400 text-justify">
              مرجع تخصصی لوازم جانبی موبایل در شیراز. ما با تضمین اصالت کالا و ارسال سریع، تجربه‌ای متفاوت از خرید آنلاین را برای شما رقم می‌زنیم.
            </p>
            <div className="flex gap-4">
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center hover:bg-brand-yellow hover:text-brand-dark transition-all hover:-translate-y-1">
                <Instagram size={20} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center hover:bg-brand-yellow hover:text-brand-dark transition-all hover:-translate-y-1">
                <Send size={20} />
              </a>
            </div>
          </div>

          {/* ستون دوم: دسترسی سریع */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              دسترسی سریع
              <span className="absolute -bottom-2 right-0 w-1/2 h-1 bg-brand-yellow rounded-full"></span>
            </h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/products" className="text-gray-400 hover:text-brand-yellow hover:pr-2 transition-all block">همه محصولات</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-brand-yellow hover:pr-2 transition-all block">درباره ما</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-brand-yellow hover:pr-2 transition-all block">تماس با ما</Link></li>
              <li><Link href="/faq" className="text-gray-400 hover:text-brand-yellow hover:pr-2 transition-all block">سوالات متداول</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-brand-yellow hover:pr-2 transition-all block">قوانین و مقررات</Link></li>
            </ul>
          </div>

          {/* ستون سوم: دسته‌بندی‌های محبوب (لینک‌ها اصلاح شد) */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              دسته‌بندی‌ها
              <span className="absolute -bottom-2 right-0 w-1/2 h-1 bg-brand-yellow rounded-full"></span>
            </h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/products?category=iphone-case" className="text-gray-400 hover:text-brand-yellow hover:pr-2 transition-all block">قاب آیفون</Link></li>
              <li><Link href="/products?category=samsung-accessories" className="text-gray-400 hover:text-brand-yellow hover:pr-2 transition-all block">لوازم جانبی سامسونگ</Link></li>
              <li><Link href="/products?category=cables" className="text-gray-400 hover:text-brand-yellow hover:pr-2 transition-all block">شارژر و کابل</Link></li>
              <li><Link href="/products?category=audio" className="text-gray-400 hover:text-brand-yellow hover:pr-2 transition-all block">هدفون و اسپیکر</Link></li>
              <li><Link href="/products?category=powerbank" className="text-gray-400 hover:text-brand-yellow hover:pr-2 transition-all block">پاوربانک</Link></li>
            </ul>
          </div>

          {/* ستون چهارم: اطلاعات تماس */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              تماس با ما
              <span className="absolute -bottom-2 right-0 w-1/2 h-1 bg-brand-yellow rounded-full"></span>
            </h3>
            <ul className="space-y-5 text-sm">
              <li className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center text-brand-yellow shrink-0 group-hover:bg-brand-yellow group-hover:text-brand-dark transition-colors">
                    <MapPin size={18} />
                </div>
                <span className="leading-6">شیراز، خیابان ملاصدرا، پاساژ دنا، طبقه دوم، پلاک ۲۱۰</span>
              </li>
              <li className="flex items-center gap-3 group">
                 <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center text-brand-yellow shrink-0 group-hover:bg-brand-yellow group-hover:text-brand-dark transition-colors">
                    <Phone size={18} />
                </div>
                <span dir="ltr" className="font-mono text-base">+98 71 3232 0000</span>
              </li>
              <li className="flex items-center gap-3 group">
                 <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center text-brand-yellow shrink-0 group-hover:bg-brand-yellow group-hover:text-brand-dark transition-colors">
                    <Mail size={18} />
                </div>
                <span className="font-mono">info@shirazmobile.ir</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* بخش کپی‌رایت */}
      <div className="bg-black/40 py-6 border-t border-white/5">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© ۱۴۰۳ تمامی حقوق برای شیراز موبایل محفوظ است.</p>
          <p className="flex items-center gap-1">
            طراحی شده با <span className="text-red-500 text-base animate-pulse">❤</span> در شیراز
          </p>
        </div>
      </div>
    </footer>
  );
};
