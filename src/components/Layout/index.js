import React from "react"

// Components
import Header from "./Header"
import Footer from "./Footer"
//Context
import CartContext from "../../store/CartContext"
const Layout = ({ children }) => {
  return (
    <>
      <CartContext>
        <Header />
        <main>{children}</main>
        <Footer />
      </CartContext>
    </>
  )
}

export default Layout
