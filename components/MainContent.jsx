import React from "react";

import Sidebar from "./MainContent/Sidebar";
import ReviewsContainer from "./MainContent/ReviewsContainer";

const MainContent = () => {
  return <div className="flex flex-grow">
    <Sidebar />
    <ReviewsContainer />
  </div>;
};

export default MainContent;
