"use client";
import React from "react";
import { Truck, ShieldCheck, Headphones, RefreshCw, LucideIcon } from "lucide-react";

interface FeatureItem {
  Icon: LucideIcon; 
  title: string;
  desc: string;
}

export const FeaturesBar = () => {
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
              <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 transition-all duration-500 group-hover:bg-brand-yellow group-hover:text-white group-hover:rotate-6 shadow-sm">
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
