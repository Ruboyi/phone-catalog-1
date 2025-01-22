import type { NextConfig } from 'next';

const isProduction = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['prueba-tecnica-api-tienda-moviles.onrender.com'],
    },
    // webpack(config) {
    //     if (!isProduction) {
    //         config.optimization.minimize = false;
    //     } else {
    //         config.optimization.splitChunks = {
    //             chunks: 'all',
    //         };
    //     }

    //     return config;
    // },
};

export default nextConfig;
