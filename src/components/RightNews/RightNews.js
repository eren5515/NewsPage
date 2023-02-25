import React from "react";
import "./RightNews.css";
function RightNews() {
  return (
    <div className="right-div">
      <h1>New</h1>
      <div className="news-div">
        <div className="inner-div">
          
          <a href="#">Hydrogen VS Electric Cars</a>
          <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
        </div>
        <hr></hr>
        <div className="inner-div">
          
          <a href="#">The Downsides of AI Artistry</a>
          <p>
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
        </div>
        <hr></hr>
        <div className="inner-div">
          
          <a href="#">Is VC Funding Drying Up?</a>
          <p>
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </div>
      </div>
    </div>
  );
}

export default RightNews;
