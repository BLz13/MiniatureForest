import {isEmpty} from '../Utils/functions'
import {removeElementFromArray} from "../Utils/functions"

export default function reducer(products, action) {

    const {type, payload} = action;
    
    switch (type) {

        case "addItemsToCart": {
            
            const {id, amount, subTotal} = payload;
            
            const cart = products.cart;

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

            products.cart = cart;

            return (products);
        };

        case "removeItemFromCart": {
            
            const {id, subTotal} = payload;
            
            const cart = products.cart;
            
            const productIndexCart = cart.items.findIndex( (item) => (item.id === id));

            cart.items = removeElementFromArray(cart.items, productIndexCart)

            cart.total -= subTotal;

            products.cart = cart;

            return (products);
        };

        case "clearCart": {

            const cart = {
                    items:[],
                    total:0
            }
            
            products.cart = cart;

            return (products);
        };

        default: {
            throw Error(`Unknown action: ${type}`);
        };
        
    };
    
};