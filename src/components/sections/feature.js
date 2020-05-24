import React from "react"
//Components
import Button from "../elements/button"

const hero = props => {
  return (
    <section className="w-full py-12">
      <div className="container mx-auto grid md:grid-cols-2">
        <div className="col-span-1 p-4 flex items-center justify-center">
          <div className="h-32 w-32 bg-gray-300"></div>
        </div>
        <div className=" col-span-1 p-4">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
            corrupti, natus nisi dignissimos optio possimus pariatur mollitia
            doloremque perferendis. Dicta.
          </p>
          <Button />
        </div>
      </div>
    </section>
  )
}

export default hero
