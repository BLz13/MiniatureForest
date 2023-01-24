import "./ItemListContainer.css";

import { NavLink, Outlet } from "react-router-dom";
import{
    QuerySnapshot,
    collection,
    getDocs
} from "firebase/firestore";
import { useEffect, useState } from "react";

import { fireDatabase } from "../../Firebase/config";

export default function ItemListContainer() {

    const [products, setProducts] = useState([]);

    const [categoryFilter, setCategoryFilter] = useState(null); 

    useEffect(() => {
        const productsList = [];
        const productsCollection = collection(fireDatabase, "/products");
        getDocs(productsCollection)
            .then ((QuerySnapshot) => {
                QuerySnapshot.forEach( product => {
                    const productData=product.data()
                    productData.address=product.id
                    productsList.push(productData);
                });
            setProducts(productsList)
        })
        .catch ((error) => {
            console.error(`ERROR on {ItemListContainer} firebase call - ${error}`);
        })            
    }, []);

    return (
        (products.length) ? (
            <>
                <ul className="productsList">
                    {products.map( (product) => (
                        ((categoryFilter === null) || (categoryFilter === ("home")) || (categoryFilter === ("category")) || (categoryFilter === ("products"))) ? (
                            <li className="productsItems" key={product.id}>
                                <NavLink className={ ({isActive}) => isActive ? ("link product"):("product link is-active")}  to={product.address}>
                                    {product.name}
                                </NavLink>
                            </li>
                        ) : (
                            (categoryFilter === product.category) ? (
                                <li className="productsItems" key={product.id}>
                                    <NavLink className={ ({isActive}) => isActive ? ("link product"):("product link is-active")} to={product.address}>
                                        {product.name}
                                    </NavLink>
                                </li>
                            ) : null
                        )
                    ))}
                    <li className="productDetail">
                        <Outlet />
                    </li>
                </ul>
            </>
        ) :(
            <p>Loading...</p>

        )
    )
}