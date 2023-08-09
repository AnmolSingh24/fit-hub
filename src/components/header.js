import { Link } from "react-router-dom";
import "../components/header.css";

const Header = () => {
    return (
        <div className="nav-container">
            <header className='header'>
                <a href='#' className='logo'><span>FIT</span>HUB</a>
            </header>
            <nav className="navbars">
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="/blogs">Blogs</Link>
                    <Link to="/features">Features</Link>
                    <Link to="/pricing">Pricing</Link>
                    <Link to="/trainers">Trainers</Link>
                    <Link to="/contact">Contact</Link>
                </ul>
            </nav>
        </div>
    )
}
export default Header;