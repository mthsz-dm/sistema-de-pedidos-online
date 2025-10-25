import { useState, useEffect } from "react";
import "../assets/css/Navbar.css";
import { MdOutlineShoppingCart } from "react-icons/md";


export default function Navbar({search, setSearch}) {
  return (
    <nav className="navbar">
      <div className="container">
        <ul className="navbar-nav left">
          <h2>Online Order Sistem</h2>
          <div className="espaco">
            <input
              type="text"
              placeholder="Search items..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </ul>
        <ul className="navbar-nav right">
          <li className="nav-link">
            <a href="/cart">
              <MdOutlineShoppingCart size={30} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
