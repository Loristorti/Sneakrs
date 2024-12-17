import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Home from './components/Home'; 
import Register from './components/Register'; 
import Login from './components/Login';
import Wishlist from './components/Whishlist';


function App() {
  return (
    <Router>
      <div>
        
        <Navbar />

        
        <Routes>
          <Route path="/" element={<Home />} />          
          <Route path="/register" element={<Register />} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/wishlist" element={<Wishlist />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;

