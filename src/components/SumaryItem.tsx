import * as React from "react";

interface Item {
    id: number;
    title: string;
    quantity: number;
    imgtitle: string;
    imgurl: string;
    price: number;
}

const SumaryItem = (props: Item): JSX.Element => {

    const x = Math.abs(props.quantity * props.price)

    const suma = x.toFixed(2)

    return (
        <div className="sumaryitem">
            <img src={props.imgurl} alt={props.imgtitle} className="sumaryitem__img" />
            <div className="sumaryitem__content">
                <h2 className="sumaryitem__content sumaryitem__content--title">{props.title}</h2>
                <p><span>Cena: </span>{props.price} zł</p>
                <p><span>Sztuk: </span>{props.quantity}</p>
                <p><span>Suma: </span>{suma} zł</p>
            </div>
        </div>
    )
}

export default SumaryItem