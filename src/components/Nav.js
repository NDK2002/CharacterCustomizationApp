import React, { forwardRef, useImperativeHandle } from "react";

function Nav({ name, handleClick }, ref) {
  useImperativeHandle(ref, () => {
    return {
      name,
    };
  });
  return (
    <li className="nav-item" onClick={handleClick}>
      {name}
    </li>
  );
}

export default forwardRef(Nav);
