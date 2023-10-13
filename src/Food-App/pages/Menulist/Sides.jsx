import React from "react";
import SideDishes from "../SideDishes";
import HighlightFour from "../HeighlightFood/HighlightFour";
import { Link } from "react-router-dom";

const Sides = () => {
  return (
    <>
      <div className="container">
        <div className="container starter text-white display-5 mb-5">
          Sides
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

      <SideDishes />
      <HighlightFour />
    </>
  );
};

export default Sides;
