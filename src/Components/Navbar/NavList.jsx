import React, { useState, useEffect } from "react";
import ContactDetails from '../contactDetails/contactDetails'
import { Link } from "react-router-dom";

const NavList = () => {

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
