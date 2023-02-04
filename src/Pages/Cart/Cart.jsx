import "./Cart.css"

import { useContext, useEffect, useRef, useState } from "react";

import ContactForm from "../../Components/ContactForm/ContactForm"
import Context from "../../Context/Context";
import DeleteItemBtn from "../../Components/Buttons/DeleteItem/DeleteItem"

export default function Cart() {

    const {dispatch, orders} = useContext(Context);

    const {cart} = orders;

    const [cartItems, setCartItems] = useState([]);

    const [cartTotal, setCartTotal] = useState(0);

    const [lockPurchaseBtn, setLockPurchaseBtn] = useState("true");
    
    const inputNameRef = useRef();

    const inputMailRef = useRef();
    
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

    const makeOrderClickHandler = (event) => {

        event.preventDefault();

        console.log("tocaste")
        
        // const {id, name, amount, price, subTotal} = cartItems;

        // dispatch({
        //     type:"confirmOrder",
        //     payload: {
        //         id,
        //         name,
        //         price,
        //         amount,
        //         subTotal
        //     }
        // });
    }

    const children = cartItems.map( (item) => {
        return(
            <li value={item} className="cartPageItems" key={`item-cartPage-${item.id}`}>
                <span className="productName">{`${item.name}`}</span>
                <span>{`x${item.amount}`}</span>
                <span>{`${item.subTotal}$`}</span>
                <DeleteItemBtn onClick={trashClickHandler} />
            </li>
        )}
    );

    useEffect( () => {
        setCartItems(cart.items);
    },[cart]);

    useEffect( () => {
        cartItems.map( (item) => {setCartTotal( item.subTotal )} )
    },[cartItems]);

    const onBlurInputHandler = ( () => {
        const inputName = inputNameRef.current.value;
        const inputMail = inputMailRef.current.value;
        if ( ( Boolean(inputName)) && (Boolean(inputMail) ) ) {
            console.log("unlocking btn")
            setLockPurchaseBtn(false)
        } {
            console.log("locking btn")
            setLockPurchaseBtn(true)
        }
    });

    return(
        <div className="cartPage">
            <div className="column1">
                <h1>Your Order</h1>
                <p>We'll contact you as soon as your order is ready to arrange the payment</p>
                <ContactForm
                    onClick={makeOrderClickHandler}
                    inputMailRef={inputMailRef}
                    inputNameRef={inputNameRef}
                    lockBtn={lockPurchaseBtn}
                    onBlur={onBlurInputHandler}
                />
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