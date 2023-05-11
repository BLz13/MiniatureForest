import "./CartDropdown.css";

import { useContext, useEffect, useRef, useState } from "react";

import Badge from "./Badge";
import CartData from "./CartData";
import {ReactComponent as CartIcon} from "../../../assets/images/CartIcon.svg";
import Context from "../../../Context/Context";

export default function CartDropdown(props) {

    const {dispatch, products} = useContext(Context)

    const {cart} = products

    const {navbarStatus} = props;
    
    const itemRef = useRef();

    const [cartList, setCartList] = useState([]);

    const [badgeNumber, setBadgeNumber] = useState(0);

    const [classBadge, setClassBadge] = useState("badge noBadge");

    const [classIcon, setClassIcon] = useState("cartImg");

    const trashOnClickHandler = () => {

        const cartItem = itemRef.current.innerText;

        const {id, name, amount, price, subTotal} = cart.items.find( product => product.name === cartItem );

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

    function badgeClassNavStatus() {
        const class1 = (badgeNumber === 0) ? "badge noBadge" : "badge";
        const class2 = !navbarStatus ? "navOpenBadge" : null;
        setClassBadge(`${class1} ${class2}`)
    };

    function iconClassNavStatus() {
        setClassIcon(`cartImg ${ navbarStatus ? "navOpenCart" : null }`)
    };

    useEffect( () => {
        if ( cart !== undefined ) {
            setBadgeNumber(cart.items.length);
        }
    });

    useEffect( () => {
        iconClassNavStatus();
        badgeClassNavStatus();
    });

    useEffect( () => {
        if (cart !== undefined)
        setCartList(cart.items);
    });

    return (
        <>
            <CartIcon className={classIcon} />
            <Badge amountItems={badgeNumber} className={classBadge} />
            <CartData
                itemRef={itemRef}
                cartList={cartList}
                trashOnClick={trashOnClickHandler}
                clearCartClick={clearCartClick}
            />
        </>
    );
};