import React, { forwardRef, useRef, useState } from "react";
import Items from "./Items";
import Images from "./Images";

function Avatar({ link }, ref) {
  const [nameLink, setNameLink] = useState("Body");
  const nameLinkRef = useRef();

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
          <h2 ref={nameLinkRef}>{link}</h2>
          <div id="list-item">
            <Images image="character/body/1.png" />
            <Images image="character/body/2.png" />
            <Images image="character/body/3.png" />
            <Images image="character/body/4.png" />
            <Images image="character/body/5.png" />
            <Images image="character/body/6.png" />
            <Images image="character/body/7.png" />
            <Images image="character/body/8.png" />
            <Images image="character/body/9.png" />
            <Images image="character/body/10.png" />
            <Images image="character/body/11.png" />
            <Images image="character/body/12.png" />
            <Images image="character/body/13.png" />
            <Images image="character/body/14.png" />
            <Images image="character/body/15.png" />
            <Images image="character/body/16.png" />
            <Images image="character/body/17.png" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default forwardRef(Avatar);
