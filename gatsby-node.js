const path = require(`path`)
const slugify = require("slugify")

const createSinglePages = async ({ graphql, actions }) => {
  const template = path.resolve("./src/templates/SinglePage.js")
  const { data } = await graphql(`
    query SinglePageQuery {
      allMdx(
        filter: {
          frontmatter: { title: { ne: "Index" }, type: { eq: "page" } }
        }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)

  data.allMdx.edges.forEach(mdx => {
    actions.createPage({
      path: slugify(mdx.node.frontmatter.title, { lower: true }),
      component: template,
      context: {
        id: mdx.node.id,
      },
    })
  })
}

const createPostPages = async ({ graphql, actions }) => {
  const template = path.resolve("./src/templates/Post.js")
  const { data } = await graphql(`
  query AllPostsQuery {
    allMdx(
      filter: {frontmatter: {published: {eq: true}, type: {eq: "post"}}}
      sort: {fields: frontmatter___date, order: DESC}
    ) {
      edges {
        node {
          id
          slug
          frontmatter {
            title
            date
          }
        }
      }
    }
  }  
  `)

  data.allMdx.edges.forEach(mdx => {
    actions.createPage({
      path: mdx.node.slug,
      component: template,
      context: {
        id: mdx.node.id,
      },
    })
  })
}

const createPostListPages = async ({ graphql, actions }) => {
  const template = path.resolve("./src/templates/PostList.js")
  const postsPerPage = 10
  const totalCountQuery = await graphql(`
    query TotalPostsQuery {
      allMdx(
        filter: {frontmatter: {published: {eq: true}, type: {eq: "post"}}}
        sort: {fields: frontmatter___date, order: DESC}
      ) {
        pageInfo {
          totalCount
        }
      }
    }
  `)
  const totalCount = totalCountQuery.data.allMdx.pageInfo.totalCount

  const pageCount = Math.ceil(totalCount / postsPerPage)

  Array.from({ length: pageCount }).forEach((_, index) => {
    actions.createPage({
      path: index == 0 ? `/blog` : `/blog?page=${index + 1}`,
      component: template,
      context: {
        skip: index * postsPerPage,
        postsPerPage: postsPerPage,
      },
    })
  })
}

exports.createPages = async ({ graphql, actions }) => {
  await Promise.all([
    createPostPages({ graphql, actions }),
    createPostListPages({ graphql, actions }),
    createSinglePages({ graphql, actions }),
  ])
}
