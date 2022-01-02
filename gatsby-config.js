module.exports = {
  siteMetadata: {
    siteUrl: "https://r00ks.io",
    title: "austin r00ks",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: `${__dirname}/src/assets/`
        }
      }
    },
    `gatsby-plugin-typescript`,
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "\u0016213171135",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `austin r00ks`,
        short_name: `r00ks`,
        start_url: `/`,
        background_color: `#ffffff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        theme_color: `#ff7aa2`,
        display: `minimal-ui`,
        icon: `static/favicon-32x32.png`, // This path is relative to the root of the site.
        legacy: true,
      },
    },
  ],
};
