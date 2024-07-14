/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: '/src/api/:path*',
        },
      ];
    },
  };
  
  export default nextConfig;
  