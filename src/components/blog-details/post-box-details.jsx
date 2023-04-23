import Link from "next/link";
import React from "react";
import BlogSearch from "../blog/blog-search";
import Category from "../blog/category";
import RecentPost from "../blog/recent-post";
import Tags from "../blog/tags";
import CommentForm from "../forms/comment-form";
import research_data from "@/data/research-data";

const PostBoxDetails = (props) => {
  const projectData = research_data.filter((p) => p.id == props.id)[0];

  console.log(projectData);

  return (
    <>
      <div
        className="postbox__area pt-130 pb-110 wow fadeInUp"
        data-wow-duration=".8s"
        data-wow-delay=".2s"
      >
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-7 col-md-12">
              <div className="postbox__wrapper pr-20">
                <article className="postbox__item format-image mb-50 transition-3">
                  <div className="postbox__thumb w-img mb-30">
                    <Link href="/blog-details">
                      <img src="/assets/img/blog/blog-in-01.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="postbox__content">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="postbox__content-area pb-20">
                          <h3 className="postbox__title mb-35">
                            <Link href="#">
                              {projectData.title}
                            </Link>
                          </h3>
                          {projectData.content.map((c) => (
                            <p>{c}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="postbox__tag-border">
                      <div className="row align-items-center">
                        <div className="col-xl-7 col-md-12">
                          <div className="postbox__tag">
                            <div className="postbox__tag-list tagcloud">
                              <span>Tag</span>
                              <Link href="/blog">Covid-19</Link>
                              <Link href="/blog">Bacteria</Link>
                              <Link href="/blog">Medicine</Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-5 col-md-12">
                          <div className="postbox__social-tag">
                            <span>Share</span>
                            <a className="blog-d-lnkd" href="#">
                              <i className="fa-brands fa-linkedin"></i>
                            </a>
                            <a className="blog-d-pin" href="#">
                              <i className="fa-brands fa-pinterest"></i>
                            </a>
                            <a className="blog-d-fb" href="#">
                              <i className="fa-brands fa-facebook"></i>
                            </a>
                            <a className="blog-d-tweet" href="#">
                              <i className="fa-brands fa-twitter"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-5 col-md-12">
              <div className="sidebar__wrapper pl-25 pb-50">
                {/* <BlogSearch /> */}
                <Category />
                {/* <RecentPost /> */}
                <Tags />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostBoxDetails;
