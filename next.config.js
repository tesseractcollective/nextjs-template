/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["media.graphcms.com", "media.graphassets.com"],
  },
  experimental: {
    esmExternals: true,
  },
  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/api/sitemap",
      },
    ];
  },
};

module.exports = nextConfig;
