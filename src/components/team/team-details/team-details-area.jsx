import Link from "next/link";
import React from "react";
import { useRouter } from 'next/router';
import team_one_data from "@/data/team-one-data";

const TeamDetailsArea = () => {
  const router = useRouter();
  const { id } = router.query;
  const member = team_one_data.filter(m => m.id === Number(id))[0];
  return (
    <>
      <section className="team-details-area pt-130 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6">
              <div className="tp-team-dtls__thumb mb-50">
                <img
                  src={member?.img}
                  alt="team-thumb"
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="tp-team-dtls__content mt-50 mb-50">
                <h4 className="tp-team-dtls__title mb-10">
                  <Link href="/team-1">{member?.designation}</Link>
                </h4>
                <span className="mb-35">{member?.title}</span>
                <div className="tp-team-dtls__info mt-130">
                  <ul>
                    <li>
                      Expertise: <span>Place Holder</span>
                    </li>
                    <li>
                      Experience: <span>Place Holder</span>
                    </li>
                    <li>
                      E-mail:{" "}
                      <span>
                        <a href="mailto:webmail.info@gmail.com">
                          {" "}
                          example@email.com
                        </a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-12">
              <div className="tp-team-dtls__social mt-45 mb-50">
                <a href="#">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a className="tp-dtls-insta" href="#">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a className="tp-dtls-tweet" href="#">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a className="tp-dtls-pinter" href="#">
                  <i className="fa-brands fa-pinterest-p"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-team-dtls-text mt-40">
                <h4 className="tp-team-dtls-text__title mb-30">
                  Personal Experience
                </h4>
                {member?.writeup.map(w => (<p>{w}</p>))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamDetailsArea;
