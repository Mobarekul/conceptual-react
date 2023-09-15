/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Cart.css";

const Cart = ({ selectedActors, remaining, totalCost }) => {
  console.log(selectedActors);
  return (
    <div className="container">
      <h1>Total actors : {selectedActors.length}</h1> <h2>Budget: 20000</h2>
      <h3>Total Cost : {totalCost}</h3>
      <h3>Remaining Cost : {remaining}</h3>
      {selectedActors.map((actor) => (
        <ol>
          <li>Actor Name: {actor.name}</li>
        </ol>
      ))}
    </div>
  );
};

export default Cart;
