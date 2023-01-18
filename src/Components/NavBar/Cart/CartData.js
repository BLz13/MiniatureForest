export default function CartData() {
    
    const CartProducts = [];
    
    return(
        <div>
            <ul>
                {CartProducts.map( (product) => (
                    <li>
                        <p>{product.title}</p>
                        <span>{product.amount}</span>
                        <img>{product.img}</img>
                    </li>
                ))}

            </ul>
        </div>
    )
}