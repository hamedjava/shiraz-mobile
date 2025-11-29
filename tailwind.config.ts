import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}", // اضافه کردن ماژول‌ها
    "./src/core/**/*.{js,ts,jsx,tsx,mdx}",    // اضافه کردن هسته
  ],
  theme: {
    // تنظیمات پیش‌فرض کانتینر برای وسط‌چین شدن و فاصله از لبه‌ها
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
      // اتصال فونت ایران‌یکان به عنوان فونت پیش‌فرض
      fontFamily: {
        sans: ["var(--font-iranyekan)", "sans-serif"],
      },
      colors: {
        brand: {
          yellow: "#FFC107", // زرد اصلی (Amber-400/500 lookalike)
          dark: "#1A1A1A",   // مشکی ذغالی
          gray: "#F5F5F5",   // خاکستری خیلی روشن برای پس‌زمینه
          slate: "#334155",  // برای متون ثانویه (تکمیل پالت)
        },
      },
      // انیمیشن‌ها
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        }
      },
      animation: {
        shimmer: "shimmer 2s infinite",
        "fade-up": "fade-up 0.5s ease-out forwards",
        "scale-in": "scale-in 0.3s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
