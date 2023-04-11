import { MdClose } from "react-icons/md";
import "./CartItem.scss";
const CartItem = () => {
  return (
    <div className="cart-products">
      <div className="cart-product">
        <div className="img-container">
          <img src="assets/products/jordan-1.png" alt="" />
        </div>
        <div className="prod-details">
          <span className="name">Air Jordan 1 Mid SE</span>
          <MdClose className="close-btn" />
          <div className="quantity-buttons">
            <span>-</span>
            <span>3</span>
            <span>+</span>
          </div>
          <div className="text">
            <span>3</span>
            <span>x</span>
            <span className="highlight">₹11,895</span>
          </div>
        </div>
      </div>
      <div className="cart-product">
        <div className="img-container">
          <img src="assets/products/jordan-5.png" alt="" />
        </div>
        <div className="prod-details">
          <span className="name">Air Jordan 1 Retro High OG</span>
          <MdClose className="close-btn" />
          <div className="quantity-buttons">
            <span>-</span>
            <span>2</span>
            <span>+</span>
          </div>
          <div className="text">
            <span>2</span>
            <span>x</span>
            <span className="highlight">₹8,497</span>
          </div>
        </div>
      </div>
      <div className="cart-product">
        <div className="img-container">
          <img src="assets/products/jordan-7.png" alt="" />
        </div>
        <div className="prod-details">
          <span className="name">Air Jordan 5 Retro SE</span>
          <MdClose className="close-btn" />
          <div className="quantity-buttons">
            <span>-</span>
            <span>1</span>
            <span>+</span>
          </div>
          <div className="text">
            <span>1</span>
            <span>x</span>
            <span className="highlight">₹20,295</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
