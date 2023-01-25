import "./CartData.css"

import Context from "../../../Context/Context";
import { useContext } from "react";

export default function CartData() {

    const {store} = useContext(Context)

    const {cart} = store

    return(
        !cart.length ? (
            <p className="emptyCartDrp">Your cart is empty</p>            
        ) : (
            <ul className="cartDropmenu">
                {cart.map( (product) => {
                    <li>
                        {product.name}
                        {product.amount}
                    </li>
                })}
            </ul>
        )
        
    )
}