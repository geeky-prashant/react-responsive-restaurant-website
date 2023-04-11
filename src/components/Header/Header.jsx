import { Link } from "react-router-dom";
import React from "react";
import "./Header.scss";
import { useEffect, useState } from "react";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { GiRunningShoe } from "react-icons/gi";
import Search from "./Search/Search";
import Cart from "../Cart/Cart";

import "./Header.scss";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <>
      <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
        <div className="header-content">
          <div className="left">
            <Link to="/">
              <GiRunningShoe /> SNEAKERS.
            </Link>
          </div>
          <ul className="center">
            <li>
              <Link to="/">Home Page</Link>
            </li>
            <li>
              <Link to="/category">Category Page</Link>
            </li>
            <li>
              <Link to="/product">Product Page</Link>
            </li>
          </ul>
          <div className="right">
            <TbSearch onClick={() => setShowSearch(true)} />
            <span className="cart-icon" onClick={() => setShowCart(true)}>
              <CgShoppingCart />
              <span>6</span>
            </span>
          </div>
        </div>
      </header>
      {showCart && <Cart setShowCart={setShowCart} />}
      {showSearch && <Search setShowSearch={setShowSearch} />}
    </>
  );
};

export default Header;
