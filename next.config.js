/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'scontent.fsjj1-1.fna.fbcdn.net'
            },
        ],
    },
    experimental: {
        serverActions: true,
    }
}

module.exports = nextConfig
