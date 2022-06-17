import React from "react";
import GeneralHeader from "../UI/GeneralHeader";
import "./OrderConfirmation.css";

const OrderConfirmation = () => {
  const orderConfirmImg = "https://c.tenor.com/Di3lr0r5b6MAAAAi/pharmacy128-128.gif"
  return (
    <>
      <GeneralHeader />
      <div className="order_confirmation_section">
        <img
          src={orderConfirmImg}
          alt="order_confirmaiton"
        />
      </div>
    </>
  );
};

export default OrderConfirmation;
