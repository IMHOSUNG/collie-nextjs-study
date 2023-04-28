const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

// 
/** @type {import('next').NextConfig} */
const nextConfig = withBundleAnalyzer({
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  experimental: {
    appDir: true,
  },
  // 스크립트 파일과 웹페이지에 대한 코드 최소화, 
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    unoptimized: true
  },
});

module.exports = nextConfig;
