import React from "react"

import Layout from "../components/Layout"
import CartListing from "../components/Cart/CartListing"
const index = () => {
  return (
    <Layout>
      <section className="w-full">
        <div className="container grid grid-cols-12 mx-auto">
          <div className="col-span-8">
            <div className="w-full pb-4 mb-4 border-b">
              <h2 className="text-4xl font-bold">Shopping cart</h2>
              <ul className="grid w-full grid-cols-12 pb-6 border-b">
                <li className="grid grid-cols-12 col-span-12 px-4 py-2 bg-gray-100 border-b">
                  <div className="col-span-6">
                    <h2>Product</h2>
                  </div>
                  <div className="col-span-4">
                    <h2>Quantity</h2>
                  </div>
                  <div className="col-span-2">
                    <h2>Price</h2>
                  </div>
                </li>
                <CartListing />
              </ul>
              <div className="grid grid-cols-12 col-span-12 px-4">
                <div className="flex justify-around w-full col-span-4 col-start-9 mt-4 mb-2 border-b ">
                  <h2>Subtotal</h2>
                  <p>12 0000 Ft</p>
                </div>
                <div className="flex justify-around w-full col-span-4 col-start-9 mt-2 mb-6 border-b ">
                  <h2>Total</h2>
                  <p>12 0000 Ft</p>
                </div>
                <div className="col-span-12">
                  <h2>Continue shopping</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4 row-span-1">
            <div className="flex flex-col items-stretch justify-around w-full h-full p-4 bg-gray-200">
              <h2>Payment</h2>
              <div className="w-full h-full bg-gray-600">form</div>
              <button className="px-8 py-4 font-bold border border-gray-700">
                ORDER
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default index
