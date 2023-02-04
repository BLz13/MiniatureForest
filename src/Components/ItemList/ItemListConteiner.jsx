import "./ItemListContainer.css";

import { Outlet, useParams } from "react-router-dom";
import{
    QuerySnapshot,
    collection,
    doc,
    getDoc,
    getDocs,
    query,
    where
} from "firebase/firestore";
import { useEffect, useState } from "react";

import ItemList from "./ItemList"
import { fireDatabase } from "../../Firebase/config";

export default function ItemListContainer() {

    const productsCollection = collection(fireDatabase, "products");

    const categoryParam = useParams(undefined);

    const [productsList, setProductsList] = useState([]);

    const [categoryFilter, setCategoryFilter] = useState();

    const [categoryQuery, setCategoryQuery] = useState(productsCollection);

    useEffect( () => {

        const  products = [];

        getDocs(categoryQuery)
            .then ((QuerySnapshot) => {
                QuerySnapshot.forEach( product => {
                    const productData = product.data();
                    productData.address = product.id;
                    products.push(productData);
                });
            console.log(`Products successfully loaded from firebase`);
            console.log(`Products loaded on ProductsList:`);
            console.log(products);
            setProductsList(products);
            })
            .catch ((error) => {
                console.error(`ERROR on {ItemListContainer} firebase call - ${error}`);
            })

    },[categoryQuery]);

    useEffect( () => {

        if (categoryParam.id !== undefined) {
            let categoryFilter;
            const categoryRef = doc(fireDatabase, "/categories", categoryParam.id);
            getDoc(categoryRef)
                .then((docSnapshot) => {
                    if (docSnapshot.exists()) {
                        console.log(`The category is:`);
                        categoryFilter = (docSnapshot.data().name);
                        console.log(categoryFilter);
                        setCategoryQuery( 
                            query(
                                productsCollection,
                                where( "category", "==", categoryFilter )
                            )
                        );
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