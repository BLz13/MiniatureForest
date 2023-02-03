import "./CartWidget.css";

import { useContext, useEffect, useState } from "react";

import Badge from "./Badge";
import CartContext from "../../../../Context/CartContext";
import CartData from "../CartData";
import {ReactComponent as CartIcon} from "../../../../Assets/Images/CartIcon.svg";
import DropdownMenuContainer from "../../../DropdownMenuContainer/DropdownMenuContainer";

function CartWidget (props) {

    const {orders} = useContext(CartContext)

    const {cart} = orders

    const {navbarStatus} = props;

    const [cartList, setCartList] = useState([]);

    const [badgeNumber, setBadgeNumber] = useState(0);

    const [classBadge, setClassBadge] = useState("");

    const [classIcon, setClassIcon] = useState("");

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
            <DropdownMenuContainer>
                <CartData cartList={cartList}/>
            </DropdownMenuContainer>
        </>
    );
};

export default CartWidget;