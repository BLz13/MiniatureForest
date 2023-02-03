import "./AddCartBtn.css";

export default function AddCartBtn(props) {

    const {productData, dispatch, refAmountItems, label} = props;

    const buttonClickHandler = (event) => {
        event.stopPropagation();
        const {id, name, price} = productData;
        const amount = (+refAmountItems.current.innerText);
        const subTotal = amount * price;

        dispatch({
            type:"addItemsToCart",
            payload: {
                id,
                name,
                price,
                amount,
                subTotal
            }
        });

    };

    return (
        <p
            className="addToCartBtn"
            onClick={buttonClickHandler}
        >
            {label}
        </p>
    )
}