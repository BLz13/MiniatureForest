import { NavLink } from "react-router-dom";

export default function ItemList(props) {

    const {productsList} = props;

    return(
        <>
            {productsList.map( (product) => {
                    return(
                        <li className="productsItems" key={product.id}>
                            <NavLink className={ ({isActive}) => isActive ? ("link product"):("product link is-active")}  to={product.address}>
                                {product.name}
                            </NavLink>
                        </li>
                    )
            })}
        </>
    );

}