import React from "react";

import MainContent from "@components/MainContent";

const Home = () => {
  return (
    <section className="flex flex-grow">
      {/* <h1 className="head_text text-center">
        StreamChat
        <br className="max-md:hidden" />
        <span className="purple_gradient text-center"> Reviews</span>
      </h1>
      <p className="desc text-center">A site for StreamChat, by StreamChat.</p> */}

      {/* Feed */}
      <MainContent />
    </section>
  );
};

export default Home;
