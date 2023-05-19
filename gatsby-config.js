module.exports = {
  siteMetadata: {
    title: `ZapTwo`,
    description: `ZapTwo is a Canada and Bangladesh based IT Solutions company providing services like Web App development, SEO, Data Visualization and many more.`,
    author: `@csAlkemy`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ZapTwo`,
        short_name: `ZapTwo`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/ZapTwo.png`,
      },
    },
    `gatsby-plugin-gatsby-cloud`,
  ],
}
