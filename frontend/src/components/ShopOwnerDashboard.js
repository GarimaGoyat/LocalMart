import React, { useState } from "react";
import "./ShopOwnerDashboard.css";

const ShopOwnerDashboard = () => {
  const [selectedMenu, setSelectedMenu] = useState("Products");

  const menuItems = [
    { name: "Products", icon: "📦" },
    { name: "Shop Details", icon: "🏪" },
    { name: "Request Verification", icon: "✅" },
    { name: "Logout", icon: "🚪" },
  ];

  const products = [
    {
      id: 1,
      image: "placeholder.png",
      name: "Product 1",
      category: "Category A",
      price: "$10",
    },
    {
      id: 2,
      image: "placeholder.png",
      name: "Product 2",
      category: "Category B",
      price: "$20",
    },
  ];

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="logo">LocalMart</div>
        <ul className="menu">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className={`menu-item ${selectedMenu === item.name ? "active" : ""}`}
              onClick={() => setSelectedMenu(item.name)}
            >
              <span className="icon">{item.icon}</span>
              <span className="text">{item.name}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="top-bar">
          <span className="greeting">Hello, ShopOwner</span>
        </div>
        <div className="content">
          {selectedMenu === "Products" && (
            <>
              <div className="dashboard-header">
                <h2>Products</h2>
                <button className="add-product-btn">+ Add Product</button>
              </div>
              <table className="product-table">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Product Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id}>
                      <td>
                        <img
                          src={product.image}
                          alt={product.name}
                          className="product-image"
                        />
                      </td>
                      <td>{product.name}</td>
                      <td>{product.category}</td>
                      <td>{product.price}</td>
                      <td>
                        <span className="action-icon">✏️</span>
                        <span className="action-icon">🗑️</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopOwnerDashboard;