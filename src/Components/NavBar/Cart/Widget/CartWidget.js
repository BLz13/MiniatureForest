import "./CartWidget.css";

import { useContext, useEffect, useState } from "react";

import Badge from "./Badge";
import CartData from "../CartData";
import {ReactComponent as CartIcon} from "../../../../Assets/Images/CartIcon.svg";
import Context from "../../../../Context/Context";
import DropdownMenuContainer from "../../../DropdownMenuContainer/DropdownMenuContainer";

function CartWidget (props) {

    const {store} = useContext(Context)

    const {cart} = store

    const {navbarStatus} = props;

    const [badgeNumber, setBadgeNumber] = useState(0);

    const [classBadge, setClassBadge] = useState("");

    const [classIcon, setClassIcon] = useState("");

    function badgeClassNavStatus() {
        const class1 = (badgeNumber === 0) ? "badge noBadge" : "badge";
        const class2 = !navbarStatus ? "navOpenBadge" : null;
        setClassBadge(`${class1} ${class2}`)
    }

    function iconClassNavStatus() {
        const class1 = !navbarStatus ? "navOpenCart" : null;
        setClassIcon(`${class1} cartImg`)
    }

    useEffect( () => {
        if ( cart !== undefined ) {
            setBadgeNumber(cart.items.length);
        }
    })

    useEffect( () => {
        iconClassNavStatus();
        badgeClassNavStatus();
    })

    return (
        <>
            <CartIcon className={classIcon} />
            <Badge amountItems={badgeNumber} className={classBadge} />
            <DropdownMenuContainer>
                <CartData />
            </DropdownMenuContainer>
        </>
    );
};

export default CartWidget;