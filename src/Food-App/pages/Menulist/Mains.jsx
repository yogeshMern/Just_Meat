import React from "react";
import MainDishes from "../MainDishes";
import HighlightTwo from "../HeighlightFood/HighlightTwo";
import { Link } from "react-router-dom";

const Mains = () => {
  return (
    <>
      <div className="container">
        <div className="container starter text-white display-5 mb-5">
          Mains
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "#ffeba7",
              float: "right",
              cursor: "pointer",
            }}
          >
            ←
          </Link>
          <hr />
        </div>
      </div>

      <MainDishes />
      <HighlightTwo />
    </>
  );
};

export default Mains;
