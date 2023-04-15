import React from "react";
import error from "../Images/sorry.png";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="error">
      <img src={error} alt="Error_image" />
      <h2>Sorry , Requested URL does not exist !</h2>
      <button onClick={() => navigate(-1)}>go back</button>
    </div>
  );
};

export default Error;
