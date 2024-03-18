import MainPage from "./pages/MainPage";
import "./styles/style.css";

const App = () => {
  const productInfoData = {
    id: 1,
    companyName: "Sneaker Company",
    productName: "Fall Limited Edition Sneakers",
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    price: "250.00",
    discount: "50",
  };

  return (
    <div className="app-wrapper">
      <div className="main-wrapper">
        <MainPage
          companyName={productInfoData.companyName}
          productName={productInfoData.productName}
          description={productInfoData.description}
          price={productInfoData.price}
          discount={productInfoData.discount}
        />
      </div>
    </div>
  );
};

export default App;
