import React from "react"
// Components
import Button from "./button"
const productCard = ({ data }) => {
  const {
    alcohol,
    description,
    fieldGroupName,
    grape,
    harvest,
    name,
    image,
    size,
    type,
    vineyard,
    year,
  } = data
  return (
    <div className="col-span-1 shadow-lg">
      <div className="p-4">
        <h2 className="text-xl font-semibold tracking-wider border-b border-gray-300 mb-2 pb-2">
          {name}
          <span className="block text-base font-light tracking-tight text-gray-800">
            200 Ft
          </span>
        </h2>
        <div className="w-full flex items-center justify-center">
          <div className="w-64 bg-gray-300">
            <img className="h-auto w-full" src={image} />
          </div>
        </div>
        <Button />
      </div>
    </div>
  )
}

export default productCard
