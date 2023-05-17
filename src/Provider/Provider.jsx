import Context from "../Context/Context";
import products from "./products";
import reducer from "./reducer"
import { useReducer } from "react";

export function Provider(props) {
    
    const {children} = props;

    const [initialProducts, dispatch] = useReducer(reducer, products);
    
    const value = { products: initialProducts, dispatch };
    
    return (<Context.Provider value={value}> {children} </Context.Provider>);
    
}