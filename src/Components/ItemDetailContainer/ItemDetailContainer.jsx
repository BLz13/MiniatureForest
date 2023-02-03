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
import { fireDatabase } from "../../Firebase/config";
import {useParams} from "react-router-dom";

export default function ItemDetailContainer() {

    const refAmountItems = useRef();

    const productAddressParam = useParams();

    const [productData, setProductData] = useState();

    console.log(productAddressParam.product)

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
                                <AddCartBtn
                                    productData={productData}
                                    // dispatch={dispatch}
                                    refAmountItems={refAmountItems}
                                    label="Add To Cart"
                                />
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