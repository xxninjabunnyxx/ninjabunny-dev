module.exports = {
  siteMetadata: {
    title: "NinjaBunny",
    author: {
      name: `NinjaBunny`,
    },
    socials: [
      { link: "https://github.com/xxninjabunnyxx", icon: "github" },
      { link: "https://instagram.com/ryurampage", icon: "instagram" },
      { link: "https://twitter.com/xxninjabunnyxx", icon: "twitter" },
    ],
    colors: {
      light: "#fff",
      dark: "#000",
      primary: "#B22176",
      secondary: "#DDCBFF",
    },
    siteUrl: `https://ninjabunny.dev`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/`,
        name: `content`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        start_url: "/",
        icon: `./src/content/images/square.png`,
        crossOrigin: `use-credentials`,
      },
    },
  ],
}
