import React from "react";

const Square = ({ color }) => {
  return (
    <div
      style={{
        background: color,
        height: "100px",
        width: "100px"
      }}
    />
  );
};

Square.defaultProps = {
  color: "green"
};

export default Square;
