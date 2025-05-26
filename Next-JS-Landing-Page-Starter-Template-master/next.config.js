/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['.'],
  },
  poweredByHeader: false,
  trailingSlash: true,
  reactStrictMode: true,

  // 🔽 Add these lines for GitHub Pages
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/Simplicity',
  assetPrefix: '/Simplicity/',
};

module.exports = withBundleAnalyzer(nextConfig);
