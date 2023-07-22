/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["media.graphcms.com", "media.graphassets.com"],
  },
  experimental: {
    esmExternals: true,
    serverComponentsExternalPackages: ["@codesweetly/react-youtube-playlist"],
  },
};

module.exports = nextConfig;
