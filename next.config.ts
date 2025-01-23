import type { NextConfig } from 'next';

const isProduction = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'prueba-tecnica-api-tienda-moviles.onrender.com',
                pathname: '/**',
            },
            {
                protocol: 'http',
                hostname: 'prueba-tecnica-api-tienda-moviles.onrender.com',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
