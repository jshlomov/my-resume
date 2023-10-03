import "./pressentation.css";
import React from "react";
import myPicWithoutBG from "../../imgs/myPicWithoutBG.png";
import icon from "../../imgs/images.jpeg";

const Pressentation = () => {
  return (
    <div className="pressContainer">
      <div className="circleDiv">
        <img src={myPicWithoutBG} alt="pic" />
      </div>
      <div className="pressDetails">
        <h2>Hi!!!!!</h2>
        <p>my name is yonatan shlomov.....</p>
      </div>
    </div>
  );
};

export default Pressentation;
