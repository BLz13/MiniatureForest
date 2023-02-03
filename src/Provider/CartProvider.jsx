import CartContext from "../Context/CartContext";
import orders from "./orders";
import ordersReducer from "./ordersReducer"
import { useReducer } from "react";

export default function CartProvider(props) {
    
    const {children} = props;

    const [cartOrders, dispatch] = useReducer(ordersReducer, orders);
    
    const value = { orders: cartOrders, dispatch };
    
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}