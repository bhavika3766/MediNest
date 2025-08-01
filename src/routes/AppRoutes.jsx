import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/home';
import Dashboard from '../pages/dashboard';
import Cart from '../pages/cart';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
       <Route path="/dashboard" element={<Dashboard />} />
       <Route path="/cart" element={<Cart />} />

    </Routes>
  );
};

export default AppRoutes;
