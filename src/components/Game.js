import React, { useRef, useState } from "react";
import Nav from "./Nav";
import Avatar from "./Avatar";

export default function Game() {
  // const nameLinkRef = useRef();
  // const handleClick = () => {
  //   if (nameLinkRef.current) {
  //     console.log(nameLinkRef.current.name);
  //   }
  // };
  // return (
  //   <div className="App">
  //     <Avatar link={nameLinkRef} />
  //     <ul className="nav-group">
  //       <Nav name="Body" ref={nameLinkRef} handleClick={handleClick} />
  //       <Nav name="Face" />
  //       <Nav name="Hairs" />
  //       <Nav name="Clothes" />
  //       <Nav name="Accessories" />
  //     </ul>
  //   </div>
  // );
  const [selectedName, setSelectedName] = useState("Body");
  const navItems = ["Body", "Face", "Hairs", "Clothes", "Accessories"];
  // const navRefs = useRef(navItems.map(() => React.createRef()));

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
            // ref={navRefs.current[index]}
            handleClick={() => handleClick(item)}
          />
        ))}
      </ul>
    </div>
  );
}
