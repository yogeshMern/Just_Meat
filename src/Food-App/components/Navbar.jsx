import React from "react";
import "../components/Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FiShoppingCart } from "react-icons/fi";
import { useTypewriter } from "react-simple-typewriter";

const Navbar = () => {
  const navigate = useNavigate();

  const [text] = useTypewriter({
    words: ["Coming Soon..."],
    loop: 0,
  });

  const data = useSelector((state) => state.cart.cartItem);

  return (
    <>
      <nav className="navbar navbar-dark fixed-top navbackground">
        <div className="container-fluid navbackground">
          <p className="navbar-brand navname" style={{ cursor: "pointer" }}>
            <Link to="/" style={{ textDecoration: "none" }}>
              David's Kitchen
            </Link>
          </p>
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
          >
            <p>
              <FiShoppingCart
                className="text-white"
                style={{
                  fontSize: "25px",
                }}
              />

              <span className="text-danger">{data.length}</span>
            </p>
            <span className="navbar-toggler-icon navspan "></span>
          </button>
          <div
            className="offcanvas offcanvas-end text-white "
            tabIndex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
            style={{ backgroundColor: "#1a1613" }}
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                <div className="lead">{text}</div>
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white navspan"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link
                    className="nav-link active zoomnav"
                    aria-current="page"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                    onClick={() => navigate("/contact")}
                  >
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active zoomnav"
                    aria-current="page"
                    data-bs-dismiss="offcanvas"
                    onClick={() => navigate("/about")}
                  >
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active zoomnav"
                    aria-current="page"
                    data-bs-dismiss="offcanvas"
                    onClick={() => navigate("/cart")}
                  >
                    View Cart
                  </Link>
                </li>
              </ul>

              <form className="d-flex mt-3" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-dark" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
