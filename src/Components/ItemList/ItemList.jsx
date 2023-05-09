import  { NavLink } from "react-router-dom";

export default function ItemList(props) {

    const {productsList} = props;

    function getRandomInteger() {
        const min = Math.ceil(1);
        const max = Math.floor(4);
        return Math.floor(Math.random() * (max - min) + min);
    }

    return(
        <>
            {productsList.map( (product) => {
                    return(
                        <li className="productsItems" key={product.id}>
                            <NavLink className={ ({isActive}) => isActive ? ("link product"):("product link is-active")}  to={product.id}>
                                <img className="productImage" src={require(`../../assets/images/products/${product.id+getRandomInteger()}.jpg`)}/>
                            </NavLink>
                        </li>
                    )
            })}
        </>
    );

}