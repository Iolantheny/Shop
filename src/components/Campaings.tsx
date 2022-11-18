import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import CampaingsProduct from "./CampaingsProduct"

const Campaings = () => {
    const data = useStaticQuery(
        graphql`
            query {
                allContentfulShop (filter: { status: { eq: "available" } }) {
                    edges {
                        node {
                            status
                            id
                            title
                            slug
                            quantity
                            photos {
                                title
                                url
                            }
                        }
                    }
                }
            }    
        `
    )

    return (
        <div className="campaings">
            <h1 className="campaings__title">LIVE CAMPAINGS</h1>
            <div className="campaings__divs">
                <div className="campaings__divs campaings__divs--blue" />
                <div className="campaings__divs campaings__divs--red" />
            </div>
            <div className="campaings__products">
                {
                    data.allContentfulShop.edges.map(product => {
                        return (
                            <CampaingsProduct
                                key={product.node.id}
                                title={product.node.title}
                                quantity={product.node.quantity}
                                slug={product.node.slug}
                                imgtitle={product.node.photos[0].title}
                                imgurl={product.node.photos[0].url}
                            />
                        )
                    })
                }
            </div>
        </div>

    )
}

export default Campaings