import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css";
import { Header } from "@/core/components/layout/Header";
import { Footer } from "@/core/components/layout/Footer";

// تنظیم صحیح آدرس‌دهی فونت‌ها بر اساس ساختار پوشه شما (src/app/fonts)
const iranYekan = localFont({
  src: [
    {
      path: "./fonts/yekan_normal.ttf", // مسیر نسبی: پوشه fonts کنار همین فایل است
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/yekan_bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-iranyekan", 
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mobile Shiraz | موبایل شیراز",
  description: "برترین لوازم جانبی موبایل در شیراز",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${iranYekan.variable} font-sans antialiased bg-gray-50 min-h-screen flex flex-col text-gray-900`}
      >
        {/* هدر سراسری */}
        <Header />

        {/* بدنه اصلی صفحه */}
        <main className="flex-grow"> 
          {children}
        </main>

        {/* فوتر سراسری */}
        <Footer />
      </body>
    </html>
  );
}
