import React from "react";
import "./MainNews.css";
import mainImg from "../images/image-web-3-desktop.jpg";
import mobileImg from "../images/image-web-3-mobile.jpg";
function MainNews() {
  return (
    <div className="main-container">
      <img className="main-img desktop" src={mainImg}></img>
      <img className="main-img mobile" src={mobileImg}></img>
      <div className="second-container">
        <h1>The Bright Future of Web 3.0?</h1>
        <div>
          <p>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button>READ MORE</button>
        </div>
      </div>
    </div>
  );
}

export default MainNews;
