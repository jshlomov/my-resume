import React, { useState, useEffect } from "react";
import ContactDetails from '../contactDetails/contactDetails'
import { Link } from "react-router-dom";

const NavList = ({ open }) => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
    console.log(windowWidth);
  };
  window.addEventListener("resize", handleResize, false);

  const [sticky, setSticky] = useState(false);

  useEffect( () => {
    const handleScroll = () => {
      setSticky(window.scrollY > 75);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div className="Navbar">
      <nav>
        <ul>
        <li>
            <a href="">About me</a>
          </li>
          <li>
            <a href="">Contact details</a>
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
