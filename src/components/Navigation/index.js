import React from "react"
import Button from "../Buttons/Button"
const navigation = () => {
  return (
    <div className="w-full border-b border-gray-300">
      <nav className="container mx-auto flex items-center justify-center py-2">
        <div className="mr-auto">
          <ul className="flex justify-between">
            <li>Menu</li>
            <li>Menu</li>
            <li>Menu</li>
          </ul>
        </div>
        <h1 className="text-xl font-extrabold">Logo</h1>
        <div className="ml-auto">
          <button className="px-4 py-2 bg-gray-300">CTA</button>
        </div>
      </nav>
    </div>
  )
}

export default navigation
