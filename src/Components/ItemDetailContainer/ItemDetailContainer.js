import "./ItemDetailContainer.css";

import { useContext, useEffect, useState } from "react";

import AddCartBtn from "../AddCartBtn/AddCartBtn"
import CartAmountSelection from "../CartAmountSelection/CartAmountSelection"
import Context from '../../Context/Context'
import {useParams} from "react-router-dom";

export default function ItemDetailContainer() {

    const [productData, setProductData] = useState();

    const [amountCartSelect, setAmountSelected] = useState(1);

    const {dispatch, store} = useContext(Context)

    const {products} = store;

    const productAddressParam = useParams();

    const onChangeAmountSelected = (event) => {
        setAmountSelected(event.target.value);
    }    

    const buttonClickHandler = () => {
        const {id, name, price} = productData;
        const amount = amountCartSelect;
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
    }

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