module.exports = {
  siteMetadata: {
    title: `Joe Bailey Blog`,
    author: `Joe Bailey`,
    description: `Joe Bailey Blog.`,
    siteUrl: `https://joebailey.xyz/Blog/`,
  },
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // your WordPress source
        baseUrl: `www.joebaileyphotography.com/Blog/`,
        protocol: `https`,
        // is it hosted on wordpress.com, or self-hosted?
        hostingWPCOM: false,
        // does your site use the Advanced Custom Fields Plugin?
        useACF: false,
        includedRoutes: [
          "**/posts",
          "**/categories",
        ],
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`
  ],
}
