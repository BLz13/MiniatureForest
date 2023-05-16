import { useContext, useEffect, useRef, useState } from "react";

import AddCartBtn from "../Buttons/AddCartBtn/AddCartBtn"
import CartAmountSelection from "../Buttons/CartAmountSelection/CartAmountSelection"
import Context from "../../Context/Context";
import {useParams} from "react-router-dom";

export default function ProductDetail() {

    const {dispatch, products, orders} = useContext(Context);

    const { stock } = products;

    const refAmountItems = useRef();

    const productAddressParam = useParams();

    const [productData, setProductData] = useState({});

    const [productsList, setProductsList] = useState([]);

    useEffect( () => { setProductsList(stock) },[stock]);

    useEffect( () => { setProductData(productsList.find( (product) => (product.id === productAddressParam.id) )) });

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
        !productData ? (
            <p className="imageDetails">Loading....</p>
        ) : (
            <div className="imageDetails" >
                <p className="imageName">{productData.name}</p>      
                <p className="imageSpecies">{productData.category}</p>
                <p className="imageDescription">{productData.description}</p>
                {
                    productData.stock ? (
                        <>
                            <p className="imagePrice">{productData.price} $usd</p>
                            <div className="addToCartBoxProduct">
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
                        <div className="imagePrice">Out of Stock</div>
                    )
                }
            </div>
        )
    )
}