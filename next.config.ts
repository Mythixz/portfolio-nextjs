import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['example.com', 'picsum.photos'], // หากคุณต้องการใช้รูปภาพจากแหล่งภายนอก
  },
};

export default nextConfig;
