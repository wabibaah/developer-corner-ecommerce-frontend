import React from "react";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row  align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="images/newsletter.png" alt="" />
                <h2 className="mb-0 text-white">Sign Up for our Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Your email address"
                  arial-aria-label="Your email address"
                  className="form-control py-1"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contant Us</h4>
              <div className="text-white fs-6">
                <address>
                  Hno: 277 Osu Commonwealth road <br /> Pincode: 4578245 <br />
                  Greater Accra Region
                </address>
                <a href="tel:+233244639729" className="mt-3 d-block mb-2 text-white">
                  (+233) 0244639729
                </a>
                <a href="maito:mkdbaah@gmail.com" className="mt-2 d-block mb-1 text-white">
                  mkdbaah@gmail.com
                </a>
                <div className="social-icons d-flex align-items-center mt-4 gap-30">
                  <a className="text-white" href="">
                    <BsLinkedin className="text-white fs-5" />
                  </a>
                  <a className="text-white" href="">
                    <BsGithub className="text-white fs-5" />
                  </a>
                  <a className="text-white" href="">
                    <BsInstagram className="text-white fs-5" />
                  </a>
                  <a className="text-white" href="">
                    <BsYoutube className="text-white fs-5" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Privacy Policy</Link>
                <Link className="text-white py-2 mb-1">Refund Policy</Link>
                <Link className="text-white py-2 mb-1">Shipping Policy</Link>
                <Link className="text-white py-2 mb-1">Terms of Service</Link>
                <Link className="text-white py-2 mb-1">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">About Us</Link>
                <Link className="text-white py-2 mb-1">FAQ</Link>
                <Link className="text-white py-2 mb-1">Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Headphone</Link>
                <Link className="text-white py-2 mb-1">Laptops</Link>
                <Link className="text-white py-2 mb-1">Tablets</Link>
                <Link className="text-white py-2 mb-1">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}; Powered By Wabi Baah
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
