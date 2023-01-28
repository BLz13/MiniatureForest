import "./ItemListContainer.css";

import { NavLink, Outlet, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import Context from "../../Context/Context";

export default function ItemListContainer() {

    const {store} = useContext(Context);

    const {products, categories} = store;

    const categoryParam = useParams();

    const [productsList, setProductsList] = useState(undefined);
    
    const [categoryFilter, setCategoryFilter] = useState(undefined);

    useEffect( () => {
        if ( products !== undefined ) {
            setProductsList(products);
        }
        if ( categories !== undefined ) {
            setCategoryFilter(categories.find( (category) => (category.id === categoryParam.id) ));
        }
    },[categoryParam])

    return (
        (productsList === undefined) ? (
            <p>Loading...</p>
        ) : (
            <>
                <ul className="productsList"> {
                        ( categoryFilter === undefined ) ? (
                            productsList.map( (product) => (
                                <li className="productsItems" key={product.id}>
                                    <NavLink className={ ({isActive}) => isActive ? ("link product"):("product link is-active")}  to={product.address}>
                                        {product.name}
                                    </NavLink>
                                </li>
                            ))
                        ) : (
                            productsList.map( (product) => (
                                ( product.category === categoryFilter.name ) ? (
                                    <li className="productsItems" key={product.id}>
                                        <NavLink className={ ({isActive}) => isActive ? ("link product"):("product link is-active")}  to={product.address}>
                                            {product.name}
                                        </NavLink>
                                    </li>
                                ) : null
                            ))
                        )
                    }
                        <li className="productDetail">
                            <Outlet />
                        </li>
                </ul>
            </>
        ) 
    )
}