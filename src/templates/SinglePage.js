import React from "react"
import SEO from "../components/SEO"
import Layout from "../components/Layout"
import styled from "styled-components"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

const SinglePageTemplate = ({ data }) => {
  return (
    <Layout>
      <SEO title={data.mdx.frontmatter.title} />
      <Style>
        <h1 className="title">{data.mdx.frontmatter.title}</h1>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
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
      }
    }
  }
`

export default SinglePageTemplate
