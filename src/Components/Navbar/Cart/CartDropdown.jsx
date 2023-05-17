import "./Cart.css";

import { useContext, useEffect, useRef, useState } from "react";

import Badge from "./Badge";
import CartData from "./CartData";
import {ReactComponent as CartIcon} from "../../../assets/images/CartIcon.svg";
import Context from "../../../Context/Context";

export default function CartDropdown(props) {

    const {navbarStatus} = props;

    const {dispatch, products} = useContext(Context)
    
    const itemRef = useRef();

    const trashOnClickHandler = () => {

        const cartItem = itemRef.current.innerText;

        const {id, name, amount, price, subTotal} = products.cart.items.find( product => product.name === cartItem );

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

    const clearCartClick = () => {

        dispatch({
            type:"clearCart",
            payload: {}
        });

    }

    return (
        <>
            <CartIcon className={ `cartImg ${ navbarStatus ? "navOpenCart" : null }` } />
            <Badge navbarStatus={navbarStatus} />
            <CartData
                itemRef={itemRef}
                trashOnClick={trashOnClickHandler}
                clearCartClick={clearCartClick}
            />
        </>
    );
};