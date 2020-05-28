import React from "react"

const sectionTitle = ({ title, text }) => {
  return (
    <div className="w-full py-4">
      <div className="container mx-auto border-b border-gray-400">
        <h2 className="text-4xl font-bold">{title}</h2>
        {text && <p className="text-xl my-2 leading-relaxed">{text}</p>}
      </div>
    </div>
  )
}

export default sectionTitle
