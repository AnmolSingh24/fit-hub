import { Link } from "react-router-dom";
import "../components/header.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import About from "../components/pages/About";
// import Blogs from "../components/pages/Blogs"
// import Contact from "../components/pages/Contact"
// import Features from "../components/pages/Features"
// import Pricing from "../components/pages/Pricing"
// import Trainers from "../components/pages/Trainers"

const Header = () => {
    return (
        <div className="nav-container">
            <nav className="navbars">
                <ul>
                    <li>
                        <Link to="/About">About Us</Link>
                    </li>

                    <li>
                        <Link to="/Blogs">Blogs</Link>
                    </li>

                    <li>
                        <Link to="/Features">Features</Link>
                    </li>

                    <li>
                        <Link to="/Pricing">Pricing</Link>
                    </li>

                    <li>
                        <Link to="/Trainers">Trainers</Link>
                    </li>

                    <li>
                        <Link to="/Contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Header;