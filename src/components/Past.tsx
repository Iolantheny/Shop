import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import PastProduct from "./PastProduct";

const Past = () => {
    const data = useStaticQuery(
        graphql`
            query {
                allContentfulShop (filter: { status: { eq: "past" } }) {
                    edges {
                        node {
                            status
                            id
                            title
                            lastAvailability(formatString: "DD MMMM")
                            slug
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
        <div className="past">
            <h2 className="past__title">PAST COMPAINGS</h2>
            <div className="past__divs">
                <div className="past__divs past__divs--blue" />
                <div className="past__divs past__divs--yellow" />
            </div>
            <div className="soon__products">
                {
                    data.allContentfulShop.edges.map(product => {
                        return (
                            <PastProduct
                                key={product.node.id}
                                title={product.node.title}
                                imgtitle={product.node.photos[0].title}
                                imgurl={product.node.photos[0].url}
                                last={product.node.lastAvailability}
                                slug={product.node.slug}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Past