import React from "react";
import { Link, useLocation } from "react-router-dom";
import blog1 from "../assets/images/blog-1.jpg";

function BlogCard() {
  const location = useLocation();
  return (
    <div className={`${location.pathname === "/blog" ? "col-6" : "col-3"} mb-3`}>
      <div className="blog-card">
        <div className="card-image">
          <img src={blog1} alt="" className="img-fluid" />
        </div>
        <div className="blog-content">
          <p className="date"> 01 Dec , 2022 </p>
          <h5 className="title">A beautiful sunday morning renaissance</h5>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat enim delectus ad
            soluta mollitia, qui nesciunt nam fa
          </p>
          <Link to="/blog/1" className="button">
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
