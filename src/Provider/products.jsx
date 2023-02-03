import{
    QuerySnapshot,
    collection,
    getDocs
} from "firebase/firestore";

import { fireDatabase } from "../Firebase/config";

const store = {
    products: [],
    categories: []
};

const productsCollection = collection(fireDatabase, "/products");

const categoriesCollection = collection(fireDatabase, "/categories");

getDocs(productsCollection)
    .then ((QuerySnapshot) => {
        QuerySnapshot.forEach( product => {
            const productData=product.data()
            productData.address=product.id
            store.products.push(productData);
        });
        console.log(`Products successfully loaded from firebase`);
    })
    .catch ((error) => {
        console.error(`ERROR on {ItemListContainer} firebase call - ${error}`);
    })

getDocs(categoriesCollection)
    .then ((QuerySnapshot) => {
        QuerySnapshot.forEach( category => {
            const categoryData=category.data()
            categoryData.address=category.id
            store.categories.push(categoryData);
        });
        console.log(`Categories successfully loaded from firebase`);
    })
    .catch ((error) => {
        console.error(`ERROR on {ItemListContainer} firebase call - ${error}`);
    })

export default store;