import "./Portfolio.css";

import Home from "../Pages/Home/Home";
import About from "../Pages/AboutUs/AboutUs";
import Contact from "../Pages/Contact/Contact";
import NotFound from "../Pages/NotFound/NotFound";
import Layout from "../Components/Layout/Layout";
import ItemListContainer from "../Components/ItemList/ItemListConteiner";
import ItemDetailContainer from "../Components/ItemDetailContainer/ItemDetailContainer"

import { Routes, Route } from "react-router-dom";

function Portfolio() {    
    return(
        <div className="portfolio">
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />                  
                    <Route path="/home" element={<Home />} /> 
                    <Route path="/category" element={<Home />} />
                    <Route path="/category/:id" element={<ItemListContainer />} />
                    <Route path="/item" element={<Home />} />
                    <Route path="/item/:id" element={<ItemDetailContainer />} />
                    <Route path="/aboutus" element={<About />} />                   
                    <Route path="/contact" element={<Contact />} />                   
                    <Route path="/products" element={<ItemListContainer />} />          
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Layout>
        </div>
    );
};

export default Portfolio;