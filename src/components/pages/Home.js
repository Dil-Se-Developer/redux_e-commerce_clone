import React from 'react'
import { useDispatch } from "react-redux";
import { setLoggedInStatus, setLoggedOutStatus } from '../../redux_toolkit/slices/authSlice'
import { useNavigate } from 'react-router-dom';
import './Home.css'

const Home = (props) => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const logoutHandler = (event) => {
    event.preventDefault();
    // props.handleLogout();
    dispatch(setLoggedInStatus(false))
    dispatch(setLoggedOutStatus(true))
  }

  const navigatgeHandler = (event) => {
    event.preventDefault();
    // props.handleLogout();
    Navigate('/cart');
  }
  
  return (
    <>
      <button className="form_btn" onClick={logoutHandler}>
        Logout
      </button>
      <button className="form_btn" onClick={navigatgeHandler}>
        Navi
      </button>
    </>
  )
}

export default Home