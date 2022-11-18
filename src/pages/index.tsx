import React from "react";
import "./../styles/themes/theme.scss"
import { Components } from "./../components";

const IndexPage = () => {

  const { MainHeader, Campaings, Footer, Soon, Past, Unikalni } = Components;

  return (
    <>
      <MainHeader />
      <Campaings />
      <Soon />
      <Past />
      <Unikalni />
      <Footer />
    </>
  )
}

export default IndexPage
