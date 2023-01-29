import React from "react";
import Breadcrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

function RefundPolicy() {
  return (
    <>
      <Meta title="Our Refund Policy" />
      <Breadcrumb title="Our Refund Policy" />
      <section className="policy-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="policy"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default RefundPolicy;
