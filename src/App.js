import React from "react";
import { Routes, Route } from "react-router-dom";
import { ProtectedLogin, ProtectedHome } from "./components/ProtectedRoutes";
import LoginForm from "./components/pages/LoginForm";
import SignUpForm from "./components/pages/SignUpForm";
import Home from "./components/pages/Home";
import Cart from "./components/Cart/Cart";
import OrderConfirmation from "./components/pages/OrderConfirmation";
import NoMatch from "./components/nomatch/NoMatch";
import Footer from "./components/UI/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route element={<ProtectedLogin />}>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="*" element={<NoMatch/>} />
        </Route>
        <Route element={<ProtectedHome />}>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cart/order" element={<OrderConfirmation />} />
          <Route path="*" element={<NoMatch/>} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;

// <>
{
  /* <Routes>
<Route element={<ProtectedLogin />}>
  <Route path="/login" element={<LoginForm />} />
  <Route path="/signup" element={<SignUpForm />} />
  <Route path="*" element={<h1>NO Match Found</h1>} />
</Route>
<Route element={<ProtectedHome />}>
  <Route path="/" element={<Home />} />
  <Route path="/cart" element={<Cart />} />
  <Route path="/cart/order" element={<OrderConfirmation />} />
  <Route path="*" element={<h1>NO Match Found</h1>} />
</Route>
</Routes>
<Footer />
</> */
}
