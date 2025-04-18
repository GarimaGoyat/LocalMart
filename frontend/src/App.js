import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ShopOwnerSignUp from './components/ShopOwnerSignUp';
import ShopOwnerDashboard from './components/ShopOwnerDashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<ShopOwnerSignUp />} />
        <Route path="/dashboard" element={<ShopOwnerDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;