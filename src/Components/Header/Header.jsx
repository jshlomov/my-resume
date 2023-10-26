import React from "react";
import './Header.css'

function Header(props) {
  return (
    <div className="genericHeaderDiv">
      <header className="gevericHeader">{props.header}</header>
      <hr className="genericHr"></hr>
    </div>
  );
}

export default Header;
