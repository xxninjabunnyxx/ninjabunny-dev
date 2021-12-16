module.exports = {
  siteMetadata: {
    siteUrl: "https://www.ninjabunny.dev",
    title: "NinjaBunny",
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
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/square.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: "./src/content/",
      },
      __key: "pages",
    },
  ],
}
