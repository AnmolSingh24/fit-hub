import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/pages/Home";
import About from "./components/pages/About.js";
import Blogs from "./components/pages/Blogs"
import Contact from "./components/pages/Contact"
import Features from "./components/pages/Features"
import Pricing from "./components/pages/Pricing"
import Trainers from "./components/pages/Trainers"


const App = () => {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/trainers" element={<Trainers />} />
      </Routes>
    </div >
  );
}

export default App;