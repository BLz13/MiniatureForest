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
    },[navbarStatus])

    const {dropmenuStatus, setDropmenu} = useState(false)

    const DropmenuCartHandler = () => {
        setDropmenu(!dropmenuStatus)
        const dropMenu = document.getElementById("dropmenu");
        const dropmenuClass = dropmenuStatus ? "openDropmenu" : "closeDropmenu";
        dropMenu.setAttribute("class", `dropmenu ${dropmenuClass}`)
    }

    return (
        <div onClick={DropmenuCartHandler} className="cartContainer">
            <CartIcon className="cartImg" />
            <Badge amountItems="4" className="badge" />
            <DropdownMenuContainer>
                <CartData />
            </DropdownMenuContainer>
        </div>
    );
};

export default CartWidget;