import React from "react"

const Grid = ({ children }) => {
  return (
    <section className="w-full py-8">
      <div className="container mx-auto grid grid-cols-4 gap-12">
        {children}
      </div>
    </section>
  )
}

export default Grid
