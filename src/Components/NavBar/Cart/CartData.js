import {CARTPRODUCTS} from "../../../Services/cart"

export default function CartData() {  
    return(
        <div>
            <ul>
                {CARTPRODUCTS.map( (product) => (
                    <li>
                        <p>{product.name}</p>
                        <span>{product.amount}</span>
                        <img>{`${product.img}1`}</img>
                    </li>
                ))}

            </ul>
        </div>
    )
}