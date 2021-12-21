import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import PostListItem from "../components/PostListItem"
import Pagination from "../components/Pagination"
import SEO from "../components/SEO"

const PostListTemplate = ({ data }) => {
  const posts = data.allMdx.nodes.map(data => (
    <PostListItem
      title={data.frontmatter.title}
      slug={data.slug}
      date={data.frontmatter.date}
      key={data.id}
    />
  ))
  return (
    <Layout>
      <SEO title="Blog" />
      {posts}
      <Pagination
        prefix={`blog`}
        hasNextPage={data.allMdx.pageInfo.hasNextPage}
        hasPreviousPage={data.allMdx.pageInfo.hasPreviousPage}
        currentPage={data.allMdx.pageInfo.currentPage}
      />
      {console.log(data.allMdx.pageInfo)}
    </Layout>
  )
}

export const query = graphql`
  query ($skip: Int, $postsPerPage: Int) {
    allMdx(
      filter: { frontmatter: { type: { eq: "post" } } }
      limit: $postsPerPage
      skip: $skip
    ) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        currentPage
      }
      nodes {
        id
        frontmatter {
          title
          date(formatString: "MM-DD-YYYY")
        }
        slug
      }
    }
  }
`

export default PostListTemplate
