import React from "react";
import { useSelector } from "react-redux";
import PageNotFound from "./PageNotFound";
const Calculation = () => {
  const { subTotal, shipping, total, tax } = useSelector((state) => state.cart);

  return (
    <>
      {subTotal > 0 ? (
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">Subtotal</th>
              <th scope="col">Shipping</th>
              <th scope="col">Tax</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">${subTotal}</th>
              <td>${shipping}</td>
              <td>${tax}</td>
              <td>${total}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <PageNotFound />
      )}
    </>
  );
};

export default Calculation;
