import React from "react";
import NavList from "./NavList";
import './Navbar.css';

function FullScreenNavbar(props) {
  return (
    <div className="fullScreenNavbar">
      <NavList cl={props.cl}/>
    </div>
  );
}

export default FullScreenNavbar;

// actualy there is no nedd to this component I could place "className"
// on NavList components in the Navbar, but I saw this aproach
// in youtube and I did it.