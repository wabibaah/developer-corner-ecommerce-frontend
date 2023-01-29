import React from "react";
import Breadcrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

function PrivacyPolicy() {
  return (
    <>
      <Meta title="Our privacy policy" />
      <Breadcrumb title="Our privacy policy" />
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

export default PrivacyPolicy;
