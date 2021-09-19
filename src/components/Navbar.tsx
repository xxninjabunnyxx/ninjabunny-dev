import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const Navbar: React.FC = () => {
  return <div className="grid grid-cols-1 grid-rows-2 banner gap-2"></div>
}

const NavbarStyle = styled.nav`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  grid-template-rows: repeat(2, minmax(0, 1fr));
  column-gap: 0.5rem;
  color: black;
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
