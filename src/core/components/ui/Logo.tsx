import React from "react";
// نکته: ایمپورت Link حذف شد تا تداخل ایجاد نکند

export const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      {/* آیکون گرافیکی لوگو */}
      <div className="w-8 h-8 bg-brand-yellow rounded-lg flex items-center justify-center rotate-3 shadow-lg">
        <span className="font-black text-brand-dark text-lg">S</span>
      </div>
      
      {/* متن لوگو */}
      <div className="flex flex-col leading-none">
        <span className="font-black text-xl tracking-tighter text-gray-900">SHIRAZ</span>
        <span className="text-[10px] font-bold text-brand-yellow tracking-widest uppercase bg-brand-dark px-1 rounded-sm mt-[2px]">
          Mobile
        </span>
      </div>
    </div>
  );
};
