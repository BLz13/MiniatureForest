import "./Portfolio.css";

import Home from "../Pages/Home/Home";
// import About from "../Pages/AboutUs/AboutUs";
// import Contact from "../Pages/Contact/Contact";
// import NotFound from "../Pages/NotFound/NotFound";
import Layout from "../Components/Layout/Layout";

import { Routes, Route } from "react-router-dom";

import {ITEMS} from "../../Utils/items"

function Portfolio() {    
    return(
        <div
            className="portfolio"
        >
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />                  
                    <Route path="/home" element={<Home />} /> 
                    <Route path="/category">
                        {ITEMS.id( () => (
                            <Route path={`{ITEMS.id}`} element={<Home />} />
                        ))}
                    </Route>
                    <Route path="/item">
                        {ITEMS.id( () => (
                            <Route path={`{ITEMS.id}`} element={<ItemDetailContainer name={ITEMS.name} category={ITEMS.category} description={ITEMS.description} />}/>
                        ))}
                    </Route>
                    {/* <Route path="/aboutus" element={<About />} />                   
                    <Route path="/contact" element={<Contact />} />                   
                    <Route path="/products" element={<Products />} />          
                    <Route path="*" element={<NotFound />} /> */}
                </Routes>
            </Layout>
        </div>
    );
};

export default Portfolio;