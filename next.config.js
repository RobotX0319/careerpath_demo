/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['localhost'],
  },
  typescript: {
    // Ignore build errors for now
    ignoreBuildErrors: true,
  },
  eslint: {
    // Ignore ESLint errors for now
    ignoreDuringBuilds: true,
  },
  webpack: (config, { isServer }) => {
    // Fix for module resolution issues
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
    };

    // Ignore specific modules that might cause issues
    config.externals = [...(config.externals || []), 'fsevents'];

    return config;
  },
  transpilePackages: ['@radix-ui'],
  swcMinify: true,
}

module.exports = nextConfig