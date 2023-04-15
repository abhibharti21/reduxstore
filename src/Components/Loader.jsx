import React from "react";
import loader from "../Images/loader.gif";

const Loader = () => {
  return (
    <div className="loader">
      <img src={loader} alt="loader_image" />
    </div>
  );
};

export default Loader;
