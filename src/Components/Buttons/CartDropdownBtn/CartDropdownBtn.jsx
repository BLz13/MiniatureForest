import "./CartDropdownBtn.css"

import { NavLink } from "react-router-dom";

export default function CartDropdownBtn(props) {

    const {name, action, btnClass, clearCartClick} = props;

    if (action === "goToCart") {
        return (
            <button
                className={btnClass}
                type="button"
            >
                <NavLink to="/cart" >
                    {name}
                </NavLink>
            </button>
        )        
    } {
        return (
            <button
                className={btnClass}
                type="button"
                onClick={clearCartClick}
            >
                {name}
            </button>
        )
    }

}