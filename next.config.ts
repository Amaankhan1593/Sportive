import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'img.icons8.com',
      'habitat-recreation.myshopify.com',
      'encrypted-tbn0.gstatic.com', // ✅ Added this line
    ],
  },
};

export default nextConfig;