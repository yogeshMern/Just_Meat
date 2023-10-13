import React from "react";
import ColdStarters from "./ColdStarters";
import MainDishes from "./MainDishes";
import Steaks from "./Steaks";
import SideDishes from "./SideDishes";
import Desserts from "./Desserts";
import { Link } from "react-router-dom";
import HighlightOne from "./HeighlightFood/HighlightOne";
import HighlightTwo from "./HeighlightFood/HighlightTwo";
import HighlightThree from "./HeighlightFood/HighlightThree";
import HighlightFour from "./HeighlightFood/HighlightFour";
import HighlightFive from "./HeighlightFood/HighlightFive";
import "./Menu.css";
// import HotStarters from "./HotStarters";

const Menu = () => {
  return (
    <>
      <div className="menubar">
        <div className="menu">
          <Link to="/">Menu</Link>
        </div>
        <div className="menu">
          <Link to="/starters">Starters</Link>
        </div>
        <div className="menu">
          <Link to="/mains">Mains</Link>
        </div>
        <div className="menu">
          <Link to="/steak">Steak</Link>
        </div>
        <div className="menu">
          <Link to="/sides">Sides</Link>
        </div>
        <div className="menu">
          <Link to="/desserts">Desserts</Link>
        </div>
      </div>

      <ColdStarters />
      <HighlightOne />

      <MainDishes />
      <HighlightTwo />

      <Steaks />
      <HighlightThree />

      <SideDishes />
      <HighlightFour />

      <Desserts />
      <HighlightFive />

      <a href="#" className="top">
        ↑
      </a>
    </>
  );
};

export default Menu;
