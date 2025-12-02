"use client";

import React from "react";
import Link from "next/link";
// ایمپورت LucideIcon برای تعریف تایپ صحیح
import { Truck, ShieldCheck, Headphones, RefreshCw, ArrowLeft, Gamepad2, Smartphone, LucideIcon } from "lucide-react";

// --- تعریف اینترفیس برای تایپ‌اسکریپت ---
// این بخش تضمین می‌کند که item.Icon حتماً یک کامپوننت آیکون است که size را می‌پذیرد
interface FeatureItem {
  Icon: LucideIcon; 
  title: string;
  desc: string;
}

// --- کامپوننت نوار ویژگی‌ها (اصلاح شده) ---
export const FeaturesBar = () => {
  // تغییر مهم: پاس دادن رفرنس کامپوننت (بدون < >)
  const features: FeatureItem[] = [
    { Icon: RefreshCw, title: "۷ روز ضمانت بازگشت", desc: "در صورت عدم رضایت" },
    { Icon: Headphones, title: "پشتیبانی ۲۴/۷", desc: "پاسخگویی در تمام ساعات" },
    { Icon: ShieldCheck, title: "ضمانت اصالت", desc: "تضمین اصل بودن کالا" },
    { Icon: Truck, title: "ارسال رایگان", desc: "برای خریدهای بالای ۵ میلیون" },
  ];

  return (
    <div className="w-full border-b border-gray-100 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 py-10">
          {features.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center sm:flex-row sm:text-right sm:items-start gap-4 group cursor-default">
              <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 transition-all duration-500 group-hover:bg-[#FFD700] group-hover:text-white group-hover:rotate-6 shadow-sm">
                {/* رندر کردن کامپوننت آیکون به صورت مستقیم */}
                <item.Icon size={24} strokeWidth={1.5} />
              </div>
              
              <div className="flex flex-col gap-1">
                <h4 className="font-bold text-gray-700 text-sm group-hover:text-gray-900 transition-colors">
                  {item.title}
                </h4>
                <p className="text-[11px] text-gray-400 font-medium leading-tight">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- کامپوننت بنرهای دسترسی سریع ---
export const PromoBanners = () => {
  return (
    <section className="w-full py-12 px-4 lg:px-8 select-none">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* --- بنر اول: دنیای گیمینگ --- */}
          <Link 
            href="/category/gaming"
            className="group relative w-full h-[260px] sm:h-[300px] overflow-hidden rounded-[32px] border border-white/50 transition-all duration-500 hover:shadow-2xl hover:shadow-gray-200/50 flex items-center justify-between p-8 lg:p-12"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 transition-all duration-500 group-hover:scale-105"></div>
            <div className="absolute -left-10 -top-10 w-60 h-60 bg-white rounded-full blur-3xl opacity-60 group-hover:opacity-80 transition-opacity"></div>
            
            <div className="relative z-10 flex flex-col items-start justify-center h-full w-full sm:w-2/3">
              <span className="px-3 py-1 bg-gray-900/5 text-gray-800 text-[11px] font-bold rounded-full mb-4 backdrop-blur-sm border border-gray-900/10 group-hover:bg-gray-900 group-hover:text-white transition-colors duration-300">
                کالکشن جدید
              </span>
              
              <h3 className="text-2xl sm:text-4xl font-black text-gray-800 mb-3 tracking-tight group-hover:text-black transition-colors">
                دنیای گیمینگ
              </h3>
              <p className="text-sm font-medium text-gray-500 mb-8 leading-relaxed max-w-[90%]">
                کنسول‌های نسل نهم و تجهیزات حرفه‌ای
              </p>

              <div className="flex items-center gap-3 text-sm font-bold text-gray-700 group-hover:gap-4 transition-all duration-300">
                <span className="relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:right-0 after:bg-gray-800 after:origin-right after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                  مشاهده محصولات
                </span>
                <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm group-hover:bg-[#FFD700] group-hover:border-[#FFD700] group-hover:text-gray-900 transition-all duration-300">
                    <ArrowLeft size={16} />
                </div>
              </div>
            </div>

            <div className="absolute -left-4 sm:left-8 top-1/2 -translate-y-1/2 opacity-10 sm:opacity-100 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-12 group-hover:translate-x-2">
                <Gamepad2 size={140} className="text-gray-300 drop-shadow-xl" strokeWidth={1} />
            </div>
          </Link>

          {/* --- بنر دوم: لوازم جانبی --- */}
          <Link 
            href="/category/accessories"
            className="group relative w-full h-[260px] sm:h-[300px] overflow-hidden rounded-[32px] transition-all duration-500 hover:shadow-2xl hover:shadow-slate-900/40 hover:-translate-y-1 flex items-center justify-between p-8 lg:p-12"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-[#1e293b] via-[#172033] to-[#0f172a]"></div>
             <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-[#334155] rounded-full blur-[80px] opacity-30 group-hover:opacity-50 transition-opacity duration-700"></div>

            <div className="relative z-10 flex flex-col items-start justify-center h-full w-full sm:w-2/3">
              <span className="px-3 py-1 bg-[#FFD700] text-[#0f172a] text-[11px] font-extrabold rounded-full mb-4 shadow-[0_0_15px_rgba(255,215,0,0.2)] group-hover:shadow-[0_0_25px_rgba(255,215,0,0.4)] transition-all duration-300">
                فروش ویژه
              </span>
              
              <h3 className="text-2xl sm:text-4xl font-black text-white mb-3 tracking-tight">
                لوازم جانبی
              </h3>
              <p className="text-sm font-medium text-slate-400 mb-8 leading-relaxed max-w-[90%]">
                قاب، گلس و شارژرهای اورجینال با تخفیف
              </p>

              <div className="flex items-center gap-3 text-sm font-bold text-slate-300 group-hover:text-white group-hover:gap-4 transition-all duration-300">
                <span className="relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:right-0 after:bg-[#FFD700] after:origin-right after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                  خرید کنید
                </span>
                <div className="w-8 h-8 rounded-full bg-slate-700/50 backdrop-blur-md border border-white/10 flex items-center justify-center group-hover:bg-[#FFD700] group-hover:border-[#FFD700] group-hover:text-[#0f172a] transition-all duration-300">
                    <ArrowLeft size={16} />
                </div>
              </div>
            </div>

            <div className="absolute -left-4 sm:left-8 top-1/2 -translate-y-1/2 opacity-20 sm:opacity-100 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:-translate-x-2">
                <Smartphone size={140} className="text-slate-600 group-hover:text-slate-500 transition-colors drop-shadow-2xl" strokeWidth={1} />
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
};
