import "./ItemDetailContainer.css";

import {getProduct, isEmpty} from "../../Utils/functions"
import { useEffect, useState } from "react";

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
        isEmpty(productData) ? (
            <p>Loading....</p>
        ) : (
            <div>
                <div>{productData.name}</div>      
                <div>{productData.category}</div>
                <div>{productData.description}</div>
            </div>
        )
    )
}