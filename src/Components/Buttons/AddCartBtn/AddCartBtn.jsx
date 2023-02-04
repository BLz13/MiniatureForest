import "./AddCartBtn.css";

export default function AddCartBtn(props) {
    
    const {label} = props;

    return (
        <p className="addToCartBtn" > {label} </p>
    )
}