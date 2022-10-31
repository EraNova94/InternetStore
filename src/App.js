import React from "react";
import NavBar from "./Components/NavBar/Navbar";
import ProductContextProvider from "./context/ProductContextProvider";
import ProductDetails from "./Components/Product/ProductDetails/ProductDetails";
import MainRoutes from "./MainRoutes";
const App = () => {
  return (
    <ProductContextProvider>
      <NavBar />
      <MainRoutes />
    </ProductContextProvider>
  );
};

export default App;
