import React from "react"
import { Link } from "gatsby"
import { useShoppingCart } from "../context";

interface Product {
    id: number;
    slug: string;
    img: string;
    imgAlt: string;
    title: string;
    status: string
}

const SearchedProduct = (props: Product): JSX.Element => {

    const { addItemsQuantity } = useShoppingCart();

    return (
        <Link to={props.slug} className="searched">
            <img src={props.img} alt={props.imgAlt} className="searched__img" />
            <div className="searched__info">
                <h2 className="searched__info searched__info--title">{props.title}</h2>
                <p className="searched__info searched__info--status">{props.status}</p>
                {
                    props.status === "available" &&
                    <button
                        className="searched__info searched__info--button"
                        onClick={() => addItemsQuantity(props.id)}
                    >
                        DODAJ DO KOSZYKA
                    </button>
                }
            </div>
        </Link>
    )
}

export default SearchedProduct