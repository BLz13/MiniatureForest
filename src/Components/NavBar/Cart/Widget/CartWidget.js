import "./CartWidget.css";

import Badge from "./Badge";
import {ReactComponent as CartIcon} from "../../../../Assets/Images/CartIcon.svg";

function CartWidget () {
    return (
        <div className="cartContainer">
            <CartIcon className="cartImg" />
            <Badge amountItems="4" className="badge" />
        </div>
    );
};

export default CartWidget;