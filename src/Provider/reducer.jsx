import {isEmpty} from '../Utils/functions'
import {removeElementFromArray} from "../Utils/functions"

export default function reducer(orders, action) {

    const {type, payload} = action;

    const {id, amount, subTotal} = payload;

    const cart = orders.cart;

    console.log(payload);
    console.log(cart);
    
    switch (type) {

        case "addItemsToCart": {

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
                cart.items[productIndexCart].amount += amount;
                cart.items[productIndexCart].subTotal += subTotal;
            };
            
            cart.total += subTotal;

            console.log(payload);
            console.log(cart);
    
            return{cart};
        };

        case "removeItemFromCart": {
            
            const productIndexCart = cart.items.findIndex( (item) => (item.id === id));

            cart.items = removeElementFromArray({
                array: cart.items,
                index : productIndexCart
            })

            cart.total -= subTotal;

            console.log(payload);
            console.log(cart);
    
            return{orders};
        };

        case "clearCart": {

            cart = []

            orders.cart = cart;
            orders.total = 0;

            return{orders}
        };

        default: {
            return{orders};
        };
    };
    
};