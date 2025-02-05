/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "images.pexels.com" },  {hostname: "picsum.photos"}],
  },
};

export default nextConfig;
