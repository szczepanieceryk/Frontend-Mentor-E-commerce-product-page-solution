import "../styles/components/_productInfoComponent.scss";
import "../styles/components/_buttons.scss";
import minusIcon from "../images/icon-minus.svg";
import plusIcon from "../images/icon-plus.svg";
import ButtonComponent from "./ButtonComponent";

const ProductInfoComponent = ({
  companyName,
  productName,
  description,
  price,
  discount,
}) => {
  return (
    <div className="product-info-component-wrapper">
      <div className="product-info-wrapper">
        <span className="company-name orange bold">{companyName}</span>
        <h1 className="product-name bold">{productName}</h1>
        <p className="product-description bold">{description}</p>
      </div>

      <div className="product-price-wrapper">
        <div className="price-left">
          <span className="product-price bold">
            <strong>${price}</strong>
          </span>
          <div className="discount-bgc">
            <span className="price-discount orange bold">{discount}%</span>
          </div>
        </div>
        <span className="discounted-price bold disabled">$250.0</span>
      </div>

      <div className="add-to-cart-wrapper">
        <div className="counter-wrapper">
          <img className="caunter-manipulators" src={minusIcon} alt="" />
          <span className="items-numer-counter">0</span>
          <img className="caunter-manipulators" src={plusIcon} alt="" />
        </div>
        <ButtonComponent text="Add to cart" styleProps="bgOrange cart" />
      </div>
    </div>
  );
};

export default ProductInfoComponent;
