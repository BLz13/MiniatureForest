import "./ItemDetailContainer.css";

import{
    QuerySnapshot,
    collection,
    doc,
    getDoc,
    getDocs
} from "firebase/firestore";
import { useContext, useEffect, useRef, useState } from "react";

import AddCartBtn from "../Buttons/AddCartBtn/AddCartBtn"
import CartAmountSelection from "../Buttons/CartAmountSelection/CartAmountSelection"
import Context from "../../Context/Context";
import { fireDatabase } from "../../Firebase/config";
import {useParams} from "react-router-dom";

export default function ItemDetailContainer() {

    const {dispatch, orders} = useContext(Context);

    const refAmountItems = useRef();

    const productAddressParam = useParams();

    const [productData, setProductData] = useState();

    const addToCartClickHandler = (event) => {

        event.stopPropagation();

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

    useEffect( () => {
        if (Boolean(productAddressParam)) { 
            const productsRef = doc(fireDatabase, "/products", productAddressParam.product);
            (getDoc(productsRef)
                .then((docSnapshot) => {
                    if (docSnapshot.exists()) {
                        console.log(`The filtered product is: ${docSnapshot.data()}`);
                        setProductData(docSnapshot.data());
                        console.log(`Product loaded from useParams: ${productAddressParam}`);
                    }
                })
                .catch ((error) => {
                    console.error(`ERROR on {ItemListContainer} firebase call - ${error}`);
                })
            );
        }
    },[productAddressParam]);

    return(
        (productData === undefined) ? (
            <p>Loading....</p>
        ) : (
            <>
                <p>{productData.name}</p>      
                <p>{productData.category}</p>
                <p>{productData.description}</p>
                {
                    productData.stock ? (
                        <>
                            <p>{`${productData.price} $usd`}</p>
                            <div>
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
                        <div>Out of Stock</div>
                    )
                }
                 {/* <ImageGallery></ImageGallery> */}
            </>
        )
    )
}