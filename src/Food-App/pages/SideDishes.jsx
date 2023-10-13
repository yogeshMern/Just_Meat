import React from "react";
// import { FiShoppingBag } from "react-icons/fi";
import food from "../Data/food.json";

// import { toast } from "react-hot-toast";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../Redux/userSlice";

const SideDishes = () => {
  // const dispatch = useDispatch();

  // const handleAdd = (options) => {
  //   dispatch(addToCart(options));
  //   toast.success("Added To Cart");
  //   console.log(options);
  // };

  return (
    <>
      <div className="starter">
        <h6>S I D E D I S H E S</h6>
      </div>

      <div className="contain">
        {food.slice(18, 21).map(({ id, image, price, description, title }) => {
          return (
            <div className="parent text-white" key={id}>
              <h6>{title}</h6>
              <p style={{ fontSize: "12px", color: "#7f7f7f" }}>
                {description}
              </p>
              <p style={{ color: "#caae5b" }}>${price}</p>
            </div>
          );
        })}
      </div>

      <div className="contain">
        {food.slice(21, 24).map(({ id, image, price, description, title }) => {
          return (
            <div className="parent text-white" key={id}>
              <h6>{title}</h6>
              <p style={{ fontSize: "12px", color: "#7f7f7f" }}>
                {description}
              </p>
              <p style={{ color: "#caae5b" }}>${price}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SideDishes;
