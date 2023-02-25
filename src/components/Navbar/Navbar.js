import React, { useState } from "react";
import NavItems from "./NavItems";
import NavLogo from "../images/logo.svg";
import IconMenu from "../images/icon-menu.svg";
import IconClose from "../images/icon-menu-close.svg";
import "./Navbar.css";

function Navbar() {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked(!isClicked);
  }

  return (
    <nav className="Navbar">
      <div className="logoDiv">
        <img className="nav-logo" src={NavLogo}></img>
        <img
          className="menu-icon"
          onClick={handleClick}
          src={isClicked ? IconClose : IconMenu}
        ></img>
      </div>
      <ul className={isClicked ? "NavButtons active" : "NavButtons"}>
        {NavItems.map((item, index) => {
          return (
            <li>
              <a href={item.url} key={index} className={item.className}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
