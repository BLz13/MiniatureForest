import "./CartData.css"

import { useContext, useEffect, useState } from "react";

import Context from "../../../Context/Context";

export default function CartData() {

    const {store} = useContext(Context)

    const {cart} = store

    const [cartList, setCartList] = useState([]);

    const [render, setRender] = useState(<p className="emptyCartDrp">Your cart is empty</p>);

    useEffect( () => {
        if ( cart !== undefined ) {
            setCartList(cart.items);
        };
    },[cart])

    useEffect( () => {
        setRender(
                <ul className="cartDropmenu">
                    {cartList.map( (product) => {
                        <li>
                            <span>{product.name}</span>
                            <span>{product.amount}</span>
                        </li>
                    })}
                </ul>
            );
    },[cartList])

    console.log(cartList);

    return(
        render
    )
}