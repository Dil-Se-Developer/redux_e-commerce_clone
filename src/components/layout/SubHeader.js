import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import "./SubHeader.css";

const SubHeader = (props) => {
  const [searchInput, setSearchInput] = useState("")

  const onSearchHandle = (event) => {
    event.preventDefault();
  };
  return (
    <div className="home_subheader">
      <form onSubmit={onSearchHandle} className="home_search">
        <input
          type="text"
          placeholder="Find Clothes,Mobile Phones and more..."
          value={searchInput}
          onChange={(event) => {
            setSearchInput(event.target.value);
          }}
        />
        <button onClick={() => props.handleSearch(searchInput)}>
          <BsSearch />
        </button>
      </form>
      <div className="sort_section">
        <label htmlFor="sort">SORT BY: </label>
        <select name="sort" id="sort" onChange={(event) => props.handleSoritngSelect(event)}>
          <option value="none">None</option>
          <option value="lowtohigh">Price: Low to High</option>
          <option value="hightolow">Price: High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default SubHeader;
