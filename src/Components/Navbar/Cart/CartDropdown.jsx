import "./Cart.css";

import { useContext, useEffect, useRef, useState } from "react";

import Badge from "./Badge";
import CartData from "./CartData";
import {ReactComponent as CartIcon} from "../../../assets/images/CartIcon.svg";
import { Context } from "../../../Context/Context";

export default function CartDropdown(props) {

    const {navbarStatus} = props;

    const {dispatch, products} = useContext(Context)
    
    const [cartList, setCartList] = useState(products.cart.items);
    
    const [badgeNumber, setBadgeNumber] = useState(products.cart.items.length);

    function reRenderData () {
        setCartList(products.cart.items)
        setBadgeNumber(products.cart.items.length)
    }

    const trashOnClickHandler = (eventItem) => {

        console.log(eventItem);

        // const cartItem = itemRef.current.innerText;

        // const {id, name, amount, price, subTotal} = products.cart.items.find( product => product.name === cartItem );

        // dispatch({
        //     type:"removeItemFromCart",
        //     payload: {
        //         id,
        //         name,
        //         price,
        //         amount,
        //         subTotal
        //     }
        // });

        // console.log(products);

    }

    useEffect( () => {reRenderData()},[products])

    return (
        <>
            <CartIcon className={ `cartImg ${ navbarStatus ? "navOpenCart" : null }` } />
            <Badge
                badgeNumber={badgeNumber}
                navbarStatus={navbarStatus}
            />
            <CartData
                cartList={cartList}
                trashOnClick={trashOnClickHandler}
            />
        </>
    );
};