import React from "react";
import "./Cart.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Calculation from "./Calculation";
import { BsPatchPlusFill } from "react-icons/bs";
import { BsPatchMinusFill } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItem } = useSelector((state) => state.cart);

  const incrementQuantity = (id) => {
    dispatch({ type: "addToCart", payload: { id } });
    dispatch({ type: "calculatePrice" });
  };

  const decrementQuantity = (id) => {
    dispatch({ type: "decrement", payload: { id } });
    dispatch({ type: "calculatePrice" });
  };

  const removeItem = (id) => {
    dispatch({ type: "deleteItem", payload: id });
    dispatch({ type: "calculatePrice" });
  };

  return (
    <>
      <div style={{ marginTop: 100 }}></div>
      {cartItem.map(({ id, image, price, title, quantity }) => {
        return (
          <section
            className="h-100"
            style={{ backgroundColor: "#eee" }}
            key={id}
          >
            <div className="container h-100 py-5 bg-dark">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-10">
                  <div className="card rounded-3 mb-4">
                    <div className="card-body p-4">
                      <div className="row d-flex justify-content-between align-items-center">
                        <div className="col-md-2 col-lg-2 col-xl-2">
                          <img
                            src={image}
                            className="img-fluid rounded-3"
                            alt={title}
                          />
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-3">
                          <p
                            className="lead fw-normal mb-2"
                            style={{ fontFamily: "Libre Baskerville" }}
                          >
                            {title}
                          </p>
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                          <button className="btn btn-link px-2">
                            <BsPatchMinusFill
                              onClick={() => decrementQuantity(id)}
                            />
                          </button>

                          <input
                            id="form1"
                            min="0"
                            name="quantity"
                            value={quantity}
                            type="text"
                            className="form-control form-control-sm"
                            style={{ fontFamily: "Libre Baskerville" }}
                          />

                          <button
                            className="btn btn-link px-2"
                            onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                          >
                            <BsPatchPlusFill
                              onClick={() => incrementQuantity(id)}
                            />
                          </button>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                          <h5
                            className="mb-0"
                            style={{ fontFamily: "Libre Baskerville" }}
                          >
                            Price : ₹{price}
                          </h5>
                        </div>
                        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                          <a className="text-danger">
                            <AiFillDelete onClick={() => removeItem(id)} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <Calculation />
    </>
  );
};

export default Cart;
