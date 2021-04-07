module.exports = {
  siteMetadata: {
    title: `Amanjot Singh`,
    description: `Amanjot Singh | Full stack developer`,
    author: `amanjotsinghdhunna`,
  },
  plugins: [
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `amajotsinghdhunna`,
      },
    },
    `gatsby-plugin-react-helmet`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#66339`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.jpeg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
