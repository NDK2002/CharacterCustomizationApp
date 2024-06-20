import React, { useEffect, useState } from "react";
import { total, getAllPart, partItems, partDetails } from "./Items";
import Images from "./Images";

function Avatar({ link }) {
  const [parts, setParts] = useState([]);
  const [selectedImage, setSelectedImage] = useState([]);

  useEffect(() => {
    partItems.length = 0;
    getAllPart();
    setParts([...partItems]);
    randomize();
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

  const handleResetBtn = () => {
    setSelectedImage([]);
    const bodyPart = {
      classify: "body",
      key: "body_1",
      link: "character/body/1.png",
      zIndex: 0,
    };

    setSelectedImage((state) => [...state, bodyPart]);
  };

  const randomize = () => {
    setSelectedImage([]);
    const partsConfig = Object.keys(total).map((part) => {
      const count = total[part];
      const details = partDetails[part];
      const randomIndex = Math.floor(Math.random() * count) + 1;
      return {
        classify: details.classify || part,
        key: `${part}_${randomIndex}`,
        link: `${details.origin}${randomIndex}.png`,
        zIndex: details.z_index,
      };
    });

    setSelectedImage(partsConfig);
  };

  const applyToAvatar = (key) => {
    partItems.forEach((obj) => {
      if (obj.key === key) {
        const { link, zIndex, classify } = obj;
        const part = { classify, key, link, zIndex };

        const updatedImage = selectedImage.filter(
          (item) => item.classify !== classify
        );

        setSelectedImage([...updatedImage, part]);
      }
    });
  };

  return (
    <div className="avatar-group">
      <div className="showing-avatar">
        <div className="avatar-wrapper">
          <div className="avatar">
            {selectedImage.map((item) => (
              <img
                key={item.key}
                src={item.link}
                alt=""
                width={270}
                style={{
                  zIndex: `${item.zIndex}`,
                  position: "absolute",
                  top: 0,
                  left: 0,
                }}
              />
            ))}
          </div>

          <div className="btn-center">
            <button className="button" onClick={randomize}>
              Randomize!
            </button>
            <button className="button" onClick={handleResetBtn}>
              Reset
            </button>
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
                <div onClick={() => applyToAvatar(item.key)} key={item.key}>
                  <Images image={item.link} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Avatar;
