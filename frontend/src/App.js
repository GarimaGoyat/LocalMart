import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage'; // Import the LoginPage component
import ShopOwnerSignUp from './components/ShopOwnerSignUp'; // Import the ShopOwnerSignUp component
import ShopOwnerDashboard from './components/ShopOwnerDashboard'; // Import the ShopOwnerDashboard component
import LandingPage from './components/LandingPage'; // Import the LandingPage component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<ShopOwnerDashboard />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<ShopOwnerSignUp />} />
      </Routes>
    </Router>
  );
};

export default App;