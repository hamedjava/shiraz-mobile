/**
 * -------------------------------------------------------------
 * ⚙️ اسکریپت ساخت فایل‌های پیکربندی (Config Setup)
 * 🎯 هدف: آماده‌سازی پروژه برای اجرای Next.js 15+ (App Router)
 * -------------------------------------------------------------
 */

import fs from "fs";
import path from "path";
import { execSync } from "child_process";

// مسیر جاری (ریشه پروژه)
const ROOT_DIR = process.cwd();

console.log("\n🛠️  Generating Configuration Files for Shiraz Mobile UI...\n");

// تابع کمکی نوشتن فایل
function write(fileName, content) {
  const filePath = path.join(ROOT_DIR, fileName);
  fs.writeFileSync(filePath, content.trim());
  console.log(`✅ Created: ${fileName}`);
}

// 1. package.json
// نکته: نسخه‌ها را روی latest تنظیم کردم تا هنگام نصب جدیدترین‌ها را بگیرید.
write("package.json", JSON.stringify({
  "name": "shiraz-mobile-ui",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "react": "^18",
    "react-dom": "^18",
    "next": "latest",
    "axios": "^1.6.0",
    "zustand": "^4.5.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.2.0",
    "lucide-react": "^0.300.0", 
    "framer-motion": "^11.0.0"
  },
  "devDependencies": {
    "typescript": "^5",
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "autoprefixer": "^10.0.1",
    "postcss": "^8",
    "tailwindcss": "^3.3.0",
    "eslint": "^8",
    "eslint-config-next": "latest"
  }
}, null, 2));

// 2. tsconfig.json (بسیار مهم برای معماری)
// تنظیم paths برای تمیزی ایمپورت‌ها
write("tsconfig.json", JSON.stringify({
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"],
      "@/modules/*": ["./src/modules/*"],
      "@/core/*": ["./src/core/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}, null, 2));

// 3. next.config.mjs
write("next.config.mjs", `
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
    ],
  },
};

export default nextConfig;
`);

// 4. tailwind.config.ts
write("tailwind.config.ts", `
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}", // اضافه کردن ماژول‌ها به تیلویند
    "./src/core/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563eb', // رنگ اصلی برند (مثلا آبی)
          foreground: '#ffffff',
        },
        secondary: '#64748b',
      },
    },
  },
  plugins: [],
};
export default config;
`);

// 5. postcss.config.js
write("postcss.config.js", `
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
`);

// 6. .gitignore
write(".gitignore", `
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
ts-debug.log*

# local env files
.env*.local

# vercel
.vercel
`);

// 7. .env.local (متغیرهای محیطی نمونه)
write(".env.local", `
# API Backend URL
NEXT_PUBLIC_API_URL=http://localhost:3000/api

# Authentication Settings
NEXT_PUBLIC_AUTH_COOKIE_NAME=shiraz_token
`);

// 8. README.md
write("README.md", `
# Shiraz Mobile UI

Frontend for Shiraz Mobile Accessories shop, built with Next.js 16 (App Router) and Clean Architecture.

## Project Structure

- **src/app**: Next.js App Router pages.
- **src/modules**: Feature modules (User, Product, Order...) - Logic resides here.
- **src/core**: Shared utilities, UI components, and configs.

## Getting Started

1. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

2. Run the development server:
   \`\`\`bash
   npm run dev
   \`\`\`
`);

// 9. next-env.d.ts (فایل تایپ‌های نکست)
write("next-env.d.ts", `
/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.
`);

// 10. eslintrc.json
write(".eslintrc.json", JSON.stringify({
  "extends": "next/core-web-vitals"
}, null, 2));


console.log("\n🎉 Configuration files generated successfully!");
console.log(chalk.yellow("👉 ACTION REQUIRED: Run 'npm install' to download dependencies."));
