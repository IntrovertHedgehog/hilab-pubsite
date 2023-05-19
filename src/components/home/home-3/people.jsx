import Link from "next/link";
import React from "react";

const People = () => {
  return (
    <>
      <section className="about-area tp-common-area pt-130 pb-70">
        <div className="container">
          <div className="row">
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
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-12">
              <div
                className="tp-about__content mb-50 wow fadeInLeft"
                data-wow-delay=".3s"
              >
                <div className="tp-section">
                  <h3 className="tp-section__title about-title mb-30">
                    Our Team
                  </h3>
                  <a className="tp-section__link" href="/about">
                    Contact Us{"  "}
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                  <p className=" mr-20 mb-45">
                    <b>
                      We are a team of diverse thinkers and practitioners, all
                      working together to advance healthcare research.
                    </b>
                    Our team is a collaborative involving academic researchers
                    from various fields, healthcare professionals, industry
                    partners, policymakers, and the wider community, in an
                    effort to drive progress in healthcare research.
                  </p>
                </div>

                <div className="tp-about__btn">
                  <Link className="tp-btn" href="/team-1">
                    Peole
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default People;
