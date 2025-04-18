import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./ShopOwnerDashboard.css";

const ShopOwnerDashboard = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/shopkeeper/products", {
          withCredentials: true, // Include cookies for authentication
        });
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="logo">LocalMart</div>
        <ul className="menu">
          <li className="menu-item active">
            <span className="icon">📦</span>
            <span className="text">Products</span>
          </li>
          <li className="menu-item">
            <span className="icon">🏪</span>
            <span className="text">Shop Details</span>
          </li>
          <li className="menu-item">
            <span className="icon">✅</span>
            <span className="text">Request Verification</span>
          </li>
          <li className="menu-item">
            <span className="icon">🚪</span>
            <span className="text">Logout</span>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="top-bar">
          <span className="greeting">Hello, ShopOwner</span>
        </div>

        {/* Dashboard Header */}
        <div className="dashboard-header">
          <h2>Your Products</h2>
          <button
            className="add-product-btn"
            onClick={() => navigate("/add-product")}
          >
            + Add Product
          </button>
        </div>

        {/* Search Bar */}
        <div className="search-bar-container">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            className="search-bar"
            placeholder="Search your products..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>

        {/* Product Table */}
        <table className="product-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Product Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product.id}>
                <td>
                  <img
                    src={product.image || "https://via.placeholder.com/50"}
                    alt={product.name}
                    className="product-image"
                  />
                </td>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>
                  <div className="action-buttons">
                    <button className="icon-button">✏️</button>
                    <button className="icon-button">🗑️</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShopOwnerDashboard;