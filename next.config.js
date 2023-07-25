/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["media.graphcms.com", "media.graphassets.com"],
  },
  experimental: {
    esmExternals: true,
  },
};

module.exports = nextConfig;
