import ProductsContext from "../Context/ProductsContext";
import products from "./products";
import productsReducer from "./productsReducer"
import { useReducer } from "react";

export default function ProductsProvider(props) {
    
    const {children} = props;

    const [store, dispatch] = useReducer(productsReducer, products);
    
    const value = { store, dispatch };
    
    return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    );
}