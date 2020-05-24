import React from "react"

// Components
import Header from "./header"
import Navigation from "./navigation"
import Footer from "./footer"
//
const Layout = ({ children }) => {
  return (
    <>
      <div>
        <Navigation />
        {/* <Header /> */}
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
