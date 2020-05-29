import React, { useContext } from "react"
import { CartContext } from "../../store/CartContext"
import { Quantity } from "./QuantityHandler"
const CartListing = () => {
  const { cart } = useContext(CartContext)
  return (
    <>
      {cart.map((item, index) => (
        <li className="grid grid-cols-12 col-span-12 px-4 py-2">
          <div className="col-span-2">
            <img src={item.image} className="w-24 h-24 p-4 bg-gray-300" />
          </div>
          <div className="flex flex-col justify-around col-span-4 px-2">
            <h2>{item.name}</h2>
            <h3>Subtitle</h3>
          </div>
          <Quantity id={item.id} key={index} />
          <div className="flex flex-col justify-around col-span-2 px-2">
            <p>
              {item.price} <span>Ft</span>
            </p>
          </div>
        </li>
      ))}
    </>
  )
}

export default CartListing
