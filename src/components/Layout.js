import React from "react"
import Navbar from "./Navbar"
import CategoriesBar from "./CategoriesBar"
import Global from "../styles/global"
import styled from "styled-components"

const Layout = ({ children }) => {
  return (
    <>
      <Global />
      <Navbar />
      <CategoriesBar />
      <Style>
        <div className="center">{children}</div>
      </Style>
    </>
  )
}

const Style = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  .center {
    margin-top: 1rem;
    padding: 1rem;
    flex-grow: 1;
    max-width: 45rem;
  }
`
export default Layout
