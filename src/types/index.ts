// src/types/index.ts

// تایپ پایه برای یک آیتم Strapi (برای دسته بندی، برند و ...)
export interface StrapiItem {
    id: number;
    attributes: {
      title: string;
      slug: string;
      createdAt: string;
      updatedAt: "2024-07-28T10:14:48.486Z"
    };
  }
  
  // تایپ برای تصویر در Strapi
  export interface StrapiImage {
    data: {
      id: number;
      attributes: {
        name: string;
        url: string;
        formats: {
          thumbnail: { url: string };
          small: { url: string };
          medium: { url: string };
          large: { url: string };
        }
      }
    } | null;
  }
  
  // تایپ کامل محصول با در نظر گرفتن ساختار Strapi
  export interface Product {
    id: number;
    attributes: {
      title: string;
      slug: string;
      description: string;
      price: number;
      stock: number;
      cover: StrapiImage;
      category: { data: StrapiItem | null };
      brand: { data: StrapiItem | null };
    };
  }
  