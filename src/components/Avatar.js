import React, { useEffect, useState } from "react";
import { getAllPart, partItems } from "./Items";
import Images from "./Images";

function Avatar({ link }) {
  const [parts, setParts] = useState([]);

  useEffect(() => {
    partItems.length = 0;
    getAllPart();
    setParts([...partItems]);
  }, []);

  const getClassification = (classify) => {
    switch (classify) {
      case "Clothing (L1)":
        return "clothing_1";
      case "Clothing (L2)":
        return "clothing_2";
      case "Clothing (L3)":
        return "clothing_3";
      default:
        return link.toLowerCase();
    }
  };
  const classification = getClassification(link);

  return (
    <div className="avatar-group">
      <div className="showing-avatar">
        <div className="avatar-wrapper">
          <div className="avatar">
            <img src="character/body/11.png" alt="" />
          </div>
          <div className="btn-center">
            <button className="button">Randomize!</button>
            <button className="button">Reset</button>
          </div>
        </div>
      </div>
      <div className="showing-categories">
        <div className="display-categories">
          <h2>{link}</h2>
          <div id="list-item">
            {parts
              .filter((item) => item.classify === classification)
              .map((item) => (
                <Images key={item.key} image={item.link} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Avatar;
