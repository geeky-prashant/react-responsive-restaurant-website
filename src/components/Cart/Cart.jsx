import React from "react";
import { MdClose } from "react-icons/md";
import CartItem from "./CartItem/CartItem";

import "./Cart.scss";
const Cart = ({ setShowCart }) => {
  return (
    <div className="cart-panel">
      <div className="opac-layer"></div>
      <div className="cart-content">
        <div className="cart-header">
          <span className="heading">Shopping Cart</span>
          <span className="close-btn" onClick={() => setShowCart(false)}>
            <MdClose />
            <span className="text">close</span>
          </span>
        </div>

        <>
          <CartItem />
          <div className="cart-footer">
            <div className="subtotal">
              <div className="text">Subtotal:</div>
              <div className="text total">₹72,974</div>
            </div>
            <div className="button">
              <button className="checkout-cta">Checkout</button>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Cart;
