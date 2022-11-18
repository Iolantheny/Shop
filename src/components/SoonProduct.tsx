import * as React from "react"

interface Product {
    title: string;
    imgtitle: string;
    imgurl: string;
    premiere: string;
}

const SoonProduct = (props: Product): JSX.Element => {
    return(
        <div className="soonproduct">
            <img src={props.imgurl} alt={props.imgtitle} className="soonproduct__img" />
            <h1 className="soonproduct__title">{props.title}</h1>
            <p className="soonproduct__mademe">Zaprojectowane przez Mademe</p>
            <p className="soonproduct__info">Premiera: <span>{props.premiere}</span></p>  
        </div>
    )
}

export default SoonProduct