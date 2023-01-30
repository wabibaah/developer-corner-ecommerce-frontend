import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProductCard from "../components/SpecialProductCard";
import MainBanner from "../assets/images/main-banner-1.jpg";
import CatBanner1 from "../assets/images/catbanner-01.jpg";
import CatBanner2 from "../assets/images/catbanner-02.jpg";
import CatBanner3 from "../assets/images/catbanner-03.jpg";
import CatBanner4 from "../assets/images/catbanner-04.jpg";
import Camera from "../assets/images/camera.jpg";
import Tv from "../assets/images/tv.jpg";
import Acc from "../assets/images/acc.jpg";
import Blog1 from "../assets/images/blog-1.jpg";
import HeadPhone from "../assets/images/headphone.jpg";
import Service1 from "../assets/images/service-01.png";
import Service2 from "../assets/images/service-02.png";
import Service3 from "../assets/images/service-03.png";
import Service4 from "../assets/images/service-04.png";
import Service5 from "../assets/images/service-05.png";
import Brand1 from "../assets/images/brand-01.png";
import Brand2 from "../assets/images/brand-02.png";
import Brand3 from "../assets/images/brand-03.png";
import Brand4 from "../assets/images/brand-04.png";
import Brand5 from "../assets/images/brand-05.png";
import Brand6 from "../assets/images/brand-06.png";
import Brand7 from "../assets/images/brand-07.png";
import Brand8 from "../assets/images/brand-08.png";

function Home() {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative">
                <img src={MainBanner} className="img-fluid rounded-3" alt="" />
                <div className="main-banner-content position-absolute">
                  <h4>SUPER CHARGED FOR PROS.</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>
                    From GH$999.00 <br /> or GH$41.62/mo
                  </p>
                  <Link className="button">BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6 ">
              <div className="d-flex flex-row flex-wrap gap-10 justify-content-between align-items-center">
                <div className="small-banner position-relative">
                  <img src={CatBanner1} className="img-fluid rounded-3" alt="" />
                  <div className="small-banner-content position-absolute">
                    <h4>Best Sale</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>
                      From GH$999.00 <br /> or GH$41.62/mo
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img src={CatBanner2} className="img-fluid rounded-3" alt="" />
                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVALS</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>
                      From GH$999.00 <br /> or GH$41.62/mo
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img src={CatBanner3} className="img-fluid rounded-3" alt="" />
                  <div className="small-banner-content position-absolute">
                    <h4>15%</h4>
                    <h5>Buy iPad </h5>
                    <p>
                      From GH$999.00 <br /> or GH$41.62/mo
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img src={CatBanner4} className="img-fluid rounded-3" alt="" />
                  <div className="small-banner-content position-absolute">
                    <h4>FREE ENGRAVING</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>
                      From GH$999.00 <br /> or GH$41.62/mo
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-15 ">
                  <img src={Service1} alt="" />
                  <div className="">
                    <h6>Free Shipping</h6>
                    <p className="mb-0 ">from all orders </p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15 ">
                  <img src={Service2} alt="" />
                  <div className="">
                    <h6>Daily Surprise Offers</h6>
                    <p className="mb-0 ">Save up to 25% off</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15 ">
                  <img src={Service3} alt="" />
                  <div className="">
                    <h6>Support 24/7</h6>
                    <p className="mb-0 ">Shop with an expert</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15 ">
                  <img src={Service4} alt="" />
                  <div className="">
                    <h6>Affordable prices</h6>
                    <p className="mb-0 ">Get factory default prices</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15 ">
                  <img src={Service5} alt="" />
                  <div className="">
                    <h6>Secure payments</h6>
                    <p className="mb-0 ">100% protected payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex justify-content-between flex-wrap align-items-center">
                <div className="d-flex  align-items-center">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 items</p>
                  </div>
                  <img src={Camera} alt="camera" />
                </div>
                <div className="d-flex  align-items-center">
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 items</p>
                  </div>
                  <img src={Tv} alt="camera" />
                </div>
                <div className="d-flex  align-items-center">
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 items</p>
                  </div>
                  <img src={Acc} alt="camera" />
                </div>
                <div className="d-flex  align-items-center">
                  <div>
                    <h6>Headphones</h6>
                    <p>10 items</p>
                  </div>
                  <img src={HeadPhone} alt="headphone" />
                </div>
                <div className="d-flex  align-items-center">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 items</p>
                  </div>
                  <img src={Camera} alt="camera" />
                </div>
                <div className="d-flex  align-items-center">
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 items</p>
                  </div>
                  <img src={Tv} alt="camera" />
                </div>
                <div className="d-flex  align-items-center">
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 items</p>
                  </div>
                  <img src={Acc} alt="camera" />
                </div>
                <div className="d-flex  align-items-center">
                  <div>
                    <h6>Headphones</h6>
                    <p>10 items</p>
                  </div>
                  <img src={HeadPhone} alt="camera" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="featured-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Featured Collection</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className="famous-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src={Blog1} alt="" className="img-fluid" />
                <div className="famous-content position-absolute">
                  <h5>Big Screen</h5>
                  <h6>Smart Watch Series 7</h6>
                  <p>From GH$399 or GH$16.62/mon for 24 mo.*</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src={Blog1} alt="" className="img-fluid" />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Studio display</h5>
                  <h6 className="text-dark">600 nights of brightness</h6>
                  <p className="text-dark">27-inch 5K Retina display</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src={Blog1} alt="" className="img-fluid" />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Smart phones</h5>
                  <h6 className="text-dark">Smartphone 13 Pro</h6>
                  <p className="text-dark">
                    Now in Green. From GH$999.99 or GH$41.62/mo for 24mo. Footnote*
                  </p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src={Blog1} alt="" className="img-fluid" />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Home Speakers</h5>
                  <h6 className="text-dark">Room-filling Sound</h6>
                  <p className="text-dark">
                    Now in Green. From GH$699.99 or GH$41.62/mo for 24mo. Footnote*
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="special-wrapper py-5 home-wrapper-2">
        <div className="container-xxl ">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Special Products</h3>
            </div>
          </div>
          <div className="row ">
            <SpecialProductCard />
            <SpecialProductCard />
            <SpecialProductCard />
          </div>
        </div>
      </section>
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
      <section className="marquee-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper ">
                <Marquee className="d-flex">
                  <div className="mx-4 w-25">
                    <img className="img-fluid" src={Brand1} alt="" />
                  </div>
                  <div className="mx-4 w-25">
                    <img className="img-fluid" src={Brand2} alt="" />
                  </div>
                  <div className="mx-4 w-25">
                    <img className="img-fluid" src={Brand3} alt="" />
                  </div>
                  <div className="mx-4 w-25">
                    <img className="img-fluid" src={Brand4} alt="" />
                  </div>
                  <div className="mx-4 w-25">
                    <img className="img-fluid" src={Brand5} alt="" />
                  </div>
                  <div className="mx-4 w-25">
                    <img className="img-fluid" src={Brand6} alt="" />
                  </div>
                  <div className="mx-4 w-25">
                    <img className="img-fluid" src={Brand7} alt="" />
                  </div>
                  <div className="mx-4 w-25">
                    <img className="img-fluid" src={Brand8} alt="" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our latest Blogs</h3>
            </div>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
