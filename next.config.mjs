export default {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**', // Allow images from any HTTPS domain
        },
        {
          protocol: 'http',
          hostname: '**', // Optional: allow from any HTTP domain too (not recommended for production)
        }
      ]
    }
}