import React from "react"
// Layout
import Layout from "../components/layout"
//Sections
//Components
import Button from "../components/elements/button"
import Related from "../components/sections/related"
const index = () => {
  return (
    <Layout>
      <section className="w-full grid grid-cols-4">
        <div className="col-span-2 flex items-center justify-center bg-gray-200 h-screen">
          <div className="h-64 w-64 bg-gray-400"></div>
        </div>
        <div className="col-span-2 h-screen">
          <div className="w-full h-full flex flex-col justify-start items-start">
            <div className="pt-24 px-4 border-b border-gray-400 pb-4 mb-8 w-full bg-teal-200 box-border">
              <h1 className="text-6xl font-extrabold">Item title</h1>
              <h2 className="text-4xl font-bold">Item subtitle</h2>
            </div>
            <div className="text-base p-4 my-4 pb-12 border-b border-gray-400 w-full">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
                tempora alias exercitationem reiciendis neque placeat fugit, non
                ratione nemo, dolor atque facere amet saepe. Error praesentium
                eveniet, omnis voluptates minus cupiditate saepe at blanditiis
                fugiat non a est maxime accusamus excepturi tempora voluptatem
                similique quae consequuntur obcaecati quibusdam inventore eos!
              </p>
            </div>
            <div className="grid grid-cols-4 gap-8 w-full justify-around px-4 py-12 bordebr-b">
              <div className="col-span-1 p-4 border ">
                <div className="bg-gray-300 h-16 w-16"></div>
              </div>
              <div className="col-span-1 p-4 border">
                <div className="bg-gray-300 h-16 w-16"></div>
              </div>
              <div className="col-span-1 p-4 border">
                <div className="bg-gray-300 h-16 w-16"></div>
              </div>
              <div className="col-span-1 p-4 border">
                <div className="bg-gray-300 h-16 w-16"></div>
              </div>
            </div>
            <div className="w-full px-4 py-12">
              <button className="border px-6 py-4 mx-auto block w-full">
                BUY ME!
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default index
