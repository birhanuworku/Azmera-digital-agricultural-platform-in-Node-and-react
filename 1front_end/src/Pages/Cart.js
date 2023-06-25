import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "../Assets/Styles/Cart.css";
import { Link } from "react-router-dom";
import Navebar from "../Components/Common/Navebar";
function Cart({ cart, setCart, handleChange, cartsize }) {
  const [price, setPrice] = useState(0);
  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.firstamountincart * item.price));
    setPrice(ans);
  };

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.productid !== id);
    setCart(arr);
    // handlePrice();
  };

  useEffect(() => {
    handlePrice();
  });
  return (
    <>
      <Navebar cartsize={cartsize} />
      <article>
        {cart.map((item) => (
          <div className="cart_box" key={item.productid}>
            <div className="cart_img">
              <img src={item.image} alt="" />
              <p>{item.productname}</p>
            </div>
            <div>
              <button onClick={() => handleChange(item, +1)}> + </button>
              <button>{item.firstamountincart}</button>
              <button onClick={() => handleChange(item, -1)}> - </button>
            </div>
            <div>
              <span> Single Price : {item.price}</span>
              <button onClick={() => handleRemove(item.productid)}>
                Remove
              </button>
            </div>
          </div>
        ))}
        <div className="total">
          <span>Total Price of your Cart</span>
          <span>Total Price - {price}</span>
        </div>
        {price > 0 && (
          <Link to="/checkout">
            {" "}
            <button
              style={{
                backgroundColor: "green",
                borderRadius: "2px",
                padding: "10px",
                color: "white",
                marginTop: "30px",
              }}
            >
              Check Out
            </button>
          </Link>
        )}
      </article>
    </>
  );
}

export default Cart;
