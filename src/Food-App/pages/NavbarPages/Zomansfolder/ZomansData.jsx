import React from "react";
import zomans from "../../../Data/Zomans.json";
import "./Zoman.css";

const ZomansData = () => {
  return (
    <>
      {zomans.map((data) => {
        return (
          <div className="container">
            <div className="container">
              <ul
                className="tilesWrap"
                key={data.id}
                style={{ display: "inline-block" }}
              >
                <li>
                  <h2>
                    <img
                      src={data.image}
                      alt={data.title}
                      style={{ width: "auto", height: 70 }}
                    />
                  </h2>
                  <h3>{data.title}</h3>
                  <p>{data.description}</p>
                  <button>Read more</button>
                </li>
              </ul>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ZomansData;
