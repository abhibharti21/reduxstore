import React from "react";

const Empty = ({ title }) => {
  return (
    <div className="Empty">
      <h1>Sorry , You did not add any product to your {title}.</h1>
    </div>
  );
};

export default Empty;
