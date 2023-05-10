import "./ItemDetailContainer.css";

import { useContext, useEffect, useRef, useState } from "react";

import AddCartBtn from "../Buttons/AddCartBtn/AddCartBtn"
import CartAmountSelection from "../Buttons/CartAmountSelection/CartAmountSelection"
import Context from "../../Context/Context";
import {useParams} from "react-router-dom";

export default function ItemDetailContainer() {

    const {dispatch, products, orders} = useContext(Context);

    const refAmountItems = useRef();

    const productAddressParam = useParams();

    const [productData, setProductData] = useState({});

    const { stock } = products

    const [productsList, setProductsList] = useState([]);

    useEffect( () => { setProductsList(stock) },[stock]);

    useEffect( () => { setProductData(productsList.find( (product) => (product.id === productAddressParam.product) )) });

    function addToCartClickHandler() {

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

    return(
        (productData === undefined) ? (
            <p>Loading....</p>
        ) : (
            <div className="productDetails" >
                <p className="productName">{productData.name}</p>      
                <p className="productSpecies">{productData.category}</p>
                <p className="productDescription">{productData.description}</p>
                {
                    productData.stock ? (
                        <>
                            <p className="productPrice">{productData.price} $usd</p>
                            <div className="addToCartBox">
                                <CartAmountSelection 
                                    productsAmount={productData.stock}
                                    reference={refAmountItems}
                                />
                                <span onClick={addToCartClickHandler}>
                                    <AddCartBtn label="Add To Cart" />
                                </span>
                            </div>
                        </>
                    ) : (
                        <div className="productPrice">Out of Stock</div>
                    )
                }
            </div>
        )
    )
}