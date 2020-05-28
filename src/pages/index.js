import React from "react"
// Layout
import Layout from "../components/Layout/"
//Sections
import { graphql } from "gatsby"

const index = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <pre>{JSON.stringify(data, null, 2)}</pre>
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
            name
          }
        }
      }
    }
  }
`
