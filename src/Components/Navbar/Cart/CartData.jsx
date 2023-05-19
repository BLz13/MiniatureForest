import { useContext, useEffect, useRef, useState } from "react";

import CartDropdownBtn from "../../Buttons/CartDropdownBtn/CartDropdownBtn";
import { Context } from "../../../Context/Context";
import DeleteItemBtn from "../../Buttons/DeleteItem/DeleteItem";

export default function CartData(props) {

    const {cartList, trashOnClick} = props;
    
    const {dispatch, products} = useContext(Context)

    const [updatedCartList ,setUpdatedCartList] = useState([]);

    const itemRef = useRef();
      
    function clearCartClick() {

        dispatch({
            type:"clearCart",
            payload: {}
        });
        
        console.log(products);

    }

    useEffect( () => setUpdatedCartList(cartList),[cartList] );

    return (
        <>
            { cartList.length === 0 ? (
                <p className="emptyCartDrp">Your cart is empty</p>
            ) : (
                <ul className="cartDropmenu">
                    <li className="titlesCart">
                        <span>Items:</span>
                        <span>Qty:</span>
                        <span>Total:</span>
                    </li>
                    { updatedCartList.map( (product) => {
                        return(
                            <li className="itemCart" key={`item-cart-${product.id}`}>
                                <span ref={itemRef}>{`${product.name}`}</span>
                                <span>{`x${product.amount}`}</span>
                                <span>{`${product.subTotal}$`}</span>
                                <DeleteItemBtn onClick={ ( {itemRef} ) => {console.log(itemRef)} }/>
                            </li>
                    ) } ) }
                    <li className="buttonsBox">
                        <CartDropdownBtn
                            name="Clear Cart"
                            btnClass="clearCartBtn"
                            clearCartClick={clearCartClick}
                        />
                        <CartDropdownBtn
                            name="Go To Cart"
                            action="goToCart"
                            btnClass="finishOrderBtn"
                        />
                    </li>
                </ul>
            ) }
        </>
    )
}