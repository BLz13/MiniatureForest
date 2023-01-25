import "./ItemListContainer.css";

import { NavLink, Outlet } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import Context from "../../Context/Context";

export default function ItemListContainer() {

    const {store} = useContext(Context)

    const {products} = store

    const [categoryFilter, setCategoryFilter] = useState(null);

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