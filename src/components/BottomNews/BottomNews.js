import React from "react";
import "./BottomNews.css";
import RetroPC from "../images/image-retro-pcs.jpg";
import Laptops from "../images/image-top-laptops.jpg";
import Gaming from "../images/image-gaming-growth.jpg";

function BottomNews() {
  return (
    <div className="main-div">
      <div className="second-div">
        <img src={RetroPC}></img>
        <div className="third-div">
          <h1>01</h1>
          <a href="#">Reviving Retro PCs</a>
          
          <p> What happens when old PCs are given modern upgrades?</p>
        </div>
      </div>
      <div className="second-div">
        <img src={Laptops}></img>
        <div className="third-div">
          <h1>02</h1>
          <a href="#">Top 10 Laptops of 2022</a>
          
          <p> Our best picks for various needs and budgets.</p>
        </div>
      </div>
      <div className="second-div">
        <img src={Gaming}></img>
        <div className="third-div">
          <h1>03</h1>
          <a href="#">The Growth of Gaming</a>
          
          <p> How the pandemic has sparked fresh opportunities.</p>
        </div>
      </div>
    </div>
  );
}

export default BottomNews;
