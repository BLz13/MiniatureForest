// import{
//     QuerySnapshot,
//     collection,
//     doc,
//     getDocs,
// } from "firebase/firestore"

// import { fireDatabase } from "./config";

// export function getAllProducts() {
//     const productsCollection = collection(fireDatabase, "/products")
//     getDocs(productsCollection)
//     .then ((QuerySnapshot) => {
//         const productsList = [];
//         QuerySnapshot.forEach( product => {
//             productsList.push(product)          
//         });
//         return(productsList);
//     });
// }
