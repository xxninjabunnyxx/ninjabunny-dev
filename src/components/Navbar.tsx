import React from "react"
import { useStaticQuery,graphql } from "gatsby"
import styled from "styled-components"

const Navbar: React.FC = () => {
   const query = useStaticQuery(graphql`
query Query {
  site {
    siteMetadata {
      title
    }
  }
}
`)

  return (
    <NavbarStyle>
      <TitleStyle>{query.site.siteMetadata.title}</TitleStyle>
    </NavbarStyle>
  )
}

const NavbarStyle = styled.nav`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  grid-template-rows: repeat(2, minmax(0, 1fr));
  column-gap: 0.5rem;
  color : black;
  font-family: "Futura";
  font-weight: normal;
  font-style: normal;
  `

const TitleStyle = styled.div`
display: flex;
justify-content: center;
font-size: 3.75rem;
line-height: 1;
`

export default Navbar
