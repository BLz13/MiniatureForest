import "./CartWidget.css";

import Badge from "./Badge";
import CartData from "../CartData";
import {ReactComponent as CartIcon} from "../../../../Assets/Images/CartIcon.svg";
import DropdownMenuContainer from "../../../DropdownMenuContainer/DropdownMenuContainer";
import { useState } from "react";

function CartWidget () {

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