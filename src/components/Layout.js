import React from 'react'
import Navbar from './Navbar'

const Layout = ({ children }) => {
    return (
        <>
        <div className={"max-w-screen-md mx-auto p-1"}>{children}</div>
        </>
    )
}

export default Layout