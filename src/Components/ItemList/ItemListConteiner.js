import "./ItemListContainer.css";

import { Link } from "react-router-dom";

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
                    <Link
                        className="item"
                        to={`/item/${item.id}`}
                    >
                        {item.name}
                    </Link>
                </li>
            ))}
        </ul>
    );
};