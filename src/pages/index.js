import React from "react"
import SEO from "../components/SEO"
import Layout from "../components/Layout"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

const IndexPage = () => {
  const query = useStaticQuery(graphql`
    query MyQuery {
      mdx(frontmatter: { page: { eq: "Index" } }) {
        id
        body
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <Style>
        <MDXRenderer>{query.mdx.body}</MDXRenderer>
      </Style>
    </Layout>
  )
}

const Style = styled.div`
  font-family: "Futura";
  font-weight: normal;
  font-style: normal;
  font-size: 2.5rem;
`

export default IndexPage
