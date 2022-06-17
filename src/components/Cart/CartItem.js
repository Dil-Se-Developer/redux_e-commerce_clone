import React from "react";
import "./CartItem.css";

const CartItem = (props) => {
  const price = `₹${props.price.toFixed(2)}`;

  return (
    <li className="cart_item">
      <div className="cart_item_img">
        <img src={props.productimg} alt="productimg" />
      </div>
      <div className="cart_item_summary">
        <div className="cart_item_summary_section_1">
          <h2>{props.name}</h2>
        </div>
        <div className="cart_item_summary_section_2">
          <p className="cart_item_price">{price}</p>
          <p className="cart_item_amount">x {props.amount}</p>
        </div>
      </div>
      <div className="cart_item_actions">
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
