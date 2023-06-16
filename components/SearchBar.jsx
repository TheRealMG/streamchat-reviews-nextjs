"use client";

import React, { useState } from "react";
import Image from "next/image";

import { useSelector, useDispatch } from "react-redux";
import { updateSearchbarValue } from "@redux/slices/searchbarSlice";

const SearchBar = ({ placeholder, onSubmit }) => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const searchbarValue = useSelector((store) => store.searchbar.value);
  const dispatch = useDispatch();

  const handleSearchChange = (event) => {
    const value = event.target.value;
    dispatch(updateSearchbarValue(value));
  };

  // when i come back to this, log the value of searchbarValue and the actual value of the input on each keystroke

  return (
    <form
      className={`search_bar shadow-md flex items-center hover:bg-white/[0.24] pl-2 md:pl-4 ${
        isInputFocused ? "bg-white/[0.24]" : "bg-white/[0.16]"
      }`}
      onSubmit={onSubmit}
    >
      <Image
        src="/assets/remixicon/search-line.svg"
        alt="Search Icon"
        width={20}
        height={20}
        className="search_bar-icon filter invert opacity-50"
      />
      <input
        type="text"
        placeholder={placeholder}
        className="search_bar-input pl-2 md:pl-4 pr-2 md:pl-4 placeholder:text-white/50"
        value={searchbarValue}
        onChange={handleSearchChange}
        onFocus={() => setIsInputFocused(true)}
        onBlur={() => setIsInputFocused(false)}
      />
    </form>
  );
};

export default SearchBar;
