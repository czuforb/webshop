import React from "react"
import { Link } from "gatsby"
const button = ({ to, text, className, disabled, okay }) => {
  const disabledStyle = "px-12 py-6 bg-red-400"
  const okayStyle = "px-12 py-6 bg-green-400"
  return (
    <button className={(disabled && disabledStyle) || (okay && okayStyle)}>
      <Link to={to}>{text}</Link>
    </button>
  )
}

export default button
