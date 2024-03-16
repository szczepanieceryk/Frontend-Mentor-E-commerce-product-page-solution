import "../styles/components/_productInfoComponent.scss";
import "../styles/components/_buttons.scss";
import minusIcon from "../images/icon-minus.svg";
import plusIcon from "../images/icon-plus.svg";
import ButtonComponent from "./ButtonComponent";

const ProductInfoComponent = () => {
  return (
    <div className="product-info-component-wrapper">
      <div className="product-info-wrapper">
        <span className="company-name orange bold">Sneaker Company</span>
        <h1 className="product-name bold">Fall Limited Edition Sneakers</h1>
        <p className="product-description bold">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
      </div>

      <div className="product-price-wrapper">
        <div className="price-left">
          <span className="product-price bold">$125.00</span>
          <div className="discount-bgc">
            <span className="price-discount orange bold">50%</span>
          </div>
        </div>
        <span className="discounted-price bold disabled">$250.0</span>
      </div>

      <div className="add-to-cart-wrapper">
        <div className="counter-wrapper">
          <img src={minusIcon} alt="" />
          <span className="items-numer-counter">0</span>
          <img src={plusIcon} alt="" />
        </div>
        <ButtonComponent text="Add to cart" bgColor="bgOrange" />
      </div>
    </div>
  );
};

export default ProductInfoComponent;
