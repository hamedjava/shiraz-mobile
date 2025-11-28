"use client";

import React, { useState } from "react";
import { 
  Search, 
  ChevronDown, 
  Check, 
  SlidersHorizontal,
  Trash2
} from "lucide-react";

// --- Helper Component for Filter Sections ---
const FilterSection = ({ 
  title, 
  isOpen = true, 
  children 
}: { 
  title: string; 
  isOpen?: boolean; 
  children: React.ReactNode 
}) => {
  const [open, setOpen] = useState(isOpen);

  return (
    <div className="border-b border-slate-100 py-5 last:border-0">
      <button 
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full group"
      >
        <span className="font-bold text-slate-800 text-sm group-hover:text-slate-600 transition-colors">
          {title}
        </span>
        <ChevronDown 
          size={16} 
          className={`text-slate-400 transition-transform duration-300 ${open ? "rotate-180" : ""}`} 
        />
      </button>
      <div className={`grid transition-all duration-300 ease-in-out overflow-hidden ${open ? "grid-rows-[1fr] mt-4 opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
};

export function ProductFilters() {
  // Mock Data for filters
  const brands = [
    { id: 1, name: "سامسونگ", enName: "Samsung" },
    { id: 2, name: "اپل", enName: "Apple" },
    { id: 3, name: "شیائومی", enName: "Xiaomi" },
    { id: 4, name: "سونی", enName: "Sony" },
  ];

  const categories = [
    { id: 1, name: "گوشی موبایل" },
    { id: 2, name: "لپ‌تاپ و اولترابوک" },
    { id: 3, name: "ساعت هوشمند" },
    { id: 4, name: "هدفون و هندزفری" },
  ];

  return (
    <div className="flex flex-col">
      
      {/* Search Input */}
      <div className="relative mb-2">
        <input 
          type="text" 
          placeholder="جستجو در نتایج..." 
          className="w-full bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-xl pl-3 pr-10 py-3 focus:outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-100 transition-all placeholder:text-slate-400"
        />
        <Search size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
      </div>

      {/* Categories */}
      <FilterSection title="دسته‌بندی‌ها">
        <div className="flex flex-col gap-2">
          {categories.map((cat) => (
            <label key={cat.id} className="flex items-center gap-3 cursor-pointer group">
              <div className="relative flex items-center justify-center w-5 h-5 bg-slate-100 border border-slate-300 rounded-md transition-all group-hover:border-slate-400 has-[:checked]:bg-slate-900 has-[:checked]:border-slate-900">
                <input type="checkbox" className="peer appearance-none absolute inset-0 w-full h-full cursor-pointer" />
                <Check size={12} className="text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
              </div>
              <span className="text-slate-600 text-sm group-hover:text-slate-900 transition-colors">
                {cat.name}
              </span>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* Price Range */}
      <FilterSection title="محدوده قیمت (تومان)">
        <div className="flex flex-col gap-4">
           {/* Simple Range Visualization */}
           <div className="relative h-1.5 bg-slate-100 rounded-full mt-2 mb-4">
              <div className="absolute left-1/4 right-1/4 top-0 bottom-0 bg-slate-900 rounded-full"></div>
              <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-slate-900 rounded-full shadow cursor-pointer hover:scale-110 transition-transform"></div>
              <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-slate-900 rounded-full shadow cursor-pointer hover:scale-110 transition-transform"></div>
           </div>

          <div className="flex items-center gap-2">
            <div className="relative w-full">
              <span className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 text-xs">از</span>
              <input type="text" value="۰" readOnly className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2 pr-6 pl-2 text-left text-sm font-bold text-slate-700 focus:outline-none focus:border-slate-400" />
            </div>
            <div className="relative w-full">
              <span className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 text-xs">تا</span>
              <input type="text" value="۱۵۰,۰۰۰,۰۰۰" readOnly className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2 pr-6 pl-2 text-left text-sm font-bold text-slate-700 focus:outline-none focus:border-slate-400" />
            </div>
          </div>
        </div>
      </FilterSection>

      {/* Brands */}
      <FilterSection title="برندها">
        <div className="flex flex-col gap-3">
          {brands.map((brand) => (
            <label key={brand.id} className="flex items-center justify-between cursor-pointer group">
              <div className="flex items-center gap-3">
                 <div className="relative flex items-center justify-center w-5 h-5 bg-slate-100 border border-slate-300 rounded-md transition-all group-hover:border-slate-400 has-[:checked]:bg-slate-900 has-[:checked]:border-slate-900">
                  <input type="checkbox" className="peer appearance-none absolute inset-0 w-full h-full cursor-pointer" />
                  <Check size={12} className="text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
                </div>
                <span className="text-slate-600 text-sm group-hover:text-slate-900 transition-colors">{brand.name}</span>
              </div>
              <span className="text-slate-400 text-xs font-medium">{brand.enName}</span>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* Toggles */}
      <div className="py-5 border-b border-slate-100">
        <label className="flex items-center justify-between cursor-pointer group">
          <span className="font-bold text-slate-800 text-sm">فقط کالاهای موجود</span>
          <div className="relative w-11 h-6 bg-slate-200 rounded-full transition-colors has-[:checked]:bg-green-500">
            <input type="checkbox" className="peer sr-only" />
            <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-5 shadow-sm"></div>
          </div>
        </label>
      </div>
      
      <div className="py-5">
        <label className="flex items-center justify-between cursor-pointer group">
          <span className="font-bold text-slate-800 text-sm">ارسال فوری</span>
          <div className="relative w-11 h-6 bg-slate-200 rounded-full transition-colors has-[:checked]:bg-blue-500">
            <input type="checkbox" className="peer sr-only" />
            <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-5 shadow-sm"></div>
          </div>
        </label>
      </div>

      {/* Actions */}
      <div className="mt-4 flex flex-col gap-3">
        <button className="w-full bg-slate-900 text-white font-bold py-3 rounded-xl shadow-lg shadow-slate-900/20 hover:bg-slate-800 hover:shadow-none transition-all flex items-center justify-center gap-2">
          <SlidersHorizontal size={18} />
          اعمال فیلترها
        </button>
        <button className="w-full bg-white border border-slate-200 text-slate-500 font-bold py-3 rounded-xl hover:bg-red-50 hover:text-red-500 hover:border-red-200 transition-all flex items-center justify-center gap-2">
          <Trash2 size={18} />
          حذف فیلترها
        </button>
      </div>

    </div>
  );
}
