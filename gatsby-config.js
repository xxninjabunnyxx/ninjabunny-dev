module.exports = {
  siteMetadata: {
    siteUrl: "https://www.ninjabunny.dev",
    title: "NinjaBunny",
    socials: [
      { link: "https://github.com/xxninjabunnyxx", icon: "github" },
      { link: "https://instagram.com/ryurampage", icon: "instagram" },
      { link: "https://twitter.com/xxninjabunnyxx", icon: "twitter" },
      { link: "https://galaxy.ansible.com/xxninjabunnyxx", icon: "ansible" },
      { link: "https://hub.docker.com/u/xxninjabunnyxx", icon: "docker" },
    ],
    colors: {
      light: {
        h: `0`,
        s: `100%`,
        l: `100%`,
        a: `1`,
      },
      dark: {
        h: `0`,
        s: `0%`,
        l: `0%`,
        a: `1`,
      },
      primary: {
        h: `326`,
        s: `100%`,
        l: `50%`,
        a: `1`,
      },
      secondary: {
        h: `261`,
        s: `100%`,
        l: `90%`,
        a: `1`,
      },
    },
    categories: [
      { name: `Blog`, path: `/blog` },
      { name: `About`, path: `/about` },
      { name: `Projects`, path: `/projects` },
    ],
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
      __key: "content",
    },
  ],
}
