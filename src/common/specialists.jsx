import Link from "next/link";
import React from "react";


// choose data
const areas = [
  {
    id: 1,
    color: "",
    icon: "flaticon-heart",
    title: (
      <>
        Wellness
      </>
    ),
    des: (
      <>
        Nam eget dui vel quam sodales <br />
        semper quis porttitor tortor.
      </>
    ),
  },
  {
    id: 2,
    color: "pink-icon",
    icon: "flaticon-bacteria",
    title: (
      <>
        Disease Management
      </>
    ),
    des: (
      <>
        Nam eget dui vel quam sodales <br />
        semper quis porttitor tortor.
      </>
    ),
  },
  {
    id: 3,
    color: "green-icon",
    icon: "flaticon-thinking",
    title: (
      <>
        Cognitive Decline
      </>
    ),
    des: (
      <>
        Nam eget dui vel quam sodales <br />
        semper quis porttitor tortor.
      </>
    ),
  },
  {
    id: 4,
    color: "sky-icon",
    icon: "flaticon-team",
    title: (
      <>
        Institutional & <br/>
        Home Care
      </>
    ),
    des: (
      <>
        Nam eget dui vel quam sodales <br />
        semper quis porttitor tortor.
      </>
    ),
  },
];


const Specialists = () => {
  return (
    <>
      <section className="choose-area theme-bg pt-120 pb-130">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-section text-center">
                <span className="tp-section__sub-title left-line right-line mb-25">
                  Research Areas
                </span>
                <h3 className="tp-section__title title-white mb-85">
                  What Do We Do?
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            {areas.map((item) => (
              <div key={item.id} className="col-xl-3 col-md-6">
                <div
                  className="tp-choose__item ml-75 mb-100 wow fadeInUp"
                  data-wow-delay=".8s"
                >
                  <div className={`tp-choose__icon ${item.color} mb-40`}>
                    <i className={item.icon}></i>
                  </div>
                  <div className="tp-choose__content">
                    <h4 className="tp-choose__title mb-20">{item.title}</h4>
                    <p>{item.des}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row text-center">
            <div className="col-lg-12">
              <div className="tp-choose-option">
                <span>
                  Laboratories Used For Scientific Research :
                  <Link href="/">
                    Take Many Forms<i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Specialists;
