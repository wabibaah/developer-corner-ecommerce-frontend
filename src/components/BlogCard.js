import React from "react";
import { Link } from "react-router-dom";

function BlogCard() {
  return (
    <div className="col-3">
      <div className="blog-card">
        <div className="card-image">
          <img src="images/blog-1.jpg" alt="" className="img-fluid" />
        </div>
        <div className="blog-content">
          <p className="date"> 01 Dec , 2022 </p>
          <h5 className="title">A beautiful sunday morning renaissance</h5>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat enim delectus ad
            soluta mollitia, qui nesciunt nam fa
          </p>
          <Link to="/" className="button">
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
