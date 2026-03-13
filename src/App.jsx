import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Recipes from "./pages/Recipes";
import About from "./pages/About";
import Contact from "./pages/Contact";


/* Scroll to top on route change */

function ScrollToTop(){
  const { pathname } = useLocation();

  useEffect(()=>{
    window.scrollTo(0,0);
  },[pathname])

  return null;
}


function App() {

  return (

    <BrowserRouter>

      <ScrollToTop/>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>


      {/* WhatsApp Order Button */}

      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition z-50"
      >
        💬
      </a>


      <Footer />

    </BrowserRouter>

  );
}

export default App;