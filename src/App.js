import './App.css';

import { Route, Routes } from "react-router-dom";

import About from "./Pages/AboutUs/AboutUsContainer";
import Cart from "./Pages/Cart/Cart"
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from "./Components/ItemList/ItemListConteiner";
import Layout from "./Components/Layout/Layout";
import NotFound from "./Pages/NotFound/NotFound";
import Provider from "./Provider/Provider";
import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";

export default function App() {

  return(
    <Router>
      <Provider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path=":id" element={<ItemDetailContainer />} />
            </Route>
            <Route path="/home" element={<Home />}>
              <Route path=":id" element={<ItemDetailContainer />} />
              <Route path=":id" element={<ItemListContainer />}>
                <Route path=":id" element={<ItemListContainer />}>
                  <Route path=":id" element={<ItemDetailContainer />} />
                </Route>
            </Route>
            </Route>
            <Route path="/aboutus" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Provider>
    </Router>
  );

}
