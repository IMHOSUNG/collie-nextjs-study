// 
/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   appDir: true,
  // },
  reactStrictMode: true,
  // 스크립트 파일과 웹페이지에 대한 코드 최소화, 
  secMinify: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  }
};

module.exports = nextConfig;
