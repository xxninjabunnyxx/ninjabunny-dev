import React from "react"
import Navbar from "./Navbar"
import Global from '../styles/global';

const Layout: React.FC = ({ children }) => {
  return (
    <>
    <Global />
      <Navbar />
      {children}
    </>
  )
}

export default Layout
