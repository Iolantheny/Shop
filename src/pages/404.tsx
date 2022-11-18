import * as React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

const NotFoundPage = ({data}) => {
  return (
    <main className="error">
      <Img fluid={data.Header.childImageSharp.fluid} alt="header" />
      <Img fluid={data.Pikachu.childImageSharp.fluid} className="error__pikachu" alt="pikachu"/>
      <div className="error__container">
        <h1>BŁĄD 404</h1>
        <p>Przepraszamy ale nie możemy odnaleźć strony</p>
        <Link to="/" className="error__container error__container--link">WRÓĆ NA STRONĘ GŁÓWNĄ</Link>
      </div>
    </main>
  )
}

export const query = graphql `
  query {
    Header: file (relativePath: {eq: "headerback.png"}) {
      childImageSharp{
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }

    Pikachu: file (relativePath: {eq: "pikachu.png"}){
      childImageSharp{
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default NotFoundPage
