import * as React from "react";
import { Components } from ".";

const Unicate = () => {
  const { Content1, Content2, Content3 } = Components;

  return (
    <>
      <div className="unikalni">
        <h1 className="unikalni__title1">Co sprawia</h1>
        <h2 className="unikalni__title2">
          Że jesteśmy unikalni?<span>_</span>
        </h2>
      </div>
      <Content1 />
      <Content2 />
      <Content3 />
    </>
  );
};

export default Unicate;
