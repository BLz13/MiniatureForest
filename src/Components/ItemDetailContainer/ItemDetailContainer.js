import "./ItemDetailContainer.css";

import{
    doc,
    getDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";

import AddCartBtn from "../AddCartBtn/AddCartBtn"
import CartAmountSelection from "../CartAmountSelection/CartAmountSelection"
import { fireDatabase } from "../../Firebase/config";
import {useParams} from "react-router-dom";

export default function ItemDetailContainer() {

    const [productData, setProductData] = useState(null);

    const [amountCartSelect, setAmountSelected] = useState(0);

    const {product} = useParams();

    const onChangeAmountSelected = (event) => {
        setAmountSelected(event.target.value);
    }
    

    const buttonClickHandler = () => {


        // if ( CARTPRODUCTS.find( (item) => (item.id === productData.id) ) === undefined ) {
        //     const newCartProduct = {};
        //     newCartProduct.id = productData.id;
        //     newCartProduct.name = productData.name;
        //     newCartProduct.stock = 0;
        //     CARTPRODUCTS.push(newCartProduct);
        //     console.log(CARTPRODUCTS);
        // } {
        //     const productIndex = CARTPRODUCTS.findIndex( (item) => (item.id === productData.id) )
        //     CARTPRODUCTS[productIndex].stock ++;
        // } 
    }

    useEffect( () => {
        const docRef = doc(fireDatabase, "/products", product);
        getDoc(docRef)
        .then((docSnapshot) => {
            if (docSnapshot.exists()) {
                setProductData(docSnapshot.data());
            }})
        .catch ((error) => {
            console.error(`ERROR on {ItemDetailContainer} searching product - ${error}`);
        });
    },[product]);

    return(
        productData===null ? (
            <p>Loading....</p>
        ) : (
            <div>
                <div>{productData.name}</div>      
                <div>{productData.category}</div>
                <div>{productData.description}</div>
                {
                    productData.stock ? (
                        <div>
                            <div>{`${productData.price} $usd`}</div>
                            <CartAmountSelection 
                                productsAmount={productData.stock}
                                onChange={onChangeAmountSelected}
                            />
                            <AddCartBtn onClick={buttonClickHandler} label="Add To Cart"/>
                        </div>
                    ) : (
                        <div>Out of Stock</div>
                    )
                }
                 {/* <ImageGallery></ImageGallery> */}
            </div>
        )
    )
}