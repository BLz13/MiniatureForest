import "./CartWidget.css";

import { useEffect, useState } from "react";

import Badge from "./Badge";
import CartData from "../CartData";
import {ReactComponent as CartIcon} from "../../../../Assets/Images/CartIcon.svg";
import DropdownMenuContainer from "../../../DropdownMenuContainer/DropdownMenuContainer";

function CartWidget (props) {

    const {navbarStatus} = props;

    useEffect( () => {
        const cartIcon = document.querySelector(".cartImg")
        const cartBadge = document.querySelector(".badge")
        cartIcon.classList.toggle("navOpenCart")
        cartBadge.classList.toggle("navOpenBadge")
    },[navbarStatus]);

    return (
        <div className="cartContainer">
            <CartIcon className="cartImg" />
            <Badge amountItems="0" className="badge" />
            <DropdownMenuContainer>
                <CartData />
            </DropdownMenuContainer>
        </div>
    );
};

export default CartWidget;