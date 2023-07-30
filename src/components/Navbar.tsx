import React from "react";
import Img from "gatsby-image";
import { useStaticQuery, graphql, Link } from "gatsby";
import { useShoppingCart } from "../context";
import SearchBar from "./SearchBar";
import { BsBasketFill, BsPersonCircle } from "react-icons/bs";

const Navbar = () => {
  const data = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "mademe.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        allContentfulShop(filter: { status: { eq: "available" } }) {
          edges {
            node {
              id
            }
          }
        }
      }
    `
  );

  const { cartQuantity } = useShoppingCart();

  return (
    <div className="navbar">
      <Link to="/">
        <Img fluid={data.file.childImageSharp.fluid} className="navbar__logo" />
      </Link>
      <SearchBar />
      <div className="navbar__link">
        <Link to="/cart" className="basket">
          <BsBasketFill />
          {cartQuantity !== 0 ? (
            <div className="basket__quantity">{cartQuantity}</div>
          ) : null}
        </Link>
        <Link to="/login">
          <BsPersonCircle />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
