import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="copyright-area">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <p className="">&copy; David: +91 8766241484</p>
            </div>
            <div className="col-md-4">
              <div className="social-media">
                Get Connected:
                <Link to="">
                  <i className="fa fa-facebook"></i>
                </Link>
                <Link to="">
                  <i className="fa fa-twitter"></i>
                </Link>
                <Link to="">
                  <i className="fa fa-instagram"></i>
                </Link>
                <Link to="">
                  <i className="fa fa-youtube"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
