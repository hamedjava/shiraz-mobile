"use client";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center bg-[#F8FAFC] overflow-hidden font-[family-name:var(--font-iranyekan)]">
      
      {/* 1. BACKGROUND EFFECTS */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-[#FFD700]/5 rounded-full blur-[120px]" />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 lg:gap-0">

          {/* --- LEFT: TEXT CONTENT --- */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-right z-20 mt-8 lg:mt-0">
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-[0_2px_10px_rgba(0,0,0,0.03)] mb-8">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFD700] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FFD700]"></span>
              </span>
              <span className="text-xs font-bold text-slate-600 tracking-wide">پیش‌فروش ویژه آغاز شد</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-[5rem] font-black text-slate-900 leading-[1.1] tracking-tight mb-6">
              آیفون ۱۷ پرو <br />
              <span className="text-[#FFD700]">
                فراتر از واقعیت
              </span>
            </h1>

            <p className="text-lg text-slate-500 font-medium leading-8 max-w-[520px] mb-10">
              تجربه قدرت تیتانیوم با پردازنده A18 Pro. مرزهای تکنولوژی را در دستان خود لمس کنید. هم‌اکنون با گارانتی طلایی در موبایل شیراز.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center lg:justify-start">
              <Link href="/products" className="group w-full sm:w-auto h-14 px-10 rounded-2xl bg-[#FFD700] text-slate-900 font-bold text-lg flex items-center justify-center gap-2 transition-all hover:bg-[#FCE24D] hover:shadow-[0_10px_20px_-5px_rgba(255,215,0,0.4)] hover:-translate-y-1">
                پیش‌خرید کنید
                <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
              </Link>
              
              <div className="mt-4 sm:mt-0 sm:mr-8 flex items-center gap-3 text-sm font-bold text-slate-500">
                <div className="p-2 bg-white rounded-full shadow-sm border border-slate-100">
                    <ShieldCheck className="w-5 h-5 text-[#FFD700]" />
                </div>
                <span>۱۸ ماه گارانتی تعویض</span>
              </div>
            </div>
          </div>

          {/* --- RIGHT: VISUALS --- */}
          <div className="w-full lg:w-1/2 relative flex justify-center items-center h-[600px]">
             
             {/* حلقه مداری ۱ */}
             <div className="absolute z-0 w-[500px] h-[500px] rounded-full border border-slate-100"></div>
             <div className="absolute z-0 w-[500px] h-[500px] rounded-full border-t border-r border-transparent border-l-[#FFD700]/40 border-b-[#FFD700]/10 animate-[spin_20s_linear_infinite]"></div>

             {/* حلقه مداری ۲ */}
             <div className="absolute z-0 w-[420px] h-[420px] rounded-full border border-slate-100"></div>
             <div className="absolute z-0 w-[420px] h-[420px] rounded-full border-b border-l border-transparent border-t-slate-300 border-r-slate-300 animate-[spin_15s_linear_infinite_reverse]"></div>

             {/* استیج مرکزی (دایره) */}
             <div className="relative z-10 w-[360px] h-[360px] rounded-full bg-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border-[8px] border-white flex items-center justify-center overflow-hidden">
                
                {/* عکس محصول با برش دایره‌ای */}
                <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-50">
                    <img
                        src="/images/products/iphone17mainPic.png" 
                        alt="iPhone 17 Pro Max"
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                </div>
             </div>

             {/* المان‌های شناور در مدار */}
             <div className="absolute w-[500px] h-[500px] animate-[spin_20s_linear_infinite]">
                <div className="w-3 h-3 bg-[#FFD700] rounded-full absolute top-[50%] -right-1.5 shadow-[0_0_10px_#FFD700]"></div>
             </div>

             {/* بج شناور ثابت */}
             <div className="absolute -right-2 top-1/2 -translate-y-[140px] z-30 bg-white p-2.5 pr-4 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-slate-100 flex items-center gap-3 animate-[bounce_3s_infinite]">
                <div className="w-8 h-8 rounded-lg bg-[#FFD700] flex items-center justify-center text-slate-900">
                    <span className="font-bold text-[10px]">5G</span>
                </div>
                <div>
                    <p className="text-[9px] text-slate-400 font-bold uppercase">Connectivity</p>
                    <p className="text-xs font-bold text-slate-800">Ultrafast</p>
                </div>
             </div>

          </div>

        </div>
      </div>
    </section>
  );
};
