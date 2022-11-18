import React from "react";
import { Link } from "gatsby"

interface Product {
    key: number;
    title: string;
    quantity: number;
    slug: string;
    imgtitle: string;
    imgurl: string;
}

const CampaingsProduct = (props: Product): JSX.Element => {

    return (
        <Link to={props.slug} className="camproduct">
            <img src={props.imgurl} alt={props.imgtitle} className="camproduct__img" />
            <h1 className="camproduct__title">{props.title}</h1>
            <p className="camproduct__mademe">Zaprojectowane przez Mademe</p>
            <div className="camproduct__div">
                <p className="camproduct__div camproduct__div--info">Pozostało: <span>{props.quantity} sztuk</span></p>
                <p className="camproduct__div camproduct__div--info">Zakończenie za: <span> 4 dni </span></p>
                <button
                    className="camproduct__div camproduct__div--button"
                >
                    DODAJ DO KOSZYKA
                </button>
            </div>
        </Link>
    )
}

export default CampaingsProduct