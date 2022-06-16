import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../layout/Header";
import SubHeader from "../layout/SubHeader";
import SellProducts from "./sellproducts/SellProducts";
import "./Home.css";

const Home = (props) => {
  const [sellProducts, setSellProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/sellitems")
      .then((responses) => setSellProducts(responses.data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // console.log(sellProducts);

  return (
    <>
      <Header />
      <SubHeader />
      <SellProducts sellProducts={sellProducts} />
    </>
  );
};

export default Home;
