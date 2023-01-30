import React from "react";
import Meta from "../components/Meta";
import Breadcrumb from "../components/BreadCrumb";
import Cross from "../assets/images/cross.svg";
import Watch from "../assets/images/watch.jpg";

function Wishlist() {
  return (
    <>
      <Meta title="Wishlist" />
      <Breadcrumb title="Wishlist" />
      <div className="wishlist-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img src={Cross} alt="" className="position-absolute cross img-fluid" />
                <div className="wishlist-card-image">
                  <img src={Watch} alt="watch" className="img-fluid w-100" />
                </div>
                <div className=" p-3">
                  <h5 className="title">Honor T1 7.0 GB ROM 7 inch Width Wi-Fi + 3G Tablet</h5>
                  <h6 className="price">GH$ 150</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img src={Cross} alt="" className="position-absolute cross img-fluid" />
                <div className="wishlist-card-image">
                  <img src={Watch} alt="watch" className="img-fluid w-100" />
                </div>
                <div className=" p-3">
                  <h5 className="title">Honor T1 7.0 GB ROM 7 inch Width Wi-Fi + 3G Tablet</h5>
                  <h6 className="price">GH$ 150</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img src={Cross} alt="" className="position-absolute cross img-fluid" />
                <div className="wishlist-card-image">
                  <img src={Watch} alt="watch" className="img-fluid w-100" />
                </div>
                <div className=" p-3">
                  <h5 className="title">Honor T1 7.0 GB ROM 7 inch Width Wi-Fi + 3G Tablet</h5>
                  <h6 className="price">GH$ 150</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Wishlist;
