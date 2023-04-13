import "./ItemListContainer.css";

import { Outlet, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import Context from "../../Context/Context";
import ItemList from "./ItemList"

export default function ItemListContainer() {
    
    const {products} = useContext(Context)

    const { stock } = products

    const categoryParam = useParams(undefined);

    const [productsList, setProductsList] = useState([]);

    const [categoryFilter, setCategoryFilter] = useState();

    useEffect( () => { setProductsList(stock) },[stock])
    
    return (
        <div className="mainPageBox">
            { !(productsList.length) ? (
                <p>Loading....</p>
            ) : (
                <ul className="productsList">
                    <ItemList productsList={productsList} />
                    <li className="productDetail">
                        <Outlet />
                    </li>
                </ul>
            )}
        </div>
    );
    
}