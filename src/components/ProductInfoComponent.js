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
  cartProductQuantity,
  setCartProductQuantity,
}) => {
  const updateCartProductQuantity = (event) => {
    const action = event.currentTarget.alt;
    if (action === "increase cart product quantity") {
      setCartProductQuantity((prevQuantity) => prevQuantity + 1);
    } else if (action === "reduce cart product quantity") {
      setCartProductQuantity((prevQuantity) => Math.max(prevQuantity - 1, 0));
    }
  };

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
            <strong>${(price * (discount / 100)).toFixed(2)}</strong>
          </span>
          <div className="discount-bgc">
            <span className="price-discount orange bold">{discount}%</span>
          </div>
        </div>
        <span className="discounted-price bold disabled">${price}</span>
      </div>

      <div className="add-to-cart-wrapper">
        <div className="counter-wrapper">
          <img
            className="caunter-manipulators"
            src={minusIcon}
            alt="reduce cart product quantity"
            onClick={updateCartProductQuantity}
          />
          <span className="items-numer-counter">{cartProductQuantity}</span>
          <img
            className="caunter-manipulators"
            src={plusIcon}
            alt="increase cart product quantity"
            onClick={updateCartProductQuantity}
          />
        </div>
        <ButtonComponent text="Add to cart" styleProps="bgOrange cart" />
      </div>
    </div>
  );
};

export default ProductInfoComponent;
