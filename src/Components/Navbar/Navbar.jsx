import React, { useState } from "react";
import "./Navbar.css";
import { CgMenuRound } from "react-icons/cg";
import { CgCloseO } from "react-icons/cg";
import MobileNavbar from "./MobileNavbar";
import FullScreenNavbar from "./FullScreenNavbar";
import NavList from "./NavList";

function Navbar() {

  const [open, setOpen] = useState(false);

  const HamburgerIcon = (
    <CgMenuRound
      className="Hamburger"
      size="40px"
      color="white"
      onClick={() => setOpen(!open)}
    />
  );
  const CloseIcon = (
    <CgCloseO
      className="Hamburger"
      size="40px"
      color="white"
      onClick={() => setOpen(!open)}
    />
  );

  return (
    <div className="NavContainer">
      <header>
        Yonatan Shlomov
        {!open ? HamburgerIcon : CloseIcon}
      </header>
      {open && <MobileNavbar cl={() => setOpen(!open)} />}
      <FullScreenNavbar /> {/* only in ful screen */}
    </div>
  );
}

export default Navbar;
