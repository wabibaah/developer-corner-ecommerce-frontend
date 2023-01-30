import React from "react";
import Breadcrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Watch from "../assets/images/watch.jpg";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

function Cart() {
  return (
    <>
      <Meta title="Your Cart" />
      <Breadcrumb title="Your Cart" />
      <section className="cart-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="d-flex justify-content-between align-items-center cart-header py-3">
                <h4 className="cart-col-1">Product</h4>
                <h4 className="cart-col-2">Price</h4>
                <h4 className="cart-col-3">Quantity</h4>
                <h4 className="cart-col-4">Total</h4>
              </div>
              <div className="d-flex justify-content-between align-items-center cart-data py-3 mb-2">
                <div className="cart-col-1 gap-15 d-flex align-items-center ">
                  <div className="w-25">
                    <img src={Watch} className="img-fluid" alt="" />
                  </div>
                  <div className="w-75">
                    <p>Product title 1</p>
                    <p>Color: Red</p>
                    <p>Size: Medium</p>
                  </div>
                </div>
                <div className="cart-col-2">
                  <h5 className="price">GH$ 200</h5>
                </div>
                <div className="cart-col-3 d-flex align-items-center gap-15">
                  <div className="">
                    <input type="number" name="" id="" className="form-control" min={1} max={10} />
                  </div>
                  <div className="">
                    <AiFillDelete className="text-danger " />
                  </div>
                </div>
                <div className="cart-col-4">
                  <h5 className="price">GH$ 200</h5>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center cart-data py-3 mb-2">
                <div className="cart-col-1 gap-15 d-flex align-items-center ">
                  <div className="w-25">
                    <img src={Watch} className="img-fluid" alt="" />
                  </div>
                  <div className="w-75">
                    <p>Product title 2</p>
                    <p>Color: Blue</p>
                    <p>Size: Large</p>
                  </div>
                </div>
                <div className="cart-col-2">
                  <h5 className="price">GH$ 200</h5>
                </div>
                <div className="cart-col-3 d-flex align-items-center gap-15">
                  <div className="">
                    <input type="number" name="" id="" className="form-control" min={1} max={10} />
                  </div>
                  <div className="">
                    <AiFillDelete className="text-danger " />
                  </div>
                </div>
                <div className="cart-col-4">
                  <h5 className="price">GH$ 200</h5>
                </div>
              </div>
            </div>
            <div className="col-12 py-2 mt-4">
              <div className="d-flex justify-content-between align-items-baseline">
                <Link to="/store" className="button">
                  Continue To Shopping
                </Link>
                <div className="d-flex flex-column align-items-end">
                  <h4>Subtotal: GH$ 997</h4>
                  <p>Taxes and shipping are calculated at checkout</p>
                  <Link to="/checkout" className="button">
                    Checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cart;
