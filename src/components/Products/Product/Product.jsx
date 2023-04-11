import "./Product.scss";

const Product = (props) => {
  return (
    <div className="product-card">
      <div className="thumbnail">
        <img src={props.imgsrc} alt="" />
      </div>
      <div className="prod-details">
        <span className="name">{props.pname}</span>
        <span className="price">&#8377;{props.price}</span>
      </div>
    </div>
  );
};

export default Product;
