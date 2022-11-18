import React from "react";
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { useShoppingCart } from "../context";
import { Components } from "./../components";
import { FaTruckMoving } from 'react-icons/fa';

const Koszyk = ({ data }) => {

    const { Layout, CartItem } = Components;

    const { cartItems } = useShoppingCart()

    const deliveryPrice = 14.99

    const totalPrice = cartItems.reduce((total, cartItem) => {
        const item = cartItems.find(i => i.id === cartItem.id)
        const price = total + (item?.price || 0) * cartItem.quantity
        if (price > 200) {
            return price
        } else {
            return price + deliveryPrice
        }
    }, 0)

    return (
        <Layout>
            {cartItems.length === 0 && (
                <div className="cart">
                    <h1 className="cart__title">KOSZYK JEST PUSTY</h1>
                    <div className="divs">
                        <div className="divs divs__yellow" />
                        <div className="divs divs__green" />
                    </div>
                </div>
            )}

            {cartItems.length !== 0 && (
                <div className="cart">
                    <h1 className="cart__title">KOSZYK I PŁATNOŚĆ</h1>
                    <div className="cart__divs">
                        <div className="cart__divs cart__divs--blue" />
                        <div className="cart__divs cart__divs--red" />
                    </div>
                    <div className="cart__content">
                        <div>
                            {cartItems.map(item => {
                                return (
                                    <CartItem
                                        key={item.id}
                                        id={item.id}
                                        title={item.title}
                                        quantity={item.quantity}
                                        imgtitle={item.photos.title}
                                        imgurl={item.photos.url}
                                        price={item.price}
                                    />
                                )
                            })}
                            <div className="cart__content cart__content--delivery">
                                <FaTruckMoving className="cart__content cart__content--truck" />
                                <div className="cart__content cart__content--text">
                                    <h2>Wysyłka <span>| Kurier DPD</span></h2>
                                    <p><span>Cena: </span>{deliveryPrice} <span> Darmowa powyżej 200zł</span></p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="cart__totalprice">
                                <p><span>Kwota do zapłaty: </span>{totalPrice} zł</p>
                            </div>
                            <div className="cart__przelewy">
                                <Img
                                    fluid={data.file.childImageSharp.fluid}
                                    className="cart__przelewy cart__przelewy--img"
                                    alt="obraz" />
                                <p>Płatność przez <span>Przelewy24</span></p>
                            </div>
                            <div className="cart__discount">
                                <p>WPISZ KOD RABATOWY</p>
                                <input
                                    type="text"
                                    aria-label="KodRabatowy"
                                    placeholder="DISCOUNTCODE"
                                />
                            </div>
                            <button className="cart__link"><Link to="/podsumowanie" >Przejdź do płatności</Link></button>
                        </div>
                    </div>
                </div>
            )}
        </Layout>
    )
}

export const query = graphql`
    query{
        file(relativePath: {eq: "przelewy24.png"}) {
            childImageSharp {
                fluid{
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`

export default Koszyk