/** @type {import('next').NextConfig} */
const nextConfig = {
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
