import ProductInfoComponent from "../components/ProductInfoComponent";

const MainPage = ({
  companyName,
  productName,
  description,
  price,
  discount,
}) => {
  return (
    <div className="main-page-wrapper">
      <ProductInfoComponent
        companyName={companyName}
        productName={productName}
        description={description}
        price={price}
        discount={discount}
      />
    </div>
  );
};

export default MainPage;
