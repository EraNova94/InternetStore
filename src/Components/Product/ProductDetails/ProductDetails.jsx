import {
  Alert,
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import { productContext } from "../../../context/ProductContextProvider";
import { useParams } from "react-router-dom";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./ProductDetails.css";
import SwiperCore, { Thumbs } from "swiper";
import StayCurrentPortraitOutlinedIcon from "@mui/icons-material/StayCurrentPortraitOutlined";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { AddShoppingCart } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { basketContext } from "../../../context/BasketContextProvider";

SwiperCore.use([Thumbs]);

const ProductDetails = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { readOneProduct, productDetails, deleteProduct } =
    useContext(productContext);

  const { addProductToBasket } = useContext(basketContext);
  const { id } = useParams();

  useEffect(() => {
    readOneProduct(id);
  }, [id]);

  return (
    <>
      {productDetails ? (
        <Container sx={{ marginTop: "40px" }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Swiper
                spaceBetween={10}
                thumbs={{ swiper: thumbsSwiper }}
                className="mySwiper2">
                <SwiperSlide>
                  <img
                    src={productDetails.img1}
                    alt={productDetails.title}
                    width={250}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={productDetails.img3} alt={productDetails.title} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={productDetails.img3} alt={productDetails.title} />
                </SwiperSlide>
              </Swiper>
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                className="mySwiper">
                <SwiperSlide>
                  <Paper elevation={3}>
                    <img
                      src={productDetails.img1}
                      alt={productDetails.title}
                      width={40}
                      height={50}
                    />
                  </Paper>
                </SwiperSlide>
                <SwiperSlide>
                  <Paper elevation={3}>
                    <img
                      src={productDetails.img2}
                      alt={productDetails.title}
                      width={50}
                    />
                  </Paper>
                </SwiperSlide>
                <SwiperSlide>
                  <Paper elevation={3}>
                    <img
                      src={productDetails.img3}
                      alt={productDetails.title}
                      width={50}
                    />
                  </Paper>
                </SwiperSlide>
              </Swiper>
            </Grid>
            <Grid item xs={6}>
              <Paper sx={{ padding: "10px", marginTop: "40px" }}>
                <Typography variant="h4">
                  {productDetails.title}
                  <StayCurrentPortraitOutlinedIcon sx={{ fontSize: "30px" }} />
                </Typography>
                <Typography variant="h5">{productDetails.model}</Typography>
                <hr />
                <Typography variant="h6" sx={{ marginTop: "20px" }}>
                  {productDetails.description}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    backgroundColor: "#f0f2b7",
                  }}>
                  <Alert
                    icon={<AttachMoneyIcon />}
                    sx={{
                      fontSize: "20px",
                      fontWeight: 700,
                      alignItems: "center",
                      backgroundColor: "#f0f2b7",
                    }}>
                    Цена: {productDetails.price}
                  </Alert>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "200px",
                      flexWrap: "wrap",
                    }}>
                    <Button variant="contained" sx={{ width: "45%" }}>
                      Buy
                    </Button>
                    <Button
                      variant="contained"
                      color="warning"
                      sx={{ width: "45%" }}
                      onClick={() => addProductToBasket(productDetails)}>
                      <AddShoppingCart />
                    </Button>
                  </Box>
                </Box>
                <Box>
                  <Button
                    variant="contained"
                    color="error"
                    sx={{ width: "50%" }}
                    onClick={() => deleteProduct(productDetails.id)}>
                    Delete
                  </Button>
                  <Link to={`/edit/${productDetails.id}`}>
                    <Button
                      variant="contained"
                      color="info"
                      sx={{ width: "50%" }}>
                      Edit
                    </Button>
                  </Link>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      ) : null}
    </>
  );
};

export default ProductDetails;
