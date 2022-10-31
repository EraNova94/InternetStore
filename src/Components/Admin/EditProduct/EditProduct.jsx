import React from "react";
import { TextField, Button } from "@mui/material";
import "./EditProduct.css";
import { useContext } from "react";
import { productContext } from "../../../context/ProductContextProvider";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const EditProduct = () => {
  const { productDetails, readOneProduct, editProduct } =
    useContext(productContext);
  const { id } = useParams();
  useEffect(() => {
    readOneProduct(id);
  }, [id]);

  const [inpValues, setInpValues] = useState(productDetails);

  function handleChange(e) {
    let obj = {
      ...inpValues,
      [e.target.name]: e.target.value,
    };
    setInpValues(obj);
  }

  const navigate = useNavigate();

  function handleSave(e) {
    e.preventDefault(); // останавливает автообновление бразуреа при отправке данных через form
    if (
      !inpValues.category.trim() ||
      !inpValues.title.trim() ||
      !inpValues.model.trim() ||
      !inpValues.description.trim() ||
      !inpValues.color.trim() ||
      !inpValues.price.trim() ||
      !inpValues.img1.trim() ||
      !inpValues.img2.trim() ||
      !inpValues.img3.trim()
    ) {
      alert("Заполните все поля!");
      return;
    }
    editProduct(id, inpValues);
    navigate("/list");
  }
  return (
    <>
      <h2 id="edit-title">EDIT PRODUCTS</h2>
      <form id="form-edit" onSubmit={e => handleSave(e)}>
        <TextField
          className="outlined-edit"
          label="Category"
          variant="outlined"
          name="category"
          value={inpValues.category}
          onChange={e => handleChange(e)}
        />
        <TextField
          className="outlined-edit"
          label="Title"
          variant="outlined"
          name="title"
          value={inpValues.title}
          onChange={e => handleChange(e)}
        />
        <TextField
          className="outlined-edit"
          label="Model"
          variant="outlined"
          name="model"
          value={inpValues.model}
          onChange={e => handleChange(e)}
        />
        <TextField
          className="outlined-edit"
          label="description"
          variant="outlined"
          name="description"
          value={inpValues.description}
          onChange={e => handleChange(e)}
        />
        <TextField
          className="outlined-edit"
          label="Color"
          variant="outlined"
          name="color"
          value={inpValues.color}
          onChange={e => handleChange(e)}
        />
        <TextField
          className="outlined-edit"
          label="Price"
          variant="outlined"
          name="price"
          value={inpValues.price}
          onChange={e => handleChange(e)}
        />
        <TextField
          className="outlined-edit"
          label="First photo"
          variant="outlined"
          name="img1"
          value={inpValues.img1}
          onChange={e => handleChange(e)}
        />
        <TextField
          className="outlined-edit"
          label="Second photo"
          variant="outlined"
          name="img2"
          value={inpValues.img2}
          onChange={e => handleChange(e)}
        />
        <TextField
          className="outlined-edit"
          label="Third photo"
          variant="outlined"
          name="img3"
          value={inpValues.img3}
          onChange={e => handleChange(e)}
        />
        <Button variant="contained" type="submit">
          SAVE
        </Button>
      </form>
    </>
  );
};

export default EditProduct;
