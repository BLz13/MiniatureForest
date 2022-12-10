import "./Portfolio.css";

import Home from "../Pages/Home/Home";
import About from "../Pages/AboutUs/AboutUs";
import Contact from "../Pages/Contact/Contact";
import Products from "../Pages/Products/Products";
import NotFound from "../Pages/NotFound/NotFound";
import App from "../App/App";

import { Routes, Route } from "react-router-dom";

export default function Portfolio() {
    return(
        <div>
            <App>
                <Routes>
                    <Route path="/" element={<Home />} />                   
                    <Route path="/home" element={<Home />} />                   
                    <Route path="/aboutus" element={<About />} />                   
                    <Route path="/contact" element={<Contact />} />                   
                    <Route path="/products" element={<Products />} />          
                    <Route path="*" element={<NotFound />} />                   
                </Routes>
            </App>
        </div>
    );
}