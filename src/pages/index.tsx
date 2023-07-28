import React from "react";
import "./../styles/themes/theme.scss";
import { Components } from "./../components";

const IndexPage = () => {
  const { MainHeader, Campaings, Footer, Soon, Past, Unicate } = Components;

  return (
    <>
      <MainHeader />
      <Campaings />
      <Soon />
      <Past />
      <Unicate />
      <Footer />
    </>
  );
};

export default IndexPage;
