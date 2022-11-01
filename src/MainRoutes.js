import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import AddProduct from "./Components/Admin/AddProduct/AddProduct";
import ProductDetails from "./Components/Product/ProductDetails/ProductDetails";
import ProductsList from "./Components/Product/ProductsList/ProductsList";
import EditProduct from "./Components/Admin/EditProduct/EditProduct";
import Basket from "./Components/Basket/Basket";
const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/add" element={<AddProduct />} />
      <Route path="/list" element={<ProductsList />} />
      <Route path="/details/:id" element={<ProductDetails />} />
      <Route path="/edit/:id" element={<EditProduct />}></Route>
      <Route path="/basket" element={<Basket />} />
    </Routes>
  );
};

export default MainRoutes;
