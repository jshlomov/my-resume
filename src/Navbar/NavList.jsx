import React, { useState, useEffect } from "react";

const NavList = ({ open }) => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
    console.log(windowWidth);
  };
  window.addEventListener("resize", handleResize, false);

  return (
    <div
      className="Navbar"
      style={{ display: open || windowWidth > 768 ? "block" : "none"}}
    >
      <nav>
        <ul>
          <li>
            <a href=".Contact-details">Contact details</a>
          </li>
          <li>
            <a href="">Summary</a>
          </li>
          <li>
            <a href="">Education</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Programing</a>
          </li>
          <li>
            <a href="">Skills & Abilities</a>
          </li>
          <li>
            <a href="">Volunteer</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavList;
