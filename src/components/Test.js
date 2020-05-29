import React, { useContext } from "react"
import { CartContext } from "../store/CartContext"
const Test = () => {
  const cart = useContext(CartContext)
  return (
    <div className="w-full">
      <div className="container mx-auto">
        <h1>Cart</h1>
        {cart && <pre>{JSON.stringify(cart, null, 2)}</pre>}
      </div>
    </div>
  )
}

export default Test
