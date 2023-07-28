import * as React from "react";
import Subscribe from "./Subscribe";
import { GoLocation, GoMail } from "react-icons/go";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__contact">
        <p>+48 502 456 789</p>
        <p>
          <GoLocation /> Kraków, ul. Wrocławska 111
        </p>
        <p>
          <GoMail /> sklep@mademe.pl
        </p>
      </div>
      <div className="footer__info">
        <p>Informacje</p>
        <div />
        <p>Regulamin</p>
        <p>Polityka prywatności</p>
        <p>Kontakt</p>
      </div>
      <Subscribe />
    </div>
  );
};

export default Footer;
