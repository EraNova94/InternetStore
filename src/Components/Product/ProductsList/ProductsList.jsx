import React from "react";
import { Box, Grid } from "@mui/material";
import ProductCard from "../ProductCard/ProductCard";
const ProductsList = () => {
  let arr = [
    {
      title: "Samsung",
      category: "Phone",
      model: "Samsung J3",
    },
    {
      title: "Samsung",
      category: "Phone",
      model: "Samsung S20 Ultra",
    },
    {
      title: "Samsung",
      category: "Phone",
      model: "Samsung J3",
    },
    {
      title: "Samsung",
      category: "Phone",
      model: "Samsung Flip Flup",
    },
  ];
  return (
    <>
      <Box>
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="flex-start"
          sx={{ width: "90%" }}
          mx="auto"
          my="20px">
          {arr.map(item => (
            <Grid xs={3.5} mb={7}>
              <ProductCard obj={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default ProductsList;
