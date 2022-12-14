import "./ItemListContainer.css";

import { NavLink } from "react-router-dom";

import { useEffect, useState } from "react";

import {getAllItems} from "../../Utils/functions"

export default function ItemListContainer () {

    const [items, setItems] = useState([]);

    const [categoryFilter, setCategoryFilter] = useState(null);

    useEffect(() => {
        getAllItems().then((items) => setItems(items));
    }, []);

    return (
        <div>
            <ul className="productsList">
                {items.map( (item) => (
                    ((categoryFilter === null) || (categoryFilter === ("home")) || (categoryFilter === ("category")) || (categoryFilter === ("products"))) ? (
                        <li className="products" key={item.id}>
                            <NavLink className="item"  to={`/item/${item.id}`}>
                                {item.name}
                            </NavLink>
                        </li>
                    ) : (
                        (categoryFilter === item.category) ? (
                            <li className="products" key={item.id}>
                                <NavLink className="item" to={`/item/${item.id}`}>
                                    {item.name}
                                </NavLink>
                            </li>
                        ) : null
                    )
                ))};
            </ul>
            {/* <div>
                <Outlet />
            </div> */}
        </div>
    )
}