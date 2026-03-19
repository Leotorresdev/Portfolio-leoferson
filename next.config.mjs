/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/proyects',
        destination: '/projects',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
