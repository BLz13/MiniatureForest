import "./FinishOrderBtn.css"

import { NavLink } from "react-router-dom";

export default function FinishOrderBtn(props) {

    const {name} = props;
    
    return (
        <button
            className="finishOrderBtn"
            type="button"
        >
            <NavLink to="/cart" >
                {name}
            </NavLink>
        </button>
    )
}