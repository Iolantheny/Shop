import React from "react";
import { graphql } from "gatsby";
import { Components } from "./../components";

interface Props {
  location: {
    state: {
      name: string;
    };
  };
  data: {
    allContentfulShop: {
      edges: {
        node: {
          id: number;
          title: string;
          photos: {
            title: string;
            url: string;
          };
          slug: string;
        };
      };
    };
  };
}

const Search = ({ location, data }: Props) => {
  const { Layout, SearchedProduct } = Components;

  const query = location.state.name;

  const product = data.allContentfulShop.edges || [];

  const filteredData = product.filter((pr) => {
    return pr.node.title.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <Layout>
      {filteredData.length === 0 && (
        <div>
          <h1 className="title">Brak wyników wyszukiwania</h1>
          <div className="divs">
            <div className="divs divs__yellow" />
            <div className="divs divs__green" />
          </div>
        </div>
      )}
      {filteredData.length !== 0 && (
        <div>
          <h1 className="title">Wyniki wyszukiwania</h1>
          <div className="divs">
            <div className="divs divs__yellow" />
            <div className="divs divs__green" />
          </div>
          <div>
            {filteredData.map((product) => {
              return (
                <SearchedProduct
                  id={product.node.id}
                  slug={product.node.slug}
                  img={product.node.photos[0].url}
                  imgAlt={product.node.photos[0].title}
                  title={product.node.title}
                  status={product.node.status}
                />
              );
            })}
          </div>
        </div>
      )}
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulShop {
      edges {
        node {
          id
          title
          status
          photos {
            title
            url
          }
          slug
        }
      }
    }
  }
`;

export default Search;
