import React, { useContext, useEffect } from "react";
import { Box, Grid, Typography } from "@mui/material";
import ProductCard from "../ProductCard/ProductCard";
import { productContext } from "../../../context/ProductContextProvider";
import { useSearchParams } from "react-router-dom";
import Filter from "../../Filter/Filter";
import { useState } from "react";
const ProductsList = () => {
  const { productsArr, readProduct } = useContext(productContext);
  const [paramsSearch, setParamsSearch] = useSearchParams();
  const [category, setCategory] = useState("all");
  const [price, setPrice] = useState([0, 200000]);

  useEffect(() => {
    if (paramsSearch.get("category") === "all") {
      setParamsSearch({
        price_gte: price[0],
        price_lte: price[1],
      });
    } else {
      setParamsSearch({
        category: category,
        price_gte: price[0],
        price_lte: price[1],
      });
    }
    readProduct();
  }, [category, price]);

  return (
    <>
      <Grid sx={{ width: "40%" }} ml="40px" my="20px">
        <Typography variant="h4">Filter</Typography>
        <Filter
          category={category}
          setCategory={setCategory}
          price={price}
          setPrice={setPrice}
        />
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="flex-start"
        sx={{ width: "90%" }}
        mx="auto"
        my="20px">
        {productsArr
          ? productsArr.map(item => (
              <Grid xs={3.5} mb={7} key={item.id} item={true}>
                <ProductCard obj={item} />
              </Grid>
            ))
          : null}
      </Grid>
    </>
  );
};

export default ProductsList;
