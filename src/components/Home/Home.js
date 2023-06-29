import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";

function Home() {
  const [products, setProducts] = useState([]);

  const [open, setOpen] = useState(false);

  const initialState = { product_name: "", price: "", category: "" };

  const [editProduct, setEditProduct] = useState(initialState);

  const handleInput = (e) => {
    const { name, value } = e.target;

    setEditProduct({
      ...editProduct,
      [name]: value,
    });
  };

  const { product_name, price, category } = editProduct;

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await axios.get("http://localhost:3000/products");
    console.log(res.data.products);

    setProducts(res.data.products);
  };

  const handleEdit = async (product) => {
    console.log(product);
    setOpen(true);
    // await axios.put(`http://localhost:3000/products/${id}`, product);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3000/products/${id}`);
    fetchProducts();
  };

  return (
    <>
      <div className={styles.parentConatainer}>
        {products.map((product) => (
          <div key={product._id} className={styles.productContainer}>
            <h3>Title : {product.product_name}</h3>
            <p>Price : {product.price}</p>
            <p>Category : {product.category}</p>
            <button onClick={() => handleEdit(product)}>EDIT</button>
            <button onClick={() => handleDelete(product._id)}>DELETE</button>
          </div>
        ))}
      </div>
      {open && (
        <div>
          <form
            style={{
              boxShadow: "rgba(100, 50, 50, 0.35) 50px 15px 15px",
              padding: "20px",
            }}
          >
            <input
              type="text"
              placeholder="Product Name"
              name="product_name"
              // value={product.product_name}
            />
            <br />
            <input
              type="Number"
              placeholder="Price"
              name="price"
              // value={product.price}
            />
            <br />
            <input type="text" placeholder="Category" name="category" />
            <br />
            <button style={{ padding: "5px 10px", margin: "10px" }}>
              EDIT
            </button>
            <button
              style={{ padding: "5px 10px", margin: "10px" }}
              onClick={() => setOpen(false)}
            >
              X
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default Home;
