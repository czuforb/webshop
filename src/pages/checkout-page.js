import React from "react"
// Layout
import Layout from "../components/layout"
//Sections
//Components

const index = () => {
  return (
    <Layout>
      <section className="w-full">
        <div className="container mx-auto grid grid-cols-12">
          <div className="col-span-8">
            <div className="pb-4 border-b w-full mb-4">
              <h2 className="text-4xl font-bold">Shopping cart</h2>
              <ul className="w-full grid grid-cols-12 border-b pb-6">
                <li className="col-span-12 bg-gray-100 py-2 px-4 grid grid-cols-12 border-b">
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
                <li className="col-span-12  py-2 px-4 grid grid-cols-12">
                  <div className="col-span-2">
                    <div className="h-24 w-24 bg-gray-300 p-4"></div>
                  </div>
                  <div className="col-span-4 justify-around px-2 flex flex-col">
                    <h2>Item name</h2>
                    <h3>Subtitle</h3>
                  </div>
                  <div className="col-span-3 flex items-center">
                    <div className="bg-gray-300 overflow-hidden flex">
                      <button className="p-4 font-extrabold bg-gray-400">
                        -
                      </button>
                      <p className="my-auto font-extrabold tracking-widest px-4">
                        123
                      </p>
                      <button className="p-4 font-extrabold bg-gray-400">
                        +
                      </button>
                    </div>
                  </div>
                  <div className="col-span-2 justify-around px-2 flex flex-col">
                    <p>
                      12000 <span>Ft</span>
                    </p>
                  </div>
                </li>
                <li className="col-span-12  py-2 px-4 grid grid-cols-12">
                  <div className="col-span-2">
                    <div className="h-24 w-24 bg-gray-300 p-4"></div>
                  </div>
                  <div className="col-span-4 justify-around px-2 flex flex-col">
                    <h2>Item name</h2>
                    <h3>Subtitle</h3>
                  </div>
                  <div className="col-span-3 flex items-center">
                    <div className="bg-gray-300 overflow-hidden flex">
                      <button className="p-4 font-extrabold bg-gray-400">
                        -
                      </button>
                      <p className="my-auto font-extrabold tracking-widest px-4">
                        123
                      </p>
                      <button className="p-4 font-extrabold bg-gray-400">
                        +
                      </button>
                    </div>
                  </div>
                  <div className="col-span-2 justify-around px-2 flex flex-col">
                    <p>
                      12000 <span>Ft</span>
                    </p>
                  </div>
                </li>
                <li className="col-span-12  py-2 px-4 grid grid-cols-12">
                  <div className="col-span-2">
                    <div className="h-24 w-24 bg-gray-300 p-4"></div>
                  </div>
                  <div className="col-span-4 justify-around px-2 flex flex-col">
                    <h2>Item name</h2>
                    <h3>Subtitle</h3>
                  </div>
                  <div className="col-span-3 flex items-center">
                    <div className="bg-gray-300 overflow-hidden flex">
                      <button className="p-4 font-extrabold bg-gray-400">
                        -
                      </button>
                      <p className="my-auto font-extrabold tracking-widest px-4">
                        123
                      </p>
                      <button className="p-4 font-extrabold bg-gray-400">
                        +
                      </button>
                    </div>
                  </div>
                  <div className="col-span-2 justify-around px-2 flex flex-col">
                    <p>
                      12000 <span>Ft</span>
                    </p>
                  </div>
                </li>
              </ul>
              <div className="col-span-12 grid grid-cols-12 px-4">
                <div className=" col-span-4 col-start-9 flex justify-around w-full border-b mb-2 mt-4">
                  <h2>Subtotal</h2>
                  <p>12 0000 Ft</p>
                </div>
                <div className=" col-span-4 col-start-9 flex justify-around w-full border-b mt-2 mb-6">
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
            <div className="w-full h-full p-4 bg-gray-200 flex flex-col justify-around items-stretch">
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
