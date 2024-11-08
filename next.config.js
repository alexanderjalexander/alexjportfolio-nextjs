/** @type {import('next').NextConfig} */
const nextConfig = {
    logging: {
        fetches: {
          fullUrl: true,
          hmrRefreshes: true,
        },
    },
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(nextConfig)
