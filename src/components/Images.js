import React from "react";

function Images({ image }) {
  return (
    <div className="item">
      <img
        src={image}
        alt=""
        height="60"
        className="img-center"
        style={{ top: "50%" }}
      />
    </div>
  );
}

export default Images;
