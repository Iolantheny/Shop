import * as React from "react";
import { Link } from "gatsby"
import Layout from "../components/Layout";

const Zaloguj = () => {
    return (
        <Layout>
            <div className="zaloguj">
                <h1 className="zaloguj__title">ZALOGUJ SIĘ</h1>
                <form className="zaloguj__form">
                    <input
                        type="text"
                        placeholder="Login"
                    />
                    <input
                        type="text"
                        placeholder="Hasło"
                    />
                </form>
                <button className="zaloguj__forgot">Nie pamiętasz hasła?</button>
                <Link to="/rejestracja" className="zaloguj__zarejestruj">Nie masz konta? Zarejestruj się</Link>
                <button className="zaloguj__button">ZALOGUJ</button>
            </div>
        </Layout>
    )
}

export default Zaloguj