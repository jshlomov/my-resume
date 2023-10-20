import React, { useState } from "react";
import "./Navbar.css";
import NavList from "./NavList";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="NavContainer">
      <header>Yonatan Shlomov</header>
      <NavList open={open} click={setOpen} />
    </div>
  );
}

export default Navbar;
