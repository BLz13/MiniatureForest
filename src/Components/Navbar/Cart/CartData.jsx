import { useEffect, useState } from "react";

import CartDropdownBtn from "../../Buttons/CartDropdownBtn/CartDropdownBtn";
import DeleteItemBtn from "../../Buttons/DeleteItem/DeleteItem";

export default function CartData(props) {

    const {cartList, trashOnClick, itemRef, clearCartClick} = props;

    const [renderObject, setRenderObject] = useState();

    useEffect( () => {
        setTimeout( () => {
            setRenderObject(
                <ul className="cartDropmenu">
                    <li className="titlesCart">
                        <span>Items:</span>
                        <span>Qty:</span>
                        <span>Total:</span>
                    </li>
                    {cartList.map( (product) => {
                        return(
                            <li className="itemCart" key={`item-cart-${product.id}`}>
                                <span ref={itemRef}>{`${product.name}`}</span>
                                <span>{`x${product.amount}`}</span>
                                <span>{`${product.subTotal}$`}</span>
                                <DeleteItemBtn onClick={trashOnClick}/>
                            </li>
                    )})}
                    <li className="buttonsBox">
                        <CartDropdownBtn
                            name="Clear Cart"
                            btnClass="clearCartBtn"
                            oncClick={clearCartClick}
                        />
                        <CartDropdownBtn
                            name="Go To Cart"
                            action="goToCart"
                            btnClass="finishOrderBtn"
                        />
                    </li>
                </ul>
            )
        },5000)
    },[cartList]);

    return (
        <>
            { cartList.length === 0 ? (
                <p className="emptyCartDrp">Your cart is empty</p>
            ) : (
                renderObject
            ) }
        </>
    )
}