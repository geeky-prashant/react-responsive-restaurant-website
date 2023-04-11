import { MdClose } from "react-icons/md";
import "./Search.scss";
const Search = ({ setShowSearch }) => {
  return (
    <div className="search-modal">
      <div className="form-field">
        <input type="text" autoFocus placeholder="Search for products" />
        <MdClose onClick={() => setShowSearch(false)} />
      </div>
      <div className="search-result-content">
        <div className="search-results">
          <div className="search-result-item">
            <div className="img-container">
              <img src="assets/products/jordan-1.png" alt="" />
            </div>
            <div className="prod-details">
              <span className="name">Air Jordan 1 Mid SE</span>
              <span className="desc">This AJ1 is all about love.</span>
            </div>
          </div>
          <div className="search-result-item">
            <div className="img-container">
              <img src="assets/products/jordan-2.png" alt="" />
            </div>
            <div className="prod-details">
              <span className="name">Air Jordan XXXVII Low PFn</span>
              <span className="desc">This AJXXXVII is all about love.</span>
            </div>
          </div>
          <div className="search-result-item">
            <div className="img-container">
              <img src="assets/products/jordan-3.png" alt="" />
            </div>
            <div className="prod-details">
              <span className="name">Air Jordan 1 Mid SE Craftn</span>
              <span className="desc">This AJ1 is all about love.</span>
            </div>
          </div>
          <div className="search-result-item">
            <div className="img-container">
              <img src="assets/products/jordan-7.png" alt="" />
            </div>
            <div className="prod-details">
              <span className="name">Air Jordan 5 Retro SE</span>
              <span className="desc">This AJ5 is all about love.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
