import React from "react";
import Products from "./Products";
import { BsArrowUp } from "react-icons/bs";

const Home = () => {
  return (
    <div className="Home" id="top">
      <a href="#top" id="topUp">
        <BsArrowUp />
      </a>
      <div className="bg">
        <div className="bgTxt">
          <h1>
            Welcome to Abhi's Store <br />
            You will find everything you need here...
          </h1>
        </div>
      </div>
      <h3 className="Product">Products</h3>
      <div className="prodSec">
        <Products />
      </div>
    </div>
  );
};

export default Home;
