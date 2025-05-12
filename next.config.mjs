/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "notioly.com",
      },
    ],
  },
};

export default nextConfig;
