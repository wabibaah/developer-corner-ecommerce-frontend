import React from "react";
import Meta from "../components/Meta";
import Breadcrumb from "../components/BreadCrumb";
import ProductCard from "../components/ProductCard";

function SingleProduct() {
  return (
    <>
      <Meta title="Single Product" />
      <Breadcrumb title="Single Product" />
      <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6"></div>
          </div>
        </div>
      </div>
      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our popolar products</h3>
            </div>
          </div>
          <div className="row">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
    </>
  );
}

export default SingleProduct;
