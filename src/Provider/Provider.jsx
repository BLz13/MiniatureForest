import Context from "../Context/Context";
import orders from "./orders";
import reducer from "./reducer"
import { useReducer } from "react";

export default function Provider(props) {
    
    const {children} = props;

    const [cartOrders, dispatch] = useReducer(reducer, orders);
    
    const value = { orders: cartOrders, dispatch };
    
    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    );
}