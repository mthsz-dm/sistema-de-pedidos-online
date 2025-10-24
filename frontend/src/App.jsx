import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'; 
import Product from './pages/Product.jsx'; 
import Cart from './pages/Cart.jsx'
import './assets/css/App.css'

function App() {
  return (
    <Router>
      <Navbar /> 
      <div className="content-wrap"> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App