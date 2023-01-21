import "./Portfolio.css";

import { Route, Routes } from "react-router-dom";

import About from "../Pages/AboutUs/AboutUsContainer";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import ItemDetailContainer from "../Components/ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from "../Components/ItemList/ItemListConteiner";
import Layout from "../Components/Layout/Layout";
import NotFound from "../Pages/NotFound/NotFound";

function Portfolio() {    
    return(
        <div className="portfolio">
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />}>
                        <Route path=":product" element={<ItemDetailContainer />} />
                    </Route>
                    <Route path="/home" element={<Home />}>
                        <Route path=":product" element={<ItemDetailContainer />} />
                    </Route>
                    <Route path="/category" element={<Home />}>
                        <Route path=":id" element={<ItemListContainer />} />
                    </Route>
                    <Route path="/aboutus" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/products" element={<ItemListContainer />}>
                        <Route path=":product" element={<ItemDetailContainer />} />          
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Layout>
        </div>
    );
};

export default Portfolio;