import React from "react";
import "./App.css";
import Navbar from "./Food-App/components/Navbar";
import Footer from "./Food-App/components/Footer";
import Menu from "./Food-App/pages/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Food-App/pages/NavbarPages/About";
import Cart from "./Food-App/pages/NavbarPages/Cart";
import Contact from "./Food-App/pages/NavbarPages/Contact";
import Starters from "./Food-App/pages/Menulist/Starters";
import Mains from "./Food-App/pages/Menulist/Mains";
import Steak from "./Food-App/pages/Menulist/Steak";
import Sides from "./Food-App/pages/Menulist/Sides";
import Dessert from "./Food-App/pages/Menulist/Dessert";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Menu />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/starters" element={<Starters />}></Route>
          <Route path="/mains" element={<Mains />}></Route>
          <Route path="/steak" element={<Steak />}></Route>
          <Route path="/sides" element={<Sides />}></Route>
          <Route path="/desserts" element={<Dessert />}></Route>
        </Routes>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </>
  );
}

export default App;
