import { useState } from "react";
import ProductInfoComponent from "../components/ProductInfoComponent";

const MainPage = ({
  companyName,
  productName,
  description,
  price,
  discount,
}) => {
  const [cartProductQuantity, setCartProductQuantity] = useState(1);
  return (
    <div className="main-page-wrapper">
      <ProductInfoComponent
        companyName={companyName}
        productName={productName}
        description={description}
        price={price}
        discount={discount}
        cartProductQuantity={cartProductQuantity}
        setCartProductQuantity={setCartProductQuantity}
      />
    </div>
  );
};

export default MainPage;
