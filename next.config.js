/** @type {import('next').NextConfig} */
const nextConfig = {
    logging: {
        fetches: {
          fullUrl: true,
          hmrRefreshes: true,
        },
    },
}

module.exports = nextConfig
