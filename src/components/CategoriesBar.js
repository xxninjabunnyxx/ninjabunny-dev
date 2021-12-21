import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import CategoriesBarItem from "./CategoriesBarItem"

const CategoriesBar = () => {
  const query = useStaticQuery(graphql`
    query CategoriesBarQuery {
      site {
        siteMetadata {
          categories {
            name
            path
          }
        }
      }
    }
  `)

  const items = query.site.siteMetadata.categories.map(category => (
    <CategoriesBarItem name={category.name} path={category.path} />
  ))
  return <Style>{items}</Style>
}

const Style = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem;
`

export default CategoriesBar
