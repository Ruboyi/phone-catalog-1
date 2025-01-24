import type { NextConfig } from 'next';
const createNextIntlPlugin = require('next-intl/plugin');
const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

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

module.exports = withNextIntl(nextConfig);
