import React, { useContext, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import ProductCard from "../ProductCard/ProductCard";
import { productContext } from "../../../context/ProductContextProvider";
const ProductsList = () => {
  const { productsArr, readProduct } = useContext(productContext);
  useEffect(() => {
    readProduct();
  }, []);

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
          {productsArr
            ? productsArr.map(item => (
                <Grid xs={3.5} mb={7} key={item.id} item={true}>
                  <ProductCard obj={item} />
                </Grid>
              ))
            : null}
        </Grid>
      </Box>
    </>
  );
};

export default ProductsList;
