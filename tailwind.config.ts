import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}", 
    "./src/core/**/*.{js,ts,jsx,tsx,mdx}", // این خط بسیار مهم است تا فایل‌های جدید استایل بگیرند
  ],
  theme: {
    // تنظیمات کانتینر برای اینکه محتوا بیش از حد به لبه‌ها نچسبد
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      // تنظیم فونت
      fontFamily: {
        // نکته: مطمئن شو در layout.tsx نام متغیر فونت (--font-iranyekan) باشد
        sans: ["var(--font-iranyekan)", "sans-serif"], 
      },
      // پالت رنگی برند
      colors: {
        brand: {
          yellow: "#FFD700", // زرد طلایی (مشابه رنگی که در Hero استفاده کردیم)
          dark: "#1A1A1A",   // مشکی اصلی
          gray: "#F8FAFC",   // رنگ پس‌زمینه روشن (Slate-50)
          slate: "#334155",  // رنگ متون ثانویه
        },
      },
      // تعریف فریم‌های انیمیشن (Keyframes)
      keyframes: {
        // انیمیشن شاین (براق شدن)
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        // انیمیشن ظهور از پایین (Fade Up Short)
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        // انیمیشن ظهور از پایین با دامنه بیشتر (مخصوص Hero Section)
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        // انیمیشن زوم شدن (Scale In)
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        // انیمیشن چرخش نرم (برای المان‌های دکوراتیو)
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        }
      },
      // تعریف کلاس‌های انیمیشن برای استفاده در HTML
      animation: {
        shimmer: "shimmer 2s infinite",
        "fade-up": "fade-up 0.5s ease-out forwards",
        "fade-in-up": "fadeInUp 0.8s ease-out forwards", // استفاده شده در Hero
        "scale-in": "scale-in 0.3s ease-out forwards",
        "spin-slow": "spin-slow 12s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
