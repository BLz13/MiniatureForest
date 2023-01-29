import "./AddCartBtn.css";

export default function AddCartBtn(props) {

    const {label, onClick, disable} = props;

    return (
        <button
            className=".addToCartBtn"
            onClick={onClick}
            disabled={disable}
            type="button"
        >
            {label}
        </button>
    )
}