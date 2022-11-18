import * as React from "react";
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Content2 = () => {

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
            <Img fluid={data.file.childImageSharp.fluid} className="content__img2" alt="obraz"/>
            <div className="content__colorBlue"></div>
            <div className="content__content">
                <h2 className="content__content content__content--title2">Lorem Ipsum</h2>
                <p className="content__content content__content--text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat.
                </p>
            </div>
        </div>
    )
}

export default Content2