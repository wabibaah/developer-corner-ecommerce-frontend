import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import Compare from "../assets/images/compare.svg";
import Wishlist from "../assets/images/wishlist.svg";
import User from "../assets/images/user.svg";
import Cart from "../assets/images/cart.svg";
import Menu from "../assets/images/menu.svg";

function Header() {
  const [showCategories, setShowCategories] = useState(false);
  function toggleShowCategories() {
    setShowCategories((x) => !x);
  }
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">Free shipping over GH$100 & Free Returns</p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Hotline:{" "}
                <a className="text-white" href="tel:+233 244639729">
                  (+233) 0244 639 729
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link className="text-white">Wabi</Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Search products here..."
                  arial-aria-label="Search products here..."
                  className="form-control py-2"
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-uppper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link
                    to="/compare-products"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src={Compare} alt="" />
                    <p className="mb-0">
                      Compare <br /> Products
                    </p>
                  </Link>
                </div>

                <div>
                  <Link to="/wishlist" className="d-flex align-items-center gap-10 text-white">
                    <img src={Wishlist} alt="" />
                    <p className="mb-0">
                      Favorite <br /> Wishlist
                    </p>
                  </Link>
                </div>

                <div>
                  <Link to="/login" className="d-flex align-items-center gap-10 text-white">
                    <img src={User} alt="" />
                    <p className="mb-0">
                      Log in <br /> Register
                    </p>
                  </Link>
                </div>

                <div>
                  <Link to="/cart" className="d-flex align-items-center gap-10 text-white">
                    <img src={Cart} alt="" />
                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white text-dark">0</span>
                      <p className="mb-0">GH$ 5000</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-buttom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div className="">
                  <div className="dropdown">
                    <button
                      onClick={toggleShowCategories}
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0 d-flex gap-15 align-items-center "
                      type="button"
                      id="dropdownMenuButton1"
                    >
                      <img src={Menu} alt="" />{" "}
                      <span className="me-5 d-inline-block">Shop Categories</span>
                    </button>
                    <ul
                      className={showCategories ? "dropdown-menu show" : "dropdown-menu"}
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link to="#" className="dropdown-item text-white">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item text-white">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item text-white">
                          Action
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/store">Our Store</NavLink>
                    <NavLink to="/blogs">Blogs</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
