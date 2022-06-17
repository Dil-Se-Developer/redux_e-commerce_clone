import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setLoggedInStatus,
  setLoggedOutStatus,
} from "../../redux_toolkit/slices/authSlice";
import { useNavigate } from "react-router-dom";
import logo from "../assets/flipkart_logo.png";
import { BsCartFill } from "react-icons/bs";
import "./Header.css";

const Header = (props) => {
  const dispatch = useDispatch();
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const items = useSelector((state) => state.cartItems.items);
  // console.log(items);
  const Navigate = useNavigate();

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const cartHandler = (event) => {
    event.preventDefault();
    Navigate("/cart");
  };

  const logoutHandler = (event) => {
    event.preventDefault();
    dispatch(setLoggedInStatus(false));
    dispatch(setLoggedOutStatus(true));
    Navigate("/login");
  };

  const btnClasses = `${"cart_icon"} ${btnIsHighlighted ? "bump" : ""}`;
  // console.log(btnIsHighlighted);

  useEffect(() => {
    if (items.length === 0) {
      return;
    }

    setBtnIsHighlighted(true);

    setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);
  }, [items]);

  return (
    <div className="home_header">
      <div>
        <img src={logo} alt="flipkart_logo" />
      </div>
      <div>
        <button className={btnClasses} onClick={cartHandler}>
          <BsCartFill />
          <span>{numberOfCartItems}</span>
        </button>
        <button className="form_btn logout_btn" onClick={logoutHandler}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
