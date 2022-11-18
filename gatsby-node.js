const path = require("path")
const slash = require("slash")

exports.createPages = ({ graphql, actions }) => {

    const { createPage } = actions;

    const productTemplate = path.resolve("./src/templates/product.js")

    return graphql(
        `{
        allContentfulShop {
            edges {
              node {
                slug
              }
            }
          }
    }`
    ).then(result => {
        if (result.errors) {
            console.log("Error found ->", result.errors)
        }

        result.data.allContentfulShop.edges.forEach(product => {
            createPage({
                path:`/${product.node.slug}`,
                component: slash(productTemplate),
                context:{
                    slug: product.node.slug
                }
            })
        })
    }).catch(error => console.log("Error ->",))
}