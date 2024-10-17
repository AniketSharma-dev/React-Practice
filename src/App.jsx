import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import { useContext } from "react";
import { DataContext } from "./context/UserContext";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
        <Route path="/login" element={<Form />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
