import "./SingleProduct.scss";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";

const SingleProduct = () => {
  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img src="/assets/products/jordan-1.png" alt="" />
          </div>
          <div className="right">
            <span className="name">Air Jordan 1 Mid SE</span>
            <span className="price">₹11,895.00</span>
            <span className="desc">
              This AJ1 is all about love. Self-love, love of the game, love for
              life—whatever the L-word evokes for you, this foray into floral
              footwear symbolises the passions that push you forwards. Want to
              get in the weeds? Just open the box: special-edition packaging
              names every flower in the bouquet, plus their hidden meanings. Or
              you can tear past the paper and let the beauty of the blooms
              gracing the collar and hangtag speak for themselves. Either way,
              you (and the whole world) are going to fall in love with your
              look.
            </span>

            <div className="cart-buttons">
              <div className="quantity-buttons">
                <span>-</span>
                <span>5</span>
                <span>+</span>
              </div>
              <button className="add-to-cart-button">
                <FaCartPlus size={20} />
                ADD TO CART
              </button>
            </div>
            <span className="divider" />

            <div className="info-item">
              <span className="text-bold">
                Category:
                <span> Jordan Shoes</span>
              </span>
              <span className="text-bold">
                Share:
                <span className="social-icons">
                  <FaFacebookF size={16} />
                  <FaTwitter size={16} />
                  <FaInstagram size={16} />
                  <FaLinkedinIn size={16} />
                  <FaPinterest size={16} />
                </span>
              </span>
            </div>
          </div>
        </div>
        <RelatedProducts />
      </div>
    </div>
  );
};

export default SingleProduct;
