import React, { useState } from "react";
import Nav from "./Nav";
import Avatar from "./Avatar";

export default function Game() {
  const [selectedName, setSelectedName] = useState("Body");
  const navItems = [
    "Body",
    "Hairs",
    "Eyes",
    "Eyebrows",
    "Mouths",
    "Glasses",
    "Hats",
    "Earrings",
    "Neckwear",
    "Clothing (L1)",
    "Clothing (L2)",
    "Clothing (L3)",
  ];

  const handleClick = (name) => {
    setSelectedName(name);
  };

  return (
    <div className="App">
      <Avatar link={selectedName} />
      <ul className="nav-group">
        {navItems.map((item, index) => (
          <Nav
            key={item}
            name={item}
            handleClick={() => handleClick(item)}
            isActive={selectedName === item}
          />
        ))}
      </ul>
    </div>
  );
}
