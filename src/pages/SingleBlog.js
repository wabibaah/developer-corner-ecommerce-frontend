import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";

import Breadcrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

function SingleBlog() {
  return (
    <>
      <Breadcrumb title="Single Blog" />
      <Meta title="Single Blog" />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link className="d-flex align-items-center gap-10" to="/blogs">
                  {" "}
                  <HiOutlineArrowLeft className="fs-5" />
                  Go back to Blogs
                </Link>
                <h3 className="title">A beautiful Sunday morning renaissance</h3>
                <img src="images/blog-1.jpg" alt="" className="img-fluid" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem autem nostrum
                  nulla cupiditate quasi sunt consectetur itaque, maiores commodi modi quidem
                  laudantium ab dolores placeat amet vitae eaque explicabo quo libero culpa
                  eligendi excepturi inventore accusamus! Magni pariatur cum illo
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleBlog;
