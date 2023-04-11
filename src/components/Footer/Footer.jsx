import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad dolor
            similique facere totam dolores sit incidunt, delectus laboriosam!
            Ad, recusandae rerum. Omnis fugit sint eos?
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
          <div className="title">Shoes</div>
          <span className="text">All Shoes</span>
          <span className="text">Custom Shoes</span>
          <span className="text">Jordan Shoes</span>
          <span className="text">Running Shoes</span>
          <span className="text">Football Shoes</span>
          <span className="text">Basketball Shoes</span>
          <span className="text">Lifestyle Shoes</span>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Returns</span>
          <span className="text">Contact Us</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Terms & Conditions</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <div className="text">MADE WITH ❤️ BY GEEKY PRASHANT</div>
          <img className="payment" src="/assets/payments.svg" alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
