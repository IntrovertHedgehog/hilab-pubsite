import Count from "@/common/count";
import Link from "next/link";
import React from "react";

const AboutArea = () => {
  return (
    <>
      <section className="about-area pt-130 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-4 col-12">
              <div
                className="tp-about-thumb mb-60 wow fadeInLeft"
                data-wow-delay=".3s"
              >
                <div className="tp-ab-img d-flex">
                  <div className="tp-ab-main-img p-relative">
                    <img
                      src="/assets/img/about/about-bg-04.jpg"
                      alt="about-thumb"
                    />
                    <div className="about__exprience tp-ab-counter">
                      <h3 className="counter">

                        <Count add_style={true} number={12} />
                      </h3>
                      <i>
                        Years of <br />
                        Experience
                      </i>
                    </div>
                  </div>
                  <div className="tp-ab-shape d-none d-md-block d-lg-none d-xl-block">
                    <img
                      className="ab-shape-one"
                      src="/assets/img/about/about-bg-05.jpg"
                      alt="about-shape"
                    />
                    <img
                      className="ab-shape-two"
                      src="/assets/img/about/about-bg-06.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-8 col-12">
              <div
                className="about-content about-align mb-60 wow fadeInRight"
                data-wow-delay=".3s"
              >
                <div className="tp-section">
                  <h3 className="tp-section__title ab-title mb-25">
                    Our Research Vision
                  </h3>
                  <a className="tp-section__link" href="#">
                    Read our Mission & Vision{" "}
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                  <p className=" mr-20 mb-40">
                    The healthcare journey for an individual encompasses a broad range of areas from managing wellness in our daily lives to receiving care in homes or dedicated healthcare facilities. While healthcare systems endeavour to provide reliable and effective care for all, they face constraints on resources like time, manpower, and funding. Technology-based solutions offer a way to overcome such limitations through the enhancement of healthcare delivery for the individual. Through these solutions, we strive towards our vision of empowering the individual in their healthcare journey.
                  </p>

                  <p className=" mr-20 mb-40">
                    Our research mission is to develop and employ solutions that incorporate Internet-of-Things (IoT) devices and platforms, real-world empirical evidence, and contemporary social science research. We have built IoT technology-based solutions such as EMPOWER, a mobile app-based platform that enhances chronic disease management through greater accessibility and personalisation; iMovin’, a technology-based intervention comprising a wireless activity tracker and a multi-feature mobile app that delivers personalised and persuasive health messages to encourage exercise; and Wellness Buddy, a platform to measure and model workplace fatigue to enhance employee well-being while maintaining high operational capabilities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutArea;
