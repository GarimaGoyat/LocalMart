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
          <h2>{selectedMenu}</h2>
          <p>Content for {selectedMenu} will go here.</p>
        </div>
      </div>
    </div>
  );
};

export default ShopOwnerDashboard;