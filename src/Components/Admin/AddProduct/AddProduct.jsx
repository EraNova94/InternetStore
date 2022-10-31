import { TextField, Button } from "@mui/material";
import React, { useContext, useState } from "react";
import { productContext } from "../../../context/ProductContextProvider";
import "./AddProduct.css";

const AddProduct = () => {
  const { addProduct } = useContext(productContext);

  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [model, setModel] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("");
  const [price, setPrice] = useState("");
  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  const [img3, setImg3] = useState("");

  function handleAdd(e) {
    e.preventDefault(); //? => останавливает автообновление браузера при отправке данных через форм
    if (
      !category.trim() ||
      !title.trim() ||
      !model.trim() ||
      !description.trim() ||
      !color.trim() ||
      !price.trim() ||
      !img1.trim() ||
      !img2.trim() ||
      !img3.trim()
    ) {
      alert("Fill the form!");
      return;
    }

    let obj = {
      category,
      title,
      model,
      description,
      color,
      price,
      img1,
      img2,
      img3,
    };
    addProduct(obj);
    setCategory("");
    setTitle("");
    setModel("");
    setDescription("");
    setColor("");
    setPrice("");
    setImg1("");
    setImg2("");
    setImg3("");
  }

  return (
    <>
      <h2 id="add-title">ADD PRODUCTS</h2>
      <form id="form-add" onSubmit={e => handleAdd(e)}>
        <TextField
          className="outlined-basic"
          label="Category"
          variant="outlined"
          value={category}
          onChange={e => setCategory(e.target.value)}
        />
        <TextField
          className="outlined-basic"
          label="Title"
          variant="outlined"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <TextField
          className="outlined-basic"
          label="Model"
          variant="outlined"
          value={model}
          onChange={e => setModel(e.target.value)}
        />
        <TextField
          className="outlined-basic"
          label="description"
          variant="outlined"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <TextField
          className="outlined-basic"
          label="Color"
          variant="outlined"
          value={color}
          onChange={e => setColor(e.target.value)}
        />
        <TextField
          className="outlined-basic"
          label="Price"
          variant="outlined"
          value={price}
          onChange={e => setPrice(e.target.value)}
        />
        <TextField
          className="outlined-basic"
          label="First photo"
          variant="outlined"
          value={img1}
          onChange={e => setImg1(e.target.value)}
        />
        <TextField
          className="outlined-basic"
          label="Second photo"
          variant="outlined"
          value={img2}
          onChange={e => setImg2(e.target.value)}
        />
        <TextField
          className="outlined-basic"
          label="Third photo"
          variant="outlined"
          value={img3}
          onChange={e => setImg3(e.target.value)}
        />
        <Button variant="contained" type="submit">
          ADD
        </Button>
      </form>
    </>
  );
};

export default AddProduct;
