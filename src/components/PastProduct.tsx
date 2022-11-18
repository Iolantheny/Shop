import * as React from "react";
import { Link } from "gatsby"
 
interface Product {
    title: string;
    imgtitle: string;
    imgurl: string;
    last: string;
    slug: string;
}

const PastProduct = (props: Product): JSX.Element => {
    return (
        <Link to={props.slug} className="pastproduct">
            <img src={props.imgurl} alt={props.imgtitle} className="pastproduct__img" />
            <h3 className="pastproduct__title">{props.title}</h3>
            <p className="pastproduct__mademe">Zaprojectowane przez Mademe</p>
            <p className="pastproduct__info">Ostatnia dostępność: <span>{props.last}</span></p>
        </Link>
    )
}

export default PastProduct