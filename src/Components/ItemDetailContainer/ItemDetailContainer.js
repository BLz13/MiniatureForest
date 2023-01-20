import "./ItemDetailContainer.css";

import { useEffect, useState } from "react";

import {getProduct} from "../../Utils/functions"
import {useParams} from "react-router-dom";

export default function ItemDetailContainer() {

    const [productData, setProductData] = useState();

    const {product} = useParams();

    useEffect ( () => {
        getProduct(product)
        .then((productData => {
            setProductData(productData);
        }));
    }, [product]);

    return(
        productData ? (
            <div>
                <div>{productData.name}</div>      
                <div>{productData.category}</div>
                <div>{productData.description}</div>
            </div>
        ) : (
            <p>Loading....</p>
        )
    )
}