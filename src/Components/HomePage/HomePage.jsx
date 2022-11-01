import { Box } from "@mui/material";
import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: "20px",
          backgroundColor: "black",
        }}>
        <img
          src="https://www.myphone.kg/files/media/17/17338.jpg"
          alt="main-img"
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: "20px",
          backgroundColor: "black",
        }}>
        <img
          src="https://d2gdtie5ivbdow.cloudfront.net/media/user/images/letmeknowit.png"
          alt=""
        />
      </Box>
    </>
  );
};

export default HomePage;
