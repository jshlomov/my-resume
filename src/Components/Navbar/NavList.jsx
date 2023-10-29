import React, { useState, useEffect } from "react";
import ContactDetails from "../contactDetails/contactDetails";

const NavList = (props) => {
  return (
        <ul className="NavbarList">
          <li>
            <a href="#About">About me</a>
          </li>
          <li>
            <a href="">Education</a>
          </li>
          <li>
            <a href="#Projects">Projects</a>
          </li>
          <li>
            <a href="">Skills & Abilities</a>
          </li>
          <li>
            <a href="#ContactDetails">Contact details</a>
          </li>
        </ul>
  );
};

export default NavList;
