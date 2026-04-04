/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/entry",
        permanent: true, // HTTP 308 — cached by browsers & CDNs, zero flicker
      },
    ];
  },
};

export default nextConfig;
