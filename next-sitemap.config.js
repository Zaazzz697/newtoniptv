/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://ukstreamtv.co.uk",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
    ],
    additionalSitemaps: [],
  },
  additionalPaths: async () => [
    { loc: "/", priority: 1.0, changefreq: "daily" },
    { loc: "/pricing", priority: 0.9, changefreq: "weekly" },
    { loc: "/free-trial", priority: 0.9, changefreq: "weekly" },
    { loc: "/blog", priority: 0.8, changefreq: "weekly" },
  ],
};
