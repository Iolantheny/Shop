import * as React from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/Layout";

const Thank = ({ data }: any) => {
  return (
    <Layout>
      <div className="dziekuje">
        <Img
          fluid={data.Pikachu.childImageSharp.fluid}
          className="dziekuje__pikachu"
          alt="pikachu"
        />
        <div className="dziekuje__container">
          <h1>DZIEKUJEMY</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
          <Link
            to="/"
            className="dziekuje__container dziekuje__container--link"
          >
            WRÓĆ NA STRONĘ GŁÓWNĄ
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    Pikachu: file(relativePath: { eq: "pikachu.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default Thank;
