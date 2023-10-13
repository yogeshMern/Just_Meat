import React from "react";
import food from "../Data/food.json";
import "./css/ColdStarter.css";
// import "./Pages.css";
// import "./MenuStarters.css";
// import { FiShoppingBag } from "react-icons/fi";
// import { toast } from "react-hot-toast";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../Redux/userSlice";

const ColdStarters = () => {
  // const dispatch = useDispatch();

  // const handleAdd = (options) => {
  //   dispatch(addToCart(options));
  //   toast.success("Added To Cart");
  //   console.log(options);
  // };

  return (
    <>
      <div className="starter">
        <h6>C O L D S T A R T E R S</h6>
      </div>
      <div className="contain">
        {food.slice(0, 3).map(({ id, image, price, description, title }) => {
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
        {food.slice(3, 6).map(({ id, image, price, description, title }) => {
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

      {/* <div className="container gridcontainer">
        {food.slice(3, 6).map(({ id, image, price, description, title }) => {
          return (
            <div className="gridd" key={id}>
              <div className="parentcard">
                <div className="cardleft">
                  {title}
                  <p
                    className="mt-1"
                    style={{ fontSize: "11px", color: "#7f7f7f" }}
                  >
                    <b className="carddetails">{description}</b>
                  </p>
                </div>
                <div
                  className="cardright cardprice"
                  style={{ color: "#caae5b" }}
                >
                  ${price}
                </div>
              </div>
            </div>
          );
        })}
      </div> */}
    </>
  );
};

export default ColdStarters;

{
  /* <FiShoppingBag /> */
}
{
  /*  className="p-2 fishoppingbag"
                  onClick={() =>
                    handleAdd({ id, image, price, description, title })
                  }*/
}
