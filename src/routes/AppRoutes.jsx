import React,{useContext} from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/home';
import Dashboard from '../pages/dashboard';
import Cart from '../pages/cart';
import {CartProvider} from '../context/cartContext';

const AppRoutes = () => {
  return (
    <CartProvider>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
    </CartProvider>
        
    

  );
};

export default AppRoutes;
