import "./ItemListContainer.css";

import { useContext, useEffect, useState } from "react";

import Context from "../../Context/Context";
import ItemList from "./ItemList"
import { useParams } from "react-router-dom";

export default function ItemListContainer() {
    
    const {products} = useContext(Context)

    const { stock } = products

    const urlParam = useParams();

    const [productsList, setProductsList] = useState([]);

    const [showProductDetail, setShowProductDetail] = useState(false);

    function createCategoriesList() {
        const categories = [];
        stock.map( product => {
            if ( categories.find( category => (category === product.category) ) === undefined ) {
                categories.push(product.category);
            };
        });
        return(categories);
    };

    useEffect( () => { 
        setProductsList(stock) 
    },[stock]);

    useEffect( () => {
        productsList.find((product) => (product.id === urlParam.id)) ? 
            setShowProductDetail(true)
        : 
            setShowProductDetail(false);
    },[urlParam]);
    
    return (
        <div className="itemListContainerBox">
            { !(productsList.length) ? (
                <p>Loading....</p>
            ) : (
                <>
                    <h1>Our Products</h1>
                    <ul className={ showProductDetail ? "imagesGallery productsListOpen" : "imagesGallery productsListClose" }>
                        <ItemList productsList={productsList} />
                    </ul>
                </>
            )}
        </div>
    );
    
}