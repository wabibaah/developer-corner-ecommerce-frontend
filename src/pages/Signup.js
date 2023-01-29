import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

function Signup() {
  return (
    <>
      <Meta title="Sign Up" />
      <BreadCrumb title="Sign Up" />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Create An Account</h3>
                <form action="" className="d-flex flex-column align-items-center gap-15">
                  <div className="">
                    <input
                      type="text"
                      name="firstname"
                      id="firstname"
                      className="form-control"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      name="lastname"
                      id="lastname"
                      className="form-control"
                      placeholder="Last Name"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      name="mobile"
                      id="mobile"
                      className="form-control"
                      placeholder="Mobile number"
                    />
                  </div>
                  <div className="">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div className="mt-1">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="form-control"
                      placeholder="password"
                    />
                  </div>
                  <div>
                    <div className="d-flex justify-content-center gap-20 align-items-center">
                      <button className="button border-0" type="submit">
                        Register
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
