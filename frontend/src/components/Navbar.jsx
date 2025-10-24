import '../assets/css/Navbar.css'
import { MdOutlineShoppingCart } from "react-icons/md";

export default function Navbar(){
    return(
        <nav className="navbar">
            <div className='container'>
                <ul className = 'navbar-nav left'>
                    <h2>Online Order Sistem</h2>
                    <div className="espaco">
                        <input type="text" placeholder="Search itens..." />
                    </div>
                </ul>
                <ul className = 'navbar-nav right'>
                    <li className = 'nav-link'>
                        <a href="/">Home</a>
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