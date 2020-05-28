import { limitQuantity } from "../utils/limitQuantity"

const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const existingProduct = state.cart.find(
        item => item.id === action.playload.product.id
      )
      if (existingProduct) {
        return {
          cart: state.cart.map(element =>
            element.id === action.playload.product.id
              ? { ...element, quantity: element.quantity + 1 }
              : element
          ),
        }
      } else {
        return {
          cart: [...state.cart, { ...action.playload.product, quantity: 1 }],
        }
      }
    case "INCREASE":
      return {
        cart: state.cart.map(element =>
          element.id === action.id
            ? { ...element, quantity: element.quantity + 1 }
            : element
        ),
      }
    case "DECREASE":
      return {
        cart: state.cart.map(element =>
          element.id === action.id
            ? { ...element, quantity: limitQuantity(element.quantity - 1) }
            : element
        ),
      }
    case "REMOVE":
      return {
        cart: state.cart.filter(element => element.id !== action.id),
      }
    default:
      return state
  }
}

export default CartReducer
