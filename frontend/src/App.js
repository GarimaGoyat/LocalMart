import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ShopOwnerDashboard from './components/ShopOwnerDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/shop-owner" element={<ShopOwnerDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;