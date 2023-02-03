import "./ItemListContainer.css";

import { Outlet, useParams } from "react-router-dom";
import{
    QuerySnapshot,
    collection,
    doc,
    getDoc,
    getDocs,
    query
} from "firebase/firestore";
import { useEffect, useState } from "react";

import ItemList from "./ItemList"
import { fireDatabase } from "../../Firebase/config";

export default function ItemListContainer() {

    const productsCollection = collection(fireDatabase, "/products");

    const categoryParam = useParams(undefined);

    const [productsList, setProductsList] = useState([]);

    const [categoryFilter, setCategoryFilter] = useState();

    useEffect( () => {

        const  products = [];
        
        getDocs(productsCollection)
            .then ((QuerySnapshot) => {
                QuerySnapshot.forEach( product => {
                    if (categoryParam.id === undefined) {
                        const productData = product.data();
                        productData.address = product.id;
                        products.push(productData);
                    } {
                        if (product.data().category === categoryFilter) {
                            console.log(product.data().category);
                            const productData = product.data();
                            productData.address = product.id;
                            products.push(productData);
                        }
                    }
                });
            console.log(`Products successfully loaded from firebase`);
            console.log(`Products loaded on ProductsList:`);
            console.log(products);
            setProductsList(products);
            })
            .catch ((error) => {
                console.error(`ERROR on {ItemListContainer} firebase call - ${error}`);
            })

    },[categoryFilter]);

    useEffect( () => {

        if (categoryParam.id !== undefined) {
            const categoryRef = doc(fireDatabase, "/categories", categoryParam.id);
            getDoc(categoryRef)
                .then((docSnapshot) => {
                    if (docSnapshot.exists()) {
                        console.log(`The category is: ${docSnapshot.data()}`);
                        setCategoryFilter(docSnapshot.data().name);
                    }
                })
                .catch ((error) => {
                    console.error(`ERROR on {ItemListContainer} firebase call - ${error}`);
                })
        }

    },[categoryParam])

    return (
        <>
            { !(productsList.length) ? (
                <p>Loading....</p>
            ) : (
                <ul className="productsList">
                    <ItemList productsList={productsList} />
                    <li className="productDetail">
                        <Outlet />
                    </li>
                </ul>
            )}
        </>
    );
    
}