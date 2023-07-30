import React, { useState } from "react";
import { graphql } from "gatsby";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { Components } from "./../components";
import { useShoppingCart } from "../context";
import { FaLeaf, FaTruckMoving } from "react-icons/fa";
import { IoMdResize } from "react-icons/io";

const Product = (props) => {
  const { Layout, ImageSlider, Timer } = Components;

  const { addItemsQuantity } = useShoppingCart();

  const [quantity, setQuantity] = useState(1);

  const minus = () => {
    setQuantity(quantity - 1);
  };

  const add = () => {
    setQuantity(quantity + 1);
  };

  const Bold = ({ children }) => <span className="bold">{children}</span>;
  const Text = ({ children }) => <p className="align-center">{children}</p>;

  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        return (
          <>
            <h2>Embedded Asset</h2>
            <pre>
              <code>{JSON.stringify(node, null, 2)}</code>
            </pre>
          </>
        );
      },
    },
  };

  const description = renderRichText(
    props.data.contentfulShop.description,
    options
  );

  return (
    <Layout>
      <h1 className="title">{props.data.contentfulShop.title}</h1>
      <div className="colors">
        <div className="colors__blue" />
        <div className="colors__red" />
      </div>
      <div className="product">
        <ImageSlider photo={props.data.contentfulShop.photos} />
        <div className="product__content">
          <Timer date={props.data.contentfulShop.timeout} />
          <p className="product__content product__content--price">
            {props.data.contentfulShop.price} PLN
          </p>
          <p className="product__content product__content--quantity">
            Sztuk:
            <button onClick={minus} disabled={quantity === 1}>
              -
            </button>
            {quantity}
            <button
              onClick={add}
              disabled={quantity === props.data.contentfulShop.quantity}
            >
              +
            </button>
          </p>
          <button
            className="product__content product__content--button"
            onClick={() =>
              addItemsQuantity(
                props.data.contentfulShop.id,
                props.data.contentfulShop.title,
                props.data.contentfulShop.price,
                props.data.contentfulShop.slug,
                props.data.contentfulShop.photos[0],
                quantity
              )
            }
          >
            DODAJ DO KOSZYKA
          </button>
          <div>
            <h2 className="product__content product__content--h2">
              {props.data.contentfulShop.title}
            </h2>
            <p>{description}</p>
            <p className="product__content product__content--env">
              <FaLeaf className="product__content product__content--envicon" />
              Przyjazne środowisku
            </p>
            <p className="product__content product__content--height">
              <IoMdResize className="product__content product__content--heighticon" />
              Wysokość: {props.data.contentfulShop.height} cm
            </p>
            <p className="product__content product__content--del">
              <FaTruckMoving className="product__content product__content--delicon" />
              Darmowa wysyłka
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Product;

export const pageQuery = graphql`
  query ContenfulShopBySlug($slug: String) {
    contentfulShop(slug: { eq: $slug }) {
      id
      title
      photos {
        title
        url
      }
      price
      quantity
      slug
      description {
        raw
      }
      timeout
      height
    }
  }
`;
