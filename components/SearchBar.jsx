import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { updateSearchbarValue } from "@redux/slices/searchbarSlice";

const SearchBar = ({ placeholder }) => {
  const searchbarValue = useSelector((store) => store.searchbar.value);
  const dispatch = useDispatch();

  const handleSearchChange = (event) => {
    const value = event.target.value;
    dispatch(updateSearchbarValue(value));
  };

  // when i come back to this, log the value of searchbarValue and the actual value of the input on each keystroke

  return (
    <input
      type="text"
      placeholder={placeholder}
      className="search_bar-input pl-4 pr-4"
      value={searchbarValue}
      onChange={handleSearchChange}
    />
  );
};

export default SearchBar;
