import React, { useState } from "react";
import "./Navbar.css";
import Burger from "./burger";
import NavList from "./NavList";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <header>Yonatan Shlomov</header>
      <Burger open={open} setOpen={setOpen} />
      <NavList open={open} />
    </div>
  );
}

export default Navbar;
