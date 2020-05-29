import React from "react"
import { graphql } from "gatsby"

// Layout
import Layout from "../Layout"
//Sections
//Components

export const query = graphql`
  query ProductPageQuery($id: ID!) {
    wpcontent {
      post(id: $id) {
        bor {
          name
          year
          size
          price
          type
          vineyard
          image
          harvest
          grape
          description
          alcohol
        }
      }
    }
  }
`

const ProductPageTemplate = ({ data }) => {
  const {
    name,
    year,
    size,
    price,
    type,
    vineyard,
    image,
    harvest,
    grape,
    description,
    alcohol,
  } = data.wpcontent.post.bor
  return (
    <Layout>
      <section className="grid w-full grid-cols-4">
        <div className="flex items-center justify-center h-screen col-span-2 bg-gray-200">
          <img src={image} className="bg-gray-400 w-500 h-500" />
        </div>
        <div className="h-screen col-span-2">
          <div className="flex flex-col items-start justify-start w-full h-full">
            <div className="box-border w-full px-4 pt-24 pb-4 mb-8 bg-teal-200 border-b border-gray-400">
              <h1 className="text-6xl font-extrabold">{name}</h1>
              <h2 className="text-4xl font-bold">{year}</h2>
            </div>
            <div className="w-full p-4 pb-12 my-4 text-base border-b border-gray-400">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                autem ex id alias corporis quis officiis nihil voluptates
                laudantium iusto!
              </p>
            </div>
            <div className="grid justify-around w-full grid-cols-4 gap-8 px-4 py-12 bordebr-b">
              <div className="col-span-1 p-4 border ">
                <div className="w-16 h-16 bg-gray-300"></div>
              </div>
            </div>
            <div className="w-full px-4 py-12">
              <button className="block w-full px-6 py-4 mx-auto border">
                BUY ME!
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ProductPageTemplate
