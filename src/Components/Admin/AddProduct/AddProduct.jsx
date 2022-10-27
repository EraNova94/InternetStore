import { TextField, Button } from "@mui/material";
import React from "react";
import "./AddProduct.css";

const AddProduct = () => {
  return (
    <>
      <h2 id="add-title">ADD PRODUCTS</h2>
      <form id="form-add">
        <TextField
          className="outlined-basic"
          label="Category"
          variant="outlined"
        />
        <TextField
          className="outlined-basic"
          label="Title"
          variant="outlined"
        />
        <TextField
          className="outlined-basic"
          label="Model"
          variant="outlined"
        />
        <TextField
          className="outlined-basic"
          label="description"
          variant="outlined"
        />
        <TextField
          className="outlined-basic"
          label="Color"
          variant="outlined"
        />
        <TextField
          className="outlined-basic"
          label="First photo"
          variant="outlined"
        />
        <TextField
          className="outlined-basic"
          label="Second photo"
          variant="outlined"
        />
        <TextField
          className="outlined-basic"
          label="Third photo"
          variant="outlined"
        />
        <Button variant="contained">ADD</Button>
      </form>
    </>
  );
};

export default AddProduct;
