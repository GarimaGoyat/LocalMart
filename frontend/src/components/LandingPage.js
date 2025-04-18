import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./LandingPage.css";

const LandingPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate(); // Initialize navigate

  const products = [
    { id: 1, name: "Campus T-Shirt", price: "₹0", shop: "Campus Store", verified: true, category: "Clothing" },
    { id: 2, name: "Special Chai Mix", price: "₹150", shop: "Canteen", verified: false, category: "Food" },
    { id: 3, name: "Wireless Mouse", price: "₹500", shop: "Electronics Hub", verified: true, category: "Electronics" },
    { id: 4, name: "Organic Vegetables", price: "₹200", shop: "Farmers Market", verified: false, category: "Farmers" },
    { id: 5, name: "Notebook", price: "₹50", shop: "Stationery World", verified: true, category: "Stationery" },
    { id: 6, name: "Bluetooth Speaker", price: "₹1200", shop: "Electronics Hub", verified: true, category: "Electronics" },
    { id: 7, name: "Handmade Pottery", price: "₹300", shop: "Artisan Crafts", verified: false, category: "Home Decor" },
    { id: 8, name: "Leather Wallet", price: "₹800", shop: "Accessories Store", verified: true, category: "Accessories" },
    { id: 9, name: "Sports Shoes", price: "₹2500", shop: "Sports World", verified: true, category: "Clothing" },
    { id: 10, name: "Organic Honey", price: "₹400", shop: "Farmers Market", verified: false, category: "Food" },
    { id: 11, name: "Desk Lamp", price: "₹700", shop: "Home Essentials", verified: true, category: "Home Decor" },
    { id: 12, name: "Drawing Kit", price: "₹350", shop: "Stationery World", verified: true, category: "Stationery" },
    { id: 13, name: "Gaming Keyboard", price: "₹2500", shop: "Electronics Hub", verified: true, category: "Electronics" },
    { id: 14, name: "Travel Backpack", price: "₹1500", shop: "Accessories Store", verified: true, category: "Accessories" },
  ];

  const categories = ["All", "Food", "Electronics", "Farmers", "Clothing", "Stationery", "Home Decor", "Accessories"];

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleProductClick = (productId) => {
    console.log(`Product clicked: ${productId}`);
    // Add navigation or other logic here
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleWelcomeBoxClick = () => {
    console.log("Welcome Box clicked");
    // Add navigation or other logic here
  };

  const handleVerifiedBoxClick = () => {
    console.log("Blockchain Verified Sellers Box clicked");
    // Add navigation or other logic here
  };

  return (
    <div className="landing-page">
      {/* Top Navbar */}
      <nav className="navbar">
        <div className="navbar-left">
          <span className="logo">LocalMart</span>
        </div>
        <div className="navbar-center">
          <div className="search-bar-container">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              className="search-bar"
              placeholder="Search products, shops..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="navbar-right">
          {/* Navigate to the signup page */}
          <button className="auth-btn" onClick={() => navigate("/signup")}>
            Login | Sign Up
          </button>
        </div>
      </nav>

      {/* Horizontal Category Buttons */}
      <div className="category-scroll">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-btn ${selectedCategory === category ? "active" : ""}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Welcome Box */}
      <button className="welcome-box" onClick={handleWelcomeBoxClick}>
        <span className="emoji">👋</span>
        <h2>Welcome to LocalMart</h2>
        <p>
          Find nearby shops with real-time info. Visit only verified and trusted
          stores.
        </p>
      </button>

      {/* Blockchain Verified Sellers Box */}
      <button className="verified-box" onClick={handleVerifiedBoxClick}>
        <span className="emoji">✅</span>
        <h3>Blockchain Verified Sellers</h3>
        <p>
          Our verification process ensures all sellers with ✅ badge are
          blockchain authenticated.
        </p>
      </button>

      {/* Product Grid */}
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <button
            key={product.id}
            className="product-card"
            onClick={() => handleProductClick(product.id)}
          >
            <div className="product-image">
              <img
                src={`https://via.placeholder.com/150?text=${product.name}`}
                alt={product.name}
              />
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <p>{product.shop}</p>
              {product.verified && <span className="verified-badge">✔ Verified</span>}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
