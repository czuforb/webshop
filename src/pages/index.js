import React from "react"
// Layout
import Layout from "../components/Layout/"
//Sections
import Grid from "../components/Elements/Grid"
import ProductCard from "../components/ProductCard/"
import { graphql } from "gatsby"
import Test from "../components/Test"
const index = ({ data }) => {
  return (
    <Layout>
      <Grid>
        {data.wpcontent.posts.nodes.map(item => {
          return (
            <ProductCard
              data={item.bor}
              id={item.id}
              key={item.id}
              slug={item.slug}
            />
          )
        })}
      </Grid>
      <Test />
    </Layout>
  )
}

export default index

export const query = graphql`
  query MyQuery {
    wpcontent {
      posts {
        nodes {
          bor {
            image
            name
            price
            type
          }
          id
          slug
        }
      }
    }
  }
`
