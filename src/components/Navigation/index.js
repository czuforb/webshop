import React from "react"
import CartIndicator from "./CartIndicator"
import { Link } from "gatsby"

const Navigation = () => {
  return (
    <div className="w-full border-b border-gray-300">
      <nav className="container flex items-center justify-center py-2 mx-auto">
        <div className="mr-auto">
          <ul className="flex justify-between">
            <li>Menu</li>
            <li>Menu</li>
            <li>Menu</li>
          </ul>
        </div>
        <Link to="/">
          <h1 className="text-xl font-extrabold">Logo</h1>
        </Link>
        <div className="ml-auto">
          <CartIndicator />
        </div>
      </nav>
    </div>
  )
}

export default Navigation
