import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          gap: "20px",
          height: "50px",
          background: "black",
          alignItems: "center",
          marginBottom: "30px",
        }}
      >
        <div>Amazon</div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "50px",
          }}
        >
          <Link to="/" style={{ color: "white" }}>
            Product
          </Link>
          <Link to="/services" style={{ color: "white" }}>
            Services
          </Link>
          <Link style={{ color: "white" }} to="/cart">
            Cart
          </Link>
          <Link style={{ color: "white" }} to="/login">
            Login
          </Link>
          <Link style={{ color: "white" }} to="/create">
            Add Product
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
