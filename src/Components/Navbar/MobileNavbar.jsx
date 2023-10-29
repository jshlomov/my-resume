import React from "react";
import NavList from "./NavList";
import './Navbar.css';

function MobileNavbar(props) {
  return (
    <div className="mobileNavbar">
      <NavList cl={props.cl}/>
    </div>
  );
}

export default MobileNavbar;

// actualy there is no nedd to this component I could place "className"
// on NavList components in the Navbar, but I saw this aproach
// in youtube and I did it.
