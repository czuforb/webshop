import React, { useContext, useState, useEffect } from "react"
import { CartContext } from "../../store/CartContext"

const Quantity = ({ id }) => {
  // Get context
  const { cart, handleIncrease, handleDecrease, handleRemove } = useContext(
    CartContext
  )

  const [quantity, setQuantity] = useState(0)

  useEffect(() => {
    // Get element quantity
    const showQuantity = cart => {
      if (cart.length < 1) {
        return 0
      } else {
        if (cart.find(item => item.id === id)) {
          const tempProduct = cart.find(item => item.id === id)
          return tempProduct.quantity
        } else {
          return 0
        }
      }
    }
    setQuantity(showQuantity(cart))
    // Remove element from cart if quantity is less than 1
    const currentProduct = cart.find(item => item.id === id)
    if (currentProduct.quantity === 0) {
      handleRemove(id)
    }
  }, [cart, handleRemove, id])

  return (
    <div className="flex items-center col-span-3">
      <div className="flex overflow-hidden bg-gray-300">
        <button
          onClick={() => handleDecrease(id)}
          className="p-4 font-extrabold bg-gray-400"
        >
          -
        </button>
        <p className="px-4 my-auto font-extrabold tracking-widest">
          {quantity}
        </p>
        <button
          onClick={() => handleIncrease(id)}
          className="p-4 font-extrabold bg-gray-400"
        >
          +
        </button>
      </div>
    </div>
  )
}

export default Quantity
