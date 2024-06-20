import React, { useEffect, useState } from "react";
import { total, getAllPart, partItems } from "./Items";
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
    const origin = "character/";
    setSelectedImage([]);
    const partsConfig = [
      { classify: "body", count: total.body, zIndex: 0, folder: "body" },
      { classify: "hairs", count: total.hairs, zIndex: 1, folder: "hair" },
      { classify: "eyes", count: total.eyes, zIndex: 2, folder: "eyes" },
      {
        classify: "eyebrows",
        count: total.eyebrows,
        zIndex: 3,
        folder: "eyebrows",
      },
      { classify: "mouths", count: total.mouths, zIndex: 4, folder: "mouths" },
      {
        classify: "glasses",
        count: total.glasses,
        zIndex: 5,
        folder: "accessories/glasses",
      },
      {
        classify: "hats",
        count: total.hats,
        zIndex: 6,
        folder: "accessories/hats",
      },
      {
        classify: "earrings",
        count: total.earrings,
        zIndex: 7,
        folder: "accessories/earrings",
      },
      {
        classify: "neckwear",
        count: total.neckwear,
        zIndex: 8,
        folder: "accessories/neckwear",
      },
      {
        classify: "layer_1",
        count: total.layer_1,
        zIndex: 9,
        folder: "clothes/layer_1",
      },
      {
        classify: "layer2",
        count: total.layer_2,
        zIndex: 10,
        folder: "clothes/layer_2",
      },
      {
        classify: "layer3",
        count: total.layer_3,
        zIndex: 11,
        folder: "clothes/layer_3",
      },
      {
        classify: "facial_hair",
        count: total.facial_hair,
        zIndex: 12,
        folder: "facial_hair",
      },
    ];

    const randomParts = partsConfig.map((part) => {
      const randomIndex = Math.floor(Math.random() * part.count) + 1;
      return {
        classify: part.classify,
        key: `${part.classify}_${randomIndex}`,
        link: `character/${part.folder}/${randomIndex}.png`,
        zIndex: part.zIndex,
      };
    });

    setSelectedImage(randomParts);
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
