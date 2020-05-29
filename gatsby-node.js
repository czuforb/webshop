/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const ProductPageTemplate = path.resolve(
    "./src/components/Templates/product-page-template.js"
  )

  const result = await graphql(`
    query CreatePageQuery {
      wpcontent {
        posts {
          nodes {
            slug
            id
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const posts = result.data.wpcontent.posts.nodes
  posts.forEach(post => {
    createPage({
      path: `/${post.slug}`,
      component: ProductPageTemplate,
      context: {
        id: post.id,
      },
    })
  })
}
