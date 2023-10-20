import React, { useState, useEffect } from "react";
import ContactDetails from '../contactDetails/contactDetails'
import { Link } from "react-router-dom";

const NavList = (props) => {

  return (
    <div className="Navbar" /*style={{display: !props.open? "block" : "none"}}*/>
      <nav>
        <ul>
        <li>
            <a href="">About me</a>
          </li>
          <li>
            <a href="">Education</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Skills & Abilities</a>
          </li>
          <li>
            <a href="">Contact details</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavList;
