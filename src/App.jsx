import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Cart from "./Components/Cart";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import OurFounder from "./Components/OurFounder";
import Footer from "./Components/Footer";
import LikedProduct from "./Components/LikedProduct";
import Error from "./Components/Error";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<About />} />
          <Route path="/OurFounder" element={<OurFounder />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/LikedProducts" element={<LikedProduct />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
