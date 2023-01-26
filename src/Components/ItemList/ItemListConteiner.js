import "./ItemListContainer.css";

import { NavLink, Outlet, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import Context from "../../Context/Context";

export default function ItemListContainer() {

    const {store} = useContext(Context);

    const {products, categories} = store;

    const categoryParam = useParams();

    const categoryFilter = categories.find( (category) => (category.id === categoryParam.id) );
    
    function useForceUpdate(){
        const [value, setValue] = useState(0);
        return () => setValue(value => value + 1);
    }

   setTimeout(useForceUpdate(),300);

    return (
        products.length === 0  ? (
            <p>Loading...</p>
        ) : (
            <>
                <ul className="productsList">
                    {( categoryFilter === undefined ) ? (
                        products.map( (product) => (
                            <li className="productsItems" key={product.id}>
                                <NavLink className={ ({isActive}) => isActive ? ("link product"):("product link is-active")}  to={product.address}>
                                    {product.name}
                                </NavLink>
                            </li>
                        ))
                    ) : (
                        products.map( (product) => (
                            ( product.category === categoryFilter.name ) ? (
                                <li className="productsItems" key={product.id}>
                                    <NavLink className={ ({isActive}) => isActive ? ("link product"):("product link is-active")}  to={product.address}>
                                        {product.name}
                                    </NavLink>
                                </li>
                            ) : null
                        ))
                    )}
                    <li className="productDetail">
                        <Outlet />
                    </li>
                </ul>
            </>
        )
    )
}