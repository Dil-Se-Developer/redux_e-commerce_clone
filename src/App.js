import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginForm from "./components/pages/LoginForm";
import SignUpForm from "./components/pages/SignUpForm";
import Home from "./components/pages/Home";
import GeneralHeader from "./components/UI/GeneralHeader";
import Footer from "./components/UI/Footer";

import "./App.css";

function App() {
  return (
    <>
      <GeneralHeader />
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
