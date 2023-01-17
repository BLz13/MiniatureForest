import "./CartWidget.css";

import Badge from "../Badge/Badge";
import {ReactComponent as CartIcon} from "../../../../Assets/Images/CartIcon.svg";

function CartWidget () {
    return (
        <div>
            <CartIcon />
            <Badge />
        </div>
    );
};

export default CartWidget;