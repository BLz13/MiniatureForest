import "./ItemListContainer.css";

import { NavLink, Outlet } from "react-router-dom";
import{
    QuerySnapshot,
    collection,
    getDocs
} from "firebase/firestore"
import { useEffect, useState } from "react";

import { fireDatabase } from "../../Firebase/config";
import {getAllProducts} from "../../Firebase/api"

export default function ItemListContainer () {

    const [products, setProducts] = useState([]);

    const [categoryFilter, setCategoryFilter] = useState(null);

    const productsCollection = collection(fireDatabase, "/products")

    useEffect(() => {
        getDocs(productsCollection)
        .then ((QuerySnapshot) => {
            const productsList = [];
            
            QuerySnapshot.forEach( product => {
                productsList.push(product.data())   
             });
        setProducts(productsList);
        });
    },[]);

    // useEffect(() => {
    //     getAllProducts()
    //     .then((products) => setProducts(products));
    // }, []);

    return (
        products.length===0 ? (
            <p>Loading...</p>

        ) : (
            <div>
            <ul className="productsList">
                {products.map( (product) => (
                    ((categoryFilter === null) || (categoryFilter === ("home")) || (categoryFilter === ("category")) || (categoryFilter === ("products"))) ? (
                        <li className="productsItems" key={product.id}>
                            <NavLink className="product"  to={`${product.id}`}>
                                {product.name}
                            </NavLink>
                        </li>
                    ) : (
                        (categoryFilter === product.category) ? (
                            <li className="productsItems" key={product.id}>
                                <NavLink className="product" to={`${product.id}`}>
                                    {product.name}
                                </NavLink>
                            </li>
                        ) : null
                    )
                ))};
            </ul>
            <div>
                <Outlet />
            </div>
            </div>
        )
    )
}