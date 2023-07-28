import React, { useState, useEffect } from "react";
import { navigate } from "gatsby";
import { Components } from "../components";
import { useShoppingCart } from "../context";
import { FaTruckMoving } from "react-icons/fa";

const Summary = () => {
  const { Layout, SumaryItem } = Components;

  const { cartItems } = useShoppingCart();

  const [email, setEmail] = useState<string>("");
  const [tel, setTel] = useState<number>();
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [street, setStreet] = useState<string>("");
  const [streetNumber, setStreetNumber] = useState<string>("");
  const [postcode, setpostcode] = useState<number>();
  const [city, setCity] = useState<string>("");
  const [isValid, setValid] = useState<number>();

  const validate = () => {
    return (
      email.length &
      name.length &
      surname.length &
      street.length &
      streetNumber.length &
      city.length &
      tel?.toString().length
    );
  };

  useEffect(() => {
    const isValid = validate();
    setValid(isValid);
  }, [email, name, surname, street, streetNumber, city]);

  const Submit = (e: any) => {
    e.preventDefault();

    navigate("/zaloguj");
  };

  const deliveryPrice = 14.99;

  const totalPrice = cartItems.reduce((total, cartItem) => {
    const item = cartItems.find((i) => i.id === cartItem.id);
    const price = total + (item?.price || 0) * cartItem.quantity;
    if (price > 200) {
      return price;
    } else {
      return price + deliveryPrice;
    }
  }, 0);

  return (
    <Layout>
      <h1 className="title">DANE DO WYSYŁKI</h1>
      <div className="divs">
        <div className="divs__blue" />
        <div className="divs__red" />
      </div>
      <form onSubmit={Submit} className="sumary">
        <div className="sumary__form">
          <h2>INFORMACJE KONTAKTOWE</h2>
          <input
            type="email"
            aria-label="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            aria-label="tel"
            placeholder="numer telefonu"
            onKeyPress={(e) => {
              if (!/[0-9]/.test(e.key)) {
                e.preventDefault();
              }
            }}
            onChange={(e: string) => setTel(e.target.value)}
          />
          <h2>DANE DO WYSYŁKI</h2>
          <input
            type="text"
            className="input"
            aria-label="name"
            placeholder="Imię"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            className="input"
            aria-label="surname"
            placeholder="Nazwisko"
            onChange={(e) => setSurname(e.target.value)}
          />
          <input
            type="text"
            aria-label="street"
            placeholder="Ulica"
            onChange={(e) => setStreet(e.target.value)}
          />
          <input
            type="text"
            aria-label="street number"
            placeholder="Numer domu / mieszkania"
            onChange={(e) => setStreetNumber(e.target.value)}
          />
          <input
            type="text"
            className="input"
            aria-label="postcode"
            onKeyPress={(e) => {
              if (!/[0-9]/.test(e.key)) {
                e.preventDefault();
              }
            }}
            placeholder="Kod pocztowy"
            onChange={(e: any) => setpostcode(e.target.value)}
          />
          <input
            type="text"
            className="input"
            aria-label="city"
            placeholder="Miejscowość"
            onChange={(e) => setCity(e.target.value)}
          />
        </div>

        <h3>PODSUMOWANIE</h3>
        <div className="divs">
          <div className="divs__blue" />
          <div className="divs__red" />
        </div>
        <div>
          {cartItems.map((item) => {
            return (
              <SumaryItem
                key={item.id}
                id={item.id}
                title={item.title}
                quantity={item.quantity}
                imgtitle={item.photos.title}
                imgurl={item.photos.url}
                price={item.price}
              />
            );
          })}
          <div className="cart__content cart__content--delivery">
            <FaTruckMoving className="cart__content cart__content--truck" />
            <div className="cart__content cart__content--text">
              <h2>
                Wysyłka <span>| Kurier DPD</span>
              </h2>
              <p>
                <span>Cena: </span>
                {deliveryPrice} <span> Darmowa powyżej 200zł</span>
              </p>
            </div>
          </div>
        </div>
        <div className="sumary__totalprice">
          <p>
            <span>Kwota do zapłaty: </span>
            {totalPrice} zł
          </p>
        </div>
        <button type="submit" disabled={!isValid}>
          ZAPŁAĆ
        </button>
      </form>
    </Layout>
  );
};

export default Summary;
