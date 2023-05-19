import Link from "next/link";
import React from "react";

const HeroBanner = () => {
  return (
    <>
      <section
        className="hero-area hero-bg"
        style={{ backgroundImage: `url("/assets/img/banner/hero-bg-01.jpg")`, height: "30%" }}
      >
        {/*
        <div className="tpherobg">
          <img src="/assets/img/shape/hero-shape-01.png" alt="" />
        </div>
        */}
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tpherotext">
                <h4 className="tpherotext__title mb-40">
                  Health Informatics <br />
                  Research Lab
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroBanner;
