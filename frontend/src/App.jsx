import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'; 
import Product from './pages/Product.jsx'; 
import Cart from './pages/Cart.jsx'
import './assets/css/App.css'

function App() {
   const [search, setSearch] = useState("");
  return (
    <Router>
      <Navbar search={search} setSearch={setSearch} />
      <div className="content-wrap"> 
        <Routes>
          <Route path="/" element={<Home search={search} />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App