import * as React from "react"
import { Link } from "gatsby"

const Subskrybuj = () => {

    return (
        <div className="sub">
            <h1 className="sub__title">Zasubskrybuj!</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <form method="post" className="sub__form">
                <input type="text" placeholder="Wpisz adres email" required />
                <span>|</span>
                <button type="submit"><Link to="/dziekuje">SUBSKRYBUJ</Link></button>
            </form>
        </div>
    )
}

export default Subskrybuj