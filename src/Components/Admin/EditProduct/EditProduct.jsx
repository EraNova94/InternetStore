import React from "react";
import { TextField, Button } from "@mui/material";
import "./EditProduct.css";
const EditProduct = () => {
  return (
    <>
      <h2 id="edit-title">EDIT PRODUCTS</h2>
      <form id="form-edit">
        <TextField
          className="outlined-edit"
          label="Category"
          variant="outlined"
        />
        <TextField className="outlined-edit" label="Title" variant="outlined" />
        <TextField className="outlined-edit" label="Model" variant="outlined" />
        <TextField
          className="outlined-edit"
          label="description"
          variant="outlined"
        />
        <TextField className="outlined-edit" label="Color" variant="outlined" />
        <TextField
          className="outlined-edit"
          label="First photo"
          variant="outlined"
        />
        <TextField
          className="outlined-edit"
          label="Second photo"
          variant="outlined"
        />
        <TextField
          className="outlined-edit"
          label="Third photo"
          variant="outlined"
        />
        <Button variant="contained">SAVE</Button>
      </form>
    </>
  );
};

export default EditProduct;
