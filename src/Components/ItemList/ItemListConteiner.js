import "./ItemListContainer.css";

import { NavLink } from "react-router-dom";

export default function ItemListContainer (props) {

    const {items} = props

    return (
        <ul
        className="productsList"
        >
            {items.map( (item) => (
                <li 
                    className="products"
                    key={`{item.id}`}
                >
                    <NavLink
                        className="item"
                        to={items.id}
                    >
                        {item.name}
                    </NavLink>
                </li>
            ))}
        </ul>
    );
};