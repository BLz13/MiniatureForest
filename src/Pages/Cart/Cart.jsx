import "./Cart.css"

import { useContext, useEffect, useState } from "react";

import ContactForm from "../../Components/ContactForm/ContactForm"
import Context from "../../Context/Context";
import DeleteItemBtn from "../../Components/Buttons/DeleteItem/DeleteItem"

export default function Cart() {

    const {dispatch, orders} = useContext(Context);

    const {cart} = orders;

    const [cartItems, setCartItems] = useState([]);

    const [cartTotal, setCartTotal] = useState(0);
    
    const trashClickHandler = () => {
        const {id, name, amount, price, subTotal} = cartItems;

        dispatch({
            type:"removeItemFromCart",
            payload: {
                id,
                name,
                price,
                amount,
                subTotal
            }
        });
    }

    const children = cartItems.map( (item) => {
        return(
            <li value={item} className="cartPageItems" key={`item-cartPage-${item.id}`}>
                <span className="productName">{`${item.name}`}</span>
                <span>{`x${item.amount}`}</span>
                <span>{`${item.subTotal}$`}</span>
                <DeleteItemBtn onClick={trashClickHandler}/>
            </li>
        )}
    );

    useEffect( () => {
        setCartItems(cart.items);
    },[cart]);

    useEffect( () => {
        cartItems.map( (item) => {setCartTotal( item.subTotal )} )
    },[cartItems]);

    return(
        <div className="cartPage">
            <div className="column1">
                <h1>Your Order</h1>
                <p>We'll contact you as soon as your order is ready to arrange the payment</p>
                <ContactForm />
            </div>
            <div className="cartBox">
                <div className="cartTitlesBox">
                    <span>Items:</span>
                    <span>Qty:</span>
                    <span>Total:</span>
                </div>
                <ul className="cartItemsBox">
                    {children}
                </ul>
                <div className="cartTotalBox">
                    <span>Order Total:</span>
                    <span>{`${cartTotal}$`}</span>
                </div>
            </div>
        </div>
    )
};