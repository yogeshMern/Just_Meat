import React from "react";
import zomans from "../../../Data/Zomans.json";
import "./Zoman.css";

const ZomansData = () => {
  return (
    <>
      <div className="container">
        <div className="container">
          {zomans.map(({ id, title, image, description }) => {
            return (
              <ul
                className="tilesWrap"
                style={{ display: "inline-block" }}
                id={id}
              >
                <li>
                  <h2>
                    <img
                      src={image}
                      alt={title}
                      style={{ width: "auto", height: 70 }}
                    />
                  </h2>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <button>Read more</button>
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ZomansData;
