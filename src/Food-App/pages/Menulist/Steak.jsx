import React from "react";
import Steaks from "../Steaks";
import HighlightThree from "../HeighlightFood/HighlightThree";
import { Link } from "react-router-dom";

const Steak = () => {
  return (
    <>
      <div className="container">
        <div className="container starter text-white display-5 mb-5">
          Seak
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

      <Steaks />
      <HighlightThree />
    </>
  );
};

export default Steak;
