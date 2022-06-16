import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoggedInStatus, setLoggedOutStatus } from '../../redux_toolkit/slices/authSlice'
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/flipkart_logo.png";
import { BsCartFill } from "react-icons/bs";
import "./Header.css";

const Header = (props) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cartItems.items)
  // console.log(items);
  const Navigate = useNavigate();

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);


  const logoutHandler = (event) => {
    event.preventDefault();
    dispatch(setLoggedInStatus(false))
    dispatch(setLoggedOutStatus(true))
    Navigate("/login");
  };

  return (
    <div className="home_header">
      <div>
        <img src={logo} alt="flipkart_logo" />
      </div>
      <div>
        <Link to='/cart' className="cart_icon"><BsCartFill /><span>{numberOfCartItems}</span></Link>
        <button className="form_btn logout_btn" onClick={logoutHandler}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
