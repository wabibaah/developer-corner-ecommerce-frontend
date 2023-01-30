import React from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import Watch from "../assets/images/watch.jpg";

function Checkout() {
  return (
    <>
      <div className="checkout-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-7">
              <div className="checkout-left-data">
                <h3 className="website-name">WABI DIGITALS</h3>
                <nav style={{ "--bs-breadcrumb-divider": ">" }} aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/cart" className="text-dark total-price">
                        Cart
                      </Link>
                    </li>{" "}
                    &nbsp;/
                    <li className="breadcrumb-item total-price " aria-current="page">
                      Information
                    </li>{" "}
                    &nbsp;/
                    <li className="breadcrumb-item total-price " aria-current="page">
                      Shipping
                    </li>{" "}
                    &nbsp;/
                    <li className="breadcrumb-item total-price active" aria-current="page">
                      Payment
                    </li>
                  </ol>
                </nav>
                <h4 className="title total">Contact Information</h4>
                <p className="user-details total">Michael Baah (wabisernprojects@gmail.com)</p>
                <h4 className="mb-3">Shipping</h4>
                <form className="d-flex gap-15 flex-wrap justify-content-between">
                  <div className="w-100">
                    <select name="" id="" className="form-control form-select">
                      <option value="" selected disabled>
                        Select Country
                      </option>
                    </select>
                  </div>
                  <div className="flex-grow-1">
                    <input type="text" className="form-control" placeholder="First Name" />
                  </div>
                  <div className="flex-grow-1">
                    <input type="text" className="form-control" placeholder="Last Name" />
                  </div>
                  <div className="w-100">
                    <input type="text" className="form-control" placeholder="Address" />
                  </div>
                  <div className="w-100">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Apartment, Suite, etc"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <input type="text" className="form-control" placeholder="City" />
                  </div>
                  <div className="flex-grow-1">
                    <select name="" id="" className="form-control form-select">
                      <option value="" selected disabled>
                        Select State
                      </option>
                    </select>
                  </div>
                  <div className="flex-grow-1">
                    <input type="text" className="form-control" placeholder="Zip Code" />
                  </div>
                  <div className="w-100">
                    <div className="d-flex justify-content-between align-items-center">
                      <Link to="/cart" className="text-dark">
                        <BiArrowBack className="me-2 " />
                        Return to Cart
                      </Link>
                      <Link to="/shipping" className="button">
                        Continue to Shipping
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-5">
              <div className="border-bottom py-4">
                <div className="d-flex gap-10 mb-2 align-items-center">
                  <div className="w-75 d-flex gap-10">
                    <div className="w-25 position-relative">
                      <span
                        style={{ top: "-10px", right: "2px" }}
                        className="badge position-absolute bg-secondary text-white rounded-circle"
                      >
                        1
                      </span>
                      <img className="img-fluid" src={Watch} alt="" />
                    </div>
                    <div className="">
                      <h5 className="total-price">Product title 1</h5>
                      <p className="total-price">s / #GF3X5SA</p>
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="total">GH$ 100</h5>
                  </div>
                </div>
              </div>
              <div className="border-bottom py-4">
                <div className="d-flex justify-content-between align-items-center">
                  <p className="total">Subtotal</p>
                  <p className="total-price">GH$ 10000</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="mb-0 total">Shipping</p>
                  <p className="mb-0 total-price">GH$ 10000</p>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center border-bottom py-4">
                <h4 className="total">Total</h4>
                <h5 className="total-price">GH$ 10000</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
