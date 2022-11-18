import * as React from "react";
import { Link } from "gatsby"
import Navbar from "./Navbar";

const MainHeader = () => {
  return (
    <div className="mainheader">
      <Navbar />
      <div className="mainheader__text">
        <h1 className="mainheader__text mainheader__text--h1">Lorem Ipsum dolor sit</h1>
        <h2 className="mainheader__text mainheader__text--h2">Loremimps & dolor</h2>
        <Link to="/zaloguj" className="mainheader__text mainheader__text--link">Lorem Ipsum</Link>
      </div>
    </div>
  )
}

export default MainHeader

