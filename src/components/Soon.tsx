import * as React from "react";
import { useStaticQuery, graphql } from "gatsby"
import SoonProduct from "./SoonProduct";

const Soon = () => {
    const data = useStaticQuery(
        graphql`
            query {
                allContentfulShop (filter: { status: { eq: "soon" } }){
                    edges {
                        node {
                            status
                            id
                            title
                            premiere(formatString: "DD MMMM")
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
        <div className="soon">
            <h1 className="soon__title">COMING SOON</h1>
            <div className="soon__divs">
                <div className="soon__divs soon__divs--yellow" />
                <div className="soon__divs soon__divs--green" />
            </div>
            <div className="soon__products">
                {
                    data.allContentfulShop.edges.map(product => {
                        return (
                            <SoonProduct
                                key={product.node.id}
                                title={product.node.title}
                                imgtitle={product.node.photos[0].title}
                                imgurl={product.node.photos[0].url}
                                premiere={product.node.premiere}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Soon