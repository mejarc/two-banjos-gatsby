module.exports = {
  siteMetadata: {
    title: "Two Banjos At Once."
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Two Banjos At Once",
        short_name: "2 Banjos",
        start_url: "./",
        background_color: "#ff6f61",
        theme_color: "#ff6f61",
        display: "minimal-ui",
        icon: "src/icon.png"
      }
    },
    'gatsby-plugin-offline'
  ]
} 