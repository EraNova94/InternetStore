import React from "react";
import NavBar from "./Components/NavBar/Navbar";
import ProductContextProvider from "./context/ProductContextProvider";
import MainRoutes from "./MainRoutes";
import BasketContextProvider from "./context/BasketContextProvider";
const App = () => {
  return (
    <BasketContextProvider>
      <ProductContextProvider>
        <NavBar />
        <MainRoutes />
      </ProductContextProvider>
    </BasketContextProvider>
  );
};

export default App;
