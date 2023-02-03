import "./ItemListContainer.css";

import { Outlet, useParams } from "react-router-dom";
import{
    QuerySnapshot,
    collection,
    doc,
    getDoc,
    getDocs
} from "firebase/firestore";
import { useEffect, useState } from "react";

import ItemList from "./ItemList"
import { fireDatabase } from "../../Firebase/config";

export default function ItemListContainer() {

    const productsCollection = collection(fireDatabase, "/products");

    const categoryParam = useParams(undefined);

    const [categoryFilter, setCategoryFilter] = useState(undefined);

    const [productsList, setProductsList] = useState([]);

    useEffect( () => {
        const  products = [];
        getDocs(productsCollection)
            .then ((QuerySnapshot) => {
                QuerySnapshot.forEach( product => {
                    const productData = product.data();
                    productData.address = product.id;
                    products.push(productData);
                });
            setProductsList(products);
            console.log(`Products successfully loaded from firebase`);
            console.log(`Products loaded on ProductsList: ${productsList}`);
            })
            .catch ((error) => {
                console.error(`ERROR on {ItemListContainer} firebase call - ${error}`);
            })
    },[]);

    useEffect( () => {
        if (!Boolean(categoryParam)) { 
            const categoryRef = doc(fireDatabase, "/categories", categoryParam);
            (getDoc(categoryRef)
                .then((docSnapshot) => {
                    if (docSnapshot.exists()) {
                        console.log(`The filtered category is: ${docSnapshot.data()}`);
                        setCategoryFilter(docSnapshot.data().id);
                        console.log(`category loaded from useParams: ${categoryFilter}`);
                    }
                })
                .catch ((error) => {
                    console.error(`ERROR on {ItemListContainer} firebase call - ${error}`);
                })
            );
            productsList.map( (product) => (product.category === categoryFilter));
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