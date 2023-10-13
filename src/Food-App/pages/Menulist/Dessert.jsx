import React from "react";
import Desserts from "../Desserts";
import HighlightFive from "../HeighlightFood/HighlightFive";
import { Link } from "react-router-dom";

const Dessert = () => {
  return (
    <>
      <div className="container">
        <div className="container starter text-white display-5 mb-5">
          Dessert
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

      <Desserts />
      <HighlightFive />
    </>
  );
};

export default Dessert;
