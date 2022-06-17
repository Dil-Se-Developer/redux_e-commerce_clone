import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../layout/Header";
import SubHeader from "../layout/SubHeader";
import SellProducts from "./sellproducts/SellProducts";
import "./Home.css";

const Home = (props) => {

  const [sellProducts, setSellProducts] = useState([]);
  const [searchString, setSearchString] = useState("")
  const [sortValue,setSortValue] = useState("none")


  useEffect(() => {
    axios
      .get("http://localhost:3000/sellitems")
      .then((responses) => setSellProducts(responses.data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSearchChange = (searchProduct) => {
    setSearchString(searchProduct)
    // console.log(searchString);
  }

  const searchProducts = (products) => {
    let searchArray = products.map((product) => {
      if (product.name.toLowerCase().includes(searchString.toLowerCase())) {
        return product
      } else {
        return null
      }
    })
    // console.log(searchArray);
    return searchArray
  }

  const handleSoritngChange = (event) => {
    let { value } = event.target
    // console.log(value);
    setSortValue(value)
  }

  const sortData = (sortType,products) => {
    let sortedArray = []
    if(sortType === "none"){
      sortedArray = products.sort((prod1,prod2) => {
        return prod1.id - prod2.id
      })
    }else if(sortType === "lowtohigh"){
      sortedArray = products.sort((prod1,prod2) => {
        return prod1.price - prod2.price
      })
    }else if(sortType === "hightolow"){
      sortedArray = products.sort((prod1,prod2) => {
        return prod2.price - prod1.price
      })
    }
    return sortedArray
  }

  let $filterProducts = sortData(sortValue, sellProducts)
  $filterProducts = searchProducts($filterProducts)

  return (
    <>
      <Header/>
      <SubHeader handleSearch={handleSearchChange} handleSoritngSelect={handleSoritngChange}/>
      <SellProducts sellProducts={$filterProducts} />
    </>
  );
};

export default Home;
