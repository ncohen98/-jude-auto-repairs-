const { withExpo } = require('@expo/next-adapter');

module.exports = withExpo({
  projectRoot: __dirname,
  images: {
    domains: ['images.unsplash.com'],
  },
  experimental: {
    appDir: true,  // enable Next.js App Router (app folder)
  },
});
