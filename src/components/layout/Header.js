import React from "react";
import { useDispatch } from "react-redux";
import { setLoggedInStatus, setLoggedOutStatus } from '../../redux_toolkit/slices/authSlice'
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/flipkart_logo.png";
import { BsCartFill } from "react-icons/bs";
import "./Header.css";

const Header = (props) => {    
  const dispatch = useDispatch();
  const Navigate = useNavigate();
    
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
        <Link to='/cart' className="cart_icon"><BsCartFill /><span>0</span></Link>
        <button className="form_btn logout_btn" onClick={logoutHandler}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
