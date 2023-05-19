import Link from "next/link";
import React from "react";
import bg from "@/../public/assets/img/banner/breadcrumb-01.jpg"

const Banner = () => {
  return (
    <>
      <section
        className="breadcrumb__area pt-100 pb-120 breadcrumb__overlay"
        style={{
          backgroundImage: `url(${bg.src})`,
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-7 col-lg-12 col-md-12 col-12">
              <div className="tp-breadcrumb">
                <h2 className="tp-breadcrumb__title">Vision</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
