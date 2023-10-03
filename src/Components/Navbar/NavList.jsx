import React, { useState, useEffect } from "react";
import ContactDetails from '../contactDetails/contactDetails'

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
      style={{ opacity: open ? "0.89" : windowWidth > 768 ? "1" : "0"}}
    >
      <nav>
        <ul>
          <li>
            <a href=".contactCard" >Contact details</a>
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
