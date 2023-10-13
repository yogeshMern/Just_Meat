import React from "react";
import "./NavbarPages.css";
import ZomansData from "./Zomansfolder/ZomansData";

const About = () => {
  return (
    <>
      <div
        className="centered text-center"
        style={{
          fontSize: "25px",
          fontWeight: "lighter",
          letterSpacing: "2px",
          marginTop: "100px",
          color: "white",
        }}
      >
        Better food for more people
        <p className="mt-2 abouttop" style={{ letterSpacing: "7px" }}>
          scroll for more
        </p>
        <hr />
      </div>

      <div className="container crousaltop">
        <div className="container">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner" style={{ borderRadius: "20px" }}>
              <div className="carousel-item active">
                <img
                  src="./foodimage/crousal1.jpg"
                  className="d-block w-100"
                  alt="crousalimage"
                  style={{ borderRadius: "20px" }}
                />
              </div>
              <div className="carousel-item">
                <img
                  src="./foodimage/crousal2.jpg"
                  className="d-block w-100"
                  alt="crousalimage"
                  style={{ borderRadius: "20px" }}
                />
              </div>
              <div className="carousel-item">
                <img
                  src="./foodimage/crousal3.jpg"
                  className="d-block w-100"
                  alt="crousalimage"
                  style={{ borderRadius: "20px" }}
                />
              </div>
              <div className="carousel-item">
                <img
                  src="./foodimage/crousal4.jpg"
                  className="d-block w-100"
                  alt="crousalimage"
                  style={{ borderRadius: "20px" }}
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next "
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

          <div className="mt-3"></div>
        </div>
      </div>

      <div className="container text-white">
        <p
          className="fs-4 text-start mx-3 text-justify"
          style={{ letterSpacing: "1px" }}
        >
          Improving quality of food
        </p>
        <p
          className="mx-3 text-start text-justify"
          style={{ letterSpacing: "1px" }}
        >
          We are committed to nurturing a neutral platform and are helping food
          establishments maintain high standards through Hyperpure. Food Hygiene
          Ratings is a coveted mark of quality among our restaurant partners.
        </p>
      </div>

      <div className="container mt-5">
        <div className="container">
          <div className="text-white text-justify">
            <p className="fs-1">
              <span className="sapnborder">Who</span> are we?
            </p>
            <p className="crousaltext">
              Launched in 2010, Our technology platform connects customers,
              restaurant partners and delivery partners, serving their multiple
              needs. Customers use our platform to search and discover
              restaurants, read and write customer generated reviews and view
              and upload photos, order food delivery, book a table and make
              payments while dining-out at restaurants. On the other hand, we
              provide restaurant partners with industry-specific marketing tools
              which enable them to engage and acquire customers to grow their
              business while also providing a reliable and efficient last mile
              delivery service. We also operate a one-stop procurement solution,
              Hyperpure, which supplies high quality ingredients and kitchen
              products to restaurant partners. We also provide our delivery
              partners with transparent and flexible earning opportunities.
            </p>
          </div>
        </div>
      </div>

      <div className="container mt-5 text-white">
        <div className="container">
          <p className="display-5">
            <span className="sapnborder">Zomans</span> you may work with
          </p>
          <p className="mt-2 zomandes">
            Here are some of the key Zomans who lead our vision towards better
            food for more people.
          </p>
        </div>
      </div>

      <ZomansData />
    </>
  );
};

export default About;
