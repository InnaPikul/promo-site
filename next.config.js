/** @type {import('next').NextConfig} */
const nextConfig = {
     images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: "**",
            //   hostname: 'placehold.co',
            //   port: '',
            //   pathname: '/**',
            },
          ]
    },
  }
   
  // eslint-disable-next-line no-undef
  module.exports = nextConfig