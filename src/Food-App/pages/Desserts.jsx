import React from "react";
import food from "../Data/food.json";

// import { FiShoppingBag } from "react-icons/fi";
// import { toast } from "react-hot-toast";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../Redux/userSlice";

const Desserts = () => {
  // const dispatch = useDispatch();

  // const handleAdd = (options) => {
  //   dispatch(addToCart(options));
  //   console.log(options);
  //   toast.success("Added To Cart");
  // };

  return (
    <>
      <div className="starter">
        <h6>D E S S E R T S</h6>
      </div>

      <div className="contain">
        {food.slice(24, 27).map(({ id, image, price, description, title }) => {
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
        {food.slice(27, 30).map(({ id, image, price, description, title }) => {
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

export default Desserts;
{
  /* <FiShoppingBag
className="p-2 fishoppingbag"
onClick={() =>
  handleAdd({ id, image, price, description, title })
}
/> */
}
