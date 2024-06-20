import React from "react";

function Nav({ name, handleClick, isActive }) {
  // const handleNavItemClick = () => {
  //   setActiveLink((prevActiveLink) => !prevActiveLink);
  // };
  return (
    <li
      onClick={handleClick}
      className={`nav-item ${isActive ? "active" : ""}`}
    >
      <span className="title">{name}</span>
    </li>
  );
}

export default Nav;
