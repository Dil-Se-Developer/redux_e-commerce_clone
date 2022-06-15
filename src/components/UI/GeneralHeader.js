import React from "react";
import logo from "../assets/flipkart_logo.png";
import "./GeneralHeader.css";

const GeneralHeader = (props) => {
  return (
    <div className="general_header">
      <img src={logo} alt="flipkart_logo" />
    </div>
  );
};

export default GeneralHeader;
