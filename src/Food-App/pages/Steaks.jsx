import React from "react";
import food from "../Data/food.json";

// import { FiShoppingBag } from "react-icons/fi";
// import { toast } from "react-hot-toast";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../Redux/userSlice";

const Steaks = () => {
  // const dispatch = useDispatch();

  // const handleAdd = (options) => {
  //   dispatch(addToCart(options));
  //   toast.success("Added To Cart");
  //   console.log(options);
  // };

  return (
    <>
      <div className="starter">
        <h6>S T E A K S</h6>
      </div>

      <div className="contain">
        {food.slice(12, 15).map(({ id, image, price, description, title }) => {
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
        {food.slice(15, 18).map(({ id, image, price, description, title }) => {
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

export default Steaks;
