import React from "react";
import { Truck, ShieldCheck, Headphones, RefreshCcw } from "lucide-react";

const FEATURES = [
  {
    id: 1,
    title: "ارسال رایگان",
    desc: "سفارش‌های بالای ۵ میلیون",
    icon: Truck,
  },
  {
    id: 2,
    title: "ضمانت اصالت",
    desc: "تضمین ۱۰۰٪ اصل بودن",
    icon: ShieldCheck,
  },
  {
    id: 3,
    title: "پشتیبانی ۲۴/۷",
    desc: "پاسخگویی تمام وقت",
    icon: Headphones,
  },
  {
    id: 4,
    title: "۷ روز ضمانت",
    desc: "بازگشت در صورت خرابی",
    icon: RefreshCcw,
  },
];

export const StoreFeatures = () => {
  return (
    <div className="w-full px-8">
      <div className="container mx-auto">
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-10">
          {/* گرید همیشه ۴ ستونه */}
          <div className="grid grid-cols-4 divide-x divide-x-reverse divide-slate-200">
            {FEATURES.map((feature) => (
              <div 
                key={feature.id} 
                className="flex items-center justify-center gap-4 px-4"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-yellow-400 text-black flex items-center justify-center shadow-sm">
                  <feature.icon size={28} strokeWidth={2} />
                </div>

                <div className="flex flex-col gap-1">
                  <h3 className="text-slate-900 font-black text-lg leading-none">
                    {feature.title}
                  </h3>
                  <p className="text-slate-500 text-sm font-bold">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};
