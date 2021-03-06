module.exports = {
  siteMetadata: {
    title: `Default Starter`,
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum possimus iusto inventore.`,
    author: `mbwatson`,
    menuItems:[
      { text: 'Home',    path: '/', },
      { text: 'About',   path: '/about', },
      { text: 'News',    path: '/news', },
      { text: 'Contact', path: '/contact', },
    ],
  },
  plugins: [
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
        name: `default-starter`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
