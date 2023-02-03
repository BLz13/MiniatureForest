import "./AddCartBtn.css";

export default function AddCartBtn(props) {
    
    const {buttonClickHandler, label} = props;

    return (
        <p
            className="addToCartBtn"
            onClick={buttonClickHandler}
        >
            {label}
        </p>
    )
}