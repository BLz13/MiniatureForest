import "./ItemListContainer.css";

import { Link } from "react-router-dom";

import { ITEMS } from "../../Utils/items";

import { useEffect, useState } from "react";

import {getAllItems} from "../../Utils/functions"

export default function ItemListContainer (props) {

    const [items, setItems] = useState([]);

    useEffect(() => {
        getAllItems().then((items) => setItems(items));
    }, []);

    return (
        <div>
            <ul className="productsList">
                {items.map( (item) => (
                    <li 
                        className="products"
                        key={`{item.id}`}
                    >
                        <Link
                            className="item"
                            to={`/item/${item.id}`}
                        >
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
            {/* <div>
                <Outlet />
            </div> */}
        </div>
    )
}