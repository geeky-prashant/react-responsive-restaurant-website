import React from "react";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <div className="container">
        <footer className="footer">
          <div className="footer-content">
            <div className="col">
              <div className="title">About</div>
              <div className="text">
                At Pizzas, we don’t just make pizza. We make people happy.
                Pizzas was built on the belief that pizza night should be
                special, and we carry that belief into everything we do. With
                more than 15 years of experience under our belts.
              </div>
            </div>
            <div className="col">
              <div className="title">Contact</div>
              <div className="c-item">
                <FaLocationArrow />
                <div className="text">Gurugram, Harayana, India</div>
              </div>
              <div className="c-item">
                <FaMobileAlt />
                <div className="text">Phone: 998887776</div>
              </div>
              <div className="c-item">
                <FaEnvelope />
                <div className="text">Email: geekyprashant@gmail.com</div>
              </div>
            </div>
            <div className="col">
              <div className="title">Menu</div>
              <span className="text">Pizza</span>
              <span className="text">Pasta</span>
              <span className="text">Burgers</span>
              <span className="text">Desserts</span>
              <span className="text">Drinks</span>
            </div>
            <div className="col">
              <div className="title">Pages</div>
              <span className="text">Home</span>
              <span className="text">About</span>
              <span className="text">Menu</span>
              <span className="text">Blog</span>
              <span className="text">Contact</span>
            </div>
          </div>
        </footer>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <div className="text">MADE WITH ❤️ BY GEEKY PRASHANT</div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .footer {
    width: 100%;
    .footer-content {
      padding: 50px 0px;
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      flex-flow: wrap;
      gap: 20px;
      .col {
        max-width: 300px;
        .title {
          margin-bottom: 20px;
          font-size: 20px;
        }
        .text {
          color: rgba(0, 0, 0, 0.5);
          font-size: 14px;
        }
        .c-item {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
          svg {
            flex-shrink: 0;
            font-size: 14px;
            margin-right: 10px;
            color: rgba(0, 0, 0, 0.5);
          }
        }
        span {
          &.text {
            display: block;
            margin-bottom: 10px;
            cursor: pointer;
          }
        }
      }
    }
  }
  .bottom-bar {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    background-color: #f7f5f5;
    .bottom-bar-content {
      padding: 20px;
      display: flex;
      align-items: center;
      flex-direction: column;
      text-align: center;
      gap: 10px;
      .text {
        font-size: 12px;
        color: rgba(0, 0, 0, 0.5);
      }
    }
  }
  @media only screen and (min-width: ${({ theme }) => theme.media.tab}) {
    .footer-content {
      justify-content: space-between;
      padding: 50px 0px;
    }
    .bottom-bar-content {
      padding: 0;
      height: 60px;
      max-width: 1200px;
      margin: 0 auto;
      flex-direction: row;
      justify-content: space-between;
      text-align: left;
    }
  }
`;

export default Footer;
