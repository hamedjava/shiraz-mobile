// src/core/services/api.ts

import qs from "qs";

const STRAPI_API_TOKEN = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://127.0.0.1:1337";

// ... (توابع دیگر مثل getProductBySlug)

export async function getProducts(params: any) {
  const queryString = qs.stringify(params, { encodeValuesOnly: true });
  const url = `${API_URL}/api/products?${queryString}`;
  
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${STRAPI_API_TOKEN}`,
    },
    cache: 'no-store', // یا 'force-cache' یا revalidate
  });

  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }

  return res.json();
}
