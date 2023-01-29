import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

function ProductCard({ grid }) {
  const location = useLocation();
  return (
    <div className={`${location.pathname === "/store" ? `col-${grid}` : "col-3"} "col-12-extend"`}>
      <Link to="/product/1" className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
          <Link>
            <img className="img-fluid" src="images/wish.svg" alt="" />
          </Link>
        </div>
        <div className="product-image">
          <img className="img-fluid" src="images/watch.jpg" alt="" />
          <img className="img-fluid" src="images/tab1.jpg" alt="" />
        </div>
        <div className="product-details">
          <h6 className="brand">Havels</h6>
          <h5 className="product-title">
            Kids headphones bulk 10 pack multi colored for students
          </h5>
          <ReactStars
            count={5}
            value={4}
            edit={false}
            onChange={() => console.log("clicked")}
            size={24}
            activeColor="#ffd700"
          />
          <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, doloribus
            repudiandae porro ipsa qui nostrum error delectus. Maxime consequatur repellat totam
            voluptas est impedit. Vitae libero consequuntur mollitia consectetur minus?
          </p>
          <p className="price">GH$ 50</p>
        </div>
        <div className="action-bar position-absolute ">
          <div className="d-flex flex-column gap-15">
            <Link>
              <img className="img-fluid" src="images/prodcompare.svg" alt="" />
            </Link>
            <Link>
              <img className="img-fluid" src="images/view.svg" alt="" />
            </Link>
            <Link>
              <img className="img-fluid" src="images/add-cart.svg" alt="" />
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
