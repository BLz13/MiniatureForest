import {isEmpty} from '../Utils/functions'
import {removeElementFromArray} from "../Utils/functions"

export default function reducer(orders, action) {

    const {type, payload} = action;
    
    switch (type) {

        case "addItemsToCart": {
            
            const {id, amount, subTotal} = payload;
            
            const cart = orders.cart;

            // cart structure = {
            //     items : [array with the individual items],
            //     total: total amount to pay 
            // }

            const item = payload;
            
            //checks if the product is already on the cart
            const productIndexCart = cart.items.findIndex( (item) => (item.id === id));

            if (productIndexCart === -1) {
                cart.items.push(item);
            } {
                if (cart !== undefined) {
                    cart.items[productIndexCart].amount += amount;
                    cart.items[productIndexCart].subTotal += subTotal;
                }
            };
            
            cart.total += subTotal;

            return { cart };
        };

        case "removeItemFromCart": {
            
            const {id, subTotal} = payload;
            
            const cart = orders.cart;
            
            const productIndexCart = cart.items.findIndex( (item) => (item.id === id));

            cart.items = removeElementFromArray(cart.items, productIndexCart)

            cart.total -= subTotal;

            return { cart };
        };

        case "clearCart": {

            const cart = {
                    items:[],
                    total:0
            }

            return { cart }
        };

        default: {
            throw Error(`Unknown action: ${type}`);
        };
        
    };
    
};