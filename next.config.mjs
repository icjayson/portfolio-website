/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['placeholder.com'],
    formats: ['image/webp', 'image/avif']
  },
  compiler: {
    styledComponents: true
  }
};

export default nextConfig;
