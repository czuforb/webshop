import React from "react"

const footer = () => {
  return (
    <footer className="w-full border-t border-gray-300 py-12 px-4">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto space-y-4">
        <div className="col-span-1">
          <h2>Stuff</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos,
            eligendi?
          </p>
        </div>
        <div className="col-span-4 border-b border-gray-900 pb-6"></div>
        <div className="col-span-4 flex justify-end">
          <h2>Social</h2>
        </div>
      </div>
    </footer>
  )
}

export default footer
