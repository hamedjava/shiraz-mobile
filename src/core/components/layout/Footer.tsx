import React from "react";
import Link from "next/link";
import { Instagram, Send, Phone, MapPin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-brand-dark text-gray-300 mt-20 border-t border-gray-800">
      <div className="container mx-auto px-4 py-16">
        {/* گرید همیشه ۴ ستونه */}
        <div className="grid grid-cols-4 gap-12">
          
          {/* ستون اول */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 select-none">
                <div className="w-8 h-8 bg-brand-yellow rounded-lg flex items-center justify-center rotate-3">
                    <span className="font-black text-brand-dark text-lg">S</span>
                </div>
                <div className="flex flex-col leading-none">
                    <span className="font-black text-xl text-white tracking-tighter">SHIRAZ</span>
                    <span className="text-[10px] font-bold text-brand-dark tracking-widest uppercase bg-brand-yellow px-1 rounded-sm mt-[2px]">
                    Mobile
                    </span>
                </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              مرجع تخصصی لوازم جانبی موبایل در شیراز. ارائه دهنده بهترین کیفیت با ضمانت اصالت کالا و ارسال سریع به سراسر کشور.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-yellow hover:text-brand-dark transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-yellow hover:text-brand-dark transition-all">
                <Send size={20} />
              </a>
            </div>
          </div>

          {/* ستون دوم */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              دسترسی سریع
              <span className="absolute -bottom-2 right-0 w-1/2 h-1 bg-brand-yellow rounded-full"></span>
            </h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/products" className="hover:text-brand-yellow transition-colors">همه محصولات</Link></li>
              <li><Link href="/about" className="hover:text-brand-yellow transition-colors">درباره ما</Link></li>
              <li><Link href="/contact" className="hover:text-brand-yellow transition-colors">تماس با ما</Link></li>
              <li><Link href="/faq" className="hover:text-brand-yellow transition-colors">سوالات متداول</Link></li>
              <li><Link href="/terms" className="hover:text-brand-yellow transition-colors">قوانین و مقررات</Link></li>
            </ul>
          </div>

          {/* ستون سوم */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              دسته‌بندی‌ها
              <span className="absolute -bottom-2 right-0 w-1/2 h-1 bg-brand-yellow rounded-full"></span>
            </h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/category/iphone" className="hover:text-brand-yellow transition-colors">قاب آیفون</Link></li>
              <li><Link href="/category/samsung" className="hover:text-brand-yellow transition-colors">لوازم جانبی سامسونگ</Link></li>
              <li><Link href="/category/chargers" className="hover:text-brand-yellow transition-colors">شارژر و کابل</Link></li>
              <li><Link href="/category/audio" className="hover:text-brand-yellow transition-colors">هدفون و اسپیکر</Link></li>
              <li><Link href="/category/powerbank" className="hover:text-brand-yellow transition-colors">پاوربانک</Link></li>
            </ul>
          </div>

          {/* ستون چهارم */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              تماس با ما
              <span className="absolute -bottom-2 right-0 w-1/2 h-1 bg-brand-yellow rounded-full"></span>
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-brand-yellow shrink-0" size={20} />
                <span>شیراز، خیابان ملاصدرا، پاساژ دنا، طبقه دوم، پلاک ۲۱۰</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-brand-yellow shrink-0" size={20} />
                <span dir="ltr">+98 71 3232 0000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-brand-yellow shrink-0" size={20} />
                <span>info@shirazmobile.ir</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      <div className="bg-black/30 py-4 border-t border-white/5">
        <div className="container mx-auto px-4 text-center text-xs text-gray-500">
          © ۱۴۰۳ تمامی حقوق برای شیراز موبایل محفوظ است. طراحی شده با ❤️
        </div>
      </div>
    </footer>
  );
};
