import Link from "next/link";
import React from "react";
import home_awards_data from "@/data/home_awards_data";

const Awards = () => {
  return (
    <>
      <section
        className="blog-area tp-common-area grey-bg pt-125 pb-100"
        style={{ backgroundImage: `url("/assets/img/shape/shape-bg-09.png")` }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8 col-12">
              <div className="tp-section mb-20">
                <h3 className="tp-section__title mb-60">Grants & Awards</h3>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="tp-blog-btn mb-30">
                <Link href="/service" className="tp-btn-second">
                  All Grants & Awards
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            {home_awards_data.map((item) => (
              <div key={item.id} className="col-xxl-4 col-lg-6 col-md-6">
                <div
                  className={`blogthumb mb-30 ${item.color} wow fadeInUp`}
                  data-wow-delay=".7s"
                  style={{
                    backgroundImage: `url(${item.bg_img})`,
                    height: "250px",
                  }}
                >
                  <div className="blogitem">
                    <div className="fix inner-blog-wrap">
                      <div className="p-relative">
                        <h5 className="blogitem__title mb-20">
                          <Link href="/blog-details">{item.title}</Link>
                        </h5>
                        <div className="tp-blog__btn blog-bg-btn">
                          <Link href="/blog">Read more</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Awards;
