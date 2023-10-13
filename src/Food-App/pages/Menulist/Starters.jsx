import React from "react";
import ColdStarters from "../ColdStarters";
import HighlightOne from "../HeighlightFood/HighlightOne";
import { Link } from "react-router-dom";

const Starters = () => {
  return (
    <>
      <div className="container">
        <div className="container starter text-white display-5 mb-5">
          Starters
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

      <ColdStarters />

      <HighlightOne />
    </>
  );
};

export default Starters;
