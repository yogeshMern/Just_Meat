import React from "react";
import food from "../Data/food.json";

// import { useDispatch } from "react-redux";
// import { toast } from "react-hot-toast";
// import { FiShoppingBag } from "react-icons/fi";
// import { addToCart } from "../Redux/userSlice";

const MainDishes = () => {
  // const dispatch = useDispatch();

  // const handleAdd = (options) => {
  //   dispatch(addToCart(options));
  //   toast.success("Added To Cart");
  //   console.log(options);
  // };

  return (
    <>
      <div className="starter">
        <h6>M A I N D I S H E S</h6>
      </div>

      <div className="contain">
        {food.slice(6, 9).map(({ id, image, price, description, title }) => {
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
        {food.slice(9, 12).map(({ id, image, price, description, title }) => {
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

export default MainDishes;
