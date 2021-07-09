import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from '../components/Layout'

const PageTemplate = ({ data }) => {
  const post = data.mdx;

  return (
    <Layout>
      <div>{post.frontmatter.title}</div>
      <div>{post.frontmatter.date}</div>
      <MDXRenderer>{post.body}</MDXRenderer>
      </Layout>
  );
};

export default PageTemplate;

export const pageQuery = graphql`
  query Page($id: String!) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        date
      }
    }
  }
`;
