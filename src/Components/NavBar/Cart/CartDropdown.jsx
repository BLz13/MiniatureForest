import "./CartDropdown.css";

import { useContext, useEffect, useRef, useState } from "react";

import Badge from "./Badge";
import CartData from "./CartData";
import {ReactComponent as CartIcon} from "../../../Assets/Images/CartIcon.svg";
import Context from "../../../Context/Context";

export default function CartDropdown(props) {

    const {dispatch, orders} = useContext(Context)

    const {cart} = orders

    const {navbarStatus} = props;
    
    const itemRef = useRef();

    const [cartList, setCartList] = useState([]);

    const [badgeNumber, setBadgeNumber] = useState(0);

    const [classBadge, setClassBadge] = useState("");

    const [classIcon, setClassIcon] = useState("");

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

    function badgeClassNavStatus() {
        const class1 = (badgeNumber === 0) ? "badge noBadge" : "badge";
        const class2 = !navbarStatus ? "navOpenBadge" : null;
        setClassBadge(`${class1} ${class2}`)
    };

    function iconClassNavStatus() {
        const class1 = !navbarStatus ? "navOpenCart" : null;
        setClassIcon(`${class1} cartImg`)
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
            />
        </>
    );
};