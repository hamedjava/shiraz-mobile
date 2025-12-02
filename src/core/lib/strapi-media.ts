// src/core/lib/strapi-media.ts

export function getStrapiMedia(url: string | null): string | null {
    if (url == null) {
      return null;
    }
  
    // اگر آدرس عکس خودش کامل بود (مثلاً از یک سایت خارجی یا CDN بود)، همان را برگردان
    if (url.startsWith("http") || url.startsWith("//")) {
      return url;
    }
  
    // آدرس سرور استرپی را از متغیرهای محیطی بگیر، اگر نبود پیش‌فرض لوکال را استفاده کن
    const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://127.0.0.1:1337";
  
    // آدرس کامل را بساز
    return `${STRAPI_URL}${url}`;
  }
  