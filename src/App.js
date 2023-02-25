import React from "react";
import Navbar from "./components/Navbar/Navbar";
import MainNews from "./components/MainNews/MainNews";
import RightNews from "./components/RightNews/RightNews";
import BottomNews from "./components/BottomNews/BottomNews";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <div className="top-div">
        <MainNews />
        <RightNews/>
      </div>
      <BottomNews/>
    </div>
  );
}

export default App;
