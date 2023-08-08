import { Link } from "react-router-dom";
import "../components/header.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

const Header = () => {
    return (
        <div className="nav-container">
            <nav className="navbars">
                <ul>
                    <Link to="/Home">Home</Link>
                    <Link to="/About">About Us</Link>
                    <Link to="/Blogs">Blogs</Link>
                    <Link to="/Features">Features</Link>
                    <Link to="/Pricing">Pricing</Link>
                    <Link to="/Trainers">Trainers</Link>
                    <Link to="/Contact">Contact</Link>
                </ul>
            </nav>
        </div>
    )
}
export default Header;