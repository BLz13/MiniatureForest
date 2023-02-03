import "./ItemDetailContainer.css";

import { useContext, useEffect, useRef, useState } from "react";

import AddCartBtn from "../Buttons/AddCartBtn/AddCartBtn"
import CartAmountSelection from "../Buttons/CartAmountSelection/CartAmountSelection"
import ProductsContext from '../../Context/ProductsContext'
import {useParams} from "react-router-dom";

export default function ItemDetailContainer() {

    const [productData, setProductData] = useState();

    const refAmountItems = useRef();

    const {dispatch, store} = useContext(ProductsContext)

    const {products} = store;

    const productAddressParam = useParams();

    useEffect( () => {
        if (products !== undefined) {
            const productIndex = products.findIndex( (product) => (product.address === productAddressParam.product) );
            setProductData(products[productIndex]);
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
                                    dispatch={dispatch}
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