module.exports = {
  siteMetadata: {
    title: `Joe Bailey Blog`,
    author: `Joe Bailey`,
    description: `Joe Bailey Blog.`,
    siteUrl: `https://blog.joebailey.xyz/`,
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
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allWordpressPost } }) => {
              return allWordpressPost.edges.map(edge => {
                return Object.assign({}, edge.node, {
                  description: edge.node.excerpt,
                  url: site.siteMetadata.siteUrl + "/" + edge.node.slug,
                  guid: site.siteMetadata.siteUrl + "/" + edge.node.slug,
                })
              })
            },
            query: `
              {
                allWordpressPost(filter: { 
                    categories: { 
                      elemMatch: {
                        name: {
                          eq: "Web Design"
                        }
                      } 
                    }
                  }) {
                    edges {
                      node {
                        title
                        slug
                        excerpt
                      }
                    }
                  }
                }
            `,
            output: "/rss.xml",
            title: "Joe Bailey's Blog Feed",
          },
        ],
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
  ],
}
