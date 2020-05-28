import React, { useContext } from "react"
import { CartContext } from "../store/CartContext"
const Test = () => {
  const state = useContext(CartContext)
  return (
    <div className="w-full">
      <div className="container mx-auto">
        <h1>Cart</h1>
        {state && <pre>{JSON.stringify(state, null, 2)}</pre>}
      </div>
    </div>
  )
}

export default Test
