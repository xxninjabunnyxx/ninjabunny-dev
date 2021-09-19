import * as React from "react"
//import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const HomePage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div>Coming Soon</div>
    </Layout>
  )
}

const PlaceholderStyle = styled.div`
  display: flex;
  justify-content: center;
`
export default HomePage
