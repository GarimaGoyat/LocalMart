import React, { useState } from "react";
import "./ShopOwnerDashboard.css";

const ShopOwnerDashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const products = [
    { id: 1, name: "Campus T-Shirt", price: "₹500", type: "Clothing", quantity: 20 },
    { id: 2, name: "Special Chai Mix", price: "₹150", type: "Food", quantity: 50 },
    { id: 3, name: "Wireless Mouse", price: "₹800", type: "Electronics", quantity: 15 },
    { id: 4, name: "Organic Vegetables", price: "₹200", type: "Farmers", quantity: 30 },
    { id: 5, name: "Notebook", price: "₹50", type: "Stationery", quantity: 100 },
    { id: 6, name: "Bluetooth Speaker", price: "₹1200", type: "Electronics", quantity: 10 },
    { id: 7, name: "Handmade Pottery", price: "₹300", type: "Home Decor", quantity: 25 },
    { id: 8, name: "Leather Wallet", price: "₹800", type: "Accessories", quantity: 40 },
  ];

  // Filter products based on the search query
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

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
          <h2>Products</h2>
          <button className="add-product-btn">+ Add Product</button>
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
              <th>Type</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product.id}>
                <td>
                  <div className="product-image">📷</div>
                </td>
                <td>{product.name}</td>
                <td>{product.type}</td>
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