import { useState } from "react";
import ReactStars from "react-rating-stars-component";

import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";

function OurStore() {
  const [grid, setGrid] = useState(4);
  // alert(grid);

  return (
    <>
      <Meta title="Our Store" />
      <BreadCrumb title="Our Store" />
      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Shop By Categories</h3>
                <div className="">
                  <ul className="ps-0">
                    <li>Watch</li>
                    <li>TV</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Filter By</h3>
                <div className="">
                  <h5 className="sub-title">Availability</h5>
                  <div>
                    <div className="form-check d-flex align-items-center justify-content-start gap-10">
                      <input type="checkbox" name="" id="" className="form-check-input" />
                      <label htmlFor="" className="form-check-label ">
                        In Stock (1)
                      </label>
                    </div>
                    <div className="form-check d-flex align-items-center justify-content-start gap-10">
                      <input type="checkbox" name="" id="" className="form-check-input" />
                      <label htmlFor="" className="form-check-label">
                        Out of Stock (0)
                      </label>
                    </div>
                  </div>
                  <h5 className="sub-title">Price</h5>
                  <div className="d-flex align-items-center gap-10">
                    <div className="form-floating">
                      <input
                        type="text"
                        name=""
                        id="floatingInput1"
                        className="form-control py-1"
                        placeholder="From"
                      />
                      <label htmlFor="floatingInput1">From</label>
                    </div>
                    <div className="form-floating">
                      <input
                        type="text"
                        name=""
                        id="floatingInput2"
                        className="form-control py-1"
                        placeholder="To"
                      />
                      <label htmlFor="floatingInput2">To</label>
                    </div>
                  </div>
                  <h5 className="sub-title">Colors</h5>
                  <div className="">
                    <ul className="colors ps-0">
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                  <h5 className="sub-title">Size</h5>
                  <div className="">
                    <div className="form-check">
                      <input type="checkbox" name="" id="size-1" className="form-check-input" />
                      <label htmlFor="size-1" className="form-check-label">
                        S(2)
                      </label>
                    </div>
                    <div className="form-check">
                      <input type="checkbox" name="" id="size-2" className="form-check-input" />
                      <label htmlFor="size-2" className="form-check-label">
                        M(4)
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Product Tags</h3>
                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Headphone{" "}
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Laptop{" "}
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Mobile{" "}
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Fridge{" "}
                  </span>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Random Product</h3>
                <div className="">
                  <div className="random-products mb-3 d-flex">
                    <div className="w-50">
                      <img src="images/watch.jpg" alt="watch" className="img-fluid" />
                    </div>
                    <div className="w-50">
                      <h5>Kids watch bulk 10 pack multi colored for students</h5>
                      <ReactStars
                        count={5}
                        value={4}
                        edit={false}
                        onChange={() => console.log("clicked")}
                        size={24}
                        activeColor="#ffd700"
                      />
                      <p>GH$500</p>
                    </div>
                  </div>
                  <div className="random-products d-flex">
                    <div className="w-50">
                      <img src="images/watch.jpg" alt="watch" className="img-fluid" />
                    </div>
                    <div className="w-50">
                      <h5>Kids watch bulk 10 pack multi colored for students</h5>
                      <ReactStars
                        count={5}
                        value={4}
                        edit={false}
                        onChange={() => console.log("clicked")}
                        size={24}
                        activeColor="#ffd700"
                      />
                      <p>GH$500</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="filter-sort-grid mb-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-10">
                    <p className="mb-0 d-block" style={{ width: "100px" }}>
                      Sort By:
                    </p>
                    <select name="" id="" className="form-control form-select">
                      <option value="manual">Featured</option>
                      <option value="best-selling">Best Selling</option>
                      <option value="title-ascending">Alphabetically, A-Z</option>
                      <option value="title-descending">Alphabetically, Z-A</option>
                      <option value="price-ascending">Price, low to high</option>
                      <option value="price-descending">Price, high to low</option>
                      <option value="created-ascending">Date, old to new</option>
                      <option value="created-descending">Price, new to old</option>
                    </select>
                  </div>
                  <div className="d-flex align-items-center gap-10">
                    <p className="total-products mb-0">35 Proudcts</p>
                    <div className="d-flex gap-10 align-items-center grid">
                      <img
                        onClick={() => setGrid(3)}
                        src="images/gr4.svg"
                        alt="grid "
                        className=" img-fluid"
                      />
                      <img
                        onClick={() => setGrid(4)}
                        src="images/gr3.svg"
                        alt="grid "
                        className=" img-fluid"
                      />
                      <img
                        onClick={() => setGrid(6)}
                        src="images/gr2.svg"
                        alt="grid "
                        className=" img-fluid"
                      />
                      <img
                        onClick={() => setGrid(12)}
                        src="images/gr.svg"
                        alt="grid "
                        className=" img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="proudcts-list pb-5">
                <div className="row">
                  <ProductCard grid={grid} />
                  <ProductCard grid={grid} />
                  <ProductCard grid={grid} />
                  <ProductCard grid={grid} />
                  <ProductCard grid={grid} />
                  <ProductCard grid={grid} />
                  <ProductCard grid={grid} />
                  <ProductCard grid={grid} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurStore;
