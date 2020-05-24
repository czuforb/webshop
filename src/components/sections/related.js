import React from "react"
import ProductCard from "../elements/productCard"

const related = () => {
  return (
    <section className="w-full bg-gray-900">
      <div className="container  mx-auto">
        <div className="border-b pb-4 border-gray-100 w-full ">
          <h1 className="text-white">Kapcsolódó termékek</h1>
        </div>
        <ul className="grid grid-cols-4 col-span-4 gap-2">
          {/* // map products here */}
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </ul>
      </div>
    </section>
  )
}

export default related
