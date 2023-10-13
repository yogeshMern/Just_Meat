import React from "react";
import food from "../../Data/food.json";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";

const PageFour = () => {
  const dispatch = useDispatch();

  const handleAdd = (options) => {
    dispatch({ type: "addToCart", payload: options });
    dispatch({ type: "calculatePrice" });
    toast.success("Added to Cart");
  };

  return (
    <>
      {food
        .slice(33, 34)
        .map(({ id, image, price, title, description, category }) => {
          return (
            <div className="highlight" key={id}>
              <div className="image">
                <img src={image} alt="fish" />
              </div>
              <div className="content">
                <h5>{category}</h5>
                <h4>{title}</h4>
                <p>{description}</p>
                <button>Order Food</button>
                <h3>${price}</h3>
              </div>
            </div>
          );
        })}

      {/* {food
        .slice(33, 34)
        .map(({ id, image, price, title, description, category }) => {
          return (
            <div className="container heighlightparent" key={id}>
              <div className="container">
                <div className="container text-justify">
                  <div className="card float-left">
                    <div className="row">
                      <div className="col-sm-7">
                        <div className="card-block">
                          <div className="container">
                            <h2
                              className="lead mt-5 fw-bold"
                              style={{ color: "red", fontSize: "17px" }}
                            >
                              {category}
                            </h2>
                          </div>
                          <div className="container">
                            <div className="parentcard2">
                              <div className="cardleft2">
                                {title}
                                <p
                                  className="mt-1"
                                  style={{ fontSize: "11px", color: "#7f7f7f" }}
                                >
                                  <b>{description}</b>
                                </p>
                                <button
                                  onClick={() =>
                                    handleAdd({
                                      id,
                                      image,
                                      price,
                                      title,
                                      quantity: 1,
                                    })
                                  }
                                  type="submit"
                                  className="btn btn-dark w-5 heighlightpage buttonheighlightpage"
                                  style={{ width: "200px", height: "40px" }}
                                >
                                  Order Food
                                </button>
                              </div>
                              <div
                                className="cardright2 fw-bold"
                                style={{ color: "#caae5b" }}
                              >
                                ${price}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-sm-5">
                        <img
                          className="d-block w-100"
                          src={image}
                          alt="meatBurger"
                          style={{ width: "100%", height: "270px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

      <br />
      <br /> */}
    </>
  );
};

export default PageFour;
