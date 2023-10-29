import React, { useState, useEffect } from "react";
import ContactDetails from "../contactDetails/contactDetails";

const NavList = (props) => {
  return (
        <ul className="NavbarList">
          <li>
            <a href="#About" onClick={props.cl} >About me</a>
          </li>
          <li>
            <a href="" onClick={props.cl}>Education</a>
          </li>
          <li>
            <a href="#Projects" onClick={props.cl}>Projects</a>
          </li>
          <li>
            <a href="" onClick={props.cl}>Skills & Abilities</a>
          </li>
          <li>
            <a href="#ContactDetails" onClick={props.cl}>Contact details</a>
          </li>
        </ul>
  );
};

export default NavList;
