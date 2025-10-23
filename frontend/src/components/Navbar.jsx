import '../assets/css/Navbar.css'
import { MdOutlineShoppingCart } from "react-icons/md";

export default function Navbar(){
    return(
        <nav className="navbar">
            <div className='container'>
                <ul className = 'navbar-nav left'>
                    <h2>Sistemas de pedidos online</h2>
                </ul>
                <ul className = 'navbar-nav right'>
                    <li className = 'nav-link'>
                        <a href="">Home</a>
                    </li>
                    <li className = 'nav-link'>
                        <a href="">Contato</a>
                    </li>
                    <li className = 'nav-link'>
                        <a href=""><MdOutlineShoppingCart 
                        size={30}
                        /></a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}