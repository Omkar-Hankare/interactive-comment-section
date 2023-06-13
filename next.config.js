/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/interactive-comments",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
