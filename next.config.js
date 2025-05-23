const nextConfig = {
  output: "standalone",
  images: {
    domains: [
      "media.graphcms.com",
      "media.graphassets.com",
      "i.ytimg.com",
      "img.youtube.com",
      "i.scdn.co",
      "photos.bandsintown.com",
      "image-cdn-ak.spotifycdn.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.graphassets.com",
      },
    ],
    // Disable image optimization
    // unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: "/robots.txt",
        destination: "/api/robots",
      },
    ];
  },
};

module.exports = nextConfig;
