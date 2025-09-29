/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Para deploy estático
  trailingSlash: true,
  images: {
    unoptimized: true, // Desativa otimização de imagens
    }
};

export default nextConfig;
