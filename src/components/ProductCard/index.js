import React, { useContext } from "react"
import { CartContext } from "../../store/CartContext"
import { Link } from "gatsby"
const ProductCard = ({ data, id, slug }) => {
  const { name, image, price } = data
  const { handleAddCart } = useContext(CartContext)

  const product = {
    name: name,
    id: id,
    price: price,
    image: image,
  }
  return (
    <div className="col-span-1 shadow-lg">
      <div className="p-4">
        <Link to={`/${slug}`}>
          <h2 className="pb-2 mb-2 text-xl font-semibold tracking-wider border-b border-gray-300">
            {name}
            <span className="block text-base font-light tracking-tight text-gray-800">
              200 Ft
            </span>
          </h2>
        </Link>
        <div className="flex items-center justify-center w-full">
          <div className="w-64 bg-gray-300">
            <img className="w-full h-auto" src={image} alt="bence" />
          </div>
        </div>
        <button
          onClick={() => handleAddCart(product)}
          className="w-full px-6 py-2 mx-auto my-2 border border-gray-800 hover:bg-gray-400"
        >
          Vegyél meg!
        </button>
      </div>
    </div>
  )
}

export default ProductCard

// alcohol,
// description,
// grape,
// harvest,
// name,
// image,
// size,
// type,
// vineyard,
// year,
