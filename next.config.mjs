/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/entry",
        permanent: true,
      },
    ];
  },

  eslint: {
    ignoreDuringBuilds: true, 
  },
};

export default nextConfig;