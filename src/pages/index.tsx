import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const HomePage: React.FC = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home"/>
      home
    </Layout>
  )
}

export default HomePage

//export const query = graphql`
//`
