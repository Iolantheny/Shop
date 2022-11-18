import * as React from "react";
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Content3 = () => {

    const data = useStaticQuery(
        graphql`
            query {
                file(relativePath: {eq: "pikachu.png"}) {
                    childImageSharp {
                        fluid{
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }    
        `
    )

    return (
        <div className="content">
            <div className="content__colorTurquse"></div>
            <div className="content__content">
                <h2 className="content__content content__content--title3">Lorem Ipsum</h2>
                <p className="content__content content__content--text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat.
                </p>
            </div>
            <Img fluid={data.file.childImageSharp.fluid} className="content__img" alt="obraz" />
        </div>
    )
}

export default Content3