import { useState } from "react";
import Meta from "../components/Meta";
import Breadcrumb from "../components/BreadCrumb";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import Color from "../components/Color";
// import ReactImageZoom from "react-image-zoom";
import { Link } from "react-router-dom";
import Watch from "../assets/images/watch.jpg";

function SingleProduct() {
  const props = { width: 400, height: 600, zoomWidth: 600, img: "images/watch.jpg" };

  const [orderedProduct, setOrderedProduct] = useState(true);

  const copyToClipboard = (text) => {
    let textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };
  return (
    <>
      <Meta title="Single Product" />
      <Breadcrumb title="Single Product" />
      <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div className="">{/* <ReactImageZoom {...props} /> */}</div>
              </div>
              <div className="other-product-images d-flex flex-wrap gap-15">
                <div className="">
                  <img src={Watch} alt="" className="img-fluid" />
                </div>
                <div className="">
                  <img src={Watch} alt="" className="img-fluid" />
                </div>
                <div className="">
                  <img src={Watch} alt="" className="img-fluid" />
                </div>
                <div className="">
                  <img src={Watch} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="main-product-details">
                <div className="border-bottom">
                  <h3 className="title">Kids heaphones bulk 10 Pack Multi Colored for Students</h3>
                </div>
                <div className="border-bottom py-3">
                  <p className="price">GH$ 100</p>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      value={4}
                      edit={false}
                      onChange={() => console.log("clicked")}
                      size={24}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0 t-review">(35 reviews)</p>
                  </div>
                  <a className="review-btn" href="#review">
                    Write a review
                  </a>
                </div>
                <div className="border-bottom py-3">
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Type:</h3>{" "}
                    <p className="product-data">Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Brand:</h3>{" "}
                    <p className="product-data">Havels</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Categories:</h3>{" "}
                    <p className="product-data">Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Tags:</h3> <p className="product-data">GGD</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Availability:</h3>{" "}
                    <p className="product-data">In Stock</p>
                  </div>
                  <div className="d-flex gap-10 flex-column mt-2 mb-3">
                    <h3 className="product-heading">Size:</h3>{" "}
                    <div className="d-flex flex-wrap gap-15">
                      <span className="bage border border-1 bg-white text-dark border-secondary">
                        S
                      </span>
                      <span className="bage border border-1 bg-white text-dark border-secondary">
                        M
                      </span>
                      <span className="bage border border-1 bg-white text-dark border-secondary">
                        L
                      </span>
                      <span className="bage border border-1 bg-white text-dark border-secondary">
                        XL
                      </span>
                      <span className="bage border border-1 bg-white text-dark border-secondary">
                        XXL
                      </span>
                    </div>
                  </div>
                  <div className="d-flex gap-10 flex-column mt-2 mb-3">
                    <h3 className="product-heading">Color:</h3> <Color />
                  </div>
                  <div className="d-flex gap-15 flex-row align-items-center mt-2 mb-3">
                    <h3 className="product-heading">Quantity:</h3>{" "}
                    <div className="">
                      <input
                        min={1}
                        max={10}
                        type="number"
                        name=""
                        id=""
                        style={{ width: "70px" }}
                        className="form-control"
                      />
                    </div>
                    <div className="d-flex align-items-center gap-30 ms-5">
                      <button className="button border-0" type="submit">
                        Add to Cart
                      </button>
                      <button className="button signup">Buy it Now</button>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-15 ">
                    <div className="">
                      <a href="">
                        {" "}
                        <TbGitCompare className="fs-5 me-2" /> Add to Compare
                        {/* put images later wai? */}
                      </a>
                    </div>
                    <div className="">
                      <a href="">
                        {" "}
                        <AiOutlineHeart className="fs-5 me-2" /> Add to Wishlist
                      </a>
                    </div>
                  </div>
                  <div className="d-flex gap-10 flex-column mt-2 mb-3">
                    <h3 className="product-heading">Shipping and Returns</h3>
                    <p>
                      Free shipping and returns on all orders! <br /> We ship all US domestic
                      orders within <b>5-10 bunsiness 10days</b>
                    </p>
                  </div>
                  <div className="d-flex gap-10 flex-column mt-3 mb-3">
                    <h3 className="product-heading">Materials</h3>
                    <p>
                      Running shoes cushions your stride with soft foam to keep you running in
                      comfort. Lightweight knit material wraps your foot in breathe support, while
                      a minimalist design fits in just about anywhere your day takes you.
                    </p>
                  </div>
                  <div className="d-flex gap-10 align-items-center mt-3 mb-3">
                    <h3 className="product-heading">Product Link</h3>
                    <a
                      href="javascript:void(0);"
                      onClick={() => {
                        copyToClipboard("the dynamic product link");
                      }}
                    >
                      Click to Copy Product Link
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="description-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h4 className="">Description</h4>
              <div className="bg-white p-3">
                <p className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quaerat laboriosam
                  velit minima, adipisci error harum ipsam, ex necessitatibus quo, numquam natus.
                  Nemo, aperiam consectetur ea soluta accusamus aliquam ipsam!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="reviews-wrapper home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 id="review">Reviews</h3>
              <div className="review-inner-wrapper">
                <div className="review-head d-flex justify-content-between align-items-end">
                  <div className="">
                    <h4 className="mb-2">Customer Reviews</h4>
                    <div className="d-flex align-items-center justify-content-end gap-10">
                      <ReactStars
                        count={5}
                        value={4}
                        edit={false}
                        onChange={() => console.log("clicked")}
                        size={24}
                        activeColor="#ffd700"
                      />
                      <p className="mb-0">Based on 35 reviews</p>
                    </div>
                  </div>
                  {orderedProduct && (
                    <div className="">
                      <Link className="text-dark text-decoration-underline">Write a Review</Link>
                    </div>
                  )}
                </div>
                <div className="review-form py-4">
                  <h4>Write a Review</h4>
                  <form className="d-flex flex-column gap-15" action="">
                    <div className="">
                      <ReactStars
                        count={5}
                        value={4}
                        edit={true}
                        onChange={() => console.log("clicked")}
                        size={24}
                        activeColor="#ffd700"
                      />
                    </div>
                    <div>
                      <textarea
                        className="w-100 form-control"
                        name=""
                        id=""
                        cols="30"
                        rows="4"
                        placeholder="Message"
                      ></textarea>
                    </div>
                    <div className="d-flex justify-content-end ">
                      <button type="submit" className="button border-0">
                        Submit Review
                      </button>
                    </div>
                  </form>
                </div>
                <div className="reviews mt-4">
                  <div className="review">
                    <div className="d-flex gap-10 align-items-center">
                      <h6 className="mb-0">Michael</h6>
                      <ReactStars
                        count={5}
                        value={4}
                        edit={false}
                        onChange={() => console.log("clicked")}
                        size={24}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="mt-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, reiciendis sint.
                      Ad atque eius esse maiores fuga natus id, non, impedit animi ab deserunt, eum
                      voluptatibus officiis amet quo consequatur
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
    </>
  );
}

export default SingleProduct;
