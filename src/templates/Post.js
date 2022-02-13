import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import { MDXRenderer } from "gatsby-plugin-mdx"
import SEO from "../components/SEO"

const PostTemplate = ({ data }) => {
  return (
    <Layout>
      <SEO title={data.mdx.frontmatter.title} />
      <Style>
        <h1 className="title">{data.mdx.frontmatter.title}</h1>
        <h3 className="title">{data.mdx.frontmatter.date}</h3>
        <MDXRenderer localImages={data.mdx.frontmatter.embeddedImagesLocal}>
          {data.mdx.body}
        </MDXRenderer>
      </Style>
    </Layout>
  )
}

const Style = styled.div`
  .title {
    font-family: "Futura";
    font-weight: normal;
    font-style: normal;
  }
`

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        date(formatString: "MM-DD-YYYY")
        embeddedImagesLocal {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`

export default PostTemplate
