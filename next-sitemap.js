// next-sitemap.js
module.exports = {
  siteUrl: 'https://profitpowerb.com/', // Replace with your domain
  generateRobotsTxt: true,             // Automatically generate robots.txt
  exclude: [
    '/_next/static/*',                  // Exclude all static chunks
    '/_next/webpack/*',                 // Exclude Webpack-related static files
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        disallow: ['/static/', '/_next/static/'], // Block static and chunk URLs
      },
    ],
  },
};
