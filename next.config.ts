/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "scintillating-adaptation-production.up.railway.app",
      },
    ],
  },
};

module.exports = nextConfig;
