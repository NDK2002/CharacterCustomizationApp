import React, { useState } from "react";

function Nav({ name, handleClick, isActive }) {
  const [activeLink, setActiveLink] = useState(false);

  const handleNavItemClick = () => {
    setActiveLink((prevActiveLink) => !prevActiveLink);
  };
  return (
    <li
      onClick={handleClick}
      className={`nav-item ${isActive ? "active" : ""}`}
    >
      <span className="title" onClick={handleNavItemClick}>
        {name}
      </span>
    </li>
  );
}

export default Nav;
