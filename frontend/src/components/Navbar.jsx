import { useState, useEffect } from "react";
import "../assets/css/Navbar.css";
import { MdOutlineShoppingCart } from "react-icons/md";

function Navbar({ search, setSearch }) {
  const [carts, setCart] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/cart")
      .then((res) => res.json())
      .then((data) => setCart(data))
      .catch((err) => console.error(err));
  }, []);

const numItens = carts.reduce((tot,s) => tot+s.quantity,0);

  return (
    <nav className="navbar">
      <div className="container">
        <ul className="navbar-nav left">
          <a href="/">
            <h2>Online Order Sistem</h2>
          </a>
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
              <MdOutlineShoppingCart size={40} />
              {numItens}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
