import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Layout from "./components/Layout";
import About from "./pages/About";
import Blog from "./pages/Blog";
import CompareProducts from "./pages/CompareProducts";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import OurStore from "./pages/OurStore";
import Signup from "./pages/Signup";
import Wishlist from "./pages/Wishlist";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import SingleBlog from "./pages/SingleBlog";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ShippingPolicy from "./pages/ShippingPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import RefundPolicy from "./pages/RefundPolicy";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/store" element={<OurStore />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/compare-products" element={<CompareProducts />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/blog/:id" element={<SingleBlog />} />
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/shipping-policy" element={<ShippingPolicy />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
