import {isEmpty} from '../Utils/functions'
import {removeElementFromArray} from "../Utils/functions"

export default function cartReducer(store, action) {

    const {type, payload} = action;

    const {id, name, amount, price, subTotal} = payload;
    
    const products = store.products;
    
    const categories = store.categories;
    
    switch (type) {

        case "addItemsToCart": {

            // cart structure = {
            //     items : [array with the individual items],
            //     total: total amount to pay 
            // }

            const item = {
                id: id,
                name: name,
                amount: amount,
                price: price,
                subTotal: subTotal,
            }

            //deletes the products added to cart from local stock
            const productIndex = products.findIndex( (item) => (item.id === id));

            products[productIndex].stock = products[productIndex].stock - amount;
    
            return{products,categories};
        }

        case "removeItemFromCart": {

            const item = {
                id: id,
                name: name,
                amount: amount,
                price: price,
                subTotal: subTotal,
            }
            
            const productIndex = products.findIndex( (item) => (item.id === id));

            products[productIndex].stock = products[productIndex].stock + amount;
    
            return{products,categories};
        }
        default: {
            return{store};
        }
    }
}