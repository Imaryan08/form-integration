import axios from "axios";
import React, { useState } from "react";

function Create() {
  const initialState = { product_name: "", price: "", category: "" };

  const [product, setProduct] = useState(initialState);

  const handleInput = (e) => {
    const { name, value } = e.target;

    setProduct({
      ...product,
      [name]: value,
    });
  };

  const { product_name, price, category } = product;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (product_name !== "" && category !== "" && price !== "") {
      const res = await axios.post("http://localhost:3000/products", product);
      console.log(res);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Name"
          name="product_name"
          onChange={handleInput}
          value={product.product_name}
        />
        <br />
        <input
          type="Number"
          placeholder="Price"
          name="price"
          onChange={handleInput}
          value={product.price}
        />
        <br />
        <input
          type="text"
          placeholder="Category"
          name="category"
          onChange={handleInput}
          value={product.category}
        />
        <br />
        <button style={{ padding: "5px 10px", margin: "10px" }}>Create</button>
      </form>
    </>
  );
}

export default Create;
