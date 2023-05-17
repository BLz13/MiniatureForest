import { useContext, useEffect, useState } from "react";

import CartDropdownBtn from "../../Buttons/CartDropdownBtn/CartDropdownBtn";
import Context from "../../../Context/Context";
import DeleteItemBtn from "../../Buttons/DeleteItem/DeleteItem";

export default function CartData(props) {

    const {trashOnClick, itemRef, clearCartClick} = props;

    const {products} = useContext(Context);
    
    const [cartList, setCartList] = useState(products.cart.items);

    const [renderObject, setRenderObject] = useState(<p className="emptyCartDrp">Your cart is empty</p>)

    useEffect( () => {
        setCartList(products.cart.items)
        setRenderObject(
            (cartList.length > 0) ? (
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
            ) : null
        )
    },[products]);

    return(renderObject)
}