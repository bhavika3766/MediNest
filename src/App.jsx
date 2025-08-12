import './App.css'
import { useState } from 'react';
import Navbar from './components/navbar';
import AppRoutes from './routes/AppRoutes';
import Modal from './components/modal';

import {BrowserRouter as Router } from 'react-router-dom';
import HomePage from './pages/home';

function App() {
  
return(
<Router>
         
        <AppRoutes />
          
        
        
    </Router>);
}
export default App
