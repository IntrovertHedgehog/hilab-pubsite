import React from "react";
import About from "./about";
import Blog from "./blog";
import HeroBanner from "./hero-banner";
import People from "./people";
import Awards from "./awards";

const Home_Three = () => {
  return (
    <>
      <div className="content-layout-right">
        <HeroBanner />
        <About />
        <People />
        <Blog />
        <Awards />
      </div>
    </>
  );
};

export default Home_Three;
