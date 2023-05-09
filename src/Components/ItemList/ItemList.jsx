import  { NavLink, Outlet, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ItemList(props) {

    const {productsList} = props;
    
    const productParam = useParams();
    
    const [randomInteger, setRandomInteger] = useState(1);

    useEffect( () => {
        const min = Math.ceil(1);
        const max = Math.floor(4);
        setRandomInteger(Math.floor(Math.random()*(max - min)+min));
    },[]);

    return(
        <>
            {productsList.map( (product) => {
                return(
                    (product.id === productParam.product) ? (
                        <li className="productsItemsOpen" key={product.id}>
                            <NavLink className={ ({isActive}) => isActive  ? "openImage imageBox" : "closeImage imageBox"} to={product.id}>
                                <img className="productImage" src={require(`../../assets/images/products/${product.id+randomInteger}.jpg`)}/>
                            </NavLink>
                            <Outlet />
                        </li>
                    ) : (
                        <li className={ (productParam.product !== undefined) ? "productsItems" : "productsItemsClose" } key={product.id}>
                            <NavLink to={product.id}>
                                <img className="productImage" src={require(`../../assets/images/products/${product.id+randomInteger}.jpg`)}/>
                            </NavLink>                            
                        </li>
                    )
                )
            })}
        </>
    );

}