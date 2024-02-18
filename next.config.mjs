/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[{
            protocol: 'https',
            hostname: 'mongodb-js.github.io',
        },{
            protocol: 'https',
            hostname: 'upload.wikimedia.org',
        },
        {
            protocol: 'https',
            hostname: 'w7.pngwing.com',
        },
        {
            protocol: 'https',
            hostname: "images.pexels.com"
        },
    ],
    }
};

export default nextConfig;
