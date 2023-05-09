import "./ItemListContainer.css";

import { useContext, useEffect, useState } from "react";

import Context from "../../Context/Context";
import ItemList from "./ItemList"
import { useParams } from "react-router-dom";

export default function ItemListContainer() {
    
    const {products} = useContext(Context)

    const { stock } = products

    const productParam = useParams();

    const [productsList, setProductsList] = useState([]);

    const [showProductDetail, setShowProductDetail] = useState(false);

    useEffect( () => { setProductsList(stock) },[stock]);

    useEffect( () => { 
        productsList.find((product) => (product.id === productParam.product)) ? setShowProductDetail(true) : setShowProductDetail(false)
    });
    
    return (
        <div className="mainPageBox">
            { !(productsList.length) ? (
                <p>Loading....</p>
            ) : (
                <ul className={ showProductDetail ? "imagesGallery productsListOpen" : "imagesGallery productsListClose" }>
                    <ItemList productsList={productsList} />
                </ul>
            )}
        </div>
    );
    
}