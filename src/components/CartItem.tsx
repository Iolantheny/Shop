import * as React from "react";
import { useShoppingCart } from "../context";

interface Item {
    id: number;
    title: string;
    quantity: number;
    imgtitle: string;
    imgurl: string;
    price: number;
}

const CartItem = (props: Item): JSX.Element => {

    const { removeFromCart } = useShoppingCart()

    const x = Math.abs(props.quantity * props.price)

    const suma = x.toFixed(2)

    return (
        <div className="cartitem">
            <img src={props.imgurl} alt={props.imgtitle} className="cartitem__img" />
            <div className="cartitem__content">
                <h2 className="cartitem__content cartitem__content--title">{props.title}</h2>
                <p><span>Cena: </span>{props.price} zł</p>
                <p><span>Sztuk: </span>{props.quantity}</p>
                <p><span>Suma: </span>{suma} zł</p>
            </div>
            <button onClick={() => removeFromCart(props.id)} className="cartitem__button">USUŃ Z KOSZYKA</button>
        </div>
    )
}

export default CartItem