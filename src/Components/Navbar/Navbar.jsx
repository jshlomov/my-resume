import React, { useState } from "react";
import "./Navbar.css";
import NavList from "./NavList";
import { CgMenuRound } from "react-icons/cg";
import MobileNavbar from "./MobileNavbar";
import FullScreenNavbar from "./FullScreenNavbar";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="NavContainer">
      <header>
        Yonatan Shlomov
        <CgMenuRound
          className="Hamburger"
          size="40px"
          color="white"
          onClick={() => setOpen(!open)}
        />
      </header>
      {open && <MobileNavbar />}
      <FullScreenNavbar />
    </div>
  );
}

export default Navbar;
