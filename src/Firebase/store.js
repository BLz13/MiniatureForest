import{
    QuerySnapshot,
    collection,
    getDocs
} from "firebase/firestore";

import { fireDatabase } from "./config";

const store = {
    cart: [],
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
    })
    .catch ((error) => {
        console.error(`ERROR on {ItemListContainer} firebase call - ${error}`);
    })

    console.log(store);

export default store;