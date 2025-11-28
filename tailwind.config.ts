import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: "#FFC107", // زرد اصلی
          dark: "#1A1A1A",   // مشکی اصلی
          gray: "#F5F5F5",   // پس زمینه
        },
      },
      // اضافه کردن انیمیشن‌های مورد نیاز برای طرح جدید
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        }
      },
      animation: {
        shimmer: "shimmer 2s infinite",
        "fade-up": "fade-up 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
