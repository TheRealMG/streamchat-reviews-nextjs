"use client";

import React, {useEffect} from "react";

import MainContent from "@components/MainContent/MainContent";

import { useDispatch } from "react-redux";
import { updateSearchbarPlaceholder } from "@redux/slices/searchbarSlice";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateSearchbarPlaceholder("Search Reviews..."));
  }, [dispatch]);
  
  return (
    <section className="flex flex-grow w-full gap-6">
      <MainContent />
    </section>
  );
};

export default Home;
