import React from "react"
// Layout
import Layout from "../components/layout"
//Sections
import Hero from "../components/sections/hero"
import Feature from "../components/sections/feature"
import ProductCard from "../components/elements/productCard"
import Grid from "../components/elements/grid"
import SectionTitle from "../components/elements/sectionTitle"
const array = [1, 2, 3, 4, 5, 6, 7, 8]

const index = () => {
  return (
    <Layout>
      <Hero />
      <SectionTitle
        title="Csomagajánlataink"
        text="Bence bence bence bence! "
      />
      <Grid>
        {array.map(item => {
          return <ProductCard />
        })}
      </Grid>
      <Feature />
    </Layout>
  )
}

export default index
