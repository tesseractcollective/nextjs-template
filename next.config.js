/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/api/sitemap",
      },
    ];
  },
  images: {
    domains: ["media.graphcms.com", "media.graphassets.com"],
  },
  experimental: {
    esmExternals: true,
  },
};

module.exports = nextConfig;
