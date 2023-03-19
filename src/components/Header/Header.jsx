import React from "react";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
import { FaPizzaSlice } from "react-icons/fa";
import styled from "styled-components";
import { BsHandbagFill } from "react-icons/bs";
import { useState } from "react";
import Cart from "../Cart/Cart";

const Header = () => {
  const [showCart, setShowCart] = useState(false);

  return (
    <MainHeader>
      <div className="header-content">
        <NavLink to="/">
          <div className="logo">
            <FaPizzaSlice className="logo-icon" /> PIZZAS
          </div>
        </NavLink>
        <Navbar />
        <span className="cart-icon" onClick={() => setShowCart(true)}>
          <BsHandbagFill className="bag" />
          <span>6</span>
        </span>
        {showCart && <Cart setShowCart={setShowCart} />}
      </div>
    </MainHeader>
  );
};

const MainHeader = styled.header`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: ${({ theme }) => theme.colors.bg};
  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 120rem;
    margin: 0 auto;
    height: 6rem;
    padding: 0 2.5rem;
  }
  a {
    text-decoration: none;
    .logo {
      display: flex;
      gap: 0.6rem;
      font-size: 2rem;
      color: ${({ theme }) => theme.colors.white};
      text-decoration: none;
      font-weight: 600;
      .logo-icon {
        color: ${({ theme }) => theme.colors.helper};
      }
    }
  }
  .bag {
    color: ${({ theme }) => theme.colors.white};
    font-size: 2.5rem;
    cursor: pointer;
  }
  .cart-icon {
    position: relative;
    display: flex;
    span {
      min-width: 20px;
      text-align: center;
      background-color: ${({ theme }) => theme.colors.helper};
      padding: 2.5px;
      position: absolute;
      top: -5px;
      right: -12px;
      font-size: 12px;
      line-height: 1;
      border-radius: 10px;
    }
  }
  @media only screen and (min-width: ${({ theme }) => theme.media.tab}) {
    .header-content {
      height: 8rem;
    }
  }
`;

export default Header;
