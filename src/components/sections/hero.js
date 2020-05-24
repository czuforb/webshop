import React from "react"
//Components
import Button from "../elements/button"
const hero = props => {
  return (
    <section className="w-full h-screen ">
      <div className="container mx-auto h-full flex flex-col items-start justify-center  space-y-4 p-4">
        <h1 className="text-6xl font-serif font-extrabold">Hero element</h1>
        <h2>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
          animi vitae cum sunt, fugit quos perspiciatis natus distinctio non
          porro.
        </h2>
        <Button okay to="/" text="Read more" />
      </div>
    </section>
  )
}

export default hero
