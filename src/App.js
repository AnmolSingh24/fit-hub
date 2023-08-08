import './App.css';
import Header from "./components/header";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About.js";
import Blogs from "./components/pages/Blogs"
import Contact from "./components/pages/Contact"
import Features from "./components/pages/Features"
import Pricing from "./components/pages/Pricing"
import Trainers from "./components/pages/Trainers"


const App = () => {

  // var swiper = new swiper(".home-slider", {
  //   spaceBetween: 20,
  //   effect: "fade",
  //   grabCursor: true,
  //   loop: true,
  //   centeredSlides: true,
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //   },
  // });

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/trainers" element={<Trainers />} />
        </Route>
      </Routes>
    </div >
  );
}

export default App;