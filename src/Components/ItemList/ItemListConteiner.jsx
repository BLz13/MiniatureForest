import "./ItemListContainer.css";

import { Outlet, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import { Context } from "../../Context/Context";
import ItemList from "./ItemList"

export default function ItemListContainer() {
    
    const {products} = useContext(Context)

    const { stock } = products

    const urlParam = useParams();

    const [categoriesList, setCategoriesList] = useState([]);

    const [showProductDetail, setShowProductDetail] = useState(false);

    function createCategoriesList() {
        const categories = [];
        stock.forEach( product => {
            const index = categories.findIndex( object => (object.id === product.category) );
            if ( index === -1 ) {
                const objectProduct = {
                    id: product.category,
                    products: [product]
                };
                categories.push(objectProduct);
            } {
                if ( categories[index] !== undefined ) { categories[index].products = [...categories[index].products, product] };
            }
        });
        return(categories);
    };

    useEffect( () => { 
        setCategoriesList(createCategoriesList()) 
    },[stock]);

    useEffect( () => {
        categoriesList.find((product) => (product.id === urlParam.id)) ? setShowProductDetail(true) : setShowProductDetail(false);
    },[categoriesList]);
    
    return (
        <div className="itemListContainerBox">
            { !(categoriesList.length) ? (
                <p>Loading....</p>
            ) : (
                <>
                    <h1>Categories</h1>
                    <ul className={ showProductDetail ? "categoriesList categoriesListOpen" : "categoriesList" }>
                        <ItemList categoriesList={categoriesList} />
                    </ul>
                    <Outlet />
                </>
            )}
        </div>
    );
    
}