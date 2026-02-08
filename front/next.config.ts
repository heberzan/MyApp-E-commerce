import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */

  /* Configuración para permitir imágenes desde dominios externos específicos */
  /* Para poder usar la etiqueta <Image> de Next.js en vez de <img> */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.apple.com',
        pathname: '/newsroom/images/**',
      },
      {
        protocol: 'https',
        hostname: 'wallpapers.com',
        pathname: '/images/high/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.computerhoy.com',
        pathname: '/sites/navi.axelspringer.es/public/media/image/**',
      },
      {
        protocol: 'https',
        hostname: 'lamanzanamordida.net',
        pathname: '/app/uploads-lamanzanamordida.net/**',
      },
      {
        protocol: 'https',
        hostname: 'media.istockphoto.com',
        pathname: '/id/**',
      },
      {
        protocol: 'https',
        hostname: 'mac-center.com',
        pathname: '/cdn/shop/files/**',
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'co.tiendasishop.com',
        pathname: '/cdn/shop/files/**',
      },
      {
        protocol: 'https',
        hostname: 'http2.mlstatic.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
