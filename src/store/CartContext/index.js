import React, { useEffect, useReducer } from "react"
import CartReducer from "./CartReducers"
import useLocalStorage from "../../hooks/useLocalStorage"

// Create react context for the cart
export const CartContext = React.createContext(null)

export default ({ children }) => {
  // Cart items from local storage TODO: make the localstorage property name dynamic from the sitename
  const [cart, setCart] = useLocalStorage("new-webshop", { cart: [] })

  const [state, dispatch] = useReducer(CartReducer, cart)

  useEffect(() => {
    setCart(state)
  }, [state, cart, setCart])

  const handleAddCart = action => {
    dispatch(action)
  }

  const store = {
    cart: state.cart,
    handleAddCart: product => dispatch({ type: "ADD", product: product }),
    handleIncrease: id => dispatch({ type: "INCREASE", id: id }),
    handleDecrease: id => dispatch({ type: "DECREASE", id: id }),
    handleRemove: id => dispatch({ type: "REMOVE", id: id }),
  }
  return <CartContext.Provider value={store}>{children}</CartContext.Provider>
}
