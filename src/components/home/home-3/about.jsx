import Count from "@/common/count";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <>
      <section className="about-area tp-common-area pt-130 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-12">
              <div
                className="tp-about__content mb-50 wow fadeInLeft"
                data-wow-delay=".3s"
              >
                <div className="tp-section">
                  {/*
                  <span className="tp-section__sub-title left-line mb-25">
                   Our Vision 
                  </span>
                  */}
                  <h3 className="tp-section__title about-title mb-30">
                    Our Vision
                  </h3>
                  {/*
                  <a className="tp-section__link" href="/about">
                    Read our MIssion & Vission{" "}
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                  */}
                  <p className=" mr-20 mb-45">
                    <b>
                      Our vision is to empower individuals and healthcare
                      providers with the technology-based solutions they need to
                      deliver the best possible care and achieve the best
                      possible outcomes.
                    </b>
                    We are committed to developing and employing solutions that
                    incorporate IoT technology, real-world data, and
                    contemporary social science research, in order to enhance
                    healthcare delivery and improve health outcomes. conse
                    quat.Exerci tationlobortis nisl aliquip ex ea commodo habent
                    claritatem insitamconse quat.
                  </p>
                </div>
                <div className="tp-about__btn">
                  <Link className="tp-btn" href="/team-1">
                    Vision
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-12">
              <div
                className="tp-about-thumb tp-3-thumb mb-60 wow fadeInRight"
                data-wow-delay=".3s"
              >
                <div className="tp-ab-img">
                  <div className="tp-ab-main-img p-relative">
                    <img
                      src="/assets/img/about/about-bg-07.jpg"
                      alt="about-thumb"
                    />
                    <div className="about__exprience tp-ab-counter ab-count">
                      <h3 className="counter">
                        <Count add_style={true} number={12} />
                      </h3>
                      <i>
                        Years of <br />
                        Experience
                      </i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
