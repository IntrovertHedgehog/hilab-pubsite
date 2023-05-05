import team_one_data from "@/data/team-one-data";
import React from "react";
import styles from "./team.module.css";

const quoteStyle = { color: "gray", fontSize: "1.3rem" };

const TeamArea = () => {
  return (
    <>
      <section className="team-area pt-125 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-section text-center">
                <span className="tp-section__sub-title left-line right-line mb-25">
                  People
                </span>
                <h3 className="tp-section__title mb-20">Welcome to Our Team</h3>
                <div className="postbox__text mb-40">
                  <p style={quoteStyle}>
                    "We are a team of diverse thinkers and practitioners, all
                    working together to advance healthcare research."
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row" style={{ justifyContent: "center" }}>
            {team_one_data.map((item) => (
              <div className="td-col-xl-5 col-lg-3 col-md-4">
                <div className={styles.tdSingleTeamMemberThree}>
                  <div className={styles.teamThreeOverlay}></div>
                  <a
                    href={`/team-details?id=${item.id}`}
                    className={styles.tdMemberThreeImgWrapper}
                  >
                    <div
                      className={styles.tdTeamThreeImg}
                      style={{
                        backgroundImage: `url(${item.img})`,
                      }}
                    ></div>
                  </a>

                  <div className={styles.tdTeamThreeContent}>
                    <a href={`/team-details?id=${item.id}`}>
                      <span className={styles.tdMemberDesignationThree}>
                        {item.title}
                      </span>

                      <h3 className={styles.tdMemberThreeName}>
                        {item.designation}
                      </h3>
                    </a>

                    <div className={styles.tdTeamMemberSocial}>
                      <ul className="td-list-style td-list-inline">
                        <li style={{ width: "fit-content" }}>
                          <a target="_blank" href="#">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li style={{ width: "fit-content" }}>
                          <a target="_blank" href="#">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li style={{ width: "fit-content" }}>
                          <a target="_blank" href="#">
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                        </li>
                        <li style={{ width: "fit-content" }}>
                          <a target="_blank" href="#">
                            <i className="fab fa-pinterest-p"></i>
                          </a>
                        </li>
                      </ul>
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

export default TeamArea;
