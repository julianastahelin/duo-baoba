/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'youtube.com',
                port:'',
                pathname: '/**'
            },
        ]
    },
    transpilePackages: ['lucide-react'],
};

export default nextConfig;
