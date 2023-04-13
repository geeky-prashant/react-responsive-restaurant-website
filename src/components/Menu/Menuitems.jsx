import React from "react";
import styled from "styled-components";
import { BsPlusCircleFill } from "react-icons/bs";

const Menuitems = (props) => {
  return (
    <Wrapper>
      <div className="product-card">
        <div className="thumbnail">
          <img src={props.imgsrc} alt="" />
        </div>
        <div className="prod-details">
          <span className="name">{props.pname}</span>
          <span className="price">&#8377;{props.price}</span>
        </div>
        <div className="cart-buttons">
          {/* <div className="quantity-buttons">
            <span>-</span>
            <span>5</span>
            <span>+</span>
          </div> */}
          <button className="add-to-cart-button">
            <BsPlusCircleFill size={15} />
            ADD TO CART
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 47%;
  .product-card {
    margin-bottom: 1.5rem;
    .thumbnail {
      width: 100%;
      background-color: rgba(0, 0, 0, 0.05);
      margin-bottom: 10px;
      padding: 5px;
      display: flex;
      align-items: center;
      border-radius: 1rem;
      img {
        transition: all ease 0.3s;
        display: block;
        width: 100%;
        border-radius: 1rem;
        object-fit: cover;
        height: 10rem;
      }
    }
    .prod-details {
      .name {
        font-size: 1.5rem;
        margin: 1.6rem 0 0.2rem;
        display: block;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        color: #232223;
      }
      .price {
        font-size: 2rem;
        color: #575457;
        font-weight: 400;
        line-height: 1.5;
      }
    }
    &:hover {
      .thumbnail {
        img {
          transform: scale(1.1);
        }
      }
    }
  }
  .cart-buttons {
    display: flex;
    gap: 1.5rem;
    flex-direction: column;
    margin-top: 1.5rem;
    .quantity-buttons {
      width: 100%;
      display: flex;
      justify-content: center;
      border: 0.2rem solid rgba(0, 0, 0, 0.2);
      border-radius: 0.5rem;
      margin-right: 1rem;
      height: 4rem;
      span {
        font-size: 1.8rem;
        width: 6rem;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        color: #6b6b6b;
        &:nth-child(1) {
          border-right: 0.2rem solid rgba(0, 0, 0, 0.2);
        }
        &:nth-child(2) {
          width: 4rem;
        }
        &:nth-child(3) {
          border-left: 0.2rem solid rgba(0, 0, 0, 0.2);
        }
      }
    }
    .add-to-cart-button {
      background-color: ${({ theme }) => theme.colors.btn};
      color: ${({ theme }) => theme.colors.white};
      border-radius: 5rem;
      width: 100%;
      height: 3.8rem;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      font-size: 1.4rem;
      cursor: pointer;
      border: none;
      outline: none;
      &:hover {
        background-color: ${({ theme }) => theme.colors.btnHover};
      }
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.media.tab}) {
    width: 23%;
    .product-card {
      .thumbnail {
        padding: 10px;
        img {
          height: 18rem;
        }
      }
      .prod-details {
        .name {
          font-size: 1.8rem;
        }
        .price {
          font-size: 2.2rem;
        }
      }
    }
    .cart-buttons {
      display: flex;
      flex-direction: row;
      margin-top: 1.5rem;
      gap: 0rem;
      .quantity-buttons {
        width: fit-content;
        display: flex;
        border: 0.2rem solid rgba(0, 0, 0, 0.2);
        border-radius: 0.5rem;
        margin-right: 1rem;
        height: 4rem;
        span {
          font-size: 1.8rem;
          width: 4rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #6b6b6b;
        }
      }
    }
  }
`;

export default Menuitems;
