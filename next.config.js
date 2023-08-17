/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["media.graphcms.com", "media.graphassets.com"],
  },
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/sitemap-custom.xml',
      },
    ]
  },
};

module.exports = nextConfig;
