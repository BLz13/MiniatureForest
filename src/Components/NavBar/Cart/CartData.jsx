import DeleteItemBtn from "../../Buttons/DeleteItem/DeleteItem";
import FinishOrderBtn from "../../Buttons/FinishOrderBtn/FinishOrderBtn";

export default function CartData(props) {

    const {cartList} = props;

    const children = (cartList.map( (product) => {
        return(
            <li className="itemCart" key={`item-cart-${product.id}`}>
                <span>{`${product.name}`}</span>
                <span>{`x${product.amount}`}</span>
                <span>{`${product.subTotal}$`}</span>
                <DeleteItemBtn />
            </li>
        )
    }))

    return(
        (cartList.length === 0) ? (
            <p className="emptyCartDrp">Your cart is empty</p>
        ) : (
            <ul className="cartDropmenu">
                <li className="titlesCart">
                    <span>Items:</span>
                    <span>Qty:</span>
                    <span>Total:</span>
                </li>
                {children}
                <FinishOrderBtn name="Go To Cart"/>
            </ul>
        )
    )
}