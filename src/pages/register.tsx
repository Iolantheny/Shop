import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { Link, navigate } from "gatsby";

const Register = () => {
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isValid, setValid] = useState<number>();

  const validate = () => {
    return name.length & surname.length & email.length & password.length;
  };

  useEffect(() => {
    const isValid = validate();
    setValid(isValid);
  }, [name, surname, email, password]);

  const Submit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    navigate("/dziekuje");
  };

  return (
    <Layout>
      <div className="register">
        <h1 className="register__title">ZAREJESTRUJ SIĘ</h1>
        <form onSubmit={Submit} className="register__form">
          <input
            type="text"
            aria-label="name"
            placeholder="Imię"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            aria-label="nazwisko"
            placeholder="Nazwisko"
            onChange={(e) => setSurname(e.target.value)}
          />
          <input
            type="email"
            aria-label="email"
            placeholder="Adres email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            aria-label="password"
            placeholder="Hasło"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Link to="/zaloguj">Masz już konto? Zaloguj się</Link>
          <button type="submit" disabled={!isValid}>
            ZAREJESTRUJ SIĘ
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
