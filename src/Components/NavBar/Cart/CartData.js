import "./CartData.css"

import {CARTPRODUCTS} from "../../../Services/cart";

export default function CartData() {

    return(
        CARTPRODUCTS.length ? (
            <p className="emptyCartDrp">Your cart is empty</p>            
        ) : (
            <ul className="cartDropmenu">
                {CARTPRODUCTS.map( (product) => {
                    <li>
                        {product.name}
                        {product.amount}
                    </li>
                })}
            </ul>
        )
        
    )
}